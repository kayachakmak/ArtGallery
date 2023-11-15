import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

const mockArtPiece = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  title: "Sample Art Piece",
  artist: "Steve Johnson",
  year: 1923,
  genre: "barok",
};

test("renders the art piece's image", () => {
  render(<ArtPieceDetails {...mockArtPiece} />);
  const image = screen.getByAltText(mockArtPiece.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockArtPiece.image);
});

test("renders the art piece's title", () => {
  render(<ArtPieceDetails {...mockArtPiece} />);
  const figcaptionElement = screen.getByText((content, element) =>
    content.includes("Sample Art Piece")
  );

  expect(figcaptionElement).toBeInTheDocument();
});

test("renders the art piece's artist", () => {
  render(<ArtPieceDetails {...mockArtPiece} />);
  const figcaptionElement = screen.getByText((content, element) =>
    content.includes("Steve Johnson")
  );

  expect(figcaptionElement).toBeInTheDocument();
});

test("renders the art piece's year", () => {
  render(<ArtPieceDetails {...mockArtPiece} />);
  const yearELement = screen.getByText((content, element) =>
    content.includes("1923")
  );

  expect(yearELement).toBeInTheDocument();
});

test("renders the art piece's genre", () => {
  render(<ArtPieceDetails {...mockArtPiece} />);
  const genreElement = screen.getByText((content, element) =>
    content.includes("barok")
  );

  expect(genreElement).toBeInTheDocument();
});
