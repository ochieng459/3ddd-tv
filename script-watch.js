// Get the movie name from URL
const urlParams = new URLSearchParams(window.location.search);
const movieKey = urlParams.get('movie');

// Dummy movie data (you can expand this)
const movieData = {
  thriller1: {
    title: "The Dark Truth",
    poster: "posters/thriller1.jpg",
    description: "A gripping thriller that dives deep into conspiracy and survival."
  },
  thriller2: {
    title: "Echoes of Fear",
    poster: "posters/thriller2.jpg",
    description: "A spine-chilling story of a detective haunted by unsolved crimes."
  }
};

// Grab the movie based on the key
const movie = movieData[movieKey];

// Populate the page
if (movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-img").src = movie.poster;
  document.getElementById("movie-desc").textContent = movie.description;
} else {
  document.getElementById("movie-title").textContent = "Movie Not Found";
}
