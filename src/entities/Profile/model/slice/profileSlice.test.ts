import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.BELARUS,
    lastname: 'Alexander',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice', () => {
    test('profileReducer setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
          state as ProfileSchema,
          profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('profileReducer cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { };
        expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('profileReducer setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(profileReducer(
    state as ProfileSchema,
    profileActions.updateProfile({
        username: '123',
    }),
        )).toEqual({
            form: {
                username: '123',
            },
        });
    });
    test('profileReducer extra service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
  state as ProfileSchema,
  updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('profileReducer extra service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
state as ProfileSchema,
updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
