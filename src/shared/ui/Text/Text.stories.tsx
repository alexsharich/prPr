/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template:
// eslint-disable-next-line react/jsx-props-no-spreading

ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: 'Lorem ipsum text for stories',
    title: 'Lorem ipsum title',
};
export const Error = Template.bind({});
Error.args = {
    text: 'Lorem ipsum text for stories',
    title: 'Lorem ipsum title',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum text for stories',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    text: 'Lorem ipsum text for stories',
    title: 'Lorem ipsum title',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Lorem ipsum title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum text for stories',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SizeM = Template.bind({});
SizeM.args = {
    text: 'Lorem ipsum text for stories',
    title: 'Lorem ipsum title',
    size: TextSize.M,
};
export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Lorem ipsum text for stories',
    title: 'Lorem ipsum title',
    size: TextSize.L,
};
