import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  id,
  onToggle,
  isFavorite,
}) {
  return (
    <figure>
      <FavoriteButton id={id} onToggle={onToggle} isFavorite={isFavorite} />
      <Image src={image} alt={title} height={250} width={190} />
      <figcaption>
        {title} by {artist}
      </figcaption>
    </figure>
  );
}
