import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t('welcome')}</h1>
      <h2>{t('dailyBoost')}</h2>
      <button onClick={toggleLanguage} style={{ marginTop: "20px", padding: "10px 20px" }}>
        {t('changeLanguage')}
      </button>
    </div>
  );
}
