import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import BibleApiSearch from '../components/BibleApiSearch';

export default function Explore() {
  const { t } = useTranslation();

  const categories = [
    { nameKey: 'motivation', icon: '💪', descriptionKey: 'motivationDesc', link: '/motivation' },
    { nameKey: 'faith', icon: '🙏', descriptionKey: 'faithDesc', link: '/faith' },
    { nameKey: 'psychology', icon: '🧠', descriptionKey: 'psychologyDesc', link: '/psychology' },
    { nameKey: 'autism', icon: '🧩', descriptionKey: 'autismDesc', link: '/autism' },
    { nameKey: 'adhd', icon: '⚡', descriptionKey: 'adhdDesc', link: '/adhd' },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>{t('exploreCategories')}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
        {categories.map((cat, index) => (
          <Link href={cat.link} key={index}>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  padding: '20px',
                  width: '180px',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <h2>{cat.icon} {t(cat.nameKey)}</h2>
                <p>{t(cat.descriptionKey)}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <h2>{t('exploreBibleSearch') || 'Busca un versículo o capítulo'}</h2>
        <BibleApiSearch />
      </div>
    </div>
  );
}
