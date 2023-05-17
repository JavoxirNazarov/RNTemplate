import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '../interfaces';
import { themeContext } from '..';

export const useTheme = () => useContext(themeContext);

export function useStyledTheme<T>(
  styles: (theme: Theme) => StyleSheet.NamedStyles<T>,
) {
  const { theme } = useTheme();

  return styles(theme);
}
