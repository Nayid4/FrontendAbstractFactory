import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";

export const USER_ROUTES : Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];