import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line alexandev444-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
