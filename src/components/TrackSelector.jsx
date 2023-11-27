// TrackSelector component
import React from 'react';

export const TrackSelector = ({ onSelect, track }) => {
  const handleButtonClick = () => {
    onSelect(track);
  };

  return (
    <button className="track-selector" onClick={handleButtonClick}>
      {track.title}
    </button>
  );
};
