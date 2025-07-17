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
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="thanks-container">
        <div className="thanks-content">
          <div className="thanks-header">
            <div className="logo">LabnoLab.</div>
          </div>
          
          <div className="thanks-message">
            <h1>¡Gracias!</h1>
            <div className="thanks-icon">
              <img src="/web-images/Smile LnL.png" alt="Smile LabnoLab" />
            </div>
            <h2>Aquí puedes consultar el dossier</h2>
          </div>

          <div className="thanks-actions">
            <a href="https://www.canva.com/design/DAGkUx9SHiw/_ArJAngHQjixmadWG5J8Cg/view?utm_content=DAGkUx9SHiw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he7303be4bb" target="_blank" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ver dossier
            </a>
            <button className="btn-secondary" onClick={handleGoHome}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Volver a la Home
            </button>
            <a href="https://wa.me/34615877069" target="_blank" className="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382C17.367 14.382 17.261 14.411 17.178 14.470C16.998 14.587 16.847 14.734 16.734 14.905C16.608 15.094 16.537 15.312 16.537 15.537C16.537 15.762 16.608 15.980 16.734 16.169C16.847 16.340 16.998 16.487 17.178 16.604C17.261 16.663 17.367 16.692 17.472 16.692C17.577 16.692 17.683 16.663 17.766 16.604C17.946 16.487 18.097 16.340 18.210 16.169C18.336 15.980 18.407 15.762 18.407 15.537C18.407 15.312 18.336 15.094 18.210 14.905C18.097 14.734 17.946 14.587 17.766 14.470C17.683 14.411 17.577 14.382 17.472 14.382Z" fill="currentColor"/>
                <path d="M12 2C6.48 2 2 6.48 2 12C2 13.89 2.525 15.66 3.438 17.168L2.546 20.2C2.49 20.374 2.49 20.559 2.546 20.733C2.602 20.907 2.711 21.059 2.857 21.169C2.952 21.24 3.063 21.282 3.177 21.291C3.291 21.3 3.405 21.276 3.508 21.223L6.832 19.562C8.34 20.475 10.11 21 12 21C17.52 21 22 16.52 22 12C22 6.48 17.52 2 12 2ZM12 19C10.33 19 8.77 18.5 7.45 17.6L7.12 17.4L4.55 18.55L5.7 16.12L5.5 15.79C4.6 14.47 4.1 12.91 4.1 11.24C4.1 7.69 6.89 4.9 10.44 4.9C12.13 4.9 13.71 5.56 14.93 6.78C16.15 8 16.81 9.58 16.81 11.27C16.81 14.82 14.02 17.61 10.47 17.61C9.85 17.61 9.25 17.5 8.68 17.29L8.4 17.17L6.25 17.95L7.03 15.8L6.91 15.52C6.7 14.95 6.59 14.35 6.59 13.73C6.59 11.24 8.58 9.25 11.07 9.25C12.27 9.25 13.4 9.72 14.24 10.56C15.08 11.4 15.55 12.53 15.55 13.73C15.55 16.22 13.56 18.21 11.07 18.21Z" fill="currentColor"/>
              </svg>
              Contáctanos por WhatsApp
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
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .thanks-content {
          background: #000000;
          border-radius: 16px;
          padding: 0;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid #111;
          overflow: hidden;
        }

        .thanks-header {
          background: #000000;
          padding: 20px 30px;
          text-align: center;
        }

        .logo {
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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

        .thanks-icon img {
          width: 100px;
          height: 100px;
          object-fit: contain;
        }

        .thanks-message h2 {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #D5FF00;
          margin: 20px 0 15px 0;
          letter-spacing: -1px;
        }

        .thanks-message p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .thanks-message a {
          color: #111;
          text-decoration: underline;
          font-weight: 600;
        }

        .thanks-message a:hover {
          color: #D5FF00;
          background: #111;
          padding: 2px 6px;
          border-radius: 4px;
          text-decoration: none;
        }

        .thanks-actions {
          padding: 0 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .btn-primary, .btn-secondary, .btn-whatsapp {
          padding: 18px 30px;
          border-radius: 0;
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          transition: all 0.3s ease;
          border: 3px solid transparent;
          cursor: pointer;
          letter-spacing: -0.5px;
          width: 100%;
          max-width: 350px;
          text-transform: uppercase;
        }

        .btn-primary {
          background: #D5FF00;
          color: #111;
          border-color: transparent;
        }

        .btn-primary:hover {
          background: #D5FF00;
          color: #111;
          border-color: transparent;
        }

        .btn-secondary {
          background: #111;
          color: #D5FF00;
          border-color: #D5FF00;
        }

        .btn-secondary:hover {
          background: #111;
          color: #D5FF00;
          border-color: #D5FF00;
        }

        .btn-whatsapp {
          background: #111;
          color: #D5FF00;
          border-color: #D5FF00;
        }

        .btn-whatsapp:hover {
          background: #111;
          color: #D5FF00;
          border-color: #D5FF00;
        }

        .btn-primary svg, .btn-secondary svg, .btn-whatsapp svg {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
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

          .thanks-icon img {
            width: 80px;
            height: 80px;
          }

          .thanks-actions {
            padding: 0 20px 30px;
          }

          .btn-primary, .btn-secondary, .btn-whatsapp {
            padding: 15px 20px;
            font-size: 0.9rem;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
} 