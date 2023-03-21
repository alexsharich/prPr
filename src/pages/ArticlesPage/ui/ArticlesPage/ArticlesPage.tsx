import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <h1>{t('ARTICLE PAGE')}</h1>
        </div>
    );
};

export default memo(ArticlesPage);