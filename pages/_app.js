import '../styles/globals.css';
import { useEffect } from 'react';
import '../i18n';  // Importa i18n para inicializarlo

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Esto asegura que i18n se cargue solo en cliente
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
