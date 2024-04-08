package com.example.oblig3data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {
    private final List<Ticket> tickets = new ArrayList<>();

    @GetMapping("getTickets")
    public List<Ticket> allTickets(){
        return tickets;
    }

    @PostMapping("addTicket")
    public void addTicket (Ticket inTicket){
        tickets.add(inTicket);
    }

    @GetMapping("deleteTickets")
    public void deleteAllTickets(){
        tickets.clear();
    }
}
