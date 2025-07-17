import Head from "next/head";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Academy() {
  const [showDossierModal, setShowDossierModal] = useState(false);
  const [showApuntateModal, setShowApuntateModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const [expandedQuestions, setExpandedQuestions] = useState<{[key: string]: boolean}>({});
  const router = useRouter();

  // Función para calcular el tiempo restante (idéntica a la home)
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

  // Efecto para el contador de tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Inicializar el contador
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  // Efecto para las animaciones scroll-triggered y sidebar
  useEffect(() => {
    const observeElements = () => {
      const stagesContainer = document.querySelector('.stages-container');
      const storyElements = document.querySelectorAll('.story-section');
      const sidebar = document.querySelector('.sidebar-methodology');
      
      // Observer para las secciones de historia (etapas)
      const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            setActiveSection(index);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -200px 0px'
      });

      // Observer para controlar visibilidad del sidebar
      const sidebarObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el contenedor de etapas está visible, mostrar sidebar
            if (entry.target === stagesContainer) {
              sidebar?.classList.add('visible');
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      });

      storyElements.forEach((el) => {
        storyObserver.observe(el);
      });

      // Observar solo el contenedor de etapas
      if (stagesContainer) {
        sidebarObserver.observe(stagesContainer);
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(observeElements, 100);
  }, []);

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    const key = `${sectionIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-index="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleModalClose = () => {
    setShowDossierModal(false);
    router.push('/gracias');
  };

  const handleApuntateModalClose = () => {
    setShowApuntateModal(false);
  };

  const etapas = [
    {
      numero: "1",
      titulo: "Pensar",
      descripcion: "Construye los fundamentos mentales para colaborar inteligentemente con la IA. En lugar de seguir tendencias, aprende a evaluar críticamente qué herramientas usar y cómo utilizarlas para pensar mejor. La IA te permitirá aprovechar la como amplificador de tu creatividad, no como sustituto de tu pensamiento.",
      preguntasRespuestas: [
        {
          pregunta: "¿Está la IA aquí para reemplazarnos o para potenciarnos?",
          respuesta: "La IA está aquí para potenciarnos, no para reemplazarnos. Aprenderás a identificar cuándo la IA puede amplificar tus capacidades humanas únicas como la creatividad, la empatía y el pensamiento crítico, en lugar de intentar sustituirlas."
        },
        {
          pregunta: "¿Por qué Claude me da respuestas diferentes a ChatGPT?",
          respuesta: "Cada IA tiene diferentes entrenamientos, objetivos y arquitecturas. Comprenderás las fortalezas específicas de cada modelo y cómo elegir la herramienta adecuada para cada tarea específica."
        },
        {
          pregunta: "¿Es realmente segura la IA? ¿Es sostenible?",
          respuesta: "Explorarás los riesgos reales y los mitos sobre la IA, aprenderás prácticas de uso responsable y comprenderás el impacto ambiental y social de estas tecnologías para tomar decisiones informadas."
        },
        {
          pregunta: "¿Cómo puede destacar cuando 'todo el mundo' usa IA?",
          respuesta: "El diferenciador no está en usar IA, sino en CÓMO la usas. Desarrollarás tu enfoque único combinando tu expertise personal con IA de manera creativa y auténtica."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      )
    },
    {
      numero: "2",
      titulo: "Interactuar",
      descripcion: "Domina el arte de comunicarte efectivamente con sistemas de IA. Ve más allá de escribir prompts; aprende a mantener conversaciones productivas, obtener resultados consistentes, personalizar outputs y usar la IA efectivamente como tu colaboradora.",
      preguntasRespuestas: [
        {
          pregunta: "¿Cómo puedo conseguir resultados consistentes?",
          respuesta: "Aprenderás técnicas de prompting avanzado, el uso de templates reutilizables y cómo estructurar conversaciones con contexto claro para obtener outputs predecibles y de calidad."
        },
        {
          pregunta: "¿Existe una forma 'correcta' de hablar con la IA?",
          respuesta: "No hay una fórmula única, pero sí principios efectivos. Dominarás el arte de la comunicación clara, específica y contextual que se adapte a tu estilo y objetivos particulares."
        },
        {
          pregunta: "¿Cómo evito que me dé respuestas genéricas?",
          respuesta: "Desarrollarás estrategias para proporcionar contexto específico, hacer preguntas más precisas y usar técnicas de refinamiento iterativo para obtener respuestas personalizadas y relevantes."
        },
        {
          pregunta: "¿Puedo crear una biblioteca de prompts reutilizables?",
          respuesta: "Sí, construirás tu propia colección de prompts personalizados organizados por categorías, objetivos y contextos, creando un sistema eficiente para diferentes situaciones."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      numero: "3",
      titulo: "Investigar",
      descripcion: "Revoluciona tu forma de investigar combinando herramientas de IA con metodología crítica. Aprende a construir sistemas de gestión de conocimiento que aceleren tu trabajo y generen insights valiosos.",
      preguntasRespuestas: [
        {
          pregunta: "¿Cómo puedo confiar en la información que me da la IA?",
          respuesta: "Desarrollarás habilidades de verificación cruzada, técnicas de fact-checking y aprenderás a usar múltiples fuentes para validar información antes de aplicarla en tus proyectos."
        },
        {
          pregunta: "¿Cómo busco información específica?",
          respuesta: "Dominarás técnicas de búsqueda avanzada, el uso de operadores específicos y cómo formular consultas que te lleven directamente a la información que necesitas."
        },
        {
          pregunta: "¿Puedo organizar mi biblioteca informativa?",
          respuesta: "Construirás sistemas de gestión de conocimiento personal usando IA, creando bases de datos searchables y organizando información de manera que sea fácilmente recuperable."
        },
        {
          pregunta: "¿Puedo automatizar mi investigación?",
          respuesta: "Aprenderás a crear flujos automatizados de investigación, configurar alertas inteligentes y usar IA para monitorear trends y desarrollos en tu área de interés."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      numero: "4",
      titulo: "Innovar",
      descripcion: "Materializa ideas extraordinarias creando asistentes y herramientas personalizadas de IA. Desarrolla tu propio universo de herramientas que se adapten a tus necesidades específicas.",
      preguntasRespuestas: [
        {
          pregunta: "¿Puedo realmente tener mi propio equipo virtual de GPTs?",
          respuesta: "Absolutamente. Aprenderás a crear y personalizar GPTs especializados para diferentes roles: asistente de escritura, analista de datos, coach creativo, etc., cada uno optimizado para tareas específicas."
        },
        {
          pregunta: "¿Cómo automatizo las tareas repetitivas?",
          respuesta: "Identificarás procesos automatizables en tu trabajo, crearás workflows inteligentes y configurarás sistemas que se encarguen de tareas rutinarias mientras tú te enfocas en el trabajo creativo."
        },
        {
          pregunta: "¿Puedo crear prototipos profesionales sin saber programación?",
          respuesta: "Sí, usando herramientas no-code potenciadas por IA. Aprenderás a crear aplicaciones, interfaces y prototipos funcionales sin escribir una línea de código."
        },
        {
          pregunta: "¿Cómo organizo toda mi información?",
          respuesta: "Diseñarás sistemas de gestión de información personal usando IA, creando estructuras que se adapten a tu forma de trabajar y que evolucionen con tus necesidades."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
        </svg>
      )
    },
    {
      numero: "5",
      titulo: "Comunicar",
      descripcion: "Desarrolla tu capacidad de conectar auténticamente con diferentes audiencias usando la IA como amplificador de tu mensaje personal, manteniendo siempre la esencia humana.",
      preguntasRespuestas: [
        {
          pregunta: "¿Puedo crear contenido auténtico sin perder horas en ello?",
          respuesta: "Aprenderás workflows de creación eficientes que mantienen tu voz única mientras aceleran la producción. La IA será tu colaboradora, no tu sustituta creativa."
        },
        {
          pregunta: "¿Cómo personalizo la comunicación efectivamente?",
          respuesta: "Dominarás técnicas para adaptar tu mensaje a diferentes audiencias, canales y contextos sin perder autenticidad, usando IA para potenciar tu capacidad de conexión humana."
        },
        {
          pregunta: "¿Cómo genero narrativas que realmente impacten?",
          respuesta: "Desarrollarás tu habilidad para crear historias compelling combinando técnicas narrativas clásicas con herramientas de IA que potencien el impacto emocional de tus mensajes."
        },
        {
          pregunta: "¿Cómo paso de ideas a formatos múltiples?",
          respuesta: "Aprenderás a transformar una idea central en contenido para diferentes plataformas (texto, video, audio, visual) manteniendo coherencia y maximizando el alcance."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      numero: "6",
      titulo: "Analizar",
      descripcion: "Desarrolla sistemas de evaluación que midan tanto el rendimiento cuantitativo como el impacto cualitativo de tus proyectos. Cierra el ciclo con análisis que generen mejora continua.",
      preguntasRespuestas: [
        {
          pregunta: "¿Cómo puedo medir el verdadero impacto de mi trabajo?",
          respuesta: "Crearás marcos de medición holísticos que van más allá de métricas tradicionales, incorporando indicadores cualitativos de impacto humano y valor a largo plazo."
        },
        {
          pregunta: "¿Qué métricas necesito más allá de las tradicionales?",
          respuesta: "Identificarás KPIs personalizados que reflejen tus objetivos únicos: impacto en audiencia, calidad de interacciones, evolución personal, satisfacción creativa, etc."
        },
        {
          pregunta: "¿Cómo transformo datos en decisiones acertadas?",
          respuesta: "Desarrollarás habilidades de interpretación de datos usando IA para identificar patterns, predecir tendencias y convertir insights en acciones estratégicas concretas."
        },
        {
          pregunta: "¿Cómo creo dashboards inteligentes?",
          respuesta: "Construirás sistemas de monitoreo automatizados que te proporcionen información relevante en tiempo real y te ayuden a optimizar continuamente tu metodología de trabajo."
        }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Academy - LabnoLab | Formación en Inteligencia Creativa</title>
        <meta name="description" content="Descubre nuestra metodología de 6 etapas: Pensar, Interactuar, Investigar, Innovar, Comunicar y Analizar en clave de Inteligencia Artificial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">
          <img src="/web-images/logo-labnolab-header.png" alt="LabnoLab" />
        </div>
        <nav className="menu">
          <a href="/">HOME</a>
          <a href="/academy">ACADEMY</a>
        </nav>
      </header>

      {/* Sidebar de metodología */}
      <div className="sidebar-methodology">
        <div className="methodology-title">Metodología LabnoLab</div>
        {etapas.map((etapa, index) => (
          <div 
            key={index}
            className={`sidebar-item ${activeSection === index ? 'active' : ''} ${activeSection > index ? 'completed' : ''}`}
            onClick={() => scrollToSection(index)}
          >
            <div className="sidebar-number">{etapa.numero}</div>
            <div className="sidebar-label">{etapa.titulo}</div>
          </div>
        ))}
      </div>

      <div className="academy-page">
        {/* Hero Section Épico */}
        <section className="hero-epic">
          <div className="hero-content">
            <h1>Nuestra formación<br />en <span className="highlight">Inteligencia Creativa</span></h1>
            <div className="countdown-section">
              <h2 className="countdown-title">PRÓXIMO CURSO: SEP 2025</h2>
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
              
              <div className="hero-buttons">
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
                  VER DOSIER
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor de Etapas con Sidebar */}
        <div className="stages-container">
          {etapas.map((etapa, index) => (
            <section 
              key={index} 
              data-index={index}
              className={`story-section ${index % 2 === 0 ? 'section-left' : 'section-right'}`}
            >
              <div className="story-content">
                <div className="content-left">
                  <div className="story-header">
                    <h2 className="stage-title">
                      <span className="stage-number-title">{etapa.numero} | {etapa.titulo}</span>
                      <span className="en-clave">en clave de IA</span>
                    </h2>
                  </div>
                  
                  <div className="story-description">
                    <p>{etapa.descripcion}</p>
                  </div>
                </div>

                <div className="content-right">
                  <div className="questions-container">
                    <h3>Preguntas clave que resolverás:</h3>
                    <div className="questions-accordion">
                      {etapa.preguntasRespuestas.map((item, qIndex) => (
                        <div key={qIndex} className="question-accordion-item">
                          <button 
                            className={`question-button ${expandedQuestions[`${index}-${qIndex}`] ? 'expanded' : ''}`}
                            onClick={() => toggleQuestion(index, qIndex)}
                          >
                            <span className="question-text">{item.pregunta}</span>
                            <span className="question-arrow">
                              {expandedQuestions[`${index}-${qIndex}`] ? '−' : '+'}
                            </span>
                          </button>
                          {expandedQuestions[`${index}-${qIndex}`] && (
                            <div className="question-answer">
                              <p>{item.respuesta}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section Final */}
        <section className="cta-final">
          <div className="cta-content">
            <h2>¿Estás ready?</h2>
            <p>Súmate al curso y domina las 6 etapas de la Inteligencia Creativa</p>
            
            <div className="cta-buttons">
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
                VER DOSIER
              </button>
            </div>
          </div>
        </section>

        {/* Modales (idénticos a index.tsx) */}
        {showDossierModal && (
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Deja tus datos para acceder al dossier completo</h3>
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
            </div>
          </div>
        )}

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
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .academy-page {
          width: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .stages-container {
          position: relative;
          margin-left: 200px;
        }

        /* Sidebar Methodology */
        .sidebar-methodology {
          position: fixed;
          left: 0;
          top: 90px;
          width: 200px;
          height: calc(100vh - 90px);
          background: #000000;
          padding: 30px 20px;
          z-index: 999;
          overflow-y: auto;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .sidebar-methodology.visible {
          opacity: 1;
          visibility: visible;
        }

        .methodology-title {
          color: #cdff07;
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.2;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 10px;
          margin-bottom: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .sidebar-item:hover {
          background: rgba(205, 255, 7, 0.1);
          border-color: #cdff07;
        }

        .sidebar-item.active {
          background: #cdff07;
          color: #000000;
        }

        .sidebar-item.completed {
          background: rgba(205, 255, 7, 0.2);
          border-color: #cdff07;
        }

        .sidebar-number {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #cdff07;
          color: #000000;
          border-radius: 50%;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .sidebar-item.active .sidebar-number {
          background: #000000;
          color: #cdff07;
        }

        .sidebar-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: inherit;
        }

        .sidebar-item:not(.active) .sidebar-label {
          color: #cdff07;
        }

        /* Hero Section Épico */
        .hero-epic {
          background: #cdff07;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 40px 60px;
          border-bottom: 6px solid #000000;
        }

        .hero-content h1 {
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 60px;
          line-height: 0.92;
          letter-spacing: -1.5px;
          color: #000000;
        }

        .highlight {
          color: #000000;
        }

        .countdown-section {
          margin-top: 40px;
        }

        .countdown-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .countdown-grid {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .countdown-item {
          text-align: center;
          background: #000000;
          color: #cdff07;
          padding: 20px;
          border-radius: 12px;
          min-width: 120px;
        }

        .countdown-number {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .countdown-label {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        .hero-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 50px;
        }

        /* Story Sections */
        .story-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 40px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .story-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .section-left {
          background: #cdff07;
        }

        .section-right {
          background: #000000;
        }

        .story-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 80px;
          width: 100%;
        }

        .content-left {
          flex: 1;
        }

        .content-right {
          flex: 1;
        }

        .story-header {
          margin-bottom: 40px;
        }

        .stage-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stage-number-title {
          color: #000000;
        }

        .en-clave {
          color: #666;
          font-weight: 400;
          font-size: 0.8em;
        }

        .section-left .stage-number-title {
          color: #000000;
        }

        .section-left .en-clave {
          color: #666;
        }

        .section-right .stage-number-title {
          color: #cdff07;
        }

        .section-right .en-clave {
          color: #999;
        }

        .story-description {
          margin-bottom: 40px;
        }

        .story-description p {
          font-size: 1.3rem;
          line-height: 1.7;
          color: #333;
        }

        .section-left .story-description p {
          color: #333;
        }

        .section-right .story-description p {
          color: #cdff07;
        }

        .questions-container h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 20px;
        }

        .section-left .questions-container h3 {
          color: #000000;
        }

        .section-right .questions-container h3 {
          color: #cdff07;
        }

        .questions-accordion {
          margin-top: 20px;
        }

        .question-accordion-item {
          margin-bottom: 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .section-left .question-accordion-item {
          border-color: #e0e0e0;
        }

        .section-right .question-accordion-item {
          border-color: #555;
        }

        .question-accordion-item:hover {
          border-color: #000000;
        }

        .section-right .question-accordion-item:hover {
          border-color: #cdff07;
        }

        .question-button {
          width: 100%;
          padding: 20px;
          background: #ffffff;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #000000;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .section-right .question-button {
          background: #333;
          color: #cdff07;
        }

        .question-button:hover {
          background: #f8f8f8;
        }

        .section-right .question-button:hover {
          background: #444;
        }

        .question-button.expanded {
          background: #000000;
          color: #cdff07;
        }

        .section-right .question-button.expanded {
          background: #cdff07;
          color: #000000;
        }

        .question-text {
          flex: 1;
          line-height: 1.4;
        }

        .question-arrow {
          font-size: 1.5rem;
          font-weight: 800;
          min-width: 30px;
          text-align: center;
        }

        .question-answer {
          padding: 20px;
          background: #f8f8f8;
          border-top: 1px solid #e0e0e0;
          animation: slideDown 0.3s ease;
        }

        .section-right .question-answer {
          background: #222;
          border-top: 1px solid #555;
        }

        .question-answer p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
        }

        .section-right .question-answer p {
          color: #cdff07;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }



        /* CTA Section Final */
        .cta-final {
          background: #000000;
          color: #cdff07;
          padding: 100px 40px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 30px;
          color: #cdff07;
        }

        .cta-content p {
          font-size: 1.5rem;
          margin-bottom: 50px;
          color: #cdff07;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .story-content {
            flex-direction: column;
            gap: 50px;
          }

          .content-left,
          .content-right {
            flex: 1;
          }
        }

        @media (max-width: 1024px) {
          .stages-container {
            margin-left: 0;
          }

          .sidebar-methodology {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .stages-container {
            margin-left: 0;
          }

          .sidebar-methodology {
            display: none;
          }

          .hero-epic {
            padding: 160px 20px 60px;
            min-height: 80vh;
          }

          .hero-content h1 {
            font-size: 3rem;
          }

          .countdown-grid {
            gap: 20px;
          }

          .countdown-item {
            min-width: 80px;
            padding: 15px;
          }

          .countdown-number {
            font-size: 2rem;
          }

          .story-section {
            padding: 60px 20px;
          }

          .stage-title {
            font-size: 2.5rem;
          }

          .story-description p {
            font-size: 1.1rem;
          }

          .cta-content h2 {
            font-size: 2.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            gap: 20px;
          }

          .question-button {
            padding: 15px;
            font-size: 1rem;
          }

          .question-answer {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}