import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio.model';
import { ServicioService } from './servicio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicios: Servicio[];
  servicio: Servicio = new Servicio();
  servicioForm: Servicio = new Servicio();
  showForm: Boolean;
  colSizeForm: String;
  constructor(private servicioService: ServicioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showForm = false;
    this.getAll();
  }

  getAll() {
    this.servicioService.getAll()
      .subscribe((response) => {
        this.servicios = response;
      });
  }

  selectServicio(servicioSelected: Servicio) {
    this.servicioForm = Object.create(servicioSelected);
    this.servicio = Object.create(servicioSelected);
    this.showForm = true;
  }

  formNewServicio() {
    this.servicioForm = new Servicio();
    this.servicio = new Servicio();
    this.showForm = true;
  }

  onSubmit(servicio: Servicio) {
    this.servicioService.add(servicio)
    .subscribe(result => {
      this.getAll();
      this.servicio = Object.create(result);
      this.toastr.show('Servicio saved!', 'Success');
    });
  }
}
