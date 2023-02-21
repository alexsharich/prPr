import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLERA_INVERTED = 'clearInverted',
  OUTLINE= 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
M='size-m',
L='size-l',
XL='size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?:ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, square, size = ButtonSize.M, ...otherProps
    } = props;

    const mods : Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };
    return (
        <button
            type="button"
            className={classNames(
                cls.button,
                mods,
                [className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
