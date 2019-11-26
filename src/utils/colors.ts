export const urbiPink = '#ec008b';
export const urbiGrayPink = '#e090be';
export const buttonGray = 'rgba(0, 0, 0, 0.6)';
export const lightGray = 'rgba(0, 0, 0, 0.4)';
export const brandSemitransparent = 'rgba(236, 0, 139, 0.5)';
export const successSemitransparent = 'rgba(12, 199, 0, 0.6)';

export const colors = {
  brand: '#ec008b',
  primary: '#467189',
  secondary: '#2e5263',
  tertiary: '#ae016d',
  success: '#0cc700',
  error: '#f42c4f',
  uma: '#152934',
  uto: '#5a6872',
  ughina: '#8897a2',
  ursula: '#c5ced3',
  ukko: '#f7f8fa',
  ulisse: '#ffffff',

  zeroAlphaUlisse: 'rgba(255, 255, 255, 0)',
  transparent: 'transparent',
  shadowBorder: 'rgba(0, 0, 0, 0.1)',
};

export const hexToRgba = (hex: string, alpha: number) => {
  const bigint = parseInt(hex.replace('#', ''), 16);
  // tslint:disable:no-bitwise
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  // tslint:enable:no-bitwise
  return `rgba(${[r, g, b, alpha].join(',')})`;
};
