import 'styled-components';
import { theme } from '@scouit/design-system';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
