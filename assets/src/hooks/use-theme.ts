
import { useCookie } from './use-cookie';

export const useTheme = () => {
  const { cookieValue: theme, updateCookie: setTheme } = useCookie({
    key: 'theme',
    defaultValue: '',
    days: 365
  });

  return {
    theme,
    setTheme: (newTheme: 'light' | 'dark') => setTheme(newTheme)
  };
};
