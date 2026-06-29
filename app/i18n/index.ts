export type { Translation } from './types';
export { pl } from './pl';
export { en } from './en';

import { pl } from './pl';
import { en } from './en';

export const translations = { pl, en } as const;
export type Locale = keyof typeof translations;
