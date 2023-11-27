import { useState } from 'react';
import { MediaPlayer } from '../components/MediaPlayer';
import { TrackSelector } from "../components/TrackSelector";

const trackList = [
  {
    id: 0,
    title: 'First Piece',
    link: 'https://audio-link-for-first-piece.com',
    type: 'audio',
  },
  {
    id: 1,
    title: 'Second Piece',
    link: 'https://audio-link-for-second-piece.com',
    type: 'audio',
  },
  {
    id: 2,
    title: 'Third Piece',
    link: 'https://video-link-for-third-piece.com',
    type: 'video',
  },
];

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
        <TrackSelector key={track.id} onSelect={handleTrackSelect} track={track} />
      ))}
    </>
  );
};
