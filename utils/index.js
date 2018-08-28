export const colors = (percentage = 1) => ({
  black: `rgba(0, 0, 0, ${percentage})`,
  green: `rgba(104, 165, 28, ${percentage})`,
  red: `rgba(220, 56, 0, ${percentage})`,
  blue: `rgba(23, 122, 176, ${percentage})`,
  gray: `rgba(74, 74, 74, ${percentage})`,
  textGray: `#3D3D3D`,
  white: '#fff'
});

export const grays = (darkness = 1) => ([
  '#000',
  '#3D3D3D',
  '#666',
  '#767676',
  '#CCC',
  '#EEE'
][darkness]);
