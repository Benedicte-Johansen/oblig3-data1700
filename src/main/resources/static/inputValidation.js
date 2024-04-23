function nmbrTicketsValidation () {
    let nmbrTickets = $("#nmbrTickets");
    if (nmbrTickets.val() === "") {
        $("#wrongNmbrTickets").html("Please enter the number of tickets you would like to order.");
        nmbrTickets.val('');
        return false;
    } else if (isNaN(nmbrTickets)){
      $("#wrongNmbrTickets").html("Please enter a number");
      nmbrTickets.val('');
      return false;
    } else {
        $("#wrongNmbrTickets").html("");
       return true;
    }
}

function firstNameValidation(){
    let firstName = $("#firstName");
    const regExp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;

    if (firstName.val() === ''){
        $("#wrongFirstName").html("First name is required");
        firstName.val("");
        return false;
    } else if (!firstName.val().match(regExp)){
        $("#wrongFirstName").html("Name can only contain between 2 and 20 norwegian letters");
        firstName.val("")
        return false;
    }else {
        $("#wrongFirstName").html("")
        return true;
    }
}

function surnameValidation(){
    let surname = $("#surname");
    const regExp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;

    if (surname.val() === ''){
        $("#wrongSurname").html("Surname is required");
        surname.val("");
        return false;
    } else if (!surname.val().match(regExp)){
        $("#wrongSurname").html("Name can only contain between 2 and 20 norwegian letters");
        surname.val("");
        return false
    } else {
        $("#wrongSurname").html("");
        return true;
    }
}

function emailValidation(){
    let email = $("#email");
    const regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.val() === ''){
        $("#wrongEmail").html("Email address is required");
        email.val("");
        return false;
    } else if (!email.val().match(regExp)) {
        $("#wrongEmail").html("Please add a valid email");
        email.val("");
        return false;
    } else {
        $("#wrongEmail").html("");
        return true;
    }
}

function phonenmbrValidation(){
    let phonenmbr = $("#phonenmbr");
    const regexp = /^(0047|\+47|47)?[2-9]\d{7}$/;

    if (!phonenmbr.val().match(regexp)){
        $("#wrongPhonenmbr").html("Please add a valid, norwegian phonenumber");
        phonenmbr.val("");
        return false;
    } else if (isNaN(phonenmbr.val())){
        $("#wrongPhonenmbr").html("Please only add numbers");
        phonenmbr.val("")
        return false;
    } else if (phonenmbr.val() === ""){
        $("#wrongPhonenmbr").html("Phonenumber is required");
        phonenmbr.val("");
        return false;
    } else {
        $("#wrongPhonenmbr").html("")
        return true;
    }
}
