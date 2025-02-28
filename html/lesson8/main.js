// const url = "https://pokeapi.co/api/v2/language/9/";
// fetch (url)
//         .then (res => res.json())
//         .then (data => console.log(data))
//         .catch (error = console.log(error))
// const url = "https://api.themoviedb.org/3/movie/popular?api_key=9b7c3ede447b14c5e0e9d33a137ddac9&language=vi-VN'";
// fetch (url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error = console.log(error))

function fetchMovies() {
    const API_url = 'https://api.themoviedb.org/3/movie/popular?api_key=9b7c3ede447b14c5e0e9d33a137ddac9&language=vi-VN';
    fetch(API_url)
        .then(res => res.json)
        .then(data => { // thay vì console.log thì mình sẽ viết function để hiển thị lên htmlhtml
            displayMovies(data.results);
        });
}
function displayMovies(moviesList) {
    const movieContainer = document.getElementById("movies");// lấy div có id là movies
    movieContainer.innerHTML = ""; // gán rỗng vào thẻ div đó 
    moviesList.forEach(movie => {
        const movieElement = document.createElement("div");// tạo thêm 1 thẻ div
        movieElement.classList.add("movies");// tạo class cho div mới tạo, class tên là movie 
        // class tên là movie sẽ thêm các thẻ sau
        movieElement.innerHTML = `
            <img src ="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt = "${movie.title}">
            <div>
                <h3>${movie.title}</h3>
                <p>${movie.overview.substring(0, 100)}...</p>
                <button onclick="viewMovie(${movie.id})">Xem chi tiết</button>
            </div>
        `
        movieContainer.appendChild(movieElement);
    })

}
function viewMovie(id) {
    alert(` description about the movie: ${movie.overview.substring(0, 100)}...`);
}
document.addEventListener("DOMcontentLoaded", fetchMovies);