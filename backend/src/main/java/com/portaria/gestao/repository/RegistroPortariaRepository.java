package com.portaria.gestao.repository;

import com.portaria.gestao.model.Funcionario;
import com.portaria.gestao.model.RegistroPortaria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface RegistroPortariaRepository extends JpaRepository<RegistroPortaria, Long> {

    RegistroPortaria findFirstByFuncionarioAndHoraSaidaIsNullOrderByHoraEntradaDesc(Funcionario funcionario);

    List<RegistroPortaria> findByHoraEntradaBetween(LocalDateTime start, LocalDateTime end);
}