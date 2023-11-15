import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ image, artist }) {
  return (
    <>
      <Spotlight image={image} artist={artist} />
    </>
  );
}
