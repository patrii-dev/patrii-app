import "styled-components/native";

import theme from "./theme";

declare module "styled-components/native" {
  type themeType = typeof theme;

  export interface DefaultTheme extends themeType {}
}
