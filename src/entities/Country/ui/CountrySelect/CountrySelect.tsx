import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.JAPAN, content: Country.JAPAN },
    { value: Country.POLAND, content: Country.POLAND },
];

export const CountrySelect = memo(
    ({
        className, value, onChange, readonly,
    }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                onChange={onChangeHandler}
                value={value}
                defaultValue={t('Укажите страну')}
                label={t('Укажите страну')}
                items={options}
                readonly={readonly}
                direction="top right"
            />
        );
    },
);
