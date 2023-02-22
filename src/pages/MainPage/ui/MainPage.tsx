import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('main page')}
            <Counter />
        </div>
    );
};

export default MainPage;
