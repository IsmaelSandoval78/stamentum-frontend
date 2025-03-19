import { useTranslation } from 'react-i18next';

export default function Faith() {
  const { t } = useTranslation();

  return (
    <div style={ textAlign: 'center', marginTop: '50px' }>
      <h1>{t('faith')}</h1>
      <p>{t('faithDesc')}</p>
      <h3>{t('comingSoon')}</h3>
    </div>
  );
}