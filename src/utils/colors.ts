export const colors = {
  brand: '#ec008b',
  primary: '#467189',
  secondary: '#2e5263',
  tertiary: '#ae016d',
  success: '#0cc700',
  error: '#f42c4f',
  uma: '#152934',
  uto: '#5a6872',
  ughina: '#98a6b1',
  ursula: '#c5ced3',
  ukko: '#f7f8fa',
  ulisse: '#ffffff',
  zeroAlphaUlisse: 'rgba(255, 255, 255, 0)',

  transparent: 'transparent',
  shadowBorder: 'rgba(0, 0, 0, 0.1)',

  activeRadar: 'rgba(90, 104, 114, 0.19)',

  bus: '#f59d48',
  ferry: '#1dade6',
  train: '#223daa',
  tram: '#00a388',
  subway: '#980056',
};

/**
 * Replaces colors in the design system with the argument ones.
 * Must be called at the very top of your index.js (or equivalent)
 * @param overrides the colors that you want to override
 */
export const overrideColors = (overrides: Partial<typeof colors>) => {
  Object.entries(overrides).forEach(([k, v]) => {
    colors[k] = v;
  });
};

export const hexToRgba = (hex: string, alpha: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${[r, g, b, alpha].join(',')})`;
};

export const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.replace('#', ''), 16);
  // tslint:disable:no-bitwise
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  // tslint:enable:no-bitwise
  return { r, g, b };
};

// see https://24ways.org/2010/calculating-color-contrast
export const isLight = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  return (r * 299 + g * 587 + b * 114) / 1000 >= 180;
};
