package com.calculadorahorastrabajadas.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.calculadorahorastrabajadas.app.models.ServicioTecnico;
import com.calculadorahorastrabajadas.app.models.Tecnico;

@Repository
public interface IServicioTecnicoRepository extends JpaRepository<ServicioTecnico, Long>{

	List<ServicioTecnico> findByTecnico(Tecnico tecnico);
}
