export const saveClipboard = (text: string) => {
    const copyText = text;
    navigator.clipboard.writeText (copyText)
}