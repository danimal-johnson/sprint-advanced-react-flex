import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
  constructor () {
    super();
    this.state = {players: []};
  }

  componentDidMount(props) {

    axios.get("http://localhost:5000/api/players")
    .then (res => {
      console.log(res.data);
      this.setState({players: res.data});
    })
    .catch(err => {
      console.error("Error fetching playerlist:", err);
    });

  }

  componentDidUpdate(prevProps, prevState) {
    // We read the data once, so currently nothing changes in this app.
  }


  render () {
    return (
      <div className="player-list">
          {this.state.players.map(player => 
            (<PlayerCard player={player} key={player.id} />))}
        <PlayerCard />
      </div>
    )
  }
}

export default PlayerList;