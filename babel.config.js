module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts', 'js'],
        alias: {
          feauteres: './src/feauteres/',
          lobs: './src/lobs/',
          components: './src/components/',
        },
      },
    ],
  ],
};
