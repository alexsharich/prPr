import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import {
    renderWithTranslation,
} from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
    test('render sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
