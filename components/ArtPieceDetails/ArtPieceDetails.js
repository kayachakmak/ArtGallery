import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const ColorBox = styled.span`
  display: inline-block;
  background-color: ${(props) => props.color};
  width: 20px; // You can adjust the size
  height: 20px;
  margin: 0 5px;
  border: 1px solid #000; // Optional, for visibility
`;

export default function ArtPieceDetails({
  isFavorite,
  onToggle,
  image,
  title,
  artist,
  year,
  genre,
  id,
  onSubmitComment,
  comments,
  colors,
}) {
  return (
    <>
      <figure>
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggle} id={id} />
        <Image src={image} alt={title} height={250} width={190} />
        <p>
          {colors.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </p>
        <figcaption>
          {artist}: {title}
        </figcaption>
        <p>
          Genre: {genre}, {year}
        </p>
      </figure>

      <Comments comments={comments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </>
  );
}
