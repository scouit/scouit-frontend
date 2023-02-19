import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

type MediaQueryProps = {
  media360: number;
  media720: number;
  media1024: number;
  media1512: number;
};

const sizes: MediaQueryProps = {
  media360: 360,
  media720: 720,
  media1024: 1024,
  media1512: 1512,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (style: String) =>
    `@media (max-width: ${sizes[label] / 16}rem) { ${style} }`;
  return acc;
}, {} as { [index in keyof MediaQueryProps]: ThemedCssFunction<DefaultTheme> });
