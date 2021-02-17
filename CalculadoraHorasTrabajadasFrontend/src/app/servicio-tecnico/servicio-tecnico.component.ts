import { Component, OnInit } from '@angular/core';
import { ServicioTecnico } from './servicio-tecnico.model';
import { ServicioTecnicoService } from './servicio-tecnico.service';
import { ServicioService } from '../servicio/servicio.service';
import { Servicio } from '../servicio/servicio.model';
import { TecnicoService } from '../tecnico/tecnico.service';
import { Tecnico } from '../tecnico/tecnico.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio-tecnico',
  templateUrl: './servicio-tecnico.component.html',
  styleUrls: ['./servicio-tecnico.component.css']
})
export class ServicioTecnicoComponent implements OnInit {

  servicioTecnicos: ServicioTecnico[];
  servicios: Servicio[];
  tecnicos: Tecnico[];
  servicioTecnico: ServicioTecnico = new ServicioTecnico();
  servicioTecnicoForm: ServicioTecnico = new ServicioTecnico();
  showForm: Boolean;
  colSizeForm: String;

  fechaInicial: String;
  fechaFinal: String;

  constructor(private servicioTecnicoService: ServicioTecnicoService, 
    private servicioService: ServicioService,
    private tecnicoService: TecnicoService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showForm = false;
    this.getAll();
    this.loadServicios();
    this.loadTecnicos();
  }

  getAll() {
    this.servicioTecnicoService.getAll()
      .subscribe((response) => {
        this.servicioTecnicos = response.map(value => {
          value.fechaInicial = value.fechaInicial != null ? value.fechaInicial+(1000*60*60*5): null;
          value.fechaFinal = value.fechaFinal != null ? value.fechaFinal+(1000*60*60*5): null;
          return value;
        });
      });
  }
  
  loadTecnicos() {
    this.tecnicoService.getAll()
      .subscribe((response) => {
        this.tecnicos = response;
      });
  }
  loadServicios() {
    this.servicioService.getAll()
      .subscribe((response) => {
        this.servicios = response;
      });
  }

  selectServicioTecnico(servicioTecnicoSelected: ServicioTecnico) {
    servicioTecnicoSelected = Object.create(servicioTecnicoSelected) 
    this.fechaInicial = new Date(servicioTecnicoSelected.fechaInicial).toUTCString();
    this.fechaFinal = new Date(servicioTecnicoSelected.fechaFinal).toUTCString();
    servicioTecnicoSelected.fechaInicial = new Date(servicioTecnicoSelected.fechaInicial).toJSON().slice(0,-8);
    servicioTecnicoSelected.fechaFinal = new Date(servicioTecnicoSelected.fechaFinal).toJSON().slice(0,-8);

    servicioTecnicoSelected.tecnicoId = servicioTecnicoSelected.tecnico.id;
    servicioTecnicoSelected.servicioId = servicioTecnicoSelected.servicio.id;
    this.servicioTecnicoForm = servicioTecnicoSelected;
    this.servicioTecnico = servicioTecnicoSelected;
    this.showForm = true;
  }

  formNewServicioTecnico() {
    this.servicioTecnicoForm = new ServicioTecnico();
    this.servicioTecnico = new ServicioTecnico();
    console.log(this.servicioTecnico);
    this.showForm = true;
  }

  onSubmit(servicioTecnico: ServicioTecnico) {
    
    this.servicios.map(servicio => {
      if(this.servicioTecnico.servicioId==servicio.id) {
        servicioTecnico.servicio = servicio;
        return servicio;
      }
    });
    this.tecnicos.map(tecnico => {
      if(this.servicioTecnico.tecnicoId==tecnico.id) {
        servicioTecnico.tecnico = tecnico;
        return tecnico;
      }
    });
    servicioTecnico.estado = servicioTecnico.idEstado;
    this.servicioTecnicoService.add(servicioTecnico)
    .subscribe(result => {
      this.getAll();
      this.selectServicioTecnico(result);
      
      this.toastr.show('ServicioTecnico saved!', 'Success');
    });
  }
}
