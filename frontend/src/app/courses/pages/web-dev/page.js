// src/app/courses/pages/web-dev/page.js

import React from 'react';
import Link from 'next/link';
import playlists from '@/data/playlists';

function WebDevPage() {
  // Filter playlists specific to Web Development
  const webDevPlaylists = playlists.filter((playlist) => playlist.category === 'web-dev'); // Assuming there's a category field

  if (webDevPlaylists.length === 0) {
    return <p>No Web Development playlists found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Web Development Playlists</h1>
      <p className="mb-6">Explore the following Web Development playlists:</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {webDevPlaylists.map((playlist) => (
          <Link
            key={playlist.id}
            href={`/playlists/${playlist.id}`}
            className="playlist-card p-4 border border-gray-200 rounded shadow hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{playlist.title}</h2>
            <p className="mt-2">{playlist.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WebDevPage;
