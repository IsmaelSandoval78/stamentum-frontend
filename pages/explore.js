import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Explore() {
  const { t } = useTranslation();

  const categories = [
    { nameKey: 'motivation', icon: '💪', descriptionKey: 'motivationDesc' },
    { nameKey: 'faith', icon: '🙏', descriptionKey: 'faithDesc' },
    { nameKey: 'psychology', icon: '🧠', descriptionKey: 'psychologyDesc' },
    { nameKey: 'autism', icon: '🧩', descriptionKey: 'autismDesc' },
    { nameKey: 'adhd', icon: '⚡', descriptionKey: 'adhdDesc' },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>{t('exploreCategories')}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '20px',
              width: '180px',
              cursor: 'pointer',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h2>{cat.icon} {t(cat.nameKey)}</h2>
            <p>{t(cat.descriptionKey)}</p>
            <Link href="/">
              <a style={{ color: 'blue', textDecoration: 'underline' }}>{t('comingSoon')}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
