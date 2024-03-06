$(document).ready(function() {
    let container = document.getElementById('movie-container');
    container.className = 'container'; // Utilizamos la clase 'container' de Bootstrap en lugar de 'max-w-screen-xl mx-auto flex flex-wrap gap-4 justify-center items-center'

    $.get('https://students-api.2.us-1.fl0.io/movies', function(data) {
        renderMovieCards(data);
    }).fail(function() {
        console.error('There was a problem with the request');
    });

    function renderMovieCards(data) {
        data.forEach(movie => {
            let article = document.createElement('div');
            article.className = 'card'; // Utilizamos la clase 'card' de Bootstrap en lugar de 'group relative block bg-black max-w-xs'
            article.style.width = '18rem'; // Ajustamos el ancho de la tarjeta según Bootstrap

            article.innerHTML = `
                <img src="${movie.poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text text-sm font-medium uppercase tracking-widest text-pink-500">${movie.genre.join(', ')}</p>
                    <p class="card-title text-md font-bold text-white">${movie.title}</p>
                    <p class="card-text text-sm text-white">
                        Director: ${movie.director}<br>
                        Year: ${movie.year}<br>
                        Duration: ${movie.duration}<br>
                        Rate: ${movie.rate}
                    </p>
                </div>
            `;

            container.appendChild(article);
        });
    }
});
