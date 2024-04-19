package com.example.oblig3data1700;

import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    @Autowired
    private TicketRepository rep;
    public final List<Ticket> tickets = new ArrayList<>();
    private Logger logger = LoggerFactory.getLogger(TicketController.class);

    @GetMapping("/getTickets")
    public List<Ticket> getTickets(HttpServletResponse response) throws IOException {
        List<Ticket> allTickets = rep.getAllTickets();
        if (allTickets == null){
            response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Error in the database - try again later");
        }
        return allTickets;
    }

    @PostMapping("/debug")
    public void debug(){
        
        System.out.println("TRIGGER");
    }

    @PostMapping("/addTicket")
    public void saveTicket(Ticket inTicket){
        tickets.add(inTicket);
    }

    @DeleteMapping("/deleteTickets")
    public void deleteAllTickets(HttpServletResponse response) throws IOException{
        if (!rep.deleteTickets()){
            response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Error in the database - try again later");
        }
    }

    private boolean validateTicket(Ticket ticket){
        if(ticket.getId() == null) return false;
        String regexName = "[a-zA-ZæøåÆØÅ. \\-]{2,20}";
        String regexEmail = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
        String regexPhonenmbr = "^(0047|\\+47|47)?[2-9]\\d{7}$";
        boolean firstNameOK = ticket.getFirstname().matches(regexName);
        boolean surnameOK = ticket.getSurname().matches(regexName);
        boolean emailOK = ticket.getEmail().matches(regexEmail);
        if (firstNameOK && surnameOK && emailOK){
            return true;
        }
        logger.error("Validation error");
        return false;
    }
}

