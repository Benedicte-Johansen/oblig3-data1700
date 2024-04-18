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
    if (nmbrTickets === ""){
        setError(nmbrTickets, "Please enter the number of tickets you would like to buy");
    } else if (isNaN(nmbrTickets)){
        setError(nmbrTickets, "Please enter a number");
    } else {
        setSuccess(nmbrTickets);
    }

    if (firstname === ""){
        setError(firstname, "First name is required");
    } else {
        setSuccess(firstname);
    }

    if (surname === ""){
        setError(surname, "Surname is required");
    } else {
        setSuccess(surname);
    }

    if (email === ""){
        setError(email, "Email is required");
    } else if (!emailRegex.test(email)){
        setError(email, "Please enter a valid email") ;
    } else {
        setSuccess(email);
    }

    if (phonenmbr === ""){
        setError(phonenmbr, "Phone number is required");
    } else if (!phoneRegex.test(phonenmbr)){
        setError(phonenmbr, "Please enter a valid phonenumber");
    } else {
        setSuccess(phonenmbr);
    }
}