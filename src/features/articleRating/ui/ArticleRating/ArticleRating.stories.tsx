import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {},
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};
export const WithoutRating = Template.bind({});
WithoutRating.args = {
    articleId: '1',
};
WithoutRating.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRating.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
