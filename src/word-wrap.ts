export function wrapText(text: string, width: number): string {
    if (text.length < width)
        return text;

    let index: number = 0
    let result: string = '';

    while (index + width < text.length) {
        let line: string = text.substring(index, index + width);
        if (line.lastIndexOf(' ') == -1) {
            result = result + line + '\n';
            index = moveIndex(text, index, width);
        } else {
            result = result + line.substring(0, line.lastIndexOf(' ')) + '\n';
            index = moveIndex(text, index, line.lastIndexOf(' '));
        }
    }

    return result + text.substring(index).trim();
}

function moveIndex(text: string, index: number, offset: number): number {
    index += offset;
    return text.charAt(index) === ' ' ? ++index : index
}

