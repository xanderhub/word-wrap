export function wrapText(text: string, width: number): string {
    if (text.length < width)
        return text;

    let index: number = 0
    let result: string = '';

    while (index + width < text.length) {
        let line: string = text.substring(index, index + width);
        if (line.lastIndexOf(' ') == -1) {
            result = result + line + '\n';
            index += width;
            if (text.charAt(index) === ' ') {
                index++;
            }
        } else {
            result = result + line.substring(0, line.lastIndexOf(' ')) + '\n';
            index += line.lastIndexOf(' ');
            if (text.charAt(index) === ' ') {
                 index++;
            }
        }
    }

    return result + text.substring(index).trim();
}
