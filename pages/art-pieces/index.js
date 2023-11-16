import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function OverviewPage({ pieces, onToggle, favorites }) {
  return (
    <ArtPieces pieces={pieces} onToggle={onToggle} favorites={favorites} />
  );
}
