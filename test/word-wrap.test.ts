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
});
