function validateNmbrTickets (nmbrTickets) {
    if (nmbrTickets === "") {
        $("#wrongNmbrTickets").html("Please enter the number of tickets you would like to order.");
        return false;
    } else if (isNaN(nmbrTickets)){
      $("#wrongNmbrTickets").html("Please enter a number")
    } else {
        $("#wrongNmbrTickets").html("");
        return true;
    }
}

function validateFirstName(firstName){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(firstName);
    if (!ok){
        $("#wrongFirstName").html("The name has to include between 2 and 20 letters");
        return false;
    } else if (firstName === ""){
      $("#wrongFirstName").html("First name is required");
    } else {
        $("#wrongFirstName").html("");
        return true;
    }
}

function validateSurname(surname) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(surname);
    if (!ok){
        $("#wrongSurname").html("The name has to include between 2 and 20 letters");
        return false;
    } else if (surname === "") {
        $("#wrongSurname").html("Surname is required");
    } else {
        $("#wrongSurname").html("");
        return true;
    }
}

function validateEmail(email){
    const regExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    const ok = regExp.test(email);
    if (!ok){
        $("#wrongEmail").html("Please add a valid email");
    } else if (email === "") {
        $("#wrongEmail").html("Email address is required");
    } else {
        $("#wrongEmail").html("");
    }
}

function validatePhonenmbr(phonenmbr){
    const regexp = /^(0047|\+47|47)?[2-9]\d{7}$/;
    const ok = regexp.test(phonenmbr);
    if (!ok){
        $("#wrongPhonenmbr").html("Please add a valid, norwegian phonenumber");
    } else if (isNaN(phonenmbr)){
        $("#wrongPhonenmbr").html("Please only add numbers");
    } else if (phonenmbr === ""){
        $("#wrongPhonenmbr").html("Phonenumber is required");
    } else {
        $("#wrongPhonenmbr").html("");
    }
}