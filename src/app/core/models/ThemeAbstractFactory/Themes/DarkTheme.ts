import { BackGroundDark } from "../components/Backgroung/BackGroundDark";
import { BackGroundTheme } from "../components/Backgroung/BackGroundTheme";
import { ButtonDark } from "../components/Button/ButtonDark";
import { ButtonTheme } from "../components/Button/ButtonTheme";
import { InputDark } from "../components/Input/InputDark";
import { InputTheme } from "../components/Input/InputTheme";
import { TextDark } from "../components/Text/TextDark";
import { TextTheme } from "../components/Text/TextTheme";
import { TitleDark } from "../components/Title/TitleDark";
import { TitleTheme } from "../components/Title/TitleTheme";
import { Theme } from "./Theme";

export class DarkTheme implements Theme {
  constructor() {}

  createButton(): ButtonTheme {
    return new ButtonDark();
  }

  createText(): TextTheme {
    return new TextDark();
  }

  createBackGround(): BackGroundTheme {
    return new BackGroundDark();
  }

  createInput(): InputTheme {
    return new InputDark();
  }

  createTitle(): TitleTheme {
    return new TitleDark();
  }
}