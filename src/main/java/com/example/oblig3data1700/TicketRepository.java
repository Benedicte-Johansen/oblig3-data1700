package com.example.oblig3data1700;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;
  private Logger logger = LoggerFactory.getLogger(TicketRepository.class);

    public List<Ticket> getAllTickets(){
        String sql = "SELECT * FROM Ticket";
        try {
            return db.query(sql, new BeanPropertyRowMapper(Ticket.class));
        } catch (Exception e){
            return null;
        }
    }

    public boolean saveTicket (Ticket t){
        String sql = "INSERT INTO Ticket (movie, nmbrTickets, firstName, surname, email, phonenmbr) VALUES (?,?,?,?,?,?)";
        try {
            db.update(sql, t.getMovie(), t.getNmbrTickets(), t.getFirstname(), t.getSurname(), t.getEmail(), t.getPhonenmbr());
            return true;
        } catch (Exception e){
            logger.error("Error in saveTicket " + e);
            return false;
        }
    }

    public boolean deleteTickets(){
        String sql = "DELETE FROM Ticket";
        try {
            db.update(sql);
            return true;
        } catch (Exception e){
            logger.error("Error in delete tickets" + e);
            return false;
        }
    }
}
