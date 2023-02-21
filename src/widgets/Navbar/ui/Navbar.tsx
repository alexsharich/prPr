/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLERA_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('entry')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Consequatur, consectetur neque voluptas
                temporibus ipsa vero placeat quaerat omnis dolores
                repellendus!
            </Modal>
        </div>
    );
};
