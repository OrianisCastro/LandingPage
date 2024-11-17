document.getElementById('ver-catalogo').addEventListener('click', function() {
    window.location.href = '/pages/libros.html';
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').style.backgroundColor = '#f5e2d5';
    } else {
        document.querySelector('header').style.backgroundColor = '#fff';
    }
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', { name, email, message });

    // Show a success message
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');

    // Reset the form
    this.reset();
});