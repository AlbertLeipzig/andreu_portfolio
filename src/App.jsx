import { useState } from 'react';
import { MediaPlayer } from './components/MediaPlayer';
import { TrackSelector } from './components/TrackSelector';

const trackList = [
  {
    id: 0,
    title: 'First Piece',
    link: '',
    type: 'audio',
  },
  {
    id: 1,
    title: 'Second Piece',
    link: '',
    type: 'audio',
  },
  {
    id: 2,
    title: 'Third Piece',
    link: '',
    type: 'video',
  },
];

function App() {
  const [selectedTrack, setSelectedTrack] = useState(trackList[0]);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div>
      <MediaPlayer onSelect={handleTrackSelect} trackList={trackList} selectedTrack={selectedTrack} />
      <p>Selected Track: {selectedTrack.title}</p>
    </div>
  );
}

export default App;
