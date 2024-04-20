/*let nmbrTickets = ($("#nmbrTickets").val());
let firstname = ($("#firstName").val());
let surname = $("#surname").val();
let email = $("#email").val();
let phonenmbr = $("#phonenmbr").val();
let movie = $("#chooseMovie").val();*/

let ticketArray = [];

function clicktest(){
    console.log(document.getElementById("chooseMovie").value);
    console.log($("#firstName").val);
    console.log(document.getElementById("firstName").value);
}

function addTicketsToArray(){
    const ticketPurchase = {
        movie: $("#chooseMovie").val(),
        nmbrTickets: $("#nmbrTickets").val(),
        firstname: $("#firstName").val(),
        surname: $("#surname").val(),
        phonenmbr: $("#phonenmbr").val(),
        email: $("#email").val()
    };
    ticketArray.push(ticketPurchase);
    $.post("http://localhost:8080/addTicket", ticketPurchase, function (){
        console.log("addTicketsToArray")
        console.log(ticketPurchase);
        console.log(ticketArray);
        getAll();
    });

    $("#nmbrTickets").val("");
    $("#nmbrTickets").val("");
    $("#nmbrTickets").val("");
    $("#nmbrTickets").val("");
    $("#nmbrTickets").val("");
}

function getAll(){
    console.log("Get all")
    $.get("http://localhost:8080/getTickets", function (tickets){
        formatData(tickets);
        console.log(ticketArray);
        console.log(tickets);
    })
}

function formatData(tickets){
    console.log(tickets);
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
    $.delete("http://localhost:8080/deleteTickets", function (){
        getAll();
    })
}

