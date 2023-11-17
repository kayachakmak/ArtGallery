import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MainContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%; /* Optional: Set to the desired height */
`;

export default function ArtPieces({ pieces, onToggle, favorites }) {
  return (
    <MainContainer>
      <h1>Art Gallery</h1>
      <List>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            {/* <Link href={`/art-pieces/${piece.slug}`}> */}
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              dimensions={piece.dimensions}
              onToggle={onToggle}
              id={piece.slug}
              isFavorite={favorites.find(
                (favorite) =>
                  favorite.slug === piece.slug && favorite.isFavorite
              )}
            />
            {/* </Link> */}
          </li>
        ))}
      </List>
    </MainContainer>
  );
}
