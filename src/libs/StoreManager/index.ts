import { MMKV, useMMKVString } from 'react-native-mmkv';

const StoreManager = {
  storage: new MMKV(),

  setValue(key: string, val: string) {
    this.storage.set(key, val);
  },

  getValue(key: string) {
    return this.storage.getString(key);
  },

  removeValue(key: string) {
    this.storage.delete(key);
  },
};

export { StoreManager, useMMKVString as useStringStoraManager };
