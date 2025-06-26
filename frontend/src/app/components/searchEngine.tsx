"use client";
import { useState } from "react";

export default function SearchEnginePage() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:3000/search?term=${encodeURIComponent(term)}`
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Podcast Search</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Search for a podcast..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item: any) => (
          <div
            key={item.trackId}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={item.artworkUrl}
              alt={item.trackName}
              className="w-full rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{item.trackName}</h2>
            <p className="text-gray-600">{item.artistName}</p>
            {item.previewUrl && (
              <audio controls className="mt-2 w-full">
                <source src={item.previewUrl} />
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
