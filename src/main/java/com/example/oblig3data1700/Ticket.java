package com.example.oblig3data1700;

public class Ticket {
    private String movie;
    private String firstname;
    private String surname;
    private String email;
    private int nmbrTickets;
    private int phonenmbr;

    public Ticket (String movie, String firstname, String surname, String email,
                   int nmbrTickets, int phonenmbr){
        this.movie = movie;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.nmbrTickets = nmbrTickets;
        this.phonenmbr = phonenmbr;
    }

    public Ticket (){}

    public String getMovie () {return movie;}

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getFirstname (){
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname (String surname){
        this.surname=surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNmbrTickets() {
        return nmbrTickets;
    }

    public void setNmbrTickets (int nmbrTickets){
        this.nmbrTickets = nmbrTickets;
    }

    public int getPhonenmbr() {
        return phonenmbr;
    }
    public void setPhonenmbr(int phonenmbr){
        this.phonenmbr = phonenmbr;
    }
}
