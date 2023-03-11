import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template:
// eslint-disable-next-line react/jsx-props-no-spreading
ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    data: {
        first: 'storybookr first',
        lastname: 'storybookr lastname',
        age: 32,
        currency: Currency.EUR,
        country: Country.BELARUS,
        city: 'Minsk',
        username: 'storybookr username',
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
