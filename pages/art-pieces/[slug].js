import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 50px;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin-left: 20%;
  margin-top: 25px;
  color: black;
  background-color: white;
  text-decoration: none;
  border: black 1px solid;
  border-radius: 50%;
  font-size: 30px;
`;

const StyledArtPieceDetails = styled(ArtPieceDetails)`
  align-self: flex-start;
  margin-left: 50%;
`;

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

  const currentPieceColors = pieces.find(
    (piece) => piece.slug === currentPiece?.slug
  )?.colors;

  if (!currentPiece) {
    return null;
  }

  return (
    <Container>
      <StyledLink href="/art-pieces"> &larr; </StyledLink>
      <StyledArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
        dimensions={currentPiece.dimensions}
        onToggle={onToggle}
        isFavorite={favorites.find(
          (favorite) =>
            favorite.slug === currentPiece.slug && favorite.isFavorite
        )}
        id={currentPiece.slug}
        onSubmitComment={(input) => onSubmitComment(currentPiece.slug, input)}
        comments={currentPieceComments}
        colors={currentPieceColors}
      />
    </Container>
  );
}
