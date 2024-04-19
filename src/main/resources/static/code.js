const nmbrTickets = $("nmbrTickets").val();
const firstname = $("firstName").val();
const surname = $("surname").val();
const email = $("email").val();
const phonenmbr = $("phonenmbr").val();
const movie = $("chooseMovie").val();

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const phoneRegex = /^(0047|\+47|47)?[2-9]\d{7}$/;


let ticketArray = [];
function addTicketsToArray(){
    let ut = "<table><tr><th>Navn</th>" +
        "<th>Telefonnummer</th><th>Epost</th>" +
        "<th>Antall Billetter</th><th>Til Film</th></tr>";

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

        $.get("/addTicket", function (data){
            for (let i of ticketArray) {
                ut += "<tr>";
                ut += "<td>" + i.firstnameValue + " " + i.surnameValue + "</td><td>" + i.phonenmbrValue + "</td><td>" +
                    i.emailValue + "</td><td>" + i.nmbrTicketsValue + "</td><td>" + i.movie + "</td>";
                ut += "</tr>"
            }
            document.getElementById("ticketArray").innerHTML = ut;
        });
    //}
}

function deleteTickets() {
    $.delete("/deleteTickets", function (){
        $("ticketArray").innerText = "";
        ticketArray.length = 0;
    })
}

