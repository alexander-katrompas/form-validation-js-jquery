# form-validation-js-jquery

There are two complete simple websites (1 page) in this repository. The both have the exact same functionality. They are a simple contact form with client-side form validation. One uses raw JavaScript. One uses jQuery.

jQuery is a library that "wraps" JavaScript with simpler syntax. jQuery is not a new language, it is simply a wrapper around JavaScript that uses JavaScript itself to create simpler JavaScript syntax. i.e. it makes JavaScript easier. For example...

This is how to get a text box's value into a variable in raw JavaScript:

#### let fname = document.getElementById("first-name").value

This is the exact same thing using jQuery:

#### let fname = $('#first-name').val()

For most complex things in JavaScript, there is a simpler, easier to use jQuery "version" and you can replaces them one for one. There is nothing else to it. jQuery simply allows you to write your JavaScript in a simpler more compact form. You can freely mix JavaScript and jQuery and they work perfectly together, because jQuery is JavaScript.

Study the two versions and it should be easy to see the connection between JavaScript and jQuery. Some things to note:

* To use jQuery you need to load the jQuery library. You can see this at the bottom of the index.html page in the jQuery version.
* You must load the library before anything that uses jQuery, which is why it comes before main.js
* You must include a map file with your jQuery. It is included here.
* The handlers in main.js are now in a docready function. This exists in JavaScript too, but it's more common to use it with jQuery (because it's easier).
