import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './settings';

// The site is English-only.
export default getRequestConfig(async () => ({
    locale: defaultLocale,
    messages: (await import('../../messages/en.json')).default,
    timeZone: 'Asia/Kolkata'
}));
