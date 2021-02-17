package com.calculadorahorastrabajadas.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calculadorahorastrabajadas.app.models.Tecnico;
import com.calculadorahorastrabajadas.app.repositories.ITecnicoRepository;

@Service
public class TecnicoService {

	@Autowired
	private ITecnicoRepository tecnicoRepository;
	
	public List<Tecnico> getAll() {
		return tecnicoRepository.findAll();
	}

	public Tecnico save(Tecnico tecnico) {
		return tecnicoRepository.save(tecnico);
	}

	public Tecnico findByNumeroDocumento( String numeroDocumento) {
		List<Tecnico> tecnicos = tecnicoRepository.findByNumeroDocumento(numeroDocumento);
		return tecnicos.isEmpty()? null:tecnicos.get(0);
	}
}
