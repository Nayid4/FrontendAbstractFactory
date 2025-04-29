import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/user.routes').then(m => m.USER_ROUTES)
    }
];
