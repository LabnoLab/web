import Head from "next/head";
import { useRouter } from 'next/router';

export default function Gracias() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>¡Gracias! - LabnoLab</title>
        <meta name="description" content="Gracias por descargar el dosier de LabnoLab - En clave de IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
      <div className="thanks-container">
        <div className="thanks-content">
          <div className="thanks-header">
            <div className="logo">LabnoLab.</div>
          </div>
          
          <div className="thanks-message">
            <h1>¡Gracias!</h1>
            <div className="thanks-icon">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" fill="#cdff07" stroke="#000000" strokeWidth="6"/>
                <circle cx="45" cy="45" r="8" fill="#000000"/>
                <circle cx="75" cy="45" r="8" fill="#000000"/>
                <path d="M40 75 Q60 95 80 75" stroke="#000000" strokeWidth="6" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <h2>Aquí puedes consultar el dossier</h2>
          </div>

          <div className="thanks-actions">
            <a href="https://www.canva.com/design/DAGkUx9SHiw/_ArJAngHQjixmadWG5J8Cg/view?utm_content=DAGkUx9SHiw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he7303be4bb" target="_blank" className="course-btn">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7 24 24 24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
              </svg>
              VER DOSSIER
            </a>
            <button className="course-btn" onClick={handleGoHome}>
              <svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32.1-14-32.1-32s14.1-32 32.1-32l64-64c48-48 112-80 176-80s128 32 176 80l64 64c18 0 32 14 32 32.1zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"></path>
              </svg>
              VOLVER A LA HOME
            </button>
            <a href="https://wa.me/34615877069" target="_blank" className="course-btn">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              CONTÁCTANOS POR WHATSAPP
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .thanks-container {
          min-height: 100vh;
          background: #cdff07;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: var(--font-open-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .thanks-content {
          background: #000000;
          border-radius: 16px;
          padding: 0;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid #000000;
          overflow: hidden;
        }

        .thanks-header {
          background: #000000;
          padding: 20px 30px;
          text-align: center;
        }

        .logo {
          font-family: var(--font-open-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: #cdff07;
          letter-spacing: -1.5px;
        }

        .thanks-message {
          padding: 40px 30px;
          text-align: center;
        }

        .thanks-message h1 {
          font-family: var(--font-open-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          color: #cdff07;
          margin: 0 0 20px 0;
          letter-spacing: -2px;
          line-height: 0.9;
        }

        .thanks-icon {
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .thanks-icon svg {
          width: 100px;
          height: 100px;
        }

        .thanks-message h2 {
          font-family: var(--font-open-sans), Arial, sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #cdff07;
          margin: 20px 0 15px 0;
          letter-spacing: -1px;
        }



        .thanks-actions {
          padding: 0 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .course-btn {
          font-family: var(--font-open-sans), Arial, sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 0px;
          padding: 18px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.2s;
          text-decoration: none;
          margin: 0;
          letter-spacing: -1px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.13);
          border: 3px solid #cdff07;
          background: #000000;
          color: #cdff07;
          text-transform: uppercase;
          width: 100%;
          max-width: 350px;
          justify-content: flex-start;
        }

        .course-btn:hover {
          background: #cdff07;
          color: #000000;
          border: 3px solid #cdff07;
          text-decoration: none;
        }

        .course-btn svg {
          width: 26px;
          height: 26px;
          fill: #cdff07;
          transition: fill 0.2s;
          flex-shrink: 0;
        }

        .course-btn:hover svg {
          fill: #000000;
        }

        @media (max-width: 768px) {
          .thanks-container {
            padding: 15px;
          }

          .thanks-content {
            border-radius: 12px;
            max-width: 400px;
          }

          .thanks-header {
            padding: 15px 20px;
          }

          .logo {
            font-size: 1.5rem;
          }

          .thanks-message {
            padding: 30px 20px;
          }

          .thanks-message h1 {
            font-size: 2.5rem;
          }

          .thanks-message h2 {
            font-size: 1.2rem;
          }

          .thanks-icon svg {
            width: 80px;
            height: 80px;
          }

          .thanks-actions {
            padding: 0 20px 30px;
          }

          .course-btn {
            padding: 15px 20px;
            font-size: 0.9rem;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
} 