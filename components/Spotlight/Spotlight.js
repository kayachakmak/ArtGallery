import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <figure>
        <Image src={image} alt={artist} height={250} width={190} />
        <figcaption>{artist}</figcaption>
      </figure>
    </>
  );
}
