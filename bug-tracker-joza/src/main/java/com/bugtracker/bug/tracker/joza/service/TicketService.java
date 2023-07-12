package com.bugtracker.bug.tracker.joza.service;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketService
{
    public final TicketService ticketServiceRepository;
    @Autowired
    public TicketService(TicketService ticketServiceRepository) {
        this.ticketServiceRepository = ticketServiceRepository;
    }

    public Ticket getTicketById(Long id)
    {
        return ticketServiceRepository.getTicketById(id);
    }

    public List<Ticket> getAllTicket(Long id)
    {
        return ticketServiceRepository.getAllTicket(id);

    }

    public Ticket createTicket(TicketService ticketService)
    {
        return ticketServiceRepository.save(ticketService);
    }

    private Ticket save(TicketService ticketServiceRepository) {
        return null;
    }

    public Ticket updateTicket(Long id, TicketService updatedticketServiceRepository)
    {
        TicketService existingTicket = ticketServiceRepository.findById(id).orElse(null);
        if (existingTicket != null)
        {
            existingTicket.setName(updatedticketServiceRepository.getName());
            existingTicket.setAuthor(updatedticketServiceRepository.getAuthor());
            existingTicket.setDescription(updatedticketServiceRepository.getDame());
            existingTicket.setPriority(updatedticketServiceRepository.getPriority());

            return ticketServiceRepository.save(existingTicket);
        }
        return null;
    }

    public Ticket deleteTicket(Long id)
    {
        return ticketServiceRepository.deleteById(id);
    }
}
