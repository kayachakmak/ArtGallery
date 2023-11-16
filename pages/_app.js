import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";

//  Find a solution for global state handling to have the art pieces available on all pages

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const pieces = data;

  const [artPiecesInfo, setArtpiecesInfo] = useState([]);

  // useEffect(() => {

  // }, []);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomPiece = randomItem(pieces);
  // it changes the picture once the favorite button clicked on the Spotlight page

  function handleToggleFavorite(id) {
    console.log("id in the toggle function", id);
    setArtpiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === id);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === id ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }

      return [...artPiecesInfo, { slug: id, isFavorite: true }];
    });
  }

  // console.log(randomPiece.slug);
  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        pieces={pieces}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        randomPieceSlug={randomPiece.slug}
        favorites={artPiecesInfo}
        onToggle={handleToggleFavorite}
      />

      <Layout />
    </>
  );
}
