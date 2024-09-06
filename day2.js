const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // TO DO: Add validation and error handling here

    // Send the form data to the server using AJAX or fetch API
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/contact', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`name=${name}&email=${email}&message=${message}`);

    xhr.onload = function() {
        if (xhr.status === 200) {
            responseDiv.innerHTML = 'Thank you for contacting us!';
        } else {
            responseDiv.innerHTML = 'Error sending message. Please try again.';
        }
    };
});