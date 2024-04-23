package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;

    public TicketRepository (JdbcTemplate db){
        this.db = db;
    }

    public List <Ticket> getAll(){
        String sql = "SELECT * FROM Ticket";
        List<Ticket> ticketList = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
        return ticketList;
    }

    public void saveTicket (Ticket t){
        String sql = "INSERT INTO Ticket (movie, nmbrTickets, firstName, surname, email, phonenmbr) VALUES (?,?,?,?,?,?)";
        db.update(sql, t.getMovie(), t.getNmbrTickets(), t.getFirstname(), t.getSurname(),
                t.getEmail(), t.getPhonenmbr());
    }

    public void deleteTickets(){
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }
}
