document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mobile = document.querySelector('input[type="number"]').value;
    const password = document.querySelector('input[type="password"]').value;

});