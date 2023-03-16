import { lazy } from 'react';

export const ArticleDetailsAsync = lazy(
    () => new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import('./ArticleDetailsPage'));
        }, 1000);
    }),
);
