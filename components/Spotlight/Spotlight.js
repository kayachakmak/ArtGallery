import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  onToggle,
  isFavorite,
  idSpotlight,
}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <figure>
        <FavoriteButton
          id={idSpotlight}
          onToggle={onToggle}
          isFavorite={isFavorite}
        />
        <Image src={image} alt={artist} height={250} width={190} />
        <figcaption>{artist}</figcaption>
      </figure>
    </>
  );
}
