"use client";

import { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";

export default function SearchEnginePage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (term: string) => {
    const response = await fetch(
      `http://localhost:3000/search?term=${encodeURIComponent(term)}`
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}
