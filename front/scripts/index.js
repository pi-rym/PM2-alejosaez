$(document).ready(function() {
    let container = document.getElementById('movie-container');
    container.classList.add('d-flex', 'flex-wrap', 'gap-4', 'justify-content-center'); // Agregamos clases de Bootstrap para flexbox

    $.get('https://students-api.2.us-1.fl0.io/movies', function(data) {
        renderMovieCards(data);
    }).fail(function() {
        console.error('There was a problem with the request');
    });

    function renderMovieCards(data) {
        data.forEach(movie => {
            let article = document.createElement('div');
            article.className = 'card mb-3 custom-card'; // Agregamos la clase personalizada custom-card
            article.style.width = '280px';

            article.innerHTML = `
                <img src="${movie.poster}" class="card-img-top" alt="..." style="max-width: 280px;"> <!-- Ajustamos el max-width de la imagen -->
                <div class="card-body">
                    <p class="card-text text-sm font-medium text-uppercase text-pink-500">${movie.genre.join(', ')}</p>
                    <h5 class="card-title text-md font-bold text-black">${movie.title}</h5>
                    <p class="card-text text-sm text-black">
                        Director: ${movie.director}<br>
                        Year: ${movie.year}<br>
                        Duration: ${movie.duration}<br>
                        Rate: ${movie.rate}
                    </p>
                </div>
            `;
    
            container.appendChild(article);
        });

        // Agregar efecto de hover a las tarjetas
        $('.custom-card').hover(function() {
            $(this).addClass('shadow-lg'); // Añade una sombra más pronunciada al hacer hover
        }, function() {
            $(this).removeClass('shadow-lg'); // Quita la sombra al quitar el hover
        });
    }
});
