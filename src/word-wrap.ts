export function wrapText(text: string, width: number): string {
    if (text.length < width)
        return text;

    let index: number = 0
    let result: string = '';

    while (index + width < text.length) {
        let line: string = text.substring(index, index + width + 1);
        let indexOfWhitespace: number = line.lastIndexOf(' ');
        if (indexOfWhitespace == -1) {
            result = result + line.slice(0,-1) + '\n';
            index += width;
        } else {
            result = result + line.substring(0, indexOfWhitespace) + '\n';
            index += indexOfWhitespace + 1;
        }
    }

    return result + text.substring(index);
}

