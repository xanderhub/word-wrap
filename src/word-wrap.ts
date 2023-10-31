export function wrapText(text: string, width: number): string {
    if (text.length < width)
        return text;

    let index: number = 0
    let result: string = '';

    while (index + width < text.length) {
        let line: string = text.substring(index, index + width);
        result = result + line + '\n';
        index += width;
    }

    return result + text.substring(index);
}
