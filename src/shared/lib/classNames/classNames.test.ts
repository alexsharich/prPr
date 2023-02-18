import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with additional class and options', () => {
        const expected = 'someClass class1 class2 hovered scrolleble';
        expect(classNames(
            'someClass',
            { hovered: true, scrolleble: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with additional class and options without one', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrolleble: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with additional class and options with undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrolleble: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
