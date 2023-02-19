import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('button', () => {
    test('with only first class', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});
