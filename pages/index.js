import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  const pieces = data;
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  // console.log(data);
  function randomItem(array) {
    return array[Math.floor(Math.random() * 11)];
  }

  const randomPiece = randomItem(pieces);
  // console.log(randomPiece);

  return (
    <>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
