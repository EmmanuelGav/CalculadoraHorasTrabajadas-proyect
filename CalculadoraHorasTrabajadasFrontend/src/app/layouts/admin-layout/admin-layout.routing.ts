import { Routes } from '@angular/router';

import { ServicioComponent } from '../../servicio/servicio.component';
import { ServicioTecnicoComponent } from '../../servicio-tecnico/servicio-tecnico.component';

import { TecnicoComponent } from '../../tecnico/tecnico.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'servicio-tecnico',   component: ServicioTecnicoComponent },
    { path: 'servicio',      component: ServicioComponent },
    { path: 'tecnico',   component: TecnicoComponent }
];
