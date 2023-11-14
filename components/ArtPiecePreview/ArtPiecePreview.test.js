import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

test("renders each art pieces' image", () => {
  const mockArtPiece = {
    image:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    title: "Sample Art Piece",
    artist: "Steve Johnson",
  };

  render(<ArtPiecePreview {...mockArtPiece} />);
  const image = screen.getByAltText(mockArtPiece.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockArtPiece.image);
});
