import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template:
// eslint-disable-next-line react/jsx-props-no-spreading
ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    loginForm: { username: 'someLogin', password: 'somePassword' },
})];
export const WithError = Template.bind({});
WithError.args = {
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: 'someLogin', password: 'somePassword', error: 'SOME ERROR' },
})];
export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
