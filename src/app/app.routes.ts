import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TareasComponentComponent } from './tareas-component/tareas-component.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponentComponent
    },
    {
        path:'tareas',
        component: TareasComponentComponent
    }
];
