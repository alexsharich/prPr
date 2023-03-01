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
  disabled?:boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, square, disabled, size = ButtonSize.M, ...otherProps
    } = props;

    const mods : Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={classNames(
                cls.button,
                mods,
                [className],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
