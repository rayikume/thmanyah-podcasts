import { Baloo_Bhaijaan_2 } from "next/font/google";

type Props = {
  results: any[];
};

const ibmPlexArabic = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export default function SearchResults({ results }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
      {results.map((item) => (
        <div
          key={item.trackId}
          className="border-2 rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer hover:bg-[#000000]/45"
        >
          <img
            src={item.artworkUrl}
            alt={item.trackName}
            className="w-full rounded mb-4"
          />
          <h2
            className={`text-xl font-semibold text-right ${ibmPlexArabic.className}`}
          >
            {item.trackName}
          </h2>
          <p className={`text-[#fcacac] text-right ${ibmPlexArabic.className}`}>
            {item.artistName}
          </p>
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
