import { CommentBox } from ".";

const CommentsList = ({ children, comments, setComments }) => {
  return comments.length > 0 ? (
    <div>
      {comments.map((comment) => {
        return (
          <CommentBox
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
          />
        );
      })}
    </div>
  ) : (
    children
  );
};

export default CommentsList;
