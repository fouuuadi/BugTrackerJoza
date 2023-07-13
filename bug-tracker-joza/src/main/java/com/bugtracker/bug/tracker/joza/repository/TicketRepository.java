package com.bugtracker.bug.tracker.joza.repository;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
