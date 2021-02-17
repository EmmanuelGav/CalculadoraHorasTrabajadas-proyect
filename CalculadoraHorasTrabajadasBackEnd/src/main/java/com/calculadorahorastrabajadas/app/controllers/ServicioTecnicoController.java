package com.calculadorahorastrabajadas.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calculadorahorastrabajadas.app.controllers.exceptions.ControledException;
import com.calculadorahorastrabajadas.app.enums.Estados;
import com.calculadorahorastrabajadas.app.models.ServicioTecnico;
import com.calculadorahorastrabajadas.app.models.Tecnico;
import com.calculadorahorastrabajadas.app.service.ServicioTecnicoService;
import com.calculadorahorastrabajadas.app.service.TecnicoService;

@RestController
@RequestMapping("servicioTecnico")
public class ServicioTecnicoController {

	@Autowired
	private ServicioTecnicoService servicioTecnicoService;
	@Autowired
	private TecnicoService tecnicoService;
	
	@GetMapping("all")
	List<ServicioTecnico> getAll() {
		return servicioTecnicoService.getAll();
	}

	@PostMapping("add")
	ServicioTecnico add(@RequestBody ServicioTecnico servicioTecnico) {
		return servicioTecnicoService.save(servicioTecnico);
	}

	@GetMapping("byTecnicoDocument/{tecnicoDocument}")
	List<ServicioTecnico> getByTecnico(@PathVariable("tecnicoDocument") String numeroDocumento) throws ControledException {
		Tecnico tecnico = tecnicoService.findByNumeroDocumento(numeroDocumento);
		if(tecnico == null)
			throw new ControledException("The tecnico has not registered.");
		
		return servicioTecnicoService.getByTecnico(tecnico);
	}
}
