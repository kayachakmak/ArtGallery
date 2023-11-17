import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

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
}) {
  return (
    <>
      <figure>
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggle} id={id} />
        <Image src={image} alt={title} height={250} width={190} />
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
