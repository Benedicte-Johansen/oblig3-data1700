function addTicketsToArray(){
    const ticketPurchase = {
        movie: $("#chooseMovie").val(),
        nmbrTickets: $("#nmbrTickets").val(),
        firstname: $("#firstName").val(),
        surname: $("#surname").val(),
        phonenmbr: $("#phonenmbr").val(),
        email: $("#email").val()
    };

    $.post("/addTicket", ticketPurchase, function (){
        getAll();
    });

    $('form :input').val('');
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
    for(const ticket of tickets) {
        ut += "<tr><td>" + ticket.firstname + " " + ticket.surname + "</td><td>" +
            ticket.phonenmbr + "</td><td>" + ticket.email + "</td><td>" + ticket.nmbrTickets
            + "</td><td>" + ticket.movie + "</td></tr>";
    }
    ut += "</table>";
    $("#ticketArray").html(ut);
}

function deleteTickets() {
    $.get("http://localhost:8080/deleteTickets", function (){
        getAll();
    })
}

