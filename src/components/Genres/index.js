import React from 'react';
import GenresView from './view';
import pushNotifications from '../../services/pushNotifications';

class Genres extends React.Component {
  componentDidMount() {
    pushNotifications();
  }

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
