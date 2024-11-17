import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'login',
        component: LoginComponent
        
    },
    {
        path: 'cliente',
        component: ClienteComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
