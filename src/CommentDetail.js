const CommentDetail = ({ author, time, comment, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
