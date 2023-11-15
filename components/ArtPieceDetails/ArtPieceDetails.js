import Image from "next/image";
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <figure>
      <Image src={image} alt={title} height={250} width={190} />
      <figcaption>
        {artist}: {title}
      </figcaption>
      <p>
        Genre: {genre}, {year}
      </p>
    </figure>
  );
}
