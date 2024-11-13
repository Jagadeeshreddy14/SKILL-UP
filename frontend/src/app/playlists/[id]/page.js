// // src/app/playlists/[id]/page.js
// "use client"; // Mark this file as a Client Component

// import React from 'react';
// import { useParams } from 'next/navigation';
// import playlists from '@/data/playlists';

// function PlaylistPage() {
//   const { id } = useParams(); // Use useParams to get the playlist ID
  
//   // Find the playlist that matches the id from the URL
//   const playlist = playlists.find((pl) => pl.id === id);

//   // If playlist not found, show an error message
//   if (!playlist) {
//     return <p>Playlist not found.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6">{playlist.title}</h1>
      
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {playlist.videos.map((video, index) => (
//           <div key={index} className="video-player">
//             <iframe
//               width="100%"
//               height="315"
//               src={`https://www.youtube.com/embed/${video.url}`}
//               title={video.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <p className="mt-2 text-center">Lecture {index + 1}: {video.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlaylistPage;


"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import playlists from '@/data/playlists';

function PlaylistPage() {
  const { id } = useParams(); // Use useParams to get the playlist ID
  const playlist = playlists.find((pl) => pl.id === id);

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0); // Store video progress
  const [player, setPlayer] = useState(null);

  // If playlist not found, show an error message
  if (!playlist) {
    return <p>Playlist not found.</p>;
  }

  const selectedVideo = playlist.videos[selectedVideoIndex];

  // Load the YouTube API script and initialize the player
  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onload = () => {
        // Initialize the player once the API is loaded
        window.onYouTubeIframeAPIReady = () => {
          const newPlayer = new window.YT.Player('youtube-player', {
            videoId: selectedVideo.url,
            events: {
              onReady: () => {
                console.log('Player is ready');
                console.log(newPlayer); // Log the player to check its methods
                if (newPlayer) {
                  newPlayer.seekTo(videoProgress); // Seek to the saved progress
                  newPlayer.playVideo(); // Play the video once it's ready
                }
              },
              onStateChange: (event) => {
                // Detect when the video is paused or ended, and save progress
                if (event.data === window.YT.PlayerState.PLAYING) {
                  setInterval(() => {
                    const currentTime = newPlayer.getCurrentTime();
                    localStorage.setItem('videoProgress', currentTime);
                  }, 1000); // Save progress every second
                }
                if (event.data === window.YT.PlayerState.ENDED) {
                  // Mark the video as watched and move to the next video
                  const nextIndex = selectedVideoIndex + 1;
                  if (nextIndex < playlist.videos.length) {
                    setSelectedVideoIndex(nextIndex);
                    localStorage.setItem('lastVideoIndex', nextIndex);
                  }
                }
              },
            },
          });
          setPlayer(newPlayer); // Set the player state
        };
      };
      document.body.appendChild(script);
    }
  }, []); // Empty dependency ensures this runs only once when component mounts

  // Check localStorage for saved progress and last video index
  useEffect(() => {
    const lastVideoIndex = parseInt(localStorage.getItem('lastVideoIndex') || '0');
    const savedProgress = parseFloat(localStorage.getItem('videoProgress') || '0');
    setSelectedVideoIndex(lastVideoIndex);
    setVideoProgress(savedProgress);
  }, []); // Empty dependency ensures this runs only once on initial load

  // Update the player when the selected video changes
  useEffect(() => {
    if (player) {
      // When selectedVideo or player changes, load the new video
      if (typeof player.loadVideoById === 'function') {
        console.log("Loading video with ID:", selectedVideo.url);
        player.loadVideoById(selectedVideo.url); // Load the video by its ID
        player.seekTo(videoProgress); // Seek to the saved progress
        player.playVideo(); // Play the newly selected video
      } else {
        console.error('loadVideoById is not a function on the player object');
      }
    }
  }, [selectedVideo, player, videoProgress]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{playlist.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Selected Video */}
        <div className="flex-1">
          <div
            id="youtube-player"
            className="w-full"
            style={{ height: '400px' }}
          ></div>
          <p className="mt-4 text-center font-semibold">
            Lecture {selectedVideoIndex + 1}: {selectedVideo.title}
          </p>
        </div>

        {/* Right Side - Video List */}
        <div className="w-full md:w-1/3 lg:w-1/4 overflow-y-auto max-h-[500px] border-l border-gray-300">
          {playlist.videos.map((video, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer ${index === selectedVideoIndex ? 'bg-gray-200' : ''}`}
              onClick={() => {
                setSelectedVideoIndex(index);
                setVideoProgress(0); // Reset progress when a new video is clicked
              }}
            >
              <p className="font-medium">Lecture {index + 1}: {video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
