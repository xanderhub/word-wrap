export function wrapText(text: string, width: number): string | undefined {
    if (text.length < width)
        return text;
    return undefined;
}
