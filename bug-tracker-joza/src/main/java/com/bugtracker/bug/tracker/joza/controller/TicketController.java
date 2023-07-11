package com.bugtracker.bug.tracker.joza.controller;


import com.bugtracker.bug.tracker.joza.domain.ticket.Ticket;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//On commence par crée la class

@RestController
@RequestMapping("/tickets")
public class TicketController {


    List<Ticket> result = List.of(
            new Ticket(1L, "qdsfqs", "AHTOR", "la description du ticket", "HIGH"),
            new Ticket(2L, "qdsfqs", "AHTOR", "la description du ticket", "HIGH"),
            new Ticket(3L, "qdsfqs", "AHTOR", "la description du ticket", "HIGH"),
            new Ticket(4L, "qdsfqs", "AHTOR", "la description du ticket", "HIGH")

    );


    @GetMapping("/all")
    public ResponseEntity<List<Ticket>> readAllTickets() {

        return new ResponseEntity<>(result, HttpStatusCode.valueOf(201));
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Ticket>> readTicket(@PathVariable Long id) {

        return new ResponseEntity<>(result, HttpStatusCode.valueOf(201));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Ticket>> deleteTicket(@PathVariable Long id) {

        return new ResponseEntity<>(result, HttpStatusCode.valueOf(201));
    }

    @PutMapping("/{id}")
    public ResponseEntity<List<Ticket>> updateTicket(@PathVariable Long id) {

        return new ResponseEntity<>(result, HttpStatusCode.valueOf(201));
    }
    @PostMapping("/")
    public ResponseEntity<List<Ticket>> createTicket() {

        return new ResponseEntity<>(result, HttpStatusCode.valueOf(201));
    }
}
