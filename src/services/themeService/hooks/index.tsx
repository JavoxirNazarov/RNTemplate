import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ITheme } from '../interfaces';
import { themeContext } from '../themeProvider';

export const useTheme = () => useContext(themeContext);

export function useStyledTheme<T>(
  styles: (theme: ITheme) => StyleSheet.NamedStyles<T>,
) {
  const { theme } = useTheme();

  return styles(theme);
}
