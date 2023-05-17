import { typography } from '../constants/typography';

export interface Theme {
  typography: typeof typography;
  colors: {
    PRIMARY: string;
    SUCCESS: string;
    ERROR: string;
    BACKGROUND: string;
    TEXT: string;
    TEXT_SECONDARY: string;
  };
}

export interface ThemeContext {
  theme: Theme;
  isDarkMode: boolean;
  setUserTheme: (val: string | undefined) => void;
}
