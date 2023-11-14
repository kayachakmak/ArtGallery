import ArtPieces from "@/components/ArtPieces/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  const pieces = data;
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return <ArtPieces pieces={pieces} />;
}
