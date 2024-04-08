let nmbrTickets = document.getElementById("nmbrTickets");
let firstname = document.getElementById("firstName");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let phonenmbr = document.getElementById("phonenmbr");

let form = document.getElementById("ticketOrdering");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^(0047|\+47|47)?[2-9]\d{7}$/;

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
    form.reset();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
}

const validateInputs = () => {
    const nmbrTicketsValue = nmbrTickets.value.trim();
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phonenmbrValue = phonenmbr.value.trim();

    if (nmbrTicketsValue === ""){
        setError(nmbrTickets, "Please enter the number of tickets you would like to buy");
    } else if (isNaN(nmbrTicketsValue)){
        setError(nmbrTickets, "Please enter a number");
    } else {
        setSuccess(nmbrTickets);
    }

    if (firstnameValue === ""){
        setError(firstname, "First name is required");
    } else {
        setSuccess(firstname);
    }

    if (surnameValue === ""){
        setError(surname, "Surname is required");
    } else {
        setSuccess(surname);
    }

    if (emailValue === ""){
        setError(email, "Email is required");
    } else if (!emailRegex.test(emailValue)){
        setError(email, "Please enter a valid email") ;
    } else {
        setSuccess(email);
    }

    if (phonenmbrValue === ""){
        setError(phonenmbr, "Phone number is required");
    } else if (!phoneRegex.test(phonenmbrValue)){
        setError(phonenmbr, "Please enter a valid phonenumber");
    } else {
        setSuccess(phonenmbr);
    }
}

let ticketArray = [];
function addTicketsToArray(){
    const nmbrTicketsValue = nmbrTickets.value.trim();
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phonenmbrValue = phonenmbr.value.trim();
    let movie = document.getElementById("chooseMovie").value;

    let ut = "<table><tr><th>Navn</th>" +
        "<th>Telefonnummer</th><th>Epost</th>" +
        "<th>Antall Billetter</th><th>Til Film</th></tr>";

    if (nmbrTicketsValue.length === 0 || firstnameValue.length === 0 || surnameValue.length===0 || emailValue.length === 0
        || phonenmbrValue.length === 0 || movie.length === 0){
        document.getElementById("ticketArray").innerHTML += "";
    } else if ((!emailRegex.test(emailValue)) || (!phoneRegex.test(phonenmbrValue))){
        document.getElementById("ticketArray").innerHTML += "";
    }
    else {
        const ticketPurchase = {
            firstnameValue: firstnameValue,
            surnameValue:surnameValue,
            phonenmbrValue: phonenmbrValue,
            emailValue: emailValue,
            nmbrTicketsValue: nmbrTicketsValue,
            movie:movie
        };
        ticketArray.push(ticketPurchase);
        console.log(ticketPurchase);
        for (let i of ticketArray) {
            ut += "<tr>";
            ut += "<td>" + i.firstnameValue + " " + i.surnameValue + "</td><td>" + i.phonenmbrValue + "</td><td>" +
                i.emailValue + "</td><td>" + i.nmbrTicketsValue + "</td><td>" + i.movie + "</td>";
            ut += "</tr>"
        }
        document.getElementById("ticketArray").innerHTML = ut;
    }
}

function deleteTickets() {
    document.getElementById("ticketArray").innerText = "";
    ticketArray.length = 0;
}