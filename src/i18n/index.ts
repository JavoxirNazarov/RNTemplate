import i18n, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import { StorageService } from 'src/services/storageService';
import en from './translations/en.json';
import fr from './translations/fr.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const locale = Platform.select<string>({
  android: NativeModules.I18nManager.localeIdentifier,
  ios:
    NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0],
});

const LanguageDetector = {
  type: 'languageDetector' as ModuleType,
  async: false,
  init: () => {},
  detect: function () {
    const language = StorageService.getString('user-language');
    if (language) {
      return language;
    }

    const localLanguage = locale!.substring(0, 2);

    StorageService.setValue('user-language', localLanguage);
    return localLanguage;
  },
  cacheUserLanguage: function (language: string) {
    StorageService.setValue('user-language', language);
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'en',
});

export default i18n;
