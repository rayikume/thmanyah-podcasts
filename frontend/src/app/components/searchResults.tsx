type Props = {
  results: any[];
};

export default function SearchResults({ results }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((item) => (
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
  );
}
