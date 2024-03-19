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
        console.error('Error al enviar los datos al backend:', error); // Imprime el error real en la consola
        throw error; // Lanza el error real
    }
}


const submitButton = document.querySelector('#movieForm button[type="submit"]');
submitButton.addEventListener('click', async function (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const year = document.querySelector('#year').value;
    const director = document.querySelector('#director').value;
    const duration = document.querySelector('#duracion').value;
    const genre = document.querySelector('#genre').value;
    const poster = document.querySelector('#post').value;
    const rate = document.querySelector('#rate').value;

    if (title.trim() === '' || year.trim() === '' || director.trim() === '' || duration.trim() === '' || genre.trim() === '' || poster.trim() === '' || rate.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (year.length !== 4 || isNaN(year)) {
        alert('El año debe tener 4 dígitos.');
        return;
    }

    if (year < 1900 || year > 2025) {
        // Si está fuera del rango, muestra un mensaje de error
        alert("El año debe estar entre 1900 y 2025");
        return;
    }

    if (rate < 1 || rate > 10 || isNaN(rate)) {
        alert('La tasa debe estar entre 1 y 10.');
        return;
    }

    const movie = {
        "title": title,
        "poster": poster,
        "director": director,
        "year": parseInt(year),
        "duration": parseInt(duration),
        "genre": genre,
        "rate": parseInt(rate)
    };
    try {
        const responseData = await sendDataToBackend(movie);
        limpiarFormulario();
        alert('Datos enviados correctamente.');
    } catch (error) {
        console.error('Error:', error); // Imprime el error real en la consola
        alert("Error al enviar los datos al backend: " + error); // Muestra el mensaje de error real
    }
});

function limpiarFormulario() {
    let formulario = document.getElementById("movieForm");
    formulario.reset();
}
