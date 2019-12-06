import React from 'react';

// No state is saved here, so a functional component can be used.

const PlayerCard = props => {
  console.log (props);
  return (
    <div className="player-card">
      <div className="player-name">{props.player.name}</div>
      <div className="player-country">{props.player.country}</div>
      <div className="player-searches">{props.player.searches}</div>
      <div className="player-id">{props.player.id}</div>
    </div>
  )
}

export default PlayerCard;