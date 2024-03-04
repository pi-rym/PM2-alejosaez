document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('movie-container');
    container.className = 'flex flex-wrap gap-4 justify-center items-center'; 

    tempData.forEach(function (movie) {
        var article = document.createElement('article');
        article.className = 'rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-4';
        article.style.display = 'inline-block'; 
        article.style.width = '300px'; 
        article.style.height = '680px'; 
        article.style.marginRight = '1rem'; 

        article.innerHTML = `
        <div class="flex items-start sm:gap-8">  
          <div>
            <h3 class="text-lg font-medium sm:text-xl">${movie.title}</h3>
            <p class="mt-1 text-sm text-gray-700">Director: ${movie.director}</p>
            <p class="mt-1 text-sm text-gray-700">Year: ${movie.year}</p>
            <p class="mt-1 text-sm text-gray-700">Duration: ${movie.duration}</p>
            <p class="mt-1 text-sm text-gray-700">Genre: ${movie.genre.join(', ')}</p>
            <p class="mt-1 text-sm text-gray-700">Rate: ${movie.rate}</p>
            <img src="${movie.poster}" alt="${movie.title}" class="mt-4 rounded w-full object-bottom">
          </div>
        </div>
      `; 
      container.appendChild(article);
    });
});
