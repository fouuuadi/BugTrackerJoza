package com.bugtracker.bug.tracker.joza.repository;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("select t from Ticket t where t.id = :id")
    Ticket getTicketById(Long id);


    @Query("select t from Ticket t")
    List<Ticket> getAllTicket();

}
