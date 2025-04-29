import { BackGroundLight } from "../components/Backgroung/BackGroundLight";
import { BackGroundTheme } from "../components/Backgroung/BackGroundTheme";
import { ButtonLight } from "../components/Button/ButtonLight";
import { ButtonTheme } from "../components/Button/ButtonTheme";
import { InputLight } from "../components/Input/InputLight";
import { InputTheme } from "../components/Input/InputTheme";
import { TextTheme } from "../components/Text/TextTheme";
import { TitleLight } from "../components/Title/TitleLight";
import { TitleTheme } from "../components/Title/TitleTheme";
import { Theme } from "./Theme";

export class LightTheme implements Theme {
  constructor() {}

  createButton(): ButtonTheme {
    return new ButtonLight();
  }

  createText(): TextTheme {
    return new TitleLight();
  }

  createBackGround(): BackGroundTheme {
    return new BackGroundLight();
  }

  createInput(): InputTheme {
    return new InputLight();
  }

  createTitle(): TitleTheme {
    return new TitleLight();
  }
}