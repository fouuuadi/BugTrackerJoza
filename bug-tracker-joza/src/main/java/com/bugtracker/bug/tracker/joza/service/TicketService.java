package com.bugtracker.bug.tracker.joza.service;

import com.bugtracker.bug.tracker.joza.domain.response.ApiResponse;
import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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

        // Vérif de l'unicité du nom
        if (ticketRepository.existsByName(ticket.getName())) {
            return new ApiResponse<Ticket>("Ticket name already exists", "", null, 409);
        }
        Ticket newTicket = ticketRepository.save(ticket);
        return new ApiResponse<Ticket>("", "", newTicket, 201);
    }

    public ApiResponse<Ticket> updateTicket(Long id, Ticket toUpdate) {
        Ticket existingTicket = ticketRepository.findById(id).orElse(null);
        if (existingTicket != null) {

            existingTicket.setName(toUpdate.getName());
            existingTicket.setAuthor(toUpdate.getAuthor());
            existingTicket.setDescription(toUpdate.getName());
            existingTicket.setPriority(toUpdate.getPriority());

            return new ApiResponse<>("", "", ticketRepository.save(existingTicket), 200);
        }
        return new ApiResponse("Ticket not found", "", null, 404);
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
