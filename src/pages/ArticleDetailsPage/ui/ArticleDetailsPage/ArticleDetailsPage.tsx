import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            <h1>{t('ARTICLE PAGE')}</h1>
        </div>
    );
};

export default memo(ArticleDetailsPage);
