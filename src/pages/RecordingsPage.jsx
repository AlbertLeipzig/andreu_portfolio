import { useState } from 'react';
import trackList from '../data/trackList.json';

export const RecordingsPage = () => {
  const [selectedTrack, setSelectedTrack] = useState(trackList[0]);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <>
      <h1>Gravacions</h1>

      <div className="video"></div>

      <p>Selected Track: {selectedTrack.title}</p>

      {trackList.map((track) => (
        <button
          key={track.id}
          className="track-selector"
          onClick={() => handleTrackSelect(track)}
        >
          {track.title}
        </button>
      ))}
    </>
  );
};
