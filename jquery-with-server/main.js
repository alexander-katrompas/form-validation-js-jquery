"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    $('#first-name').val('');
    $('#last-name').val('');
    $('#msg').html('<br>'); // minor violation of concerns, but okay for now
}

function validate() {
    var errorMessage = "";

    //get the strings from the text boxes and trim them
    var fname = $('#first-name').val().trim();
    var lname = $('#last-name').val().trim();

    //put the trimmed versions back into the form for good iser experience (UX)
    $('#first-name').val(fname);
    $('#last-name').val(lname);

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

/*
 * This is the jQuery docready method. It automatically executes when the DOM
 * is ready. You should always put handlers and other auto-executed code in
 * a docready function. It protects you from "race-conditions" when the JS
 * tries to execute before the DOM is complete.
 */
$(document).ready(function () {

    // event handler for the clear button
    $("#names-clear").click(function () {
        clearForm();
    });

    // event handler for the send button
    $("#names-send").click(function () {
        // validate form and get back error messages (if any)
        var msg = validate();
        // report errors or submit the form
        // returning true or false is what allows the form to submit or not
        if (msg === "") {
            // will trigger the form to submit
            return true;
        } else {
            $("#msg").html(msg);
            // will prevent the form from submitting
            return false;
        }
    });

});
