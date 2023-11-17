import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

//  Find a solution for global state handling to have the art pieces available on all pages

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const pieces = data;

  const [artPiecesInfo, setArtpiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  const [randomPiece, setRandomPiece] = useState(null);
  useEffect(() => {
    if (pieces) {
      setRandomPiece(randomItem(pieces));
    }
  }, [pieces]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // const randomPiece = randomItem(pieces);
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

  function handleSubmitComment(slug, input) {
    const currentDate = new Date();
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = currentDate.toLocaleString(undefined, options);
    setArtpiecesInfo((artPiecesInfo) => {
      const infoIndex = artPiecesInfo.findIndex((info) => info.slug === slug);
      let newArtPiecesInfo = [...artPiecesInfo];
      if (infoIndex !== -1) {
        // Art piece already exists, update it
        let updatedInfo = { ...newArtPiecesInfo[infoIndex] };
        updatedInfo.comments = updatedInfo.comments
          ? [...updatedInfo.comments, { text: input, date: formattedDate }]
          : [{ text: input, date: formattedDate }];

        newArtPiecesInfo[infoIndex] = updatedInfo;
      } else {
        // Add new art piece
        newArtPiecesInfo.push({
          slug: slug,
          isFavorite: false,
          comments: [{ text: input, date: formattedDate }],
        });
      }
      return newArtPiecesInfo;
    });
  }

  console.log(artPiecesInfo);
  return (
    <>
      <GlobalStyle />
      {randomPiece ? (
        <Component
          {...pageProps}
          pieces={pieces}
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
          dimensions={randomPiece.dimensions}
          randomPieceSlug={randomPiece.slug}
          favorites={artPiecesInfo}
          onToggle={handleToggleFavorite}
          onSubmitComment={handleSubmitComment}
        />
      ) : (
        <div>Loading...</div>
      )}
      <Layout />
    </>
  );
}
