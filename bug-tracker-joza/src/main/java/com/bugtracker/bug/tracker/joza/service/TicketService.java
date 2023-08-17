package com.bugtracker.bug.tracker.joza.service;

import com.bugtracker.bug.tracker.joza.domain.response.ApiResponse;
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

    public ApiResponse<Ticket> getTicketById(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isEmpty()) {
            ApiResponse response = new ApiResponse("Ticket not found", "", null, 404);
            return response;
        } else {
            ApiResponse response = new ApiResponse("", "", optionalTicket.get(), 200);
            return response;
        }
    }

    public List<Ticket> getAllTicket() {
        List<Ticket> allTickets = ticketRepository.findAll();
        if (allTickets.isEmpty()) {
            System.out.println("Il n'y a aucun ticket.");
        }
        return allTickets;
    }

    public ApiResponse<Ticket> createTicket(Ticket ticket) {

        Ticket newTicket = null;

        if (ticket.getId() != null) { // on est dans le cas d'un update
            newTicket = ticketRepository.getTicketById(ticket.getId());
        }

        if (newTicket == null) { // on est dans le cas d'une création
            if (ticketRepository.existsByName(ticket.getName())) {
                return new ApiResponse<>("Ticket name already exists", "", null, 409);
            }
        }

        newTicket = ticketRepository.save(ticket);
        return new ApiResponse<>("", "", newTicket, 201);
    }


    //On voit si l'id existe ensuite on le supprime
    public ApiResponse<Ticket> deleteTicket(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isPresent()) {
            Ticket ticketToDelete = optionalTicket.get();
            ticketRepository.deleteById(id);
            return new ApiResponse("", "", ticketToDelete, 200);
        }
        return new ApiResponse("Ticket not found", "", null, 404);
    }
}
