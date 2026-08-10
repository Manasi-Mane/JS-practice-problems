// Problem 3 – Movie Database
const movies = [
  { id: 1, title: "Inception", rating: 8.8, year: 2010 },
  { id: 2, title: "Interstellar", rating: 8.6, year: 2014 },
  { id: 3, title: "Avatar", rating: 7.8, year: 2009 },
  { id: 4, title: "Jawan", rating: 7.2, year: 2023 }
];
// •	Tasks:
// 21.	Print all movie titles.
movies.forEach(movie=>console.log(movie.title));

// 22.	Find movies with rating above 8.
const highRatedMovies = movies.filter(movie=> movie.rating>8);
console.log(highRatedMovies);

// 23.	Find the newest movie.
const newestMovie = movies.reduce((newest,curr)=> curr.year > newest.year? curr:newest , movies[0]);
console.log(newestMovie);

// 24.	Find the oldest movie.
const oldestMovie = movies.reduce((oldest,curr)=> curr.year < oldest.year? curr:oldest , movies[0]);
console.log(oldestMovie);

// 25.	Find the movie with id = 4.
console.log(movies.find(movie=> movie.id===4));

// 26.	Calculate the average rating.
const totalRating = movies.reduce((acc,curr)=> acc+curr.rating,0);
const averageRating = totalRating/movies.length;
console.log(averageRating);

// 27.	Add a new movie.
const newMovie = {id:5, title:"The Dark Knight", rating:9.0, year:2008};
const updatedMovies = [...movies,newMovie];
console.log(updatedMovies);

// 28.	Add a property isHit: true if rating ≥ 8.
const moviesWithIsHit = movies.map(movie=>({
    ...movie,
    isHit: movie.rating>=8
}))
console.log(moviesWithIsHit);

// 29.	Destructure title and rating.
const {title:firstMovieTitle, rating:firstMovieRating} = movies[0];
console.log(firstMovieTitle, firstMovieRating);

// 30.	Find the highest-rated movie.
const highestRatedMovie = movies.reduce((max,curr)=> curr.rating>max.rating? curr:max, movies[0]);
console.log(highestRatedMovie);
