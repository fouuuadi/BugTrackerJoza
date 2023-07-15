package com.bugtracker.bug.tracker.joza.controller;


import com.bugtracker.bug.tracker.joza.domain.response.ApiResponse;
import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import com.bugtracker.bug.tracker.joza.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        Ticket ticket = this.ticketService.getTicketById(id);
        if (ticket == null) {
            ApiResponse response = new ApiResponse("Ticket not found", "", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } else {
            ApiResponse response = new ApiResponse("", "", ticket);
            return new ResponseEntity<>(response, HttpStatusCode.valueOf(200));
        }
    }
    @DeleteMapping("/{id}")
    public  ResponseEntity<ApiResponse<Ticket>> deleteTicket(@PathVariable Long id){
        Ticket ticket = this.ticketService.deleteTicket(id);
        if (ticket == null) {
            ApiResponse response = new ApiResponse("Ticket not found", "", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } else {
            ApiResponse response = new ApiResponse("", "", ticket);
            return new ResponseEntity<>(response, HttpStatusCode.valueOf(200));
        }
    }
    @PutMapping("/{id}")
    public  ResponseEntity<ApiResponse<Ticket>> updateTicket(@PathVariable Long id){
        Ticket ticket = this.ticketService.updateTicket(id);
        if (ticket == null) {
            ApiResponse response = new ApiResponse("Ticket not found", "", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } else {
            ApiResponse response = new ApiResponse("", "", ticket);
            return new ResponseEntity<>(response, HttpStatusCode.valueOf(200));
        }
    }
    @PostMapping("/")
    public ResponseEntity<ApiResponse<Ticket>> createTicket() {
        Ticket ticket = this.ticketService.createTicket(ticket);
        if (ticket == null) {
            ApiResponse response = new ApiResponse("Ticket not found", "", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } else {
            ApiResponse response = new ApiResponse("", "", ticket);
            return new ResponseEntity<>(response, HttpStatusCode.valueOf(200));
        }
    }
}
