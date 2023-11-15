import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

const mockArtPiece = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  title: "Sample Art Piece",
  artist: "Steve Johnson",
};

test("renders spotlight piece's image", () => {
  render(<Spotlight {...mockArtPiece} />);
  const image = screen.getByAltText(mockArtPiece.artist);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockArtPiece.image);
});

test("renders spotlight piece's artist", () => {
  render(<Spotlight {...mockArtPiece} />);
  const figcaptionElement = screen.getByText((content, element) =>
    content.includes("Steve Johnson")
  );

  expect(figcaptionElement).toBeInTheDocument();
});
