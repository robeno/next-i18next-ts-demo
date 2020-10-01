import React from 'react';
import { useTranslation } from '../i18n';

function LoginPage() {

  const { t } = useTranslation();

  return (
    <>
      <h1>{t('auth:title')}</h1>
      <form>
        <input placeholder={t('auth:placeholder.email')} type="email" />
        <input type="password" />
        <button>{t('auth:button.login')}</button>
      </form>
    </>
  );

}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['auth'],
});

export default LoginPage