package com.calculadorahorastrabajadas.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.calculadorahorastrabajadas.app.models.ServicioTecnico;
import com.calculadorahorastrabajadas.app.models.Tecnico;
import com.calculadorahorastrabajadas.app.repositories.IServicioTecnicoRepository;

@Service
public class ServicioTecnicoService {

	@Autowired
	private IServicioTecnicoRepository servicioTecnicoRepository;
	
	public List<ServicioTecnico> getAll() {
		List<ServicioTecnico> servicioTecnicos = servicioTecnicoRepository.findAll(Sort.by(Sort.Direction.DESC, "fechaFinal"));
		for (ServicioTecnico servicioTecnico : servicioTecnicos) {
			servicioTecnico.setIdEstado(servicioTecnico.getEstado().getCode());
		}
		return servicioTecnicos;
	}
	
	public ServicioTecnico save(ServicioTecnico servicioTecnico) {
		return servicioTecnicoRepository.save(servicioTecnico);
	}

	public List<ServicioTecnico> getByTecnico(Tecnico tecnico) {
		return servicioTecnicoRepository.findByTecnico(tecnico);

	}
}
