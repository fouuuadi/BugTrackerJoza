package com.bugtracker.bug.tracker.joza.repository;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("select t from Ticket t where t.id = :id")
    Ticket getTicketById(Long id);


    @Query("select t from Ticket t")
    List<Ticket> getAllTicket();
    @Modifying
    @Query("delete from Ticket t where t.id = :id ")
    Ticket deleteTicket(Long id);

    @Modifying
    @Query("update Ticket t set t.name = :name, t.author = :author, t.description = :description, t.priority = :priority where t.id = :id")
    Ticket updateTicket(Long id);


//est ce qu'on prepare et execute pas les @Query ???

    boolean existsByName(String name);

}
