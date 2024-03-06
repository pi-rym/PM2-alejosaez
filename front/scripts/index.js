$(document).ready(function() {
  let container = document.getElementById('movie-container');
  container.className = 'max-w-screen-xl mx-auto flex flex-wrap gap-4 justify-center items-center'; 

  $.get('https://students-api.2.us-1.fl0.io/movies', function(data) {
      
      renderMovieCards(data);
  }).fail(function() {
      console.error('There was a problem with the request');
  });

  function renderMovieCards(data) {
      data.forEach(movie => {
          let article = document.createElement('a');
          article.href = '#';
          article.className = 'group relative block bg-black max-w-xs';
          article.style.margin = '0 auto'; 
          article.style.width = '200px'; 
          article.style.height = '400px'; 

          article.innerHTML = `
              <img alt="" src="${movie.poster}" class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50">
              <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${movie.genre.join(', ')}</p>
                  <p class="text-md font-bold text-white ">${movie.title}</p>
                  <div class="mt-10 sm:mt-48 lg:mt-64 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100"> <!-- Modificación aquí -->
                      <div class="transform transition-transform group-hover:translate-y-0 group-hover:opacity-100"> <!-- Modificación aquí -->
                          <p class="text-sm text-white">
                              Director: ${movie.director}<br>
                              Year: ${movie.year}<br>
                              Duration: ${movie.duration}<br>
                              Rate: ${movie.rate}
                          </p>
                      </div>
                  </div>
              </div>
          `;

          container.appendChild(article);
      });
  }
});
