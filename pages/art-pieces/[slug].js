import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces, onToggle, isFavorite }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  return (
    <>
      <Link href="/art-pieces">&larr;</Link>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
        onToggle={onToggle}
        isFavorite={isFavorite}
      />
    </>
  );
}
