package com.bugtracker.bug.tracker.joza.controller;


import com.bugtracker.bug.tracker.joza.domain.response.ApiResponse;
import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//On commence par crée la class

@RestController
@RequestMapping("/tickets")
public class TicketController {


    @Autowired
    private TicketService ticketService;


    @GetMapping("/all")
    public ResponseEntity<List<Ticket>> readAllTickets() {
        return new ResponseEntity<>(this.ticketService.getAllTicket(), HttpStatusCode.valueOf(200));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Ticket>> readTicket(@PathVariable Long id) {
        ApiResponse<Ticket> response = this.ticketService.getTicketById(id);
        return new ResponseEntity<>(response, HttpStatusCode.valueOf(response.getStatusCode()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Ticket>> deleteTicket(@PathVariable Long id) {
        ApiResponse<Ticket> response = this.ticketService.deleteTicket(id);
        return new ResponseEntity<>(response, HttpStatusCode.valueOf(response.getStatusCode()));
    }


    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Ticket>> updateTicket(@PathVariable Long id, @RequestBody Ticket updateForm) {
        var response = this.ticketService.updateTicket(id, updateForm);
        return new ResponseEntity<>(response, HttpStatusCode.valueOf(response.getStatusCode()));
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse<Ticket>> createTicket( @RequestBody Ticket createForm) {
        var response = this.ticketService.createTicket(createForm);
        return new ResponseEntity<>(response, HttpStatusCode.valueOf(response.getStatusCode()));
    }
}
