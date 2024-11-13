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



// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import initialPlaylists from '@/data/playlists';

// function WebDevPage() {
//   const [playlists, setPlaylists] = useState(initialPlaylists);

//   const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'web-dev');

//   if (webDevPlaylists.length === 0) {
//     return <p>No Web Development playlists found.</p>;
//   }

//   const toggleWatchedStatus = (playlistId, videoId) => {
//     setPlaylists(prevPlaylists => {
//       return prevPlaylists.map(playlist => {
//         if (playlist.id === playlistId) {
//           return {
//             ...playlist,
//             videos: playlist.videos.map(video =>
//               video.id === videoId
//                 ? { ...video, watched: !video.watched }
//                 : video
//             ),
//           };
//         }
//         return playlist;
//       });
//     });
//   };

//   // Function to mark all videos as unwatched in a specific playlist
//   const markAllAsUnwatched = (playlistId) => {
//     setPlaylists(prevPlaylists => {
//       return prevPlaylists.map(playlist => {
//         if (playlist.id === playlistId) {
//           return {
//             ...playlist,
//             videos: playlist.videos.map(video => ({
//               ...video,
//               watched: false, // Set all videos to unwatched
//             })),
//           };
//         }
//         return playlist;
//       });
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6">Web Development Playlists</h1>
//       <p className="mb-6">Explore the following Web Development playlists:</p>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {webDevPlaylists.map((playlist) => {
//           const watchedCount = playlist.videos.filter(video => video.watched).length;
//           const remainingCount = playlist.videos.length - watchedCount;
//           const progress = watchedCount / playlist.videos.length * 100;

//           return (
//             <div
//               key={playlist.id}
//               className="playlist-card p-4 border border-gray-200 rounded shadow"
//               style={{ minHeight: '400px' }} // Set a fixed height or min-height for the card
//             >
//               <Link href={`/playlists/${playlist.id}`} className="hover:bg-gray-100 block">
//                 <h2 className="text-xl font-semibold">{playlist.title}</h2>
//                 <p className="mt-2">{playlist.description}</p>
//                 <p className="mt-2 text-sm text-gray-600">
//                   {playlist.videos.length} video{playlist.videos.length !== 1 ? 's' : ''}
//                 </p>
//               </Link>

//               {/* Progress Bar Section */}
//               <div className="mt-4">
//                 {/* Percentage and watched/remaining chapters text */}
//                 <div className="flex justify-between items-center w-full text-sm text-gray-600">
//                   <span>{Math.round(progress)}%</span>
//                   <span>{watchedCount}/{playlist.videos.length} Chapters</span>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div
//                     className="bg-green-600 h-2.5 rounded-full"
//                     style={{ width: `${progress}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold">Videos</h3>
//                   <button
//                     onClick={() => markAllAsUnwatched(playlist.id)}
//                     className="text-sm text-red-600 hover:text-red-800"
//                   >
//                     Mark All as Unwatched
//                   </button>
//                 </div>
//                 {/* Removed the video list section to declutter the page */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default WebDevPage;



"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import initialPlaylists from '@/data/playlists';

function WebDevPage() {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [openPlaylist, setOpenPlaylist] = useState(null); // State to track which playlist is open

  const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'web-dev');

  if (webDevPlaylists.length === 0) {
    return <p>No Web Development playlists found.</p>;
  }

  useEffect(() => {
    const updatedPlaylists = webDevPlaylists.map(playlist => {
      const savedWatchedStatus = JSON.parse(localStorage.getItem(playlist.id));
      if (savedWatchedStatus) {
        const updatedVideos = playlist.videos.map((video, index) => ({
          ...video,
          watched: savedWatchedStatus[index] || false,
        }));
        return { ...playlist, videos: updatedVideos };
      }
      return playlist;
    });

    setPlaylists(updatedPlaylists);
  }, []);

  const toggleWatchedStatus = (playlistId, videoId) => {
    setPlaylists(prevPlaylists => {
      const updatedPlaylists = prevPlaylists.map(playlist => {
        if (playlist.id === playlistId) {
          const updatedVideos = playlist.videos.map(video =>
            video.id === videoId
              ? { ...video, watched: !video.watched }
              : video
          );

          localStorage.setItem(
            playlistId,
            JSON.stringify(updatedVideos.map(video => video.watched))
          );

          return { ...playlist, videos: updatedVideos };
        }
        return playlist;
      });
      return updatedPlaylists;
    });
  };

  const markAllAsUnwatched = (playlistId) => {
    setPlaylists(prevPlaylists => {
      const updatedPlaylists = prevPlaylists.map(playlist => {
        if (playlist.id === playlistId) {
          const updatedVideos = playlist.videos.map(video => ({
            ...video,
            watched: false,
          }));

          localStorage.setItem(
            playlistId,
            JSON.stringify(updatedVideos.map(video => video.watched))
          );

          return { ...playlist, videos: updatedVideos };
        }
        return playlist;
      });
      return updatedPlaylists;
    });
  };

  const handleToggleOpenPlaylist = (playlistId) => {
    setOpenPlaylist(openPlaylist === playlistId ? null : playlistId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Web Development Playlists</h1>
      <p className="mb-6">Explore the following Web Development playlists:</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {webDevPlaylists.map((playlist) => {
          const watchedCount = playlist.videos.filter(video => video.watched).length;
          const progress = (watchedCount / playlist.videos.length) * 100;
          const isOpen = openPlaylist === playlist.id;

          return (
            <div
              key={playlist.id}
              className="playlist-card relative p-3 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col"
              style={{ minHeight: '280px' }}
            >
              <Link href={`/playlists/${playlist.id}`} className="block hover:bg-gray-100 p-2 rounded-lg flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{playlist.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{playlist.description}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">
                    {playlist.videos.length} video{playlist.videos.length !== 1 ? 's' : ''}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-1 mt-2">
                    <span>{Math.round(progress)}% watched</span>
                    <span>{watchedCount}/{playlist.videos.length} Chapters</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => handleToggleOpenPlaylist(playlist.id)}
                className="mt-4 text-blue-600 hover:underline"
              >
                {isOpen ? 'Hide Chapters' : 'View Chapters'}
              </button>

              {isOpen && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 rounded-lg shadow-md overflow-y-auto"
                style={{ zIndex: 10 }}
              >
                <h3 className="text-lg font-bold mb-2">Chapters</h3>
                <ul>
                  {playlist.videos.map((video) => (
                    <li key={video.id} className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{video.title}</span>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={video.watched}
                          onChange={() => toggleWatchedStatus(playlist.id, video.id)}
                          className="mr-2"
                        />
                        Watched
                      </label>
                    </li>
                  ))}
                </ul>

                {/* Buttons container */}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => markAllAsUnwatched(playlist.id)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Mark all as unwatched
                  </button>

                  <button
                    onClick={() => handleToggleOpenPlaylist(playlist.id)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Hide Chapters
                  </button>
                </div>
              </div>
            )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WebDevPage;
