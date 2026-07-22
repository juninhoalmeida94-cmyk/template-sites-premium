import { useEffect, useRef, useState } from "react";

const TRANSITION_TARGETS = ["sobre", "formacao", "procedimentos", "depoimentos", "final-cta"];
const POINT_COUNT = 84;

type ShapePoint = { x: number; y: number };

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

function shapePoint(shape: number, t: number): ShapePoint {
  const vertical = 0.82 - t * 1.64;

  switch (shape) {
    case 0:
      return {
        x: 0.78 + Math.sin(t * Math.PI) * 0.13 - Math.sin(t * Math.PI * 2) * 0.025,
        y: vertical + Math.sin(t * Math.PI * 2.4) * 0.035,
      };
    case 1:
      return {
        x: 0.82 + Math.sin(t * Math.PI * 2) * 0.085 + Math.sin(t * Math.PI * 4) * 0.025,
        y: vertical * 0.82 + Math.cos(t * Math.PI * 2) * 0.075,
      };
    case 2:
      return {
        x: 0.8 + Math.sin(t * Math.PI * 1.35) * 0.075 + Math.sin(t * Math.PI * 5) * 0.018,
        y: vertical + Math.sin(t * Math.PI * 3) * 0.025,
      };
    case 3:
      return {
        x: 0.84 + Math.sin(t * Math.PI * 3.2) * 0.055,
        y: vertical * 0.72 + Math.sin(t * Math.PI * 7) * 0.025,
      };
    default:
      return {
        x: 0.8 + Math.sin(t * Math.PI * 2.25) * 0.095 + Math.cos(t * Math.PI * 5) * 0.018,
        y: vertical * 0.9 + Math.cos(t * Math.PI * 2.4) * 0.055,
      };
  }
}

function StaticFallback() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.14,
      }}
    >
      <path
        d="M88 8 C81 22 94 34 86 49 C79 63 92 75 84 92"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.12"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function SectionTransitionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      setFallback(true);
      return;
    }

    let disposed = false;
    let animationFrame = 0;
    let visible = !document.hidden;
    let scrollProgress = 0;
    let renderedProgress = 0;
    let transitionOpacity = 0;
    let anchors: number[] = [];
    let cleanupThree: (() => void) | undefined;

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        disposed = true;
        cleanupThree?.();
        cleanupThree = undefined;
        setFallback(true);
      }
    };
    reducedMotion.addEventListener("change", handleReducedMotion);

    void import("three").then((THREE) => {
      if (disposed) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch {
        setFallback(true);
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      const lineGeometry = new THREE.BufferGeometry();
      const particleGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(POINT_COUNT * 3);
      const particlePositions = new Float32Array(8 * 3);
      const linePositionAttribute = new THREE.BufferAttribute(linePositions, 3);
      const particlePositionAttribute = new THREE.BufferAttribute(particlePositions, 3);
      lineGeometry.setAttribute("position", linePositionAttribute);
      particleGeometry.setAttribute("position", particlePositionAttribute);
      const gold = getComputedStyle(document.documentElement).getPropertyValue("--gold").trim() || "#f0bf4c";
      const lineMaterial = new THREE.LineBasicMaterial({
        color: gold,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
      });
      const particleMaterial = new THREE.PointsMaterial({
        color: gold,
        transparent: true,
        opacity: 0,
        size: 2.1,
        sizeAttenuation: false,
        depthTest: false,
        depthWrite: false,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(line, particles);

      let aspect = 1;
      let mobile = false;
      let particleCount = 8;

      const updateAnchors = () => {
        anchors = TRANSITION_TARGETS.map((id) => {
          const element = document.getElementById(id);
          return element ? element.getBoundingClientRect().top + window.scrollY : 0;
        }).filter((value) => value > 0);
      };

      const updateScroll = () => {
        if (!anchors.length) return;
        const focus = window.scrollY + window.innerHeight * 0.58;
        const lastIndex = anchors.length - 1;
        let segment = 0;

        while (segment < lastIndex && focus > anchors[segment + 1]) segment += 1;

        const start = segment === 0 ? anchors[0] - window.innerHeight : anchors[segment];
        const end = segment === lastIndex ? anchors[lastIndex] + window.innerHeight : anchors[segment + 1];
        scrollProgress = clamp(segment + smoothstep((focus - start) / Math.max(end - start, 1)), 0, lastIndex);

        const nearestDistance = Math.min(...anchors.map((anchor) => Math.abs(focus - anchor)));
        transitionOpacity = 1 - smoothstep(nearestDistance / (window.innerHeight * 0.95));
      };

      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        mobile = width < 720;
        particleCount = mobile ? 4 : 8;
        aspect = width / Math.max(height, 1);
        camera.left = -aspect;
        camera.right = aspect;
        camera.top = 1;
        camera.bottom = -1;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5));
        renderer.setSize(width, height, false);
        updateAnchors();
        updateScroll();
      };

      const render = (time: number) => {
        if (!visible || disposed) return;
        renderedProgress += (scrollProgress - renderedProgress) * 0.035;
        const fromShape = Math.floor(renderedProgress);
        const toShape = Math.min(fromShape + 1, TRANSITION_TARGETS.length - 1);
        const mix = smoothstep(renderedProgress - fromShape);
        const drift = Math.sin(time * 0.00018) * (mobile ? 0.006 : 0.012);

        for (let index = 0; index < POINT_COUNT; index += 1) {
          const t = index / (POINT_COUNT - 1);
          const from = shapePoint(fromShape, t);
          const to = shapePoint(toShape, t);
          const x = (from.x + (to.x - from.x) * mix) * aspect + drift;
          const y = from.y + (to.y - from.y) * mix + Math.sin(t * Math.PI * 4 + time * 0.00012) * 0.004;
          linePositions[index * 3] = x;
          linePositions[index * 3 + 1] = y;
        }
        linePositionAttribute.needsUpdate = true;

        for (let index = 0; index < particleCount; index += 1) {
          const pointIndex = Math.round(((index + 0.65) / particleCount) * (POINT_COUNT - 1)) * 3;
          particlePositions[index * 3] = linePositions[pointIndex] + Math.sin(index * 2.7 + time * 0.00025) * 0.025;
          particlePositions[index * 3 + 1] = linePositions[pointIndex + 1] + Math.cos(index * 1.9 + time * 0.0002) * 0.018;
        }
        particlePositionAttribute.needsUpdate = true;
        particleGeometry.setDrawRange(0, particleCount);

        const opacity = transitionOpacity * (mobile ? 0.12 : 0.2);
        lineMaterial.opacity = opacity;
        particleMaterial.opacity = opacity * (0.3 + Math.max(0, 1 - Math.abs(renderedProgress - 3)) * 0.5);
        renderer.render(scene, camera);
        animationFrame = window.requestAnimationFrame(render);
      };

      const handleVisibility = () => {
        visible = !document.hidden;
        if (visible && !animationFrame) animationFrame = window.requestAnimationFrame(render);
        if (!visible && animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      };

      const handleResize = () => resize();
      const handleScroll = () => updateScroll();
      window.addEventListener("resize", handleResize, { passive: true });
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("visibilitychange", handleVisibility);
      resize();
      animationFrame = window.requestAnimationFrame(render);

      cleanupThree = () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("visibilitychange", handleVisibility);
        lineGeometry.dispose();
        particleGeometry.dispose();
        lineMaterial.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
      };
    }).catch(() => {
      if (!disposed) setFallback(true);
    });

    return () => {
      disposed = true;
      reducedMotion.removeEventListener("change", handleReducedMotion);
      cleanupThree?.();
    };
  }, []);

  if (fallback) return <StaticFallback />;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
