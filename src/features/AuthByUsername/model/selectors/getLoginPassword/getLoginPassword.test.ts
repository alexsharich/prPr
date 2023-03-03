import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return 12345', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '12345',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12345');
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
