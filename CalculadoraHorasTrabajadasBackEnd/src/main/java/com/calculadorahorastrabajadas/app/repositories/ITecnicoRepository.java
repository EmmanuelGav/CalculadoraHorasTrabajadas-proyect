package com.calculadorahorastrabajadas.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.calculadorahorastrabajadas.app.models.Tecnico;

@Repository
public interface ITecnicoRepository extends JpaRepository<Tecnico, Long>{

	List<Tecnico> findByNumeroDocumento(String numeroDocumento);
}
