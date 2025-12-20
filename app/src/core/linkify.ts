import { COMPANY_LINKS } from './constants';

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&');
}

export function linkify(text: string): string {
    if (!text) return '';

    // Escape input first to avoid injecting unsafe HTML
    let result = escapeHtml(text);

    for (const [company, url] of Object.entries(COMPANY_LINKS)) {
        const pattern = new RegExp("\\b" + escapeRegExp(company) + "\\b", 'g');
        const anchor = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="hover:text-secondary-v text-accent-v transition-colors duration-200">${company}</a>`;
        result = result.replace(pattern, anchor);
    }

    return result;
}

export default linkify;
