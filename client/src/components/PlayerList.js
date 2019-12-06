import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
  construcor () {
    super();
    // TODO: Set state here
  }

  componentDidMount(props) {

    // TODO: Make API call here. Data format:
    // { "name": "Alex Morgan",
    //   "country": "United States",
    //   "searches": 100,
    //   "id": 0 
    // },

  }

  componentDidUPdate(prevProps, prevState) {

  }


  render () {
    return (
      <div className="player-list">
        {/* TODO: Map over list here and create Players key = id */}
      </>
    )
  }


}