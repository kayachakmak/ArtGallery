import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} height={250} width={190} />
      <figcaption>
        {title} by {artist}
      </figcaption>
    </>
  );
}
