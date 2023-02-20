import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitchers';
import cls from './Sidebar.module.scss';
import AboutIcon from '../../../../shared/assets/icons/about.svg';
import MainIcon from '../../../../shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('to-main')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('to-about')}</span>
                    </AppLink>
                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
