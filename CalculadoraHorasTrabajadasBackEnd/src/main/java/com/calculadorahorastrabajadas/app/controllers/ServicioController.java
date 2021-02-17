package com.calculadorahorastrabajadas.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calculadorahorastrabajadas.app.models.Servicio;
import com.calculadorahorastrabajadas.app.service.ServicioService;

@RestController
@RequestMapping("servicio")
public class ServicioController {

	@Autowired
	private ServicioService servicioService;
	
	@GetMapping("all")
	List<Servicio> getAll() {		
		return servicioService.getAll();
	}
	
	
	@PostMapping("add")
	Servicio add(@RequestBody Servicio servicio) {
		return servicioService.save(servicio);
	}
}
