let container = document.getElementById('movie-container');
container.classList.add('d-flex', 'flex-wrap', 'gap-4', 'justify-content-center'); 


function renderCard(data) {
    data.forEach(movie => {
        let article = document.createElement('div');
        article.className = 'card mb-3 custom-card'; 
        article.style.width = '280px';

        article.innerHTML = `
            <img src="${movie.poster}" class="card-img-top" alt="..." style="max-width: 280px;">
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

        container.appendChild(article);})
    }

    
    module.exports = renderCard