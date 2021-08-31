const CommentBox = ({ comment }) => {
  return (
    <div className="commentBox">
      <div>
        {/* Update the backend to include user avatar at this endpoint */}
        {/* Or use GraphQL? */}
        {/* <img src={XX} alt={comment.author} /> */}
        <p>{comment.author}</p>
      </div>
      <p>{comment.body}</p>
      <p>{new Date(comment.created_at).toLocaleString()}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentBox;
