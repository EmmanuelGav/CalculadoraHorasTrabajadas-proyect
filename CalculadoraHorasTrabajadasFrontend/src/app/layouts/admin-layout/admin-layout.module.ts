import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ServicioComponent } from '../../servicio/servicio.component';
import { TecnicoComponent } from '../../tecnico/tecnico.component';
import { ServicioTecnicoComponent } from '../../servicio-tecnico/servicio-tecnico.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    ServicioComponent,
    TecnicoComponent,
    ServicioTecnicoComponent
  ]
})

export class AdminLayoutModule {}
