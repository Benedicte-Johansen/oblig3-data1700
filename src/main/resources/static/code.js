const nmbrTickets = $("nmbrTickets").val();
const firstname = $("firstName").val();
const surname = $("surname").val();
const email = $("email").val();
const phonenmbr = $("phonenmbr").val();
const movie = $("chooseMovie").val();

let ticketArray = [];
function addTicketsToArray(){
    /*if (nmbrTickets.length === 0 || firstname.length === 0 || surname.length===0 || email.length === 0
        || phonenmbr.length === 0 || movie.length === 0){
        document.getElementById("ticketArray").innerHTML += "";
    } else if ((!emailRegex.test(email)) || (!phoneRegex.test(phonenmbr))){
        document.getElementById("ticketArray").innerHTML += ""
    }
    else {*/
        const ticketPurchase = {
            firstnameValue: firstname,
            surnameValue:surname,
            phonenmbrValue: phonenmbr,
            emailValue: email,
            nmbrTicketsValue: nmbrTickets,
            movie:movie
        };
        ticketArray.push(ticketPurchase);

        $.get("http://localhost:8080/addTicket", function (ticket){
            console.log(ticket);
            let ut = "<table><tr><th>Name:</th>" +
                "<th>Phonenumber:</th><th>Email:</th>" +
                "<th>Number of tickets:</th><th>For movie:</th></tr>";

            ticket.forEach(function (ticket){
                ut += "<tr><td>" + ticket.firstnameValue + " " + ticket.surnameValue + "</td><td>" +
                    ticket.phonenmbrValue + "</td><td>" + ticket.emailValue + "</td><td>" + ticket.nmbrTicketsValue
                    + "</td><td>" + ticket.movie + "</td></tr>";
                ut+= "</table>"
                $("#ticketArray").innerHTML = ut;
                console.log(ut)
            })
        });
    //}
}

function deleteTickets() {
    $.delete("http://localhost:8080/deleteTickets", function (){
        $("ticketArray").innerText = "";
        ticketArray.length = 0;
    })
}

