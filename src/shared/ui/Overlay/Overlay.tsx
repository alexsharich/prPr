import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    return <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />;
});
