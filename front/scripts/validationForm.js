async function sendDataToBackend(movie) {
    try {
        const response = await fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });

        if (!response.ok) {
            throw new Error(response.ok);
        }

        return await response.json();
    } catch (error) {
        throw new Error('Error al enviar los datos al backend.');
    }
}

// Encuentra el botón de enviar dentro del formulario
const submitButton = document.querySelector('#movieForm button[type="submit"]');

// Agrega un evento de clic al botón de enviar
submitButton.addEventListener('click', async function(event) {
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
    try {
        // Envía los datos al backend
        const responseData = await sendDataToBackend(movie);
        console.log(responseData);
        // Manejar la respuesta del backend si es necesario
        alert('Datos enviados correctamente.');
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error al enviar los datos al backend.');
    }
});