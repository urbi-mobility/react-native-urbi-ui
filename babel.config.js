module.exports = {
  presets: ['@babel/typescript', '@babel/react'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
          '.ts',
          '.android.ts',
          '.ios.ts',
          '.android.d.ts',
          '.ios.d.ts',
          '.json',
        ],
        root: ['./src'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
};
