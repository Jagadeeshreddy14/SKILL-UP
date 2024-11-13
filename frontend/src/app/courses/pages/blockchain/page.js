"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import initialPlaylists from '@/data/playlists';

function WebDevPage() {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [openPlaylist, setOpenPlaylist] = useState(null); // State to track which playlist is open

  const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'blockchain');

  if (webDevPlaylists.length === 0) {
    return <p>No Blockchain playlists found.</p>;
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
      <h1 className="text-3xl font-bold mb-6">Blockchain Playlists</h1>
      <p className="mb-6">Explore the following Blockchain playlists:</p>

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