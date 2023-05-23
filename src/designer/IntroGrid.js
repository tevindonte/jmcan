import React, { useState, useEffect } from 'react';

const VideoGrid = () => {
  const videos = [
    'https://youtu.be/ZEx2yrisb54',
    'https://youtu.be/TyPQ4eMi-L0',
    'https://youtu.be/bEd8W5gazR0',
    'https://youtu.be/tnqhWK0mPB4',
    'https://youtu.be/ipuCX87e0_U',
    'https://youtu.be/mw-Qc7JWibg',
    'https://youtu.be/ue0BYRr8i7A',
    'https://youtu.be/gfjxB2brzRk',
    'https://youtu.be/gLYCgUPAbk0',
    'https://youtu.be/VOlb4t2SSAI',
    'https://youtu.be/1wZmu9zesuY',
    'https://youtu.be/S7ZwhQqo6l8',
    'https://youtu.be/S7ZwhQqo6l8',
    'https://youtu.be/KpRikeWHd9A',
    'https://youtu.be/jIL63ctgrEQ',
    'https://youtu.be/wi2KuzmIsEE',
    'https://youtu.be/msTNTKAGRPY',
    'https://youtu.be/YwecpqHYvJw'
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getVideoId = (video) => {
    const videoIdMatch = video.match(/(?<=v=|youtu.be\/|\/embed\/|\/v\/|\/e\/|\/watch\?v=|\/watch\?vi=|\/watch\?feature=player_embedded&v=|%2Fvideos%2F|embed%\?video_id=|youtu.be%2F|embed\?video_id=|watch\?v%3D|embed\/|watch\?v=|embed\/|youtu.be\/|v\/|e\/|watch\?v=|&v=|v%3D|https:\/\/youtu.be\/|https:\/\/www.youtube.com\/watch\?v=|https:\/\/www.youtube.com\/embed\/|https:\/\/www.youtube.com\/v\/|https:\/\/www.youtube.com\/e\/|https:\/\/www.youtube.com\/watch\?v=|https:\/\/www.youtube.com\/watch\?vi=|https:\/\/www.youtube.com\/watch\?feature=player_embedded&v=|%2Fvideos%2F|https:\/\/www.youtube.com\/embed%\?video_id=)([^#\&\?]*).*/);
    return (videoIdMatch && videoIdMatch[1]) || '';
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg hover:brightness-125 cursor-pointer"
            src={`https://img.youtube.com/vi/${getVideoId(video)}/0.jpg`}
            alt=""
            onClick={() => playVideo(video)}
          />
          {selectedVideo === video && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
              <button
                className="text-white text-4xl"
                onClick={closeVideo}
              >
                &#x25A0;
              </button>
              <iframe
                title="YouTube Video Player"
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getVideoId(video)}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;

