import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({ pieces, favorites, onToggle }) {
  const filteredFavorites = favorites.filter(
    (favorite) => favorite.isFavorite === true
  );

  const selectedPieces = [];

  for (let favorite of filteredFavorites) {
    const selectedPiece = pieces.find((piece) => piece.slug === favorite.slug);

    if (selectedPiece) {
      selectedPieces.push(selectedPiece);
    }
  }

  console.log(filteredFavorites);
  console.log(selectedPieces);
  return (
    <>
      {/* {!selectedPieces.length && <h2>Kaya</h2>} */}
      <ArtPieces
        pieces={selectedPieces}
        onToggle={onToggle}
        favorites={favorites}
      />
    </>
  );
}
