// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// class Movie extends Component {

//   static propTypes =  {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Sysnopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </p>
      </div>
    </div>
  )
}

Movie.propTypes =  {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}


// class MoviePoster extends Component {

//   static propTypes =  {
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     // console.log(this.props);
//     return (
//       <img src={this.props.poster} alt="movid poster"/>
//     );
//   }
// }

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

export default Movie;