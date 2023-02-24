import { BugButton } from 'app/providers/ErrorBoundary';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value:string) => {
        setValue(value);
    };

    return (
        <div>
            {t('main page')}
            <Input
                value={value}
                // eslint-disable-next-line i18next/no-literal-string
                placeholder="your text"
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
