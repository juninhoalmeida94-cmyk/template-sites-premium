import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Award, BookOpen, BriefcaseBusiness, Ear, FileText, GraduationCap, PlayCircle, RefreshCw, Sparkles } from "lucide-react";
import { SectionTransitionCanvas } from "@/components/SectionTransitionCanvas";
import dr1Url from "@/assets/dr-1.webp";
import dr2Url from "@/assets/dr-2.png";
import dr5Url from "@/assets/dr-5.webp";
import dr6Url from "@/assets/dr-6.webp";
import drKennedyUrl from "@/assets/dr-kennedy.png";
import drWhiteUrl from "@/assets/dr-white.webp";
import logoDkUrl from "@/assets/logo-dk.png";
import iconWhatsappUrl from "@/assets/whatsapp.png";
import iconInstagramUrl from "@/assets/instagram.png";
import resultVideo1Url from "@/assets/resultado-1.mp4";
import resultVideo2Url from "@/assets/resultado-2.mp4";
import resultVideo3Url from "@/assets/resultado-3.mp4";
import resultLabialUrl from "@/assets/resultado-labial.jpg";

const dr1 = { url: dr1Url };
const dr2 = { url: dr2Url };
const dr5 = { url: dr5Url };
const dr6 = { url: dr6Url };
const drKennedy = { url: drKennedyUrl };
const drWhite = { url: drWhiteUrl };
const logoDk = { url: logoDkUrl };
const iconWhatsapp = { url: iconWhatsappUrl };
const iconInstagram = { url: iconInstagramUrl };

const resultSlides = [
  {
    kind: "video",
    media: resultVideo1Url,
    procedure: "Harmonização facial",
    angle: "Ângulo frontal",
    objective: "Equilibrar proporções preservando a identidade.",
  },
  {
    kind: "video",
    media: resultVideo2Url,
    procedure: "Otomodelação Earshutt",
    angle: "Visão comparativa",
    objective: "Harmonizar o contorno das orelhas com naturalidade.",
  },
  {
    kind: "video",
    media: resultVideo3Url,
    procedure: "Contorno facial",
    angle: "Ângulo lateral",
    objective: "Valorizar linhas e contornos de forma sutil.",
  },
  {
    kind: "image",
    media: resultLabialUrl,
    procedure: "Preenchimento labial",
    angle: "Antes e depois",
    objective: "Definir contorno e volume com equilíbrio.",
  },
  {
    kind: "video",
    media: resultVideo1Url,
    procedure: "Harmonização facial",
    angle: "Detalhe do resultado",
    objective: "Suavizar assimetrias mantendo uma expressão natural.",
  },
  {
    kind: "video",
    media: resultVideo2Url,
    procedure: "Otomodelação Earshutt",
    angle: "Outro ângulo",
    objective: "Observar o resultado em diferentes perspectivas.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Silvana Kennedy | Harmonização Facial e Otomodelação Earshutt em Paranavaí-PR" },
      { name: "description", content: "Referência em Otomodelação Earshutt e Harmonização Facial em Paranavaí-PR. Tratamentos personalizados com naturalidade, segurança e sofisticação. Agende sua avaliação." },
      { name: "keywords", content: "Harmonização Facial Paranavaí, Botox Paranavaí, Otomodelação Earshutt, Preenchimento Labial Paranavaí, Clínica Estética Paranavaí, Dra Silvana Kennedy, Biomédica Esteta Paranavaí, Ultraformer Paranavaí, Skinbooster Paranavaí" },
      { property: "og:title", content: "Dra. Silvana Kennedy | Harmonização Facial em Paranavaí-PR" },
      { property: "og:description", content: "Referência em Otomodelação Earshutt e Harmonização Facial. Resultados naturais, técnica refinada, atendimento humanizado." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: drKennedy.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: drKennedy.url },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dra. Silvana Kennedy — Estética Avançada",
          image: drKennedy.url,
          telephone: "+55 44 99943-5050",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Antônio Felipe, 1620 - Centro",
            addressLocality: "Paranavaí",
            addressRegion: "PR",
            postalCode: "87704-030",
            addressCountry: "BR",
          },
          areaServed: "Paranavaí-PR",
          medicalSpecialty: ["CosmeticProcedure", "Dermatology"],
        }),
      },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "5544999435050";
const WA_DISPLAY = "(44) 99943-5050";
const IG_URL = "https://www.instagram.com/doutorakennedy/";
const WA = `https://wa.me/${WA_NUMBER}`;
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const facial = [
  ["Botox", "Suaviza linhas de expressão com resultado natural."],
  ["Preenchimento Labial", "Volume e contorno equilibrados aos lábios."],
  ["Preenchimento de Mento", "Projeção e equilíbrio para o perfil facial."],
  ["Preenchimento de Malar", "Realce natural para a região das maçãs do rosto."],
  ["Preenchimento de Mandíbula", "Definição de contorno mandibular."],
  ["Fios de PDO", "Sustentação e estímulo de colágeno."],
  ["Bioestimuladores de Colágeno", "Estímulo gradual de colágeno para firmeza."],
];
const pele = [
  ["Peeling Químico", "Renovação e uniformização da pele."],
  ["Peeling 3D", "Ação profunda para textura e luminosidade."],
  ["Microagulhamento", "Estímulo de colágeno e renovação celular."],
  ["Limpeza de Pele", "Higienização profunda e cuidado contínuo."],
  ["Skinbooster", "Hidratação profunda de dentro para fora."],
  ["Revitalização Facial", "Protocolo completo para viço e firmeza."],
  ["Laser Lavieen", "Tecnologia a laser para uniformidade da pele."],
];
const corporal = [
  ["Depilação a Laser", "Redução progressiva e definitiva dos pelos."],
  ["Lipo Enzimática", "Redução localizada de gordura."],
  ["Radiofrequência", "Firmeza e tonificação da pele corporal."],
  ["Tratamentos Corporais", "Protocolos combinados para cada objetivo."],
  ["Ultraformer MPT · CO2", "Tecnologia avançada de firmeza e rejuvenescimento."],
  ["Podologia", "Cuidado especializado para a saúde dos pés."],
];

function ProcList({ items }: { items: string[][] }) {
  return (
    <div className="proc-list">
      {items.map(([name, desc]) => (
        <div className="proc-item" key={name}>
          <span className="proc-name">{name}</span>
          <span className="proc-desc">{desc}</span>
          <a className="proc-book" href={waLink(`Olá, gostaria de agendar uma avaliação para ${name}.`)}>Agendar</a>
        </div>
      ))}
    </div>
  );
}

function Index() {
  const [curtainHide, setCurtainHide] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<"facial" | "pele" | "corporal">("facial");
  const [resultSlide, setResultSlide] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurtainHide(true), 800);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const earWrap = document.getElementById("earWrap");
    if (earWrap) {
      const earIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              earIo.unobserve(e.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      earIo.observe(earWrap);
    }

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLVideoElement>("#resultados video").forEach((video) => {
      const isActive = video.closest(".result-slide")?.classList.contains("active");
      if (isActive) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [resultSlide]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SectionTransitionCanvas />

      <div id="curtain" className={curtainHide ? "hide" : ""}>
        <div className="curtain-inner">
          <img src={logoDk.url} alt="Doutora Kennedy" className="curtain-logo" />
          <p>"A sua melhor versão."</p>
        </div>
      </div>

      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <nav className="wrap">
          <a href="#hero" className="logo" aria-label="Doutora Kennedy">
            <img src={logoDk.url} alt="Doutora Kennedy" className="logo-mark" />
          </a>
          <ul className={"nav-links" + (menuOpen ? " open" : "")}>
            <li><a href="#hero" onClick={closeMenu}>Início</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#earshutt" onClick={closeMenu}>Otomodelação</a></li>
            <li><a href="#procedimentos" onClick={closeMenu}>Procedimentos</a></li>
            <li><a href="#resultados" onClick={closeMenu}>Resultados</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>
          <a href={waLink("Olá, gostaria de agendar uma avaliação.")} className="nav-cta">Agendar</a>
          <button className={"burger" + (menuOpen ? " open" : "")} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow reveal">HARMONIZAÇÃO FACIAL • PARANAVAÍ • PR</span>
            <h1 className="reveal delay-1">
              A beleza mais elegante é aquela que continua sendo você.
            </h1>
            <p className="hero-sub reveal delay-2">
              Procedimentos personalizados para valorizar seus traços com naturalidade, segurança e sofisticação.<br />
              <span className="result-kicker">Especialista em Otomodelação Earshutt®</span>
            </p>
            <div className="hero-actions reveal delay-3">
              <a href={waLink("Olá, gostaria de agendar uma avaliação.")} className="btn btn-solid gold">Agendar avaliação</a>
              <a href="#procedimentos" className="btn btn-outline">Conhecer procedimentos</a>
            </div>
          </div>
          <div className="hero-photo reveal delay-2">
            <img src={drKennedy.url} alt="Dra. Silvana Kennedy" loading="eager" />
            <span className="hero-photo-tag">Dra. Silvana Kennedy</span>
          </div>
        </div>
        <div className="scroll-cue">
          <span className="scroll-line"></span>
          Role
        </div>
      </section>

      <a id="wa-fixed" href={waLink("Olá, gostaria de agendar uma consulta.")} aria-label="Agendar consulta pelo WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.94 9.94 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.01-9.84zm5.83 14.24c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.28-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.66-.17 1.34z" /></svg>
        Agendar consulta
      </a>

      {/* Authority */}
      <section id="autoridade">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Excelência técnica</span>
            <h2>Excelência, técnica e naturalidade em cada detalhe</h2>
          </div>
          <div className="authority-grid reveal">
            {[
              ["I", "Enf.ª especialista", "Especialização reconhecida em Harmonização Facial."],
              ["II", "Biomédica especialista", "Formação sólida e atualização contínua em harmonização."],
              ["III", "Referência em Otomodelação Earshutt", "Técnica exclusiva com resultados consistentes e naturais."],
              ["IV", "Atendimento personalizado", "Cada plano de tratamento é único, como cada paciente."],
              ["V", "Facial e corporal", "Portfólio completo de procedimentos estéticos avançados."],
              ["VI", "Paranavaí-PR", "Clínica de fácil acesso, estrutura acolhedora e discreta."],
            ].map(([n, h, p]) => (
              <div className="authority-card" key={n}>
                <span className="num">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre">
        <div className="wrap about-grid">
          <div className="about-photo reveal">
            <img src={dr1.url} alt="Dra. Silvana Kennedy — retrato" loading="lazy" />
          </div>
          <div className="about-text reveal delay-1">
            <span className="eyebrow">Sobre</span>
            <h2>Dra. Silvana Kennedy</h2>
            <p>A Dra. Silvana Kennedy une conhecimento técnico, olhar estético refinado e atendimento humanizado para entregar resultados naturais, seguros e alinhados à individualidade de cada paciente.</p>
            <p>Com uma trajetória construída sobre o cuidado, a dedicação e a busca constante por aperfeiçoamento, Dra. Silvana Kennedy reúne experiência clínica e formação multidisciplinar para oferecer tratamentos seguros, personalizados e naturais.</p>
            <ul className="about-credentials">
              <li>Especialista em Harmonização Facial</li>
              <li>Referência em Otomodelação Earshutt</li>
              <li>Atendimento individualizado e humanizado</li>
              <li>Procedimentos faciais e corporais avançados</li>
            </ul>
            <a href={waLink("Olá, gostaria de falar com a clínica.")} className="btn btn-outline on-light">Falar com a clínica</a>
          </div>
        </div>
      </section>

      {/* Formação e Especializações */}
      <section id="formacao">
        <div className="wrap qualification-grid">
          <div className="qualification-heading reveal">
            <span className="eyebrow">Formação e experiência</span>
            <h2>Conhecimento construído para cuidar de cada detalhe</h2>
            <p>Uma trajetória multidisciplinar, marcada pela atualização constante e pelo compromisso com procedimentos seguros, personalizados e naturais.</p>
          </div>
          <div className="qualification-cards reveal delay-1">
            {[
              { icon: GraduationCap, title: "Enfermagem — UNIMAR", text: "Base sólida no cuidado, segurança e acompanhamento de cada paciente." },
              { icon: Award, title: "Biomedicina — UNINGÁ", text: "Formação direcionada à estética avançada e aos tratamentos individualizados." },
              { icon: BookOpen, title: "Podiatria Clínica — Anhembi Morumbi", text: "Conhecimento ampliado sobre saúde, atendimento clínico e cuidado integral." },
              { icon: Sparkles, title: "Residências em Harmonização Facial e Corporal", text: "Aperfeiçoamento prático em técnicas avançadas, planejamento e naturalidade." },
              { icon: RefreshCw, title: "Especializações em Enfermagem e Biomedicina Estética", text: "Atualização contínua para oferecer segurança, precisão e resultados equilibrados." },
            ].map(({ icon: Icon, title, text }) => (
              <article className="qualification-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Earshutt */}
      <section id="earshutt">
        <div className="wrap earshutt-grid">
          <div className="ear-svg-wrap reveal" id="earWrap">
            <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
              <path className="ear-path" d="M140 40 C90 40 55 85 55 140 C55 175 75 190 78 215 C81 240 65 250 70 275 C75 300 105 300 115 280 C122 266 118 250 128 240 C145 222 170 210 172 175 C174 140 165 100 140 40 Z" />
              <path className="ear-path" d="M118 95 C98 100 88 125 92 150 C95 172 112 178 112 195" style={{ strokeDasharray: 400, strokeDashoffset: 400, transitionDelay: ".5s" }} />
              <circle className="ear-dot" cx="112" cy="195" r="3.4" />
            </svg>
          </div>
          <div className="earshutt-text reveal delay-1">
            <span className="eyebrow on-dark">Especialidade exclusiva</span>
            <h2>Otomodelação Earshutt: transformação com naturalidade</h2>
            <p>Um procedimento minimamente invasivo para reequilibrar a aparência das orelhas, devolvendo harmonia ao rosto com um resultado discreto e natural — sempre a partir de uma avaliação individual.</p>
            <ul className="benefit-list">
              <li>Melhora da aparência das orelhas</li>
              <li>Procedimento minimamente invasivo</li>
              <li>Resultado natural</li>
              <li>Recuperação orientada</li>
              <li>Avaliação individualizada</li>
            </ul>
            <a href={waLink("Olá, gostaria de saber se a Otomodelação Earshutt é indicada para mim.")} className="btn btn-solid">Quero saber se esse procedimento é para mim</a>
          </div>
        </div>
      </section>

      {/* Procedimentos */}
      <section id="procedimentos">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Portfólio</span>
            <h2>Procedimentos</h2>
            <p>Cada tratamento parte de uma avaliação individual, pensada para o seu objetivo e para preservar sua identidade.</p>
          </div>
          <div className="proc-tabs reveal">
            {(["facial", "pele", "corporal"] as const).map((k) => (
              <button key={k} className={"proc-tab" + (tab === k ? " active" : "")} onClick={() => setTab(k)}>
                {k === "facial" ? "Harmonização Facial" : k === "pele" ? "Estética da Pele" : "Corporal"}
              </button>
            ))}
          </div>
          <div className="reveal">
            {tab === "facial" && <ProcList items={facial} />}
            {tab === "pele" && <ProcList items={pele} />}
            {tab === "corporal" && <ProcList items={corporal} />}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section id="diferenciais">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Por que escolher a Dra. Silvana</span>
            <h2>Técnica e sensibilidade em equilíbrio</h2>
            <p>Uma experiência construída para respeitar seus traços, seus objetivos e o seu tempo.</p>
          </div>
          <div className="choice-grid reveal">
            {[
              ["01", "Escuta individual", "Cada atendimento começa com uma conversa cuidadosa sobre necessidades e expectativas."],
              ["02", "Resultados naturais", "Planejamento orientado a valorizar a beleza sem apagar características pessoais."],
              ["03", "Conduta personalizada", "Protocolos definidos de acordo com a avaliação e o momento de cada paciente."],
              ["04", "Cuidado contínuo", "Orientação clara antes, durante e após cada procedimento realizado."],
            ].map(([n, h, p]) => (
              <article className="choice-card" key={n}>
                <span className="choice-num">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura da Clínica */}
      <section id="estrutura">
        <div className="wrap clinic-grid">
          <div className="clinic-intro reveal">
            <span className="eyebrow on-dark">Estrutura da Clínica</span>
            <h2>Um espaço preparado para acolher você</h2>
            <p>Da chegada ao pós-procedimento, cada detalhe foi pensado para proporcionar uma experiência tranquila, reservada e cuidadosa.</p>
            <a href={waLink("Olá, gostaria de conhecer a estrutura da clínica e agendar uma avaliação.")} className="btn btn-outline">Conhecer a clínica</a>
          </div>
          <div className="clinic-features reveal delay-1">
            {[
              ["I", "Atendimento reservado", "Privacidade e atenção individual em todas as etapas."],
              ["II", "Ambiente acolhedor", "Conforto e bem-estar desde o primeiro contato."],
              ["III", "Cuidado em cada detalhe", "Uma experiência organizada para que você se sinta segura."],
              ["IV", "Localização acessível", "Estrutura em região central de Paranavaí-PR."],
            ].map(([n, h, p]) => (
              <article className="clinic-feature" key={n}>
                <span className="clinic-num">{n}</span>
                <div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados">
        <div className="results-shell reveal">
          <div className="results-topline">
            <span className="eyebrow">Resultados</span>
            <span className="results-count">{String(resultSlide + 1).padStart(2, "0")} / {String(resultSlides.length).padStart(2, "0")}</span>
          </div>

          <div className="results-stage" aria-live="polite">
            {resultSlides.map((slide, index) => (
              <article className={`result-slide ${index === resultSlide ? "active" : ""}`} key={index} aria-hidden={index !== resultSlide}>
                <div className="result-media">
                  {slide.kind === "video" ? (
                    <video src={slide.media} autoPlay={index === resultSlide} muted loop playsInline controls preload="metadata" aria-label={`${slide.procedure} — ${slide.angle}`} />
                  ) : (
                    <img src={slide.media} alt={`${slide.procedure} — ${slide.angle}`} loading="lazy" />
                  )}
                  <span className="result-angle">{slide.angle}</span>
                </div>
                <div className="result-info">
                  <span className="result-kicker">Antes e depois</span>
                  <h2>{slide.procedure}</h2>
                  <dl>
                    <div><dt>Objetivo</dt><dd>{slide.objective}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          <div className="results-controls">
            <button type="button" className="result-arrow" aria-label="Slide anterior" onClick={() => setResultSlide((current) => (current - 1 + resultSlides.length) % resultSlides.length)}>←</button>
            <div className="result-dots" aria-label="Selecionar slide">
              {resultSlides.map((_, index) => (
                <button type="button" key={index} className={index === resultSlide ? "active" : ""} aria-label={`Ir para o slide ${index + 1}`} aria-current={index === resultSlide ? "true" : undefined} onClick={() => setResultSlide(index)} />
              ))}
            </div>
            <button type="button" className="result-arrow" aria-label="Próximo slide" onClick={() => setResultSlide((current) => (current + 1) % resultSlides.length)}>→</button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Depoimentos</span>
            <h2>Quem viveu a experiência</h2>
          </div>
          <div className="proof-grid reveal">
            {[
              ["Atendimento cuidadoso do início ao fim. Resultado super natural, exatamente o que eu esperava.", "Relato ilustrativo"],
              ["Profissionalismo e técnica impecáveis. Me senti segura em cada etapa do procedimento.", "Relato ilustrativo"],
              ["A Otomodelação mudou minha autoestima. Recomendo de olhos fechados.", "Relato ilustrativo"],
            ].map(([q, n]) => (
              <div className="proof-card" key={q}>
                <div className="stars">★★★★★</div>
                <p>"{q}"</p>
                <div className="proof-name">{n}</div>
              </div>
            ))}
          </div>
          <p className="disclaimer">Resultados individuais podem variar. Imagens de antes/depois utilizadas mediante autorização da paciente. Avaliações reais de pacientes atendidas na clínica.</p>
        </div>
      </section>

      {/* Cursos e mentorias */}
      <section id="mentorias">
        <div className="wrap mentorship-shell reveal">
          <div className="mentorship-copy">
            <span className="eyebrow">Para profissionais</span>
            <h2>Conhecimento que também transforma carreiras</h2>
            <p>Além dos atendimentos clínicos, Dra. Silvana Kennedy compartilha sua experiência por meio de cursos e mentorias voltados a profissionais que desejam aperfeiçoar suas técnicas, ampliar sua segurança e elevar o nível dos seus resultados.</p>
          </div>
          <div className="mentorship-options">
            <div><Ear aria-hidden="true" /><span>Mentoria em Otomodelação</span></div>
            <div><Sparkles aria-hidden="true" /><span>Mentoria em Toxina Botulínica</span></div>
          </div>
          <a href={waLink("Olá! Gostaria de receber informações sobre os cursos e mentorias da Dra. Kennedy.")} className="btn btn-outline on-light">Conhecer cursos e mentorias</a>
        </div>
      </section>

      {/* Conteúdo educativo */}
      <section id="conteudos">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Conteúdo e orientação</span>
            <h2>Informação para escolher com segurança</h2>
          </div>
          <div className="content-grid reveal">
            {[
              { icon: BookOpen, title: "Dúvidas frequentes", text: "Respostas claras sobre procedimentos, cuidados e recuperação." },
              { icon: PlayCircle, title: "Vídeos da Dra. Kennedy", text: "Explicações profissionais sobre estética, beleza e harmonização." },
              { icon: FileText, title: "Cuidados e orientações", text: "Informações importantes para antes e depois dos procedimentos." },
            ].map(({ icon: Icon, title, text }) => (
              <a className="content-card" href={IG_URL} target="_blank" rel="noreferrer" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <span>Ver no Instagram →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o atendimento */}
      <section id="atendimento">
        <div className="wrap">
          <div className="service-heading reveal">
            <div>
              <span className="eyebrow">Como funciona o atendimento</span>
              <h2>Uma jornada simples, cuidadosa e personalizada</h2>
            </div>
            <p>Você recebe orientação em cada etapa, da primeira conversa ao acompanhamento após o procedimento.</p>
          </div>
          <ol className="service-steps reveal">
            {[
              ["01", "Primeiro contato", "Fale com a equipe pelo WhatsApp e conte o que deseja cuidar."],
              ["02", "Avaliação individual", "A Dra. Silvana analisa suas necessidades, proporções e expectativas."],
              ["03", "Plano personalizado", "As possibilidades são apresentadas com clareza e definidas em conjunto."],
              ["04", "Procedimento", "O atendimento acontece com atenção ao conforto, à segurança e à naturalidade."],
              ["05", "Acompanhamento", "Você recebe as orientações necessárias para o período pós-procedimento."],
            ].map(([n, h, p]) => (
              <li className="service-step" key={n}>
                <span>{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
          <div className="service-action reveal">
            <a href={waLink("Olá, gostaria de entender como funciona o atendimento e agendar uma avaliação.")} className="btn btn-solid gold">Iniciar atendimento</a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Entre em contato</span>
            <h2>Fale com a Dra. Kennedy</h2>
            <p>Atendimento personalizado pelo WhatsApp. Tire suas dúvidas e agende sua avaliação.</p>
          </div>
          <div className="contato-grid reveal">
            <a className="contato-card" href={waLink("Olá, gostaria de agendar uma avaliação.")} target="_blank" rel="noreferrer">
              <img src={iconWhatsapp.url} alt="WhatsApp" />
              <div>
                <span className="contato-label">WhatsApp</span>
                <strong>{WA_DISPLAY}</strong>
                <em>Toque para conversar agora</em>
              </div>
            </a>
            <a className="contato-card" href={IG_URL} target="_blank" rel="noreferrer">
              <img src={iconInstagram.url} alt="Instagram" />
              <div>
                <span className="contato-label">Instagram</span>
                <strong>@doutorakennedy</strong>
                <em>Acompanhe resultados e bastidores</em>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao">
        <div className="wrap location-grid">
          <div className="location-text reveal">
            <span className="eyebrow">Localização</span>
            <h2>Onde estamos</h2>
            <address>R. Antônio Felipe, 1620 – Centro<br />Paranavaí – PR, 87704-030</address>
            <div className="location-actions">
              <a className="btn btn-outline on-light" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=R.+Ant%C3%B4nio+Felipe%2C+1620+-+Centro%2C+Paranava%C3%AD+-+PR%2C+87704-030">Ver no Google Maps</a>
              <a className="btn btn-outline on-light" target="_blank" rel="noreferrer" href="https://waze.com/ul?q=R.%20Ant%C3%B4nio%20Felipe%2C%201620%2C%20Paranava%C3%AD%20-%20PR">Traçar rota pelo Waze</a>
            </div>
          </div>
          <div className="map-frame reveal delay-1">
            <iframe title="Mapa" src="https://www.google.com/maps?q=R.+Ant%C3%B4nio+Felipe,+1620,+Centro,+Paranava%C3%AD+-+PR,+87704-030&output=embed" width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }} loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta">
        <div className="wrap content reveal">
          <span className="eyebrow on-dark">Próximo passo</span>
          <h2>Pronta para descobrir o procedimento ideal para você?</h2>
          <p>Agende uma avaliação personalizada e receba uma orientação segura para o seu caso.</p>
          <a href={waLink("Olá, gostaria de agendar uma avaliação.")} className="btn btn-solid gold">Agendar avaliação pelo WhatsApp</a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Dra. Silvana Kennedy</h4>
              <p>Harmonização Facial · Otomodelação Earshutt</p>
              <p>Paranavaí – PR</p>
            </div>
            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#sobre">Sobre</a>
              <a href="#formacao">Formação</a>
              <a href="#procedimentos">Procedimentos</a>
              <a href="#estrutura">Estrutura da Clínica</a>
              <a href="#mentorias">Cursos e mentorias</a>
              <a href="#conteudos">Conteúdos</a>
              <a href="#localizacao">Localização</a>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href={WA} target="_blank" rel="noreferrer" className="footer-inline"><img src={iconWhatsapp.url} alt="" />{WA_DISPLAY}</a>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-inline"><img src={iconInstagram.url} alt="" />@doutorakennedy</a>
              <p>R. Antônio Felipe, 1620 – Centro · Paranavaí, PR</p>
              <a href={waLink("Olá! Gostaria de enviar meu currículo para a Clínica Dra. Kennedy.")} target="_blank" rel="noreferrer" className="footer-careers"><BriefcaseBusiness aria-hidden="true" />Trabalhe conosco · Envie seu currículo</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Dra. Silvana Kennedy. Todos os direitos reservados.</span>
            <span>Estética Avançada · Paranavaí-PR</span>
          </div>
        </div>
      </footer>

      {/* hidden preload */}
      <img src={dr5.url} alt="" style={{ display: "none" }} aria-hidden />
      <img src={dr6.url} alt="" style={{ display: "none" }} aria-hidden />
      <img src={drWhite.url} alt="" style={{ display: "none" }} aria-hidden />
    </>
  );
}

const CSS = `
:root{
  --warm-white:#F8F7F4;
  --white:#FFFFFF;
  --graphite:#2E2E2E;
  --graphite-deep:#1A1A1A;
  --light-gray:#EAE7E2;
  --gold:#f0bf4c;
  --grey-mid:#8A8983;
  --grey-text:#55534D;
  --hairline: rgba(46,46,46,0.14);
  --hairline-dark: rgba(248,247,244,0.18);
  --ease: cubic-bezier(.22,.61,.36,1);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  background:var(--warm-white);
  color:var(--graphite);
  font-family:'Manrope',sans-serif;
  font-weight:400;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;}
ul{list-style:none;}
h1,h2,h3,h4{
  font-family:'Cormorant Garamond',serif;
  font-weight:400;
  letter-spacing:0.005em;
  color:var(--graphite);
}
.eyebrow{
  font-family:'Manrope',sans-serif;
  font-size:11px;
  letter-spacing:0.32em;
  text-transform:uppercase;
  color:var(--gold);
  font-weight:600;
}
.eyebrow.on-dark{color:var(--gold);}
.wrap{max-width:1220px;margin:0 auto;padding:0 32px;}

.reveal{opacity:0;transform:translateY(28px);filter:blur(4px);
  transition:opacity 1s var(--ease), transform 1s var(--ease), filter 1s var(--ease);}
.reveal.in{opacity:1;transform:translateY(0);filter:blur(0);}
.reveal.delay-1{transition-delay:.12s;}
.reveal.delay-2{transition-delay:.24s;}
.reveal.delay-3{transition-delay:.36s;}
@media (prefers-reduced-motion: reduce){
  .reveal{opacity:1;transform:none;filter:none;transition:none;}
  html{scroll-behavior:auto;}
}

/* Curtain */
#curtain{position:fixed;inset:0;background:#0B0B0C;z-index:9999;
  display:flex;align-items:center;justify-content:center;padding:0 40px;
  transition:opacity .2s var(--ease), visibility .2s var(--ease);}
#curtain.hide{opacity:0;visibility:hidden;pointer-events:none;}
#curtain p{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300;
  color:#FAFAF8;font-size:clamp(24px,4vw,44px);text-align:center;max-width:720px;
  opacity:0;letter-spacing:0.01em;animation:curtainIn .6s var(--ease) forwards .08s;}
#curtain p::before{content:'';display:block;width:40px;height:1px;background:var(--gold);margin:0 auto 28px;}
.curtain-inner{display:flex;flex-direction:column;align-items:center;gap:28px;}
.curtain-logo{width:clamp(180px,26vw,300px);height:auto;opacity:0;
  animation:curtainIn .5s var(--ease) forwards .02s;filter:drop-shadow(0 6px 24px rgba(240,191,76,0.25));}

/* Contato */
#contato{background:var(--white);}
.contato-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:900px;margin:0 auto;}
.contato-card{display:flex;align-items:center;gap:22px;padding:32px 28px;
  border:1px solid var(--hairline);background:var(--warm-white);
  transition:all .4s var(--ease);}
.contato-card:hover{border-color:var(--gold);transform:translateY(-4px);
  box-shadow:0 20px 40px -20px rgba(240,191,76,0.35);}
.contato-card img{width:48px;height:48px;flex-shrink:0;}
.contato-card div{display:flex;flex-direction:column;gap:4px;}
.contato-label{font-size:10.5px;letter-spacing:0.24em;text-transform:uppercase;
  color:var(--gold);font-weight:700;}
.contato-card strong{font-family:'Cormorant Garamond',serif;font-size:24px;
  font-weight:500;color:var(--graphite);}
.contato-card em{font-style:normal;font-size:12.5px;color:var(--grey-text);font-weight:300;}
@media (max-width:760px){.contato-grid{grid-template-columns:1fr;}}

.footer-inline{display:flex !important;align-items:center;gap:10px;}
.footer-inline img{width:18px;height:18px;filter:brightness(1.1);}
.footer-careers{display:flex !important;align-items:center;gap:10px;margin-top:18px;}
.footer-careers svg{width:16px;height:16px;color:var(--gold);stroke-width:1.4;flex-shrink:0;}
@keyframes curtainIn{0%{opacity:0;transform:translateY(14px);}45%{opacity:1;transform:translateY(0);}100%{opacity:1;transform:translateY(0);}}

/* Header */
header{position:fixed;top:0;left:0;right:0;z-index:500;padding:22px 0;
  --nav-color:var(--warm-white);--nav-inv:var(--graphite);
  transition:background .5s var(--ease), padding .4s var(--ease), border-color .5s var(--ease), color .4s;
  border-bottom:1px solid transparent;}
header.scrolled{background:rgba(248,247,244,0.88);backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);padding:14px 0;border-color:var(--hairline);
  --nav-color:var(--graphite);--nav-inv:var(--warm-white);}
nav.wrap{display:flex;align-items:center;justify-content:space-between;}
.logo{display:inline-flex;align-items:center;}
.logo-mark{height:44px;width:auto;display:block;transition:height .3s var(--ease);}
header.scrolled .logo-mark{height:36px;}
.nav-links{display:flex;gap:32px;}
.nav-links a{font-size:11.5px;letter-spacing:0.18em;text-transform:uppercase;
  color:var(--nav-color);font-weight:500;position:relative;padding-bottom:4px;transition:color .3s;}
.nav-links a::after{content:'';position:absolute;left:0;bottom:0;height:1px;width:0;background:var(--gold);transition:width .35s var(--ease);}
.nav-links a:hover{color:var(--gold);}
.nav-links a:hover::after{width:100%;}
.nav-cta{display:flex;align-items:center;gap:8px;border:1px solid var(--nav-color);
  color:var(--nav-color);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;
  padding:11px 22px;font-weight:600;transition:background .35s, color .35s, border-color .35s;}
.nav-cta:hover{background:var(--nav-color);color:var(--nav-inv);border-color:var(--nav-color);}
.burger{display:none;flex-direction:column;gap:5px;width:28px;}
.burger span{height:1px;background:var(--nav-color);width:100%;transition:background .3s, transform .3s;}

/* Hero */
#hero{position:relative;min-height:100svh;background:var(--graphite-deep);
  padding:140px 0 90px;overflow:hidden;}
#hero::before{content:'';position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse at 50% 0%, rgba(240,191,76,0.18), transparent 60%);}
.hero-inner{position:relative;z-index:2;width:100%;max-width:1220px;margin:0 auto;
  padding:0 32px;display:grid;grid-template-columns:1.15fr 0.85fr;gap:70px;align-items:center;
  min-height:calc(100svh - 230px);}
.hero-copy .eyebrow{display:block;margin-bottom:26px;}
.hero-copy h1{font-size:clamp(38px,5.6vw,78px);font-weight:400;line-height:1.04;
  letter-spacing:-0.015em;color:var(--warm-white);}
.hero-copy h1 em{font-style:italic;color:var(--gold);font-weight:400;}
.hero-sub{color:rgba(248,247,244,0.72);font-size:16.5px;max-width:480px;margin-top:28px;
  font-weight:300;line-height:1.75;}
.hero-actions{display:flex;gap:16px;margin-top:44px;flex-wrap:wrap;}
.hero-photo{position:relative;aspect-ratio:3/4;overflow:hidden;background:var(--light-gray);
  box-shadow:0 40px 80px -30px rgba(0,0,0,0.55);}
.hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;
  transition:transform 1.4s var(--ease);}
.hero-photo:hover img{transform:scale(1.03);}
.hero-photo-tag{position:absolute;left:16px;bottom:14px;font-size:9.5px;letter-spacing:0.2em;
  text-transform:uppercase;color:#fff;font-weight:600;text-shadow:0 1px 6px rgba(0,0,0,.4);}
@media (max-width:900px){
  .hero-inner{grid-template-columns:1fr;gap:44px;}
  .hero-photo{aspect-ratio:4/5;order:-1;}
}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;letter-spacing:0.18em;
  text-transform:uppercase;font-weight:600;padding:16px 30px;transition:all .4s var(--ease);
  border:1px solid transparent;}
.btn-solid{background:var(--graphite);color:var(--warm-white);}
.btn-solid:hover{background:var(--gold);color:var(--white);}
.btn-solid.gold{background:var(--gold);color:#fff;}
.btn-solid.gold:hover{background:var(--warm-white);color:var(--graphite);}
.btn-outline{border-color:var(--hairline-dark);color:var(--white);}
.btn-outline:hover{border-color:var(--white);}
.btn-outline.on-light{border-color:var(--graphite);color:var(--graphite);}
.btn-outline.on-light:hover{background:var(--graphite);color:var(--warm-white);}

.scroll-cue{position:absolute;left:32px;bottom:28px;z-index:2;display:flex;align-items:center;gap:12px;
  color:rgba(248,247,244,0.55);font-size:10.5px;letter-spacing:0.24em;text-transform:uppercase;}
.scroll-line{width:1px;height:44px;background:linear-gradient(var(--gold),transparent);
  position:relative;overflow:hidden;}
.scroll-line::after{content:'';position:absolute;top:-100%;left:0;width:100%;height:100%;
  background:var(--gold);animation:scrollDown 2.2s ease-in-out infinite;}
@keyframes scrollDown{to{top:100%;}}

/* WhatsApp fixed */
#wa-fixed{position:fixed;right:26px;bottom:26px;z-index:600;background:var(--graphite);
  color:var(--warm-white);display:flex;align-items:center;gap:10px;padding:15px 22px;
  border:1px solid var(--gold);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;
  font-weight:600;box-shadow:0 12px 30px rgba(0,0,0,0.22);
  transition:transform .35s var(--ease), background .35s, color .35s;}
#wa-fixed:hover{transform:translateY(-3px);background:var(--gold);color:#fff;}
#wa-fixed svg{width:16px;height:16px;flex-shrink:0;}

/* Sections */
section{padding:130px 0;}
section > .wrap,#resultados > .results-shell{position:relative;z-index:2;}
@media (max-width:768px){section{padding:80px 0;}}
.section-head{max-width:680px;margin-bottom:64px;}
.section-head .eyebrow{display:block;margin-bottom:18px;}
.section-head h2{font-size:clamp(30px,3.8vw,50px);font-weight:400;line-height:1.14;}
.section-head p{color:var(--grey-text);margin-top:22px;font-size:16px;font-weight:300;max-width:540px;}
.section-head.center{margin-left:auto;margin-right:auto;text-align:center;}
.section-head.center .eyebrow{display:inline-block;}

/* Authority */
.authority-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;
  background:var(--hairline);border:1px solid var(--hairline);}
.authority-card{background:var(--warm-white);padding:44px 34px;transition:background .4s;}
.authority-card:hover{background:var(--white);}
.authority-card .num{font-family:'Cormorant Garamond',serif;font-size:14px;
  color:var(--gold);letter-spacing:0.12em;font-style:italic;}
.authority-card h3{font-size:24px;margin-top:18px;font-weight:500;line-height:1.2;}
.authority-card p{color:var(--grey-text);font-size:14px;margin-top:12px;font-weight:300;line-height:1.65;}
@media (max-width:860px){.authority-grid{grid-template-columns:1fr;}}

/* About */
#sobre{background:var(--white);}
.about-grid{display:grid;grid-template-columns:0.9fr 1.1fr;gap:80px;align-items:center;}
.about-photo{aspect-ratio:4/5;overflow:hidden;background:var(--light-gray);}
.about-photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(0.15);
  transition:transform 1.4s var(--ease);}
.about-photo:hover img{transform:scale(1.03);}
.about-text .eyebrow{display:block;margin-bottom:18px;}
.about-text h2{font-size:clamp(30px,3.6vw,46px);line-height:1.16;font-weight:400;}
.about-text p{margin-top:24px;font-size:16.5px;color:var(--grey-text);font-weight:300;line-height:1.85;}
.about-credentials{margin-top:34px;display:flex;flex-direction:column;gap:12px;}
.about-credentials li{display:flex;align-items:center;gap:12px;font-size:13.5px;
  letter-spacing:0.02em;color:var(--graphite);font-weight:500;}
.about-credentials li::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--gold);flex-shrink:0;}
.about-text .btn{margin-top:38px;}
@media (max-width:860px){.about-grid{grid-template-columns:1fr;gap:44px;}}

/* Formação e Especializações */
#formacao{background:var(--warm-white);}
.qualification-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:90px;align-items:start;}
.qualification-heading{position:sticky;top:120px;}
.qualification-heading .eyebrow{display:block;margin-bottom:18px;}
.qualification-heading h2{font-size:clamp(32px,3.8vw,50px);line-height:1.14;}
.qualification-heading p{margin-top:22px;color:var(--grey-text);font-size:16px;font-weight:300;line-height:1.8;}
.qualification-cards{display:grid;grid-template-columns:1fr 1fr;gap:1px;
  background:var(--hairline);border:1px solid var(--hairline);}
.qualification-card{background:var(--warm-white);padding:32px 28px;min-height:225px;
  transition:background .4s var(--ease),transform .4s var(--ease);}
.qualification-card:last-child{grid-column:1/-1;min-height:auto;}
.qualification-card:hover{background:var(--white);transform:translateY(-3px);}
.qualification-card svg{width:24px;height:24px;color:var(--gold);stroke-width:1.3;}
.qualification-card h3{font-size:23px;font-weight:500;line-height:1.2;margin-top:34px;}
.qualification-card p{margin-top:10px;color:var(--grey-text);font-size:13px;font-weight:300;line-height:1.65;}
@media (max-width:860px){
  .qualification-grid{grid-template-columns:1fr;gap:44px;}
  .qualification-heading{position:static;}
}
@media (max-width:520px){.qualification-cards{grid-template-columns:1fr;}.qualification-card:last-child{grid-column:auto;}}

/* Earshutt */
#earshutt{background:var(--graphite);color:var(--warm-white);position:relative;overflow:hidden;}
#earshutt h2{color:var(--warm-white);}
.earshutt-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.ear-svg-wrap{display:flex;align-items:center;justify-content:center;position:relative;}
.ear-svg-wrap svg{width:100%;max-width:340px;height:auto;}
.ear-path{fill:none;stroke:var(--gold);stroke-width:1.3;stroke-linecap:round;
  stroke-linejoin:round;stroke-dasharray:900;stroke-dashoffset:900;
  transition:stroke-dashoffset 2.4s var(--ease);}
.ear-svg-wrap.in .ear-path{stroke-dashoffset:0;}
.ear-dot{fill:var(--gold);opacity:0;transition:opacity .6s ease .4s;}
.ear-svg-wrap.in .ear-dot{opacity:1;}
.earshutt-text h2{font-size:clamp(30px,3.8vw,48px);line-height:1.16;font-weight:400;}
.earshutt-text p{margin-top:22px;color:rgba(248,247,244,0.75);font-weight:300;font-size:16px;line-height:1.85;}
.benefit-list{margin-top:34px;display:grid;grid-template-columns:1fr 1fr;gap:16px 26px;}
.benefit-list li{font-size:13.5px;padding-bottom:14px;border-bottom:1px solid var(--hairline-dark);
  color:var(--warm-white);font-weight:400;}
.earshutt-text .btn{margin-top:38px;}
@media (max-width:860px){.earshutt-grid{grid-template-columns:1fr;gap:44px;}.benefit-list{grid-template-columns:1fr;}}

/* Procedimentos */
#procedimentos{background:var(--warm-white);}
.proc-tabs{display:flex;gap:10px;margin-bottom:50px;flex-wrap:wrap;}
.proc-tab{padding:12px 24px;border:1px solid var(--hairline);font-size:11.5px;
  letter-spacing:0.16em;text-transform:uppercase;font-weight:600;color:var(--grey-text);
  transition:all .35s var(--ease);background:transparent;}
.proc-tab.active,.proc-tab:hover{background:var(--graphite);color:var(--warm-white);border-color:var(--graphite);}
.proc-list{border-top:1px solid var(--hairline);}
.proc-item{border-bottom:1px solid var(--hairline);padding:28px 0;display:grid;
  grid-template-columns:1fr 1fr auto;align-items:center;gap:24px;
  transition:padding-left .35s var(--ease),background .35s;}
.proc-item:hover{padding-left:12px;}
.proc-name{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:500;color:var(--graphite);}
.proc-desc{color:var(--grey-text);font-size:13.5px;font-weight:300;}
.proc-book{display:flex;align-items:center;gap:8px;font-size:11px;letter-spacing:0.16em;
  text-transform:uppercase;font-weight:600;color:var(--graphite);border:1px solid var(--hairline);
  padding:11px 20px;white-space:nowrap;transition:all .3s;}
.proc-book:hover{background:var(--gold);color:#fff;border-color:var(--gold);}
@media (max-width:760px){
  .proc-item{grid-template-columns:1fr auto;}
  .proc-desc{grid-column:1/-1;}
}

/* Por que escolher */
#diferenciais{background:var(--white);}
.choice-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
  background:var(--hairline);border:1px solid var(--hairline);}
.choice-card{background:var(--white);padding:38px 28px;min-height:280px;
  transition:background .4s var(--ease);}
.choice-card:hover{background:var(--warm-white);}
.choice-num{font-size:10px;letter-spacing:.2em;color:var(--gold);font-weight:600;}
.choice-card h3{font-size:24px;font-weight:500;line-height:1.2;margin-top:44px;}
.choice-card p{margin-top:15px;color:var(--grey-text);font-size:13.5px;font-weight:300;line-height:1.7;}
@media (max-width:900px){.choice-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:560px){.choice-grid{grid-template-columns:1fr;}.choice-card{min-height:auto;}}

/* Estrutura da Clínica */
#estrutura{background:var(--graphite);color:var(--warm-white);position:relative;overflow:hidden;}
#estrutura::before{content:'';position:absolute;right:-15%;top:-45%;width:620px;height:620px;
  border:1px solid rgba(240,191,76,.12);border-radius:50%;pointer-events:none;}
.clinic-grid{position:relative;display:grid;grid-template-columns:.85fr 1.15fr;gap:90px;align-items:center;}
.clinic-intro .eyebrow{display:block;margin-bottom:20px;}
.clinic-intro h2{font-size:clamp(32px,4vw,52px);line-height:1.12;color:var(--warm-white);}
.clinic-intro p{margin-top:24px;max-width:470px;color:rgba(248,247,244,.72);font-size:16px;
  font-weight:300;line-height:1.85;}
.clinic-intro .btn{margin-top:38px;}
.clinic-features{border-top:1px solid var(--hairline-dark);}
.clinic-feature{display:grid;grid-template-columns:48px 1fr;gap:24px;padding:30px 0;
  border-bottom:1px solid var(--hairline-dark);transition:padding-left .35s var(--ease);}
.clinic-feature:hover{padding-left:12px;}
.clinic-num{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:14px;
  letter-spacing:.12em;color:var(--gold);padding-top:5px;}
.clinic-feature h3{font-size:24px;font-weight:500;line-height:1.2;color:var(--warm-white);}
.clinic-feature p{margin-top:8px;color:rgba(248,247,244,.62);font-size:13.5px;font-weight:300;line-height:1.65;}
@media (max-width:860px){
  .clinic-grid{grid-template-columns:1fr;gap:52px;}
  #estrutura::before{right:-70%;top:-20%;}
}

/* Resultados */
#resultados{padding:110px 5%;background:var(--warm-white);}
.results-shell{width:100%;max-width:1220px;margin:0 auto;}
.results-topline{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;}
.results-count{font-size:10px;letter-spacing:.2em;color:var(--grey-text);}
.results-stage{position:relative;min-height:720px;background:var(--graphite-deep);overflow:hidden;}
.result-slide{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,1.55fr) minmax(340px,.7fr);
  opacity:0;visibility:hidden;
  transform:translateX(24px);transition:opacity .55s var(--ease),transform .55s var(--ease),visibility .55s;}
.result-slide.active{opacity:1;visibility:visible;transform:translateX(0);z-index:2;}
.result-media{position:relative;min-width:0;overflow:hidden;background:#0b0b0c;}
.result-media img,.result-media video{width:100%;height:100%;object-fit:contain;background:#0b0b0c;}
.result-angle{position:absolute;left:22px;bottom:20px;padding:9px 13px;background:rgba(248,247,244,.92);
  color:var(--graphite);font-size:9px;letter-spacing:.18em;text-transform:uppercase;}
.result-info{display:flex;flex-direction:column;justify-content:flex-end;padding:52px 42px;background:var(--white);}
.result-kicker{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;}
.result-info h2{font-size:clamp(32px,3.2vw,48px);font-weight:300;font-style:italic;line-height:1.05;margin-bottom:38px;}
.result-info dl{border-top:1px solid var(--hairline);}
.result-info dl>div{padding:20px 0;border-bottom:1px solid var(--hairline);}
.result-info dt{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--grey-text);margin-bottom:8px;}
.result-info dd{font-family:'Cormorant Garamond',serif;font-size:20px;line-height:1.3;color:var(--graphite);}
.results-controls{display:grid;grid-template-columns:44px 1fr 44px;align-items:center;gap:22px;margin-top:24px;}
.result-arrow{width:44px;height:44px;border:1px solid var(--hairline);color:var(--graphite);font-size:18px;
  transition:all .3s;background:transparent;cursor:pointer;}
.result-arrow:hover{background:var(--graphite);color:var(--white);border-color:var(--graphite);}
.result-dots{display:flex;align-items:center;justify-content:center;gap:9px;}
.result-dots button{width:26px;height:2px;background:var(--hairline);border:0;cursor:pointer;transition:all .35s;padding:0;}
.result-dots button.active{width:52px;background:var(--gold);}
@media (max-width:860px){
  #resultados{padding:76px 20px;}
  .results-stage{min-height:780px;}
  .result-slide{grid-template-columns:1fr;grid-template-rows:minmax(0,72%) minmax(190px,28%);}
  .result-info{padding:32px 28px;}
  .result-info h2{margin-bottom:20px;font-size:36px;}
  .result-info dl>div{padding:14px 0;}
}
@media (max-width:540px){
  .results-stage{min-height:700px;}
  .result-slide{grid-template-rows:minmax(0,68%) minmax(210px,32%);}
  .result-angle{left:12px;bottom:12px;}
  .result-info{padding:26px 22px;}
  .result-info h2{font-size:30px;}
  .result-info dd{font-size:17px;}
  .result-dots{gap:5px;}
  .result-dots button{width:14px;}
  .result-dots button.active{width:28px;}
}

/* Proof */
#depoimentos{background:var(--white);}
.proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;
  background:var(--hairline);border:1px solid var(--hairline);margin-bottom:60px;}
.proof-card{background:var(--white);padding:40px 34px;}
.stars{color:var(--gold);font-size:13px;letter-spacing:3px;margin-bottom:20px;}
.proof-card p{font-size:15.5px;color:var(--grey-text);font-weight:300;font-style:italic;line-height:1.75;
  font-family:'Cormorant Garamond',serif;font-size:20px;}
.proof-name{margin-top:24px;font-size:11.5px;letter-spacing:0.12em;
  text-transform:uppercase;font-weight:700;color:var(--graphite);}
@media (max-width:860px){.proof-grid{grid-template-columns:1fr;}}
.disclaimer{font-size:12px;color:var(--grey-mid);font-weight:300;max-width:640px;margin:0 auto;
  text-align:center;line-height:1.7;padding-top:24px;border-top:1px solid var(--hairline);}

/* Cursos e mentorias */
#mentorias{background:var(--warm-white);padding:90px 0;}
.mentorship-shell{display:grid;grid-template-columns:1.15fr .85fr;gap:50px 80px;align-items:end;}
.mentorship-copy .eyebrow{display:block;margin-bottom:18px;}
.mentorship-copy h2{font-size:clamp(30px,3.6vw,46px);line-height:1.14;}
.mentorship-copy p{margin-top:20px;color:var(--grey-text);font-size:14.5px;font-weight:300;line-height:1.8;max-width:680px;}
.mentorship-options{border-top:1px solid var(--hairline);}
.mentorship-options div{display:flex;align-items:center;gap:16px;padding:20px 0;border-bottom:1px solid var(--hairline);}
.mentorship-options svg{width:20px;height:20px;color:var(--gold);stroke-width:1.3;}
.mentorship-options span{font-family:'Cormorant Garamond',serif;font-size:21px;color:var(--graphite);}
.mentorship-shell>.btn{grid-column:1/-1;width:max-content;}
@media (max-width:820px){.mentorship-shell{grid-template-columns:1fr;gap:36px;}}

/* Conteúdo educativo */
#conteudos{background:var(--white);}
.content-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--hairline);border:1px solid var(--hairline);}
.content-card{background:var(--white);padding:36px 30px;min-height:290px;display:flex;flex-direction:column;
  transition:background .4s var(--ease);}
.content-card:hover{background:var(--warm-white);}
.content-card svg{width:23px;height:23px;color:var(--gold);stroke-width:1.3;}
.content-card h3{font-size:25px;font-weight:500;line-height:1.2;margin-top:42px;}
.content-card p{margin-top:14px;color:var(--grey-text);font-size:13.5px;font-weight:300;line-height:1.7;}
.content-card>span{margin-top:auto;padding-top:26px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;}
@media (max-width:760px){.content-grid{grid-template-columns:1fr;}.content-card{min-height:auto;}}

/* Como funciona o atendimento */
#atendimento{background:var(--graphite-deep);color:var(--warm-white);}
.service-heading{display:grid;grid-template-columns:1.3fr .7fr;gap:80px;align-items:end;margin-bottom:70px;}
.service-heading .eyebrow{display:block;margin-bottom:18px;}
.service-heading h2{font-size:clamp(32px,4vw,52px);line-height:1.12;color:var(--warm-white);}
.service-heading>p{color:rgba(248,247,244,.68);font-size:15px;font-weight:300;line-height:1.8;}
.service-steps{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--hairline-dark);
  border-bottom:1px solid var(--hairline-dark);}
.service-step{padding:30px 24px 34px;border-right:1px solid var(--hairline-dark);}
.service-step:last-child{border-right:0;}
.service-step>span{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:14px;
  letter-spacing:.12em;color:var(--gold);}
.service-step h3{margin-top:36px;color:var(--warm-white);font-size:22px;font-weight:500;line-height:1.2;}
.service-step p{margin-top:14px;color:rgba(248,247,244,.62);font-size:12.5px;font-weight:300;line-height:1.7;}
.service-action{text-align:center;margin-top:48px;}
@media (max-width:900px){
  .service-heading{grid-template-columns:1fr;gap:24px;margin-bottom:50px;}
  .service-steps{grid-template-columns:1fr;}
  .service-step{display:grid;grid-template-columns:42px 1fr;gap:4px 18px;border-right:0;
    border-bottom:1px solid var(--hairline-dark);}
  .service-step:last-child{border-bottom:0;}
  .service-step h3{margin-top:0;}
  .service-step p{grid-column:2;}
}

/* Location */
#localizacao{background:var(--warm-white);}
.location-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start;}
.location-text .eyebrow{display:block;margin-bottom:18px;}
.location-text h2{font-size:clamp(28px,3.2vw,40px);font-weight:400;}
.location-text address{font-style:normal;font-size:16px;color:var(--grey-text);
  margin-top:20px;font-weight:300;line-height:1.85;}
.location-actions{display:flex;gap:14px;margin-top:34px;flex-wrap:wrap;}
.map-frame{aspect-ratio:4/3;background:var(--light-gray);border:1px solid var(--hairline);position:relative;overflow:hidden;}
@media (max-width:860px){.location-grid{grid-template-columns:1fr;gap:40px;}}

/* Final CTA */
#final-cta{background:var(--graphite-deep);color:var(--warm-white);text-align:center;
  padding:160px 0;position:relative;overflow:hidden;}
#final-cta::before{content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 50% 0%, rgba(240,191,76,0.18), transparent 60%);}
#final-cta .content{position:relative;z-index:2;}
#final-cta .eyebrow{display:inline-block;margin-bottom:24px;}
#final-cta h2{font-size:clamp(32px,4.8vw,60px);font-weight:400;line-height:1.14;
  max-width:820px;margin:0 auto;color:var(--warm-white);}
#final-cta p{color:rgba(248,247,244,0.75);margin:24px auto 0;font-size:16px;font-weight:300;max-width:480px;}
#final-cta .btn{margin-top:44px;}

/* Footer */
footer{background:var(--graphite-deep);color:rgba(248,247,244,0.7);
  padding:70px 0 30px;border-top:1px solid var(--hairline-dark);}
.footer-grid{display:flex;justify-content:space-between;flex-wrap:wrap;gap:40px;padding-bottom:40px;}
.footer-col h4{font-family:'Manrope',sans-serif;font-size:11px;letter-spacing:0.2em;
  text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:18px;}
.footer-col a,.footer-col p{display:block;font-size:13.5px;font-weight:300;
  color:rgba(248,247,244,0.7);margin-bottom:10px;}
.footer-col a:hover{color:var(--gold);}
.footer-bottom{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;
  font-size:11.5px;color:rgba(248,247,244,0.4);padding-top:24px;border-top:1px solid var(--hairline-dark);}

/* Mobile nav */
@media (max-width:900px){
  .nav-links{position:fixed;top:0;right:0;height:100vh;width:80%;max-width:360px;
    background:var(--warm-white);flex-direction:column;justify-content:center;
    align-items:flex-start;gap:28px;padding:0 40px;transform:translateX(100%);
    transition:transform .5s var(--ease);border-left:1px solid var(--hairline);z-index:400;}
  .nav-links.open{transform:translateX(0);}
  .nav-links.open a{color:var(--graphite);}
  .nav-links.open a:hover{color:var(--gold);}
  .nav-cta{display:none;}
  .burger{display:flex;z-index:500;position:relative;}
  .burger.open span{background:var(--graphite);}
  .burger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);}
  .burger.open span:nth-child(2){opacity:0;}
  .burger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);}
}
`;
