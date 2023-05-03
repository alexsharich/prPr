import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>{t('О сайте')}</div>
        /* some text for test */
    );
};

export default AboutPage;
