import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
  constructor () {
    super();
    this.state = {players: []};
  }

  componentDidMount(props) {

    // Data format:
    // { "name": "Alex Morgan",
    //   "country": "United States",
    //   "searches": 100,
    //   "id": 0 
    // },

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

  }


  render () {
    return (
      <div className="player-list">
        {/* TODO: Map over list here and create Players key = id */}
        <PlayerCard />
      </div>
    )
  }
}

export default PlayerList;