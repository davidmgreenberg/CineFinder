
// https://imdb-api.com/en/API/SearchMovie/k_mq76my93/
//  http://www.omdbapi.com/?i=tt3896198&apikey=3a94b800

// CRYPTO API KEY : 97f5a01f95b780ffca343995b860677c
// http://api.coinlayer.com/api/

//'http://www.omdbapi.com/?apikey=a0daa090&s=harry'
async function main() {
    const BoxOfficeMovies = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=3a94b800&s=harry%20potter')
    const boxOfficeData = await BoxOfficeMovies.json();
    const boxOfficeSearches = await boxOfficeData.Search.slice(-8);
    console.log(boxOfficeSearches);
    const movieListEl = document.querySelector('.movies__list')
    movieListEl.innerHTML = boxOfficeSearches.map(movie => movieHTML(movie)).join("")
 
}

main();

function movieHTML(movie) {
    return `
                    <div class="movie__wrapper">
                        <h1 class="movie__header">${movie.Title}</h1>
                        <img class="movie__poster" src="${movie.Poster}" alt="">
                        <h3 class="movie__year">${movie.Year}</h3>
                    </div>`
}

function search(event) {
    console.log("Hello!")
}