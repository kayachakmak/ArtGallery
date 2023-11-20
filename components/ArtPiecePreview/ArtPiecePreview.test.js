import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

// jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

const mockArtPiece = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  title: "Sample Art Piece",
  artist: "Steve Johnson",
};

test("renders each art pieces' image", () => {
  render(<ArtPiecePreview {...mockArtPiece} />);
  const image = screen.getByAltText(mockArtPiece.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockArtPiece.image);
});

test("renders each art pieces' title", () => {
  render(<ArtPiecePreview {...mockArtPiece} />);
  const figcaptionElement = screen.getByText((content, element) =>
    content.includes("Sample Art Piece")
  );

  expect(figcaptionElement).toBeInTheDocument();
});

test("renders each art pieces' artist", () => {
  render(<ArtPiecePreview {...mockArtPiece} />);
  const figcaptionElement = screen.getByText((content, element) =>
    content.includes("Steve Johnson")
  );

  expect(figcaptionElement).toBeInTheDocument();
});
