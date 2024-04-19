const nmbrTickets = $("nmbrTickets").val();
const firstname = $("firstName").val();
const surname = $("surname").val();
const email = $("email").val();
const phonenmbr = $("phonenmbr").val();
const movie = $("chooseMovie").val();

//let ticketArray = [];

function clicktest(){
    console.log("TRIGGER");
    $.post("http://localhost:8080/debug");
}

function addTicketsToArray(){
    console.log("Trigger addTicketToArray")
        const ticketPurchase = {
            firstnameValue: firstname,
            surnameValue:surname,
            phonenmbrValue: phonenmbr,
            emailValue: email,
            nmbrTicketsValue: nmbrTickets,
            movie:movie
        };
    console.log("Running addTicketToArray");

        $.post("http://localhost:8080/addTicket", ticketPurchase, function (data){
            console.log("data: " + data);
          getAll();
        });

        /*nmbrTickets("");
        firstname("");
        surname("");
        email("");
        phonenmbr("");
        movie("");/*
            /*console.log(data);
            let ut = "<table><tr><th>Name:</th>" +
                "<th>Phonenumber:</th><th>Email:</th>" +
                "<th>Number of tickets:</th><th>For movie:</th></tr>";

            data.forEach(function (ticket){
                ut += "<tr><td>" + ticket.firstnameValue + " " + ticket.surnameValue + "</td><td>" +
                    ticket.phonenmbrValue + "</td><td>" + ticket.emailValue + "</td><td>" + ticket.nmbrTicketsValue
                    + "</td><td>" + ticket.movie + "</td></tr>";
                ut+= "</table>"
            })
            $("#ticketArray").innerHTML = ut;
            console.log(ut)
        })*/

        /*$.get("http://localhost:8080/getTickets", function (ticket){
            console.log(ticket);
            let ut = "<table><tr><th>Name:</th>" +
                "<th>Phonenumber:</th><th>Email:</th>" +
                "<th>Number of tickets:</th><th>For movie:</th></tr>";

            ticket.forEach(function (ticket){
                ut += "<tr><td>" + ticket.firstnameValue + " " + ticket.surnameValue + "</td><td>" +
                    ticket.phonenmbrValue + "</td><td>" + ticket.emailValue + "</td><td>" + ticket.nmbrTicketsValue
                    + "</td><td>" + ticket.movie + "</td></tr>";
                ut+= "</table>"
            })
            $("#ticketArray").innerHTML = ut;
            console.log(ut)
        })*/
    //}
}

function getAll(){
    $.get("http://localhost:8080/getTickets", function (tickets){
        formatData(tickets);
    })
}

function formatData(tickets){
    let ut = "<table><tr><th>Name:</th>" +
        "<th>Phonenumber:</th><th>Email:</th>" +
        "<th>Number of tickets:</th><th>For movie:</th></tr>";
    for (const ticket of tickets){
        ut += "<tr><td>" + ticket.firstnameValue + " " + ticket.surnameValue + "</td><td>" +
            ticket.phonenmbrValue + "</td><td>" + ticket.emailValue + "</td><td>" + ticket.nmbrTicketsValue
            + "</td><td>" + ticket.movie + "</td></tr>";
    }
    ut += "</table>";
    $("#ticketArray").html(ut);
}

function deleteTickets() {
    $.delete("http://localhost:8080/deleteTickets", function (){
        getAll();
    })
}

