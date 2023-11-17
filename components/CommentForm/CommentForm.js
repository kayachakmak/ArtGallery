export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    console.log(formElements.input.value);
    onSubmitComment(formElements.input.value);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Add comment:</label>
      <input type="text" name="input" id="input" />
      <button type="submit">Send</button>
    </form>
  );
}
