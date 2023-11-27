export const MediaPlayer = ({ onSelect, selectedTrack }) => {
  return (
    <div>
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
      
    </div>
  );
};
