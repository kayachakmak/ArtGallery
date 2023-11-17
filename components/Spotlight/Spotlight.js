import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  randomPieceSlug,
  onToggle,
  favorites,
  dimensions,
}) {
  console.log(artist);
  console.log(randomPieceSlug);

  return (
    <>
      <h1>Art Gallery</h1>
      <figure>
        <FavoriteButton
          id={randomPieceSlug}
          onToggle={onToggle}
          isFavorite={favorites.find(
            (favorite) =>
              favorite.slug === randomPieceSlug && favorite.isFavorite
          )}
        />
        <Image
          src={image}
          alt={artist}
          height={dimensions.height / 5}
          width={dimensions.width / 5}
        />
        <figcaption>{artist}</figcaption>
      </figure>
    </>
  );
}
