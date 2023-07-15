package com.bugtracker.bug.tracker.joza.service;

import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {


    @Autowired
    public TicketRepository ticketRepository;

    public Ticket getTicketById(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isPresent()) {
            return optionalTicket.get();
        } else {
            System.out.println("Le ticket n'existe pas.");
            return null;
        }
    }

    public List<Ticket> getAllTicket() {
        List<Ticket> allTickets = ticketRepository.findAll();
        if(allTickets.isEmpty()) {
            System.out.println("Il n'y a aucun ticket.");
        }
        return allTickets;
    }

    public Ticket createTicket(Ticket ticket) {
        // Vérif de l'unicité de l'ID
        if (ticketRepository.existsById(ticket.getId())) {
            throw new IllegalArgumentException("Cet ID existe déjà.");
        }

        // Vérif de l'unicité du nom
        if (ticketRepository.existsByName(ticket.getName())) {
            throw new IllegalArgumentException("Un ticket avec ce nom existe déjà.");
        }

        return ticketRepository.save(ticket);
    }

    public Ticket updateTicket(Long id) {
        Ticket existingTicket = ticketRepository.findById(id).orElse(null);
        if (existingTicket != null) {
            Ticket updatedTicket = null;
            existingTicket.setName(updatedTicket.getName());
            existingTicket.setAuthor(updatedTicket.getAuthor());
            existingTicket.setDescription(updatedTicket.getName());
            existingTicket.setPriority(updatedTicket.getPriority());

            return ticketRepository.save(existingTicket);
        }
        return null;
    }
    //On voit si l'id existe ensuite on le supprime
    public Ticket deleteTicket(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isPresent()) {
            Ticket ticketToDelete = optionalTicket.get();
            ticketRepository.deleteById(id);
            return ticketToDelete;
        }
        return null;
    }
}
