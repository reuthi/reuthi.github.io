/**
 * Created by ronen on 16/06/2016.
 */
'use strict';

// $(document).ready(function () {
//     function init() {
//         if (localStorage['name']) {
//             $('#name').val(localStorage['name']);
//         }
//         if (localStorage['email']) {
//             $('#email').val(localStorage['email']);
//         }
//         if (localStorage['message']) {
//             $('#message').val(localStorage['message']);
//         }
//         if (localStorage['phone']) {
//             $('#phone').val(localStorage['phone']);
//         }
//     }
//     init();
// });


$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() {
    localStorage.clear();
});

// var input_name = '';
// init() {
//     $.each( $(‘form input’), function() {
//         input_name = $(this).attr(‘name’);
//         if (localStorage[input_name]) {
//             $(this).val(localStorage[input_name]);
//         }
//     });
// }

window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {

        // Add an event listener for form submissions
        document.querySelector('frmRegister').addEventListener('submit', function() {
            // Get the value of the name field.
            var name = document.getElementById('name').value;
            var name = document.getElementById('phone').value;
            var name = document.getElementById('email').value;
            var name = document.getElementById('contact').value;

            // Save the name in localStorage.
            localStorage.setItem('name', name);
        });

    }

}