module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@src': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@color': './src/constants/color.ts',
            '@constants': './src/constants',
            '@utils': './src/utils',
            '@navigator': './src/navigator',
          },
        },
      ],
    ],
  }
}
