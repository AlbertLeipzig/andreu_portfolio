import { useState } from 'react';
import trackList from '../data/trackList.json';

export const RecordingsPage = () => {
  const [selectedTrack, setSelectedTrack] = useState(trackList[0]);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <>
      <h1>Enregistraments</h1>

      <video controls>
        <source
          src={
            selectedTrack.type === 'video'
              ? selectedTrack.link
              : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
          type="video/mp4"
        />
      </video>

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
