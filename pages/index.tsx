import Head from "next/head";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [showDossierModal, setShowDossierModal] = useState(false);
  const [showApuntateModal, setShowApuntateModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const router = useRouter();

  // Imágenes del slider
  const sliderImages = [
    '/web-images/slider-home-1.png',
    '/web-images/slider-home-2.png',
    '/web-images/slider-home-3.png',
    '/web-images/slider-home-4.png',
    '/web-images/slider-home-5.png',
    '/web-images/slider-home-6.png'
  ];

  // Función para calcular el tiempo restante
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-09-09T19:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Efecto para el slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Efecto para el contador de tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Inicializar el contador
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const handleModalClose = () => {
    setShowDossierModal(false);
    router.push('/gracias');
  };

  const handleApuntateModalClose = () => {
    setShowApuntateModal(false);
    router.push('/gracias');
  };

  const handleContactModalClose = () => {
    setShowContactModal(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hola.labnolab@gmail.com');
    // Optionally show a toast notification here
    alert('Email copiado al portapapeles');
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-grid');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Head>
        <title>LabnoLab - Laboratorio de inteligencia creativa</title>
        <meta name="description" content="Eficiencia, productividad y automatización con IA para potenciar personas, creatividad e impacto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Detectar cuando se completa cualquier Typeform
              window.addEventListener('message', function(event) {
                if (event.origin === 'https://form.typeform.com') {
                  if (event.data.type === 'form_submit') {
                    // Redirigir a la página de gracias
                    setTimeout(function() {
                      window.location.href = '/gracias';
                    }, 1000);
                  }
                }
              });
            `
          }}
        />
      </Head>
      <header className="header">
        <div className="logo">
          <img src="/web-images/logo-labnolab-header.png" alt="LabnoLab" />
        </div>
        <nav className="menu">
          <a href="#">HOME</a>
          <a href="#">ACADEMY</a>
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
              <button className="btn" onClick={scrollToServices}>
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>
                ¿QUÉ HACEMOS?
              </button>
              <button className="btn" onClick={() => setShowContactModal(true)}>
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                PREGÚNTANOS
              </button>
            </div>
          </div>
          <div className="section-image">
            <div className="slider-container">
              {sliderImages.map((image, index) => (
                <img 
                  key={index}
                  className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                  src={image} 
                  alt={`LabnoLab slide ${index + 1}`} 
                  width="500" 
                  height="400" 
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2. Fórmula (barra animada) */}
        <div className="marquee"><span className="marquee-content">(PERSONAS + CREATIVIDAD + IMPACTO)^IA = INTELIGENCIA CREATIVA</span></div>

        {/* 3. Sección del próximo curso */}
        <section className="course-section fade-in">
          <div className="course-header">
            <h2 className="course-pre-title">PRÓXIMO CURSO: SEP 2025</h2>
            <h1 className="course-title">EN CLAVE DE<br />INTELIGENCIA<br />ARTIFICIAL</h1>
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.seconds}</div>
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
              <button className="course-btn primary" onClick={() => setShowApuntateModal(true)}>
                <svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>
                APÚNTATE
              </button>
              <a className="course-btn secondary" href="https://wa.me/34615877069" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                CONTÁCTANOS
              </a>
              <button className="course-btn secondary" onClick={() => setShowDossierModal(true)}>
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7 24 24 24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
                Ver dossier
              </button>
            </div>
          </div>
        </section>

        {/* 4. Servicios */}
        <div className="services-grid fade-in">
          <div className="service-box">
            <img src="/web-images/servicios-formacion.png" alt="Formación" />
            <div className="service-content">
              <div className="service-title">Formación</div>
              <div className="service-desc">Cursos completos para trabajar las 6 fases de la Metodología LabnoLab: <strong>pensar, interactuar, investigar, innovar, comunicar y analizar en clave de IA</strong>; orientados y adaptados a diferentes perfiles profesionales: perfil emprendedor, docente, directivo, creativo…</div>
            </div>
          </div>
          <div className="service-box">
            <img src="/web-images/servicios-workshops.png" alt="Workshops" />
            <div className="service-content">
              <div className="service-title">Workshops</div>
              <div className="service-desc">Sesiones inmersivas de 2-4 horas donde <strong>desbloqueamos el pensamiento en clave de IA</strong>, colaborando con ella en ejemplos concretos de un proyecto o reto.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="/web-images/servicios-capacitacion.png" alt="Capacitación" />
            <div className="service-content">
              <div className="service-title">Capacitación</div>
              <div className="service-desc">Adaptamos nuestra metodología para crear <strong>programas formativos a medida</strong> para equipos con necesidades específicas, integrando la IA en sus flujos de trabajo sin que pierdan su identidad.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="/web-images/servicios-mentorias.png" alt="Mentorías" />
            <div className="service-content">
              <div className="service-title">Mentorías</div>
              <div className="service-desc">Acompañamiento one-to-one para <strong>emprendedoras/es que buscan potenciar su proyecto</strong> colaborando con la Inteligencia Artificial.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="/web-images/servicios-consultoría.png" alt="Consultoría" />
            <div className="service-content">
              <div className="service-title">Consultoría</div>
              <div className="service-desc">Transformación integral de procesos y <strong>creación de soluciones de IA on-demand</strong>, automatizaciones y mejora de la productividad que amplifican el potencial humano sin reemplazarlo.</div>
            </div>
          </div>
          <div className="service-box">
            <img src="/web-images/servicios-hackathon.png" alt="Hackathons" />
            <div className="service-content">
              <div className="service-title">Hackathons</div>
              <div className="service-desc">Jornadas creativas de co-creación donde colaboramos con la IA para resolver desafíos complejos y generar <strong>innovación disruptiva sobre retos concretos</strong> de equipos u organizaciones.</div>
            </div>
          </div>
        </div>

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

        {/* Modal del Dosier */}
        {showDossierModal && (
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Descarga el Dosier Completo</h3>
                <button className="modal-close" onClick={handleModalClose}>
                  ✕
                </button>
              </div>
              <div className="typeform-container">
                <iframe
                  src="https://form.typeform.com/to/U6pcRMpM?embedded=true"
                  style={{
                    width: '100%',
                    height: '500px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="Formulario de descarga del dosier"
                />
              </div>
              <div className="modal-footer">
                <p>Una vez completado el formulario, la descarga comenzará automáticamente.</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Apuntarse */}
        {showApuntateModal && (
          <div className="modal-overlay" onClick={handleApuntateModalClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>¡Apúntate al Curso!</h3>
                <button className="modal-close" onClick={handleApuntateModalClose}>
                  ✕
                </button>
              </div>
              <div className="typeform-container">
                <iframe
                  src="https://form.typeform.com/to/EkzWayHM?embedded=true"
                  style={{
                    width: '100%',
                    height: '500px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="Formulario de inscripción al curso"
                />
              </div>
              <div className="modal-footer">
                <p>Completa el formulario para inscribirte en el curso "En clave de IA".</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Contacto */}
        {showContactModal && (
          <div className="modal-overlay" onClick={handleContactModalClose}>
            <div className="modal-content contact-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>¿Cómo quieres contactarnos?</h3>
                <button className="modal-close" onClick={handleContactModalClose}>
                  ✕
                </button>
              </div>
              <div className="contact-buttons">
                <button className="contact-btn" onClick={copyEmail}>
                  <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                  Mandar mail
                </button>
                
                <a className="contact-btn" href="https://wa.me/34615877069" target="_blank">
                  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                  Escríbenos por Whatsapp
                </a>
                
                <div className="ai-assistant-section">
                  <p className="ai-text">Y si te gustan las preguntas, aquí nuestra asistente socrática, nuestra preguntadora serial, nuestra IA que solo sabe preguntar…</p>
                  <a className="contact-btn ai-btn" href="https://chatgpt.com/g/g-67f36d65820c8191a852f83f85e87f1f-preguntadora-serial" target="_blank">
                    <svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 0c17.7 0 32 14.3 32 32V96H480c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg>
                    Habla con ella
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 