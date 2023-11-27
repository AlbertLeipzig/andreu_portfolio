import { useState } from 'react';
import { MediaPlayer } from '../components/MediaPlayer';
export const RecordingsPage = () => {
  const [selectedTrack, setSelectedTrack] = useState(trackList[0]);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };
  return (
    <>
      <MediaPlayer
        onSelect={handleTrackSelect}
        trackList={trackList}
        selectedTrack={selectedTrack}
      />
      <p>Selected Track: {selectedTrack.title}</p>
    </>
  );
};
