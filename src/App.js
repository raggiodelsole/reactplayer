import React from 'react';
import VideoList from './video/components/VideoList';
import Video from './video/components/Video';
import './App.css';


class App extends React.Component {

  state = {
    movies: [],
    active: {}
  }

  componentDidMount() {
    fetch('/database.json')
      .then(response => response.json())
      .then(data => this.setState({
        movies: data,
        activeMovie: data[0]
      }));

  }

  handleClick = (event, elem) => {
    event.preventDefault();
    this.setState({ activeMovie: elem });

  }

  render() {
    //todo: konfiguracja playera i css - zeby lepiej wygladalo i zeby wielkosc byla lepsza
    const { movies, activeMovie } = this.state;
    return (
      <div className="App">
        <VideoList movies={movies} handleClick={this.handleClick} />
        <h1>Gowno!</h1>
        {movies.length > 0 ? <Video video={activeMovie} /> : null}

      </div>
    );
  }

}

export default App;
