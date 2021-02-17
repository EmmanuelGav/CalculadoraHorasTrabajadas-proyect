package com.calculadorahorastrabajadas.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.calculadorahorastrabajadas.app.models.Servicio;

@Repository
public interface IServicioRepository extends JpaRepository<Servicio, Long>{

}
