package com.bugtracker.bug.tracker.joza.service;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketService
{
    @Autowired
    public TicketRepository ticketRepository;

    public Ticket getTicketById(Long id)
    {
        return ticketRepository.getTicketById(id);
    }

    public List<Ticket> getAllTicket(Long id)
    {
        return ticketRepository.getAllTicket(id);

    }

    public Ticket createTicket(TicketService ticketService)
    {
        return ticketRepository.save(ticketService);
    }

    private Ticket save(TicketService ticketRepository) {
        return null;
    }

    public Ticket updateTicket(Long id, TicketService updatedticketServiceRepository)
    {
        TicketService existingTicket = ticketRepository.findById(id).orElse(null);
        if (existingTicket != null)
        {
            existingTicket.setName(updatedticketServiceRepository.getName());
            existingTicket.setAuthor(updatedticketServiceRepository.getAuthor());
            existingTicket.setDescription(updatedticketServiceRepository.getDame());
            existingTicket.setPriority(updatedticketServiceRepository.getPriority());

            return ticketRepository.save(existingTicket);
        }
        return null;
    }

    public Ticket deleteTicket(Long id)
    {
        return ticketRepository.deleteById(id);
    }
}
