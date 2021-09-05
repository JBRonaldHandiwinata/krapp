import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.img && <img className="postImg" src={post.img} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {/* {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))} */
          <span className="postCat">{post.categories}</span>
          }
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.timestamp).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}