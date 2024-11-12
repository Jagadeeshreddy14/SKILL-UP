// src/app/playlists/[id]/page.js
"use client"; // Mark this file as a Client Component

import React from 'react';
import { useParams } from 'next/navigation';
import playlists from '@/data/playlists';

function PlaylistPage() {
  const { id } = useParams(); // Use useParams to get the playlist ID
  
  // Find the playlist that matches the id from the URL
  const playlist = playlists.find((pl) => pl.id === id);

  // If playlist not found, show an error message
  if (!playlist) {
    return <p>Playlist not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{playlist.title}</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {playlist.videos.map((video, index) => (
          <div key={index} className="video-player">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.url}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-center">Lecture {index + 1}: {video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistPage;
