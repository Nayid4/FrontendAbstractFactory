import { BackGroundTheme } from "../components/Backgroung/BackGroundTheme";
import { ButtonTheme } from "../components/Button/ButtonTheme";
import { InputTheme } from "../components/Input/InputTheme";
import { TextTheme } from "../components/Text/TextTheme";
import { TitleTheme } from "../components/Title/TitleTheme";

export interface Theme {
  createButton(): ButtonTheme,
  createText(): TextTheme,
  createBackGround(): BackGroundTheme,
  createInput(): InputTheme,
  createTitle(): TitleTheme
}