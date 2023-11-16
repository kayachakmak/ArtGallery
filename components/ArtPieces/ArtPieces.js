import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggle, favorites }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            {/* <Link href={`/art-pieces/${piece.slug}`}> */}
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
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
      </ul>
    </>
  );
}
