import { StyleSheet } from 'react-native/types';
import { ITheme } from '../interfaces';

export const createThemedStyles = (theme: ITheme) => {
  return StyleSheet.create({
    text: { color: theme.colors.BACKGROUND },
  });
};
