import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR,
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
};

export const Backgroundinverted = Template.bind({});
Backgroundinverted.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};
export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};
export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
