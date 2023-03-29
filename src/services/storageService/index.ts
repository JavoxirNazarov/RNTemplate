import { MMKV } from 'react-native-mmkv';

export const StorageService = {
  storage: new MMKV(),

  setValue(key: string, val: string | number | boolean) {
    this.storage.set(key, val);
  },

  getString(key: string) {
    return this.storage.getString(key);
  },

  removeValue(key: string) {
    this.storage.delete(key);
  },
};
