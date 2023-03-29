import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ITheme } from 'services/themeService/interfaces';
import { useStyledTheme, useTheme } from 'services/themeService/hooks';

export default function RootScreen() {
  const style = useStyledTheme(styles);
  const { t, i18n } = useTranslation();
  const { setUserTheme } = useTheme();

  return (
    <Text
      onPress={() => {
        setUserTheme('light');
        i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
      }}
      style={style.text}>
      {t('welcome')}
    </Text>
  );
}

const styles = (theme: ITheme) => {
  return StyleSheet.create({
    text: { color: theme.colors.BACKGROUND },
  });
};
