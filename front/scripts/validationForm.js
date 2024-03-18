// Encuentra el botón de enviar dentro del formulario
const submitButton = document.querySelector('#movieForm button[type="submit"]');

// Agrega un evento de clic al botón de enviar
submitButton.addEventListener('click', function(event) {
    // Detiene el comportamiento predeterminado del botón de enviar
    event.preventDefault();

    // Obtén los valores de los campos de entrada
    const title = document.querySelector('#title').value;
    const year = document.querySelector('#year').value;
    const director = document.querySelector('#director').value;
    const duration = document.querySelector('#duracion').value;
    const genre = document.querySelector('#genre').value;
    const poster = document.querySelector('#post').value;
    const rate = document.querySelector('#rate').value;

    // Realiza las validaciones
    if (title.trim() === '' || year.trim() === '' || director.trim() === '' || duration.trim() === '' || genre.trim() === '' || poster.trim() === '' || rate.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (year.length !== 4 || isNaN(year)) {
        alert('El año debe tener 4 dígitos.');
        return;
    }

    if (rate < 1 || rate > 10 || isNaN(rate)) {
        alert('La tasa debe estar entre 1 y 10.');
        return;
    }

    // Crea el objeto con los campos recuperados
    const movie = {
        "title": title,
        "poster": poster,
        "director": director,
        "year": parseInt(year), // Convierte a número
        "duration": parseInt(duration), // Convierte a número
        "genre": genre.split(",").map(genre => genre.trim()), // Convierte a un array y elimina espacios en blanco
        "rate": parseInt(rate) // Convierte a número
    };

    // Convierte el objeto a una cadena de texto
    const movieString = JSON.stringify(movie, null, 2); // null y 2 son para dar formato legible

    // Muestra un alert con la información del objeto
    alert(movieString);
});
