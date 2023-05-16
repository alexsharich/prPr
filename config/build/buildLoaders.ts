import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options:BuildOptions):webpack.RuleSetRule[] {
    const { isDev } = options;
    /* const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }; */
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const cssLoaders = buildCssLoader(isDev);
    return [
        fileLoader,
        svgLoader,
        // typescriptLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoaders,
    ];
}
