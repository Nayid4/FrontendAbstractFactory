import { Injectable } from '@angular/core';
import { Theme } from '../models/Themes/Theme';
import { LightTheme } from '../models/Themes/LigthTheme';
import { DarkTheme } from '../models/Themes/DarkTheme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  listThemes: any = {
    'light': new LightTheme(),
    'dark': new DarkTheme()
  }

  constructor() { }

  ChangeTheme(theme: string): Theme {
    return this.listThemes[theme];
  }
}
