import React from 'react';

// No state is saved here, so a functional component can be used.

const PlayerCard = props => {

  return (
    <div className="player-card">
      <div className="player-name">Name</div>
      <div className="player-country">Country</div>
      <div className="player-searches">Searches</div>
      <div className="player-id">ID</div>
    </div>
  )
}

export default PlayerCard;