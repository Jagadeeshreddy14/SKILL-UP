// // src/app/courses/pages/web-dev/page.js

// import React from 'react';
// import Link from 'next/link';
// import playlists from '@/data/playlists';

// function WebDevPage() {
//   // Filter playlists specific to Web Development
//   const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'web-dev'); // Assuming there's a category field

//   if (webDevPlaylists.length === 0) {
//     return <p>No Web Development playlists found.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6">Web Development Playlists</h1>
//       <p className="mb-6">Explore the following Web Development playlists:</p>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {webDevPlaylists.map((playlist) => (
//           <Link
//             key={playlist.id}
//             href={`/playlists/${playlist.id}`}
//             className="playlist-card p-4 border border-gray-200 rounded shadow hover:bg-gray-100"
//           >
//             <h2 className="text-xl font-semibold">{playlist.title}</h2>
//             <p className="mt-2">{playlist.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WebDevPage;



"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import initialPlaylists from '@/data/playlists';

function WebDevPage() {
  const [playlists, setPlaylists] = useState(initialPlaylists);

  const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'web-dev');

  if (webDevPlaylists.length === 0) {
    return <p>No Web Development playlists found.</p>;
  }

  const toggleWatchedStatus = (playlistId, videoId) => {
    setPlaylists(prevPlaylists => {
      return prevPlaylists.map(playlist => {
        if (playlist.id === playlistId) {
          return {
            ...playlist,
            videos: playlist.videos.map(video =>
              video.id === videoId
                ? { ...video, watched: !video.watched }
                : video
            ),
          };
        }
        return playlist;
      });
    });
  };

  // Function to mark all videos as unwatched in a specific playlist
  const markAllAsUnwatched = (playlistId) => {
    setPlaylists(prevPlaylists => {
      return prevPlaylists.map(playlist => {
        if (playlist.id === playlistId) {
          return {
            ...playlist,
            videos: playlist.videos.map(video => ({
              ...video,
              watched: false, // Set all videos to unwatched
            })),
          };
        }
        return playlist;
      });
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Web Development Playlists</h1>
      <p className="mb-6">Explore the following Web Development playlists:</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {webDevPlaylists.map((playlist) => {
          const watchedCount = playlist.videos.filter(video => video.watched).length;
          const remainingCount = playlist.videos.length - watchedCount;

          return (
            <div
              key={playlist.id}
              className="playlist-card p-4 border border-gray-200 rounded shadow"
              style={{ minHeight: '400px' }} // Set a fixed height or min-height for the card
            >
              <Link href={`/playlists/${playlist.id}`} className="hover:bg-gray-100 block">
                <h2 className="text-xl font-semibold">{playlist.title}</h2>
                <p className="mt-2">{playlist.description}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {playlist.videos.length} video{playlist.videos.length !== 1 ? 's' : ''}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Watched: {watchedCount} | Remaining: {remainingCount}
                </p>
              </Link>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Videos</h3>
                  <button
                    onClick={() => markAllAsUnwatched(playlist.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Mark All as Unwatched
                  </button>
                </div>
                {/* Set fixed height and enable scrolling for the list of videos */}
                <ul className="mt-2 space-y-2 max-h-56 overflow-y-auto scrollbar-hidden">
                  {playlist.videos.map(video => (
                    <li key={video.id} className="flex items-center justify-between">
                      <span>{video.title}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // Prevent link navigation
                          toggleWatchedStatus(playlist.id, video.id);
                        }}
                        className={`text-sm font-medium ${
                          video.watched ? 'text-green-600' : 'text-blue-600'
                        }`}
                      >
                        {video.watched ? 'Watched' : 'Mark as Watched'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WebDevPage;
