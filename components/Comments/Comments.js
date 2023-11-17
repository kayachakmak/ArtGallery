export default function Comments({ comments }) {
  if (!Array.isArray(comments) || comments.length === 0) {
    return <div>No comments yet.</div>; // Fallback UI for no comments or incorrect data type
  }
  console.log(comments);
  return (
    <ul>
      Comments:
      {comments.map((comment, index) => (
        <li key={index}>
          {comment.text}, {comment.date}
        </li>
      ))}
    </ul>
  );
}
