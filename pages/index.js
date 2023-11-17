import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({
  image,
  artist,
  randomPieceSlug,
  onToggle,
  favorites,
  dimensions,
}) {
  return (
    <>
      <Spotlight
        image={image}
        artist={artist}
        randomPieceSlug={randomPieceSlug}
        onToggle={onToggle}
        favorites={favorites}
        dimensions={dimensions}
      />
    </>
  );
}
