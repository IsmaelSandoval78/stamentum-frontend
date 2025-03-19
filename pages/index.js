import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [verse, setVerse] = useState('');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  useEffect(() => {
    fetch('https://bible-api.com/john%203:16')
      .then(response => response.json())
      .then(data => {
        setVerse(data.text);
      })
      .catch(error => console.error('Error fetching verse:', error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t('welcome')}</h1>
      <h2>{t('dailyBoost')}</h2>
      <p>📖 {verse}</p>
      <button onClick={toggleLanguage} style={{ marginTop: "20px", padding: "10px 20px" }}>
        {t('changeLanguage')}
      </button>
    </div>
  );
}
