import {wrapText} from "../src/word-wrap";

describe('word-wrap tests', () => {
    it('returns empty result on empty input', () => {
        const wrappedText = wrapText('', 30);
        expect(wrappedText).toBe('');
    });

    it('returns same result as input when its length is less than width', () => {
        const wrappedText = wrapText('abc', 5);
        expect(wrappedText).toBe('abc');
    });

    it('handles input without whitespaces', () => {
        const wrappedText = wrapText('abcde', 3);
        expect(wrappedText).toBe('abc\nde');
    });

    it('handles input with whitespaces', () => {
        const wrappedText = wrapText('ab cde f hijkl', 3);
        expect(wrappedText).toBe('ab\ncde\nf\nhij\nkl');
    });

    it('handles input with multiple whitespaces in line', () => {
        const wrappedText = wrapText('ab cd e f j h', 5);
        expect(wrappedText).toBe('ab cd\ne f j\nh');
    });
});
