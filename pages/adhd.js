import { useTranslation } from 'react-i18next';

export default function ADHD() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('adhd')}</h1>
      <p>{t('adhdDesc')}</p>
      <h3>{t('comingSoon')}</h3>
    </div>
  );
}
