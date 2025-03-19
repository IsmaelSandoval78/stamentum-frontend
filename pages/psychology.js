import { useTranslation } from 'react-i18next';

export default function Psychology() {
  const { t } = useTranslation();

  return (
    <div style={ textAlign: 'center', marginTop: '50px' }>
      <h1>{t('psychology')}</h1>
      <p>{t('psychologyDesc')}</p>
      <h3>{t('comingSoon')}</h3>
    </div>
  );
}