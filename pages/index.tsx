import React from 'react';
import { useTranslation } from '../i18n';

function IndexPage() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t('common:welcome')}</h1>
      <button
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
      >
        {t('common:change-language')}
      </button>
    </>
  );
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default IndexPage