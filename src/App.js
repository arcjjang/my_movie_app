import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // componentWillMount() {
  //   console.log('will mount');
  // }

  // setTimeout(() => {
  //   this.setState({
  //     movies: [
  //       {
  //         title: "Matrix",
  //         poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  //       },  
  //       {
  //         title: "Full Metal Jacket",
  //         poster: "https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg"
  //       },
  //       {
  //         title: "Oldboy",
  //         poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
  //       },
  //       {
  //         title: "Star Wars",
  //         poster: "http://starwarsblog.starwars.com/wp-content/uploads/2017/01/sw-the-last-jedi-tall-1200x630.jpg"
  //       },
  //       {
  //         title: "Trainspotting",
  //         poster: "http://www.osmweasel.com/px/widgets/archive/imageupload/trainspotting-poster-1874220897.jpg"
  //       }
  //     ]
  //   });
  //  }, 5000);

  componentDidMount() {
    // console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
    this._getMovies();
  }

  state = {
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie
       title={movie.title_english}
       poster={movie.medium_cover_image}
       key={movie.id}
       genres={movie.genres}
       synopsis={movie.synopsis}
      />
    });
    return movies;
  }

   _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    // console.log('render');
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
