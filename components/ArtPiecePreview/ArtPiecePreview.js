import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

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
      <Link href={`/art-pieces/${id}`}>
        <Image src={image} alt={title} height={250} width={190} />
      </Link>
      <figcaption>
        {title} by {artist}
      </figcaption>
    </figure>
  );
}
