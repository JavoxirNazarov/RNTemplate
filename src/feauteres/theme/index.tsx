import React, { createContext, ReactNode, useMemo } from 'react';
import { colors } from './constants/colors';
import { ThemeContext } from './interfaces';
import { typography } from './constants/typography';
import { useColorScheme } from 'react-native';
import { useStringStoraManager } from 'libs/StoreManager';

export const themeContext = createContext<ThemeContext>({
  theme: { colors: colors.light, typography },
  isDarkMode: false,
  setUserTheme: () => {},
} as ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [userTheme, setUserTheme] = useStringStoraManager('user-theme');
  const devieTheme = useColorScheme();

  const currentTheme = userTheme ?? devieTheme;
  const isDarkMode = currentTheme === 'dark';

  const theme = useMemo(
    () => ({
      colors: isDarkMode ? colors.dark : colors.light,
      typography,
    }),
    [isDarkMode],
  );

  return (
    <themeContext.Provider value={{ theme, isDarkMode, setUserTheme }}>
      {children}
    </themeContext.Provider>
  );
};
