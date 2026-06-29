import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Locale, type Translation } from '../i18n';

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('locale');
      if (stored === 'pl' || stored === 'en') return stored;
    }
    return 'pl';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const t = useMemo(() => translations[locale], [locale]);

  const toggleLanguage = () => setLocale((prev) => (prev === 'pl' ? 'en' : 'pl'));

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
