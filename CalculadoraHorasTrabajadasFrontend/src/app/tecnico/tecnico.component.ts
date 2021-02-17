import { Component, OnInit } from '@angular/core';
import { TecnicoService } from './tecnico.service';
import { Tecnico } from './tecnico.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

  tecnicos: Tecnico[];
  tecnico: Tecnico = new Tecnico();
  tecnicoForm: Tecnico = new Tecnico();
  showForm: Boolean;
  colSizeForm: String;
  constructor(private tecnicoService: TecnicoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showForm = false;
    this.getAll();
  }

  getAll() {
    this.tecnicoService.getAll()
      .subscribe((response) => {
        this.tecnicos = response;
      });
  }

  selectTecnico(tecnicoSelected: Tecnico) {
    this.tecnicoForm = Object.create(tecnicoSelected);
    this.tecnico = Object.create(tecnicoSelected);
    this.showForm = true;
  }

  formNewTecnico() {
    this.tecnicoForm = new Tecnico();
    this.tecnico = new Tecnico();
    this.showForm = true;
  }

  onSubmit(tecnico: Tecnico) {
    this.tecnicoService.add(tecnico)
      .subscribe(result => {
        this.getAll();
        this.tecnico = Object.create(result);
        this.toastr.show('Tecnico saved!', 'Success');
      });
  }
}
