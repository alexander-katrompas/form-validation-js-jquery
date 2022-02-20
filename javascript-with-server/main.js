"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    /* NOTE: This next line violates the division of concerns rule,
     but it's okay for now. We will fix this later.
     */
    document.getElementById("msg").innerHTML = "<br>";
}

function validate() {
    // start with an empty error message
    var errorMessage = "";

    //get all the elements into the function
    var fNameInput = document.getElementById("first-name");
    var lNameInput = document.getElementById("last-name");

    //get all the strings in the elements and trim them
    var fname = fNameInput.value.trim();
    var lname = lNameInput.value.trim();

    //put the trimmed versions back into the form for good user experience (UX)
    fNameInput.value = fname;
    lNameInput.value = lname;

    //test the strings from the form and store the error messages
    if (fname === "") {
        errorMessage += "First name cannot be empty.<br>";
    }

    if (lname === "") {
        errorMessage += "Last name cannot be empty.<br>";
    }

    //send the errors back or send an empty string if there is no error
    return errorMessage;

}

//get the button into a JS object
var sendBtn = document.getElementById("names-send");

//create an event listener and handler for the send button
sendBtn.onclick = function () {
    // will prevent the form from submitting if there is an error
    let submit = false;
    //bring the message area in to report errors or "Sent!"
    var msgArea = document.getElementById("msg");
    //get the validation of the form
    var msg = validate();
    //report errors or submit the form
    // returning true or false is what allows the form to submit or not
    if (msg === "") {
        // will allow the form to submit
        submit = true;
    } else {
        msgArea.innerHTML = msg;
    }
    return submit;
};

//get the button into a JS object
var clearBtn = document.getElementById("names-clear");

//create an event listener and handler for the clear button
clearBtn.onclick = function () {
    //call clear if the button is pressed
    clearForm();
};


