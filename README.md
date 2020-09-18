# form-validation-js-jquery

There are four complete simple websites (1 page each) in this repository. To
use any of them, place the files from any one of the folders in the root of
your local project or in your public_html directory and load the index.html
page in your browser.

The sites are as follows:

 - javascript/ contains an example of client-side processing that does not
   submit to the server. It simply "fakes" it by clearing the form and
   displaying "Sent!"

 - jquery/ contains an example of client-side processing that does not
   submit to the server. It simply "fakes" it by clearing the form and
   displaying "Sent!" It is identical in functionality to the JavaScript
   version but it uses jQuery instead.

 - javascript-with-server/ contains an example of client-side processing that
   DOES submit to the server. It will submit to the server, be processed by
   process.php, which will simply dump the POST array back to the browser.

 - jquery-with-server/ contains an example of client-side processing that
   DOES submit to the server. It will submit to the server, be processed by
   process.php, which will simply dump the POST array back to the browser.
   It is identical in functionality to the JavaScript version but it
   uses jQuery instead.

jQuery is a library that "wraps" JavaScript with simpler syntax. jQuery is not a new language, it is simply a wrapper around JavaScript that uses JavaScript itself to create simpler JavaScript syntax. i.e. it makes JavaScript easier. For example...

This is how to get a text box's value into a variable in raw JavaScript:

#### let fname = document.getElementById("first-name").value

This is the exact same thing using jQuery:

#### let fname = $('#first-name').val()

For most complex things in JavaScript, there is a simpler, easier to use jQuery version, and you can replace them one for one. There is nothing else to it. jQuery simply allows you to write your JavaScript in a simpler more compact form. You can freely mix JavaScript and jQuery and they work perfectly together, because jQuery is JavaScript.

Study the two versions and it should be easy to see the connection between JavaScript and jQuery. Some things to note:

* To use jQuery you need to load the jQuery library. You can see this at the bottom of the index.html page in the jQuery version.
* You must load the library before anything that uses jQuery, which is why it comes before main.js
* You must include a map file with your jQuery. It is included here.
* The handlers in main.js are in a docready function in the jQuery version. This exists in raw JavaScript too, but it's more common to use it with jQuery (just because it's easier).
