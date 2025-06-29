"use client";

import { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";
import Loader from "./loader";
import { Baloo_Bhaijaan_2 } from "next/font/google";

const ibmPlexArabic = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export default function SearchEnginePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (term: string) => {
    setLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch(
        `https://thmanyahapis.onrender.com/search?term=${encodeURIComponent(
          term
        )}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={handleSearch} isLoading={loading} />
      </div>
      <div className="mt-12">
        {loading ? (
          <Loader />
        ) : hasSearched && results.length === 0 ? (
          <p
            className={`text-center text-lg text-white ${ibmPlexArabic.className}`}
          >
            لم يتم العثور على أي نتائج
          </p>
        ) : (
          <SearchResults results={results} />
        )}
      </div>
    </div>
  );
}
