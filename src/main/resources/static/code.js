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

        $.get("http://localhost:8080/addTicket", function (data){
            console.log(data);
            let ut = "<table><tr><th>Navn</th>" +
                "<th>Telefonnummer</th><th>Epost</th>" +
                "<th>Antall Billetter</th><th>Til Film</th></tr>";
            /*for (let i of ticketArray) {
                ut += "<tr><td>" + i.firstnameValue + " " + i.surnameValue + "</td><td>" + i.phonenmbrValue + "</td><td>" +
                    i.emailValue + "</td><td>" + i.nmbrTicketsValue + "</td><td>" + i.movie + "</td></tr>";
            }*/
            data.forEach(function (ticket){
                ut += "<tr><td>" + ticket.firstnameValue + " " + ticket.surnameValue + "</td><td>" +
                    ticket.phonenmbrValue + "</td><td>" + ticket.emailValue + "</td><td>" + ticket.nmbrTicketsValue
                    + "</td><td>" + ticket.movie + "</td></tr>";
            })
            ut+= "</table>"
            $("#ticketArray").innerHTML = ut;
        });
    //}
}

function deleteTickets() {
    $.delete("http://localhost:8080/deleteTickets", function (){
        $("ticketArray").innerText = "";
        ticketArray.length = 0;
    })
}

