import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ image, artist, onToggle, isFavorite }) {
  return (
    <>
      <Spotlight
        image={image}
        artist={artist}
        onToggle={onToggle}
        isFavorite={isFavorite}
      />
    </>
  );
}
