import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import {
    loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value:string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setUserPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('athorization Form')} />
            {error && <Text text={t('bad user name or password')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                placeholder={t('email')}
                type="text"
                className={cls.input}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                placeholder={t('password')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('logIn')}
            </Button>
        </div>
    );
});
