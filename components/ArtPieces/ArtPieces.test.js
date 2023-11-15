import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

test("all art pieces are displayed as list", () => {
  const mockArtPieces = [
    {
      image:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      title: "Sample Art Piece",
      artist: "Steve Johnson",
    },
    {
      image: "path/to/image.jpg",
      title: "Art Piece 2",
      artist: "John Johnson",
    },
  ];

  render(<ArtPieces pieces={mockArtPieces} />);

  const list = screen.getAllByRole("listitem");

  expect(list).toHaveLength(2);
});
