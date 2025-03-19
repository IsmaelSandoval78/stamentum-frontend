import { useTranslation } from 'react-i18next';

export default function Motivation() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('motivation')}</h1>
      <p>{t('motivationDesc')}</p>
      <h3>{t('comingSoon')}</h3>
    </div>
  );
}
