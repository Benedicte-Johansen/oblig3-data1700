package com.example.oblig3data1700;

import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOError;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
public class TicketController {

    Logger logger = LoggerFactory.getLogger(TicketController.class);

    @Autowired
    TicketRepository ticketRepository;

    public TicketController(TicketRepository ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    @GetMapping("/getTickets")
    public List<Ticket> getAll(){
        return ticketRepository.getAll();
    }


    @PostMapping("/debug")
    public void debug(){

    }

    @PostMapping("/addTicket")
    public void saveTicket(Ticket inTicket){
        if (validateTicket(inTicket)){
            ticketRepository.saveTicket(inTicket);
        } else {
            logger.error("Validation error");
        }

    }

    @GetMapping("/deleteTickets")
    public void deleteAllTickets(){
        ticketRepository.deleteTickets();
    }

    private boolean validateTicket(Ticket ticket){
        String regexName = "[a-zA-ZæøåÆØÅ. \\-]{2,20}";
        String regexEmail = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";

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

