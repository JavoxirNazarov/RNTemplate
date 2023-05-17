import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from 'feauteres/theme/interfaces';
import { useStyledTheme, useTheme } from 'feauteres/theme/hooks';

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

const styles = (theme: Theme) => {
  return StyleSheet.create({
    text: { color: theme.colors.BACKGROUND },
  });
};
