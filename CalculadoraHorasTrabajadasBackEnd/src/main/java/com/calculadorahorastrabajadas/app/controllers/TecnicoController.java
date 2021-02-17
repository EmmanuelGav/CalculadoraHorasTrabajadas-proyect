package com.calculadorahorastrabajadas.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calculadorahorastrabajadas.app.models.Tecnico;
import com.calculadorahorastrabajadas.app.service.TecnicoService;

@RestController
@RequestMapping("tecnico")
public class TecnicoController {

	@Autowired
	private TecnicoService tecnicoService;
	
	@GetMapping("all")
	List<Tecnico> getAll() {		
		return tecnicoService.getAll();
	}
	
	@PostMapping("add")
	Tecnico add(@RequestBody Tecnico tecnico) {
		return tecnicoService.save(tecnico);
	}
}
