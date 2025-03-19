import { useTranslation } from 'react-i18next';

export default function Autism() {
  const { t } = useTranslation();

  return (
    <div style={ textAlign: 'center', marginTop: '50px' }>
      <h1>{t('autism')}</h1>
      <p>{t('autismDesc')}</p>
      <h3>{t('comingSoon')}</h3>
    </div>
  );
}