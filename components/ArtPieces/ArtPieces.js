import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
