const getMovieGenres = (genres, movie_genre_ids) => {
    console.log(movie_genre_ids);
    console.log(genres)
    return genres.filter((genre) => movie_genre_ids.includes(genre.id))

  }

  export default getMovieGenres