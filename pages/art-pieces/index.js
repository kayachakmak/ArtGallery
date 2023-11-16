import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function OverviewPage({ pieces, onToggle }) {
  return <ArtPieces pieces={pieces} onToggle={onToggle} />;
}
