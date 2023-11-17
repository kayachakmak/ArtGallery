import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 60px;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  id,
  onToggle,
  isFavorite,
  dimensions,
}) {
  return (
    <Figure>
      <FavoriteButton id={id} onToggle={onToggle} isFavorite={isFavorite} />
      <Link href={`/art-pieces/${id}`}>
        <Image
          src={image}
          alt={title}
          height={dimensions.height / 5}
          width={dimensions.width / 5}
        />
      </Link>
      <figcaption>
        {title} by {artist}
      </figcaption>
    </Figure>
  );
}
