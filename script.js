document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

document.querySelector('footer p').innerText = `© ${new Date().getFullYear()} Steve Carlo Stefanus. All rights reserved.`;
