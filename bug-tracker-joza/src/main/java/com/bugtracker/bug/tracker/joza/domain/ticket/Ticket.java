package com.bugtracker.bug.tracker.joza.domain.ticket;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Ticket {
    @Id
    private Long id;
    private String name;
    private String author;
    private String description;
    private String priority;

    public Ticket() {
    }

    public Ticket(Long id, String name, String author, String description, String priority) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.description = description;
        this.priority = priority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}
