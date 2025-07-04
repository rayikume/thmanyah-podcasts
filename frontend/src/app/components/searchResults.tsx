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
    <div className="flex flex-col sm:overflow-x-scroll sm:custom-scrollbar sm:flex-row-reverse gap-6 sm:ml-12 sm:mr-12 sm:pb-7">
      {results.map((item) => (
        <div
          key={item.trackId}
          className="sm:max-w-[350px] sm:max-h-[450px] sm:border-none border-1 border-[#69696928] flex-shrink-0 rounded-lg p-4 shadow hover:shadow-sm transition cursor-pointer hover:bg-[#000000]/45"
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
