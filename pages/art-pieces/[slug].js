import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtPieceDetailsPage({
  pieces,
  onToggle,
  favorites,
  onSubmitComment,
}) {
  const [currentPiece, setCurrentPiece] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setCurrentPiece(pieces.find((piece) => piece.slug === slug));
  }, [setCurrentPiece, pieces, slug]);

  useEffect(() => {
    let timeoutId;
    if (!currentPiece) {
      timeoutId = setTimeout(() => router.push("/404"), 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [currentPiece, router]);

  const currentPieceComments = favorites.find(
    (piece) => piece.slug === currentPiece?.slug
  )?.comments;

  if (!currentPiece) {
    return null;
  }

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
        isFavorite={favorites.find(
          (favorite) =>
            favorite.slug === currentPiece.slug && favorite.isFavorite
        )}
        id={currentPiece.slug}
        onSubmitComment={(input) => onSubmitComment(currentPiece.slug, input)}
        comments={currentPieceComments}
      />
    </>
  );
}
