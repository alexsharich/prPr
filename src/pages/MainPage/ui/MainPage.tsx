/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('main page')}
            <RatingCard title="How is article ?" feedbackTitle="Your opinion" hasFeedback />
        </Page>
    );
};

export default MainPage;
