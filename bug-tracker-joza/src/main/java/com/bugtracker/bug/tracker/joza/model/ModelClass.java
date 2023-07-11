package com.bugtracker.bug.tracker.joza.model;


public class ModelClass
{
    private int id;
    private String nom;
    private String auteur;
    private String description;
    private String priorite;
    //private enum status;


    //constructeur par defaut
    public ModelClass() {
    }

    public ModelClass(int id, String nom, String auteur, String description, String priorite) {
        this.id = id;
        this.nom = nom;
        this.auteur = auteur;
        this.description = description;
        this.priorite = priorite;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getAuteur() {
        return auteur;
    }

    public String getDescription() {
        return description;
    }

    public String getPriorite() {
        return priorite;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPriorite(String priorite) {
        this.priorite = priorite;
    }
}
