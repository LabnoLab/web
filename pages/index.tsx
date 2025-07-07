import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LabnoLab - Laboratorio de inteligencia creativa</title>
        <meta name="description" content="Eficiencia, productividad y automatización con IA para potenciar personas, creatividad e impacto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="logo">LabnoLab.</div>
        <nav className="menu">
          <a href="#">HOME</a>
          <a href="#">ACADEMY</a>
          <a href="#">CARRITO</a>
        </nav>
      </header>
      <div className="container">
        {/* 1. Laboratorio de Inteligencia Creativa */}
        <section className="section fade-in">
          <div className="section-content">
            <h1>LABORATORIO DE INTELIGENCIA CREATIVA</h1>
            <p>
              Eficiencia, productividad y automatización son solo el resultado de colaborar con la Inteligencia Artificial para potenciar a las <strong>personas, la creatividad y el impacto.</strong>
            </p>
            <div className="btns">
              <a className="btn" href="https://labnolab.com/#servicios">
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>
                ¿QUÉ HACEMOS?
              </a>
              <a className="btn" href="https://labnolab.com/#contactform">
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                PREGÚNTANOS
              </a>
            </div>
          </div>
          <div className="section-image">
            <img className="bw-img" src="https://labnolab.com/wp-content/uploads/2025/02/2-1.png" alt="LabnoLab persona" width="500" height="400" />
          </div>
        </section>

        {/* 2. Fórmula (barra animada) */}
        <div className="marquee"><span className="marquee-content">(PERSONAS + CREATIVIDAD + IMPACTO)^IA = INTELIGENCIA CREATIVA &nbsp; (PERSONAS + CREATIVIDAD + IMPACTO)^IA = INTELIGENCIA CREATIVA &nbsp;</span></div>

        {/* 3. Sección del próximo curso */}
        <section className="course-section fade-in">
          <div className="course-header">
            <h2 className="course-pre-title">PRÓXIMO CURSO: SEP 2025</h2>
            <h1 className="course-title">EN CLAVE DE<br />INTELIGENCIA<br />ARTIFICIAL</h1>
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-number">63</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">5</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">17</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">16</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
          <div className="course-content">
            <p className="course-description">
              Por aquí somos fans de la pregunta, así que déjanos hacerte alguna: ¿Sientes que hay un enorme potencial en la IA, pero no sabes cómo aprovecharlo manteniendo tu identidad y propósito? ¿Te interesa no solo obtener respuestas, sino aprender a formular mejores preguntas? ¿Buscas diferenciarte en un mercado saturado donde todos usan la misma tecnología de la misma manera?
            </p>
            <p className="course-description">
              En clave de IA es el mega curso de LabnoLab que hará que <strong>pienses, interactúes, investigues, innoves, comuniques y analices</strong> en clave de Inteligencia Creativa, no solo de Inteligencia Artificial.
            </p>
            <p className="course-description">
              Si quieres saber más, descarga el dosier o escríbenos por Whatsapp y te contamos.
            </p>
            <div className="course-buttons">
              <a className="course-btn primary" href="#">
                <svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>
                APÚNTATE
              </a>
              <a className="course-btn secondary" href="https://wa.me/34615877069" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                CONTÁCTANOS
              </a>
              <a className="course-btn secondary" href="#">
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
                DESCARGA EL DOSIER
              </a>
            </div>
          </div>
        </section>

        {/* 4. Servicios */}
        <div className="services-grid fade-in">
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/02/2-1.png" alt="Formación" />
            <div className="service-content">
              <div className="service-title">Formación</div>
              <div className="service-desc">Cursos completos para trabajar las 6 fases de la Metodología LabnoLab: <strong>pensar, interactuar, investigar, innovar, comunicar y analizar en clave de IA</strong>; orientados y adaptados a diferentes perfiles profesionales: perfil emprendedor, docente, directivo, creativo…</div>
            </div>
          </div>
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/02/5-1.png" alt="Workshops" />
            <div className="service-content">
              <div className="service-title">Workshops</div>
              <div className="service-desc">Sesiones inmersivas de 2-4 horas donde <strong>desbloqueamos el pensamiento en clave de IA</strong>, colaborando con ella en ejemplos concretos de un proyecto o reto.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/04/Mentorias.png" alt="Capacitación" />
            <div className="service-content">
              <div className="service-title">Capacitación</div>
              <div className="service-desc">Adaptamos nuestra metodología para crear <strong>programas formativos a medida</strong> para equipos con necesidades específicas, integrando la IA en sus flujos de trabajo sin que pierdan su identidad.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-12-174424.png" alt="Mentorías" />
            <div className="service-content">
              <div className="service-title">Mentorías</div>
              <div className="service-desc">Acompañamiento one-to-one para <strong>emprendedoras/es que buscan potenciar su proyecto</strong> colaborando con la Inteligencia Artificial.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/02/1-1.png" alt="Consultoría" />
            <div className="service-content">
              <div className="service-title">Consultoría</div>
              <div className="service-desc">Transformación integral de procesos y <strong>creación de soluciones de IA on-demand</strong>, automatizaciones y mejora de la productividad que amplifican el potencial humano sin reemplazarlo.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="https://labnolab.com/wp-content/uploads/2025/02/2-1.png" alt="Hackathons" />
            <div className="service-content">
              <div className="service-title">Hackathons</div>
              <div className="service-desc">Jornadas creativas de co-creación donde colaboramos con la IA para resolver desafíos complejos y generar <strong>innovación disruptiva sobre retos concretos</strong> de equipos u organizaciones.</div>
            </div>
          </div>
        </div>

        {/* 6. ¿Quieres preguntarnos algo? (barra animada) */}
        <div className="marquee"><span className="marquee-content">¿Quieres preguntarnos algo? &nbsp; ¿Quieres preguntarnos algo? &nbsp;</span></div>

        {/* 8. Mapa */}
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Barcelona&t=m&z=13&output=embed&iwloc=near"
          title="Barcelona"
          aria-label="Barcelona"
        ></iframe>
        
        {/* 9. Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-item">
              <div className="footer-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </div>
              <a href="https://wa.me/34615877069" target="_blank" className="footer-link">
                +34615877069
              </a>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                </svg>
              </div>
              <div className="footer-link">
                hola.labnolab@gmail.com
              </div>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">
                <svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
              </div>
              <div className="footer-link">
                Barcelona, Spain.
              </div>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448z"></path>
                </svg>
              </div>
              <a href="https://www.linkedin.com/company/labnolab/" target="_blank" className="footer-link">
                LabnoLab Page
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 