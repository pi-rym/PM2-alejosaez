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
        "genre": genre.split(",").map(genre => genre.trim()),
        "rate": parseInt(rate)
    };
    try {

        const responseData = await sendDataToBackend(movie);
        console.log(responseData);

        alert('Datos enviados correctamente.');
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error al enviar los datos al backend.');
    }
});