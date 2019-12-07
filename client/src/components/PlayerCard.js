import React from 'react';

// No state is saved here, so a functional component can be used.

const PlayerCard = props => {
  return (
    <div className="player-card">
      <div className="player-name">{props.player.name}</div>
      <div className="player-country">{props.player.country}</div>
      <div className="player-searches">Searches: {props.player.searches}</div>
    </div>
  )
}

export default PlayerCard;