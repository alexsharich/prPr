/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template:
// eslint-disable-next-line react/jsx-props-no-spreading

ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'storybookr first',
            lastname: 'storybookr lastname',
            age: 32,
            currency: Currency.EUR,
            country: Country.BELARUS,
            city: 'Minsk',
            username: 'storybookr username',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'storybookr first',
            lastname: 'storybookr lastname',
            age: 32,
            currency: Currency.EUR,
            country: Country.BELARUS,
            city: 'Minsk',
            username: 'storybookr username',
        },
    },
})];
