import { ThemeAbstractFactoryInterface } from "./ThemeAbstractFactory.interface";
import { DarkTheme } from "./Themes/DarkTheme";
import { LightTheme } from "./Themes/LigthTheme";
import { Theme } from "./Themes/Theme";

export class ThemeAbstractFactory implements ThemeAbstractFactoryInterface {
    listThemes: {[key: string]: Theme} = {
        'light': new LightTheme(),
        'dark': new DarkTheme()
      }
      
    createTheme(theme: string): Theme {
        return this.listThemes[theme];
    }

}
