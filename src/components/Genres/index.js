import React from 'react';
import GenresView from './view';

class Genres extends React.Component {
  setGenre = genre => {
    this.props.actions.setGenre(genre);
  };

  render() {
    return (
      <GenresView
        setGenre={this.setGenre}
      />
    );
  }
}

export default Genres;
