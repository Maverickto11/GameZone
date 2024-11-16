import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {      
        path: 'home', loadComponent: () => import('./contenido/contenido.component')
        .then(m => m.ContenidoComponent)

    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
