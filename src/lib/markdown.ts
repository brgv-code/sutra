import { marked } from 'marked';

let DOMPurify: any;

if (typeof window !== 'undefined') {
    DOMPurify = require('dompurify').default;
}

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
    const html = marked(markdown);
    const sanitizedHtml = DOMPurify ? DOMPurify.sanitize(html) : html;
    return sanitizedHtml;   
}