package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;

    class TicketRowMapper implements RowMapper <Ticket> {
        @Override
        public Ticket mapRow(ResultSet rs, int rowNum) throws SQLException {
            Ticket ticket = new Ticket();
            ticket.setMovie(rs.getString("movie"));
            ticket.setNmbrTickets(rs.getInt("nmbrTickets"));
            ticket.setFirstname(rs.getString("fristname"));
            ticket.setSurname(rs.getString("surname"));
            ticket.setEmail(rs.getString("email"));
            ticket.setPhonenmbr(rs.getInt("phonenmbr"));
            return ticket;
        }
    }

    public List <Ticket> getAll(){
        String sql = "SELECT * FROM Ticket";
        List<Ticket> ticketList = db.query(sql, new TicketRowMapper());
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
