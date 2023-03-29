import { typography } from '../constants/typography';

export interface ITheme {
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
  theme: ITheme;
  isDarkMode: boolean;
  setUserTheme: (val: string | undefined) => void;
}
