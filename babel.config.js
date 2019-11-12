module.exports = {
  presets: ['@babel/preset-typescript', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
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
