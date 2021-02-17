package com.calculadorahorastrabajadas.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calculadorahorastrabajadas.app.models.Servicio;
import com.calculadorahorastrabajadas.app.repositories.IServicioRepository;

@Service
public class ServicioService {

	@Autowired
	private IServicioRepository servicioRepository;
	
	public List<Servicio> getAll() {
		return servicioRepository.findAll();
	}
	
	public Servicio save(Servicio servicio) {
		return servicioRepository.save(servicio);
	}
}
