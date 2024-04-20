package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketRepository ticketRepository;

    public TicketController(TicketRepository ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    @GetMapping("/getTickets")
    public List<Ticket> getAll(){
        //return ticketList;
        return ticketRepository.getAll();
    }


    @PostMapping("/debug")
    public void debug(){

    }

    @PostMapping("/addTicket")
    public void saveTicket(Ticket inTicket){
        System.out.println(inTicket);
        ticketRepository.saveTicket(inTicket);
    }

    @DeleteMapping("/deleteTickets")
    public void deleteAllTickets(){
        ticketRepository.deleteTickets();
    }

    private boolean validateTicket(Ticket ticket){
        //if(ticket.getId() == null) return false;
        String regexName = "[a-zA-ZæøåÆØÅ. \\-]{2,20}";
        String regexEmail = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
        String regexPhonenmbr = "^(0047|\\+47|47)?[2-9]\\d{7}$";
        boolean firstNameOK = ticket.getFirstname().matches(regexName);
        boolean surnameOK = ticket.getSurname().matches(regexName);
        boolean emailOK = ticket.getEmail().matches(regexEmail);
        if (firstNameOK && surnameOK && emailOK){
            return true;
        }
        //logger.error("Validation error");
        return false;
    }
}

