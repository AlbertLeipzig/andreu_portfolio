import { TrackSelector } from './TrackSelector';

export const MediaPlayer = ({ onSelect, trackList, selectedTrack }) => {
  return (
    <div>
      {
        <video>
          <source
            src={
              selectedTrack.type === 'video'
                ? selectedTrack.link
                : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
            type="video/mp4"
          />
        </video>
      }
      <ul>
        {trackList.map((track) => (
          <TrackSelector onSelect={onSelect} key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
};
