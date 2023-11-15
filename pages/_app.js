import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

//  Find a solution for global state handling to have the art pieces available on all pages

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const pieces = data;
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomPiece = randomItem(pieces);

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        pieces={pieces}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
      />
      <Layout />
    </>
  );
}
