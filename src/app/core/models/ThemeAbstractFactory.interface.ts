import { Theme } from "./Themes/Theme";

export interface ThemeAbstractFactoryInterface {
  createTheme(theme: string): Theme;
}