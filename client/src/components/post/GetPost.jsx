import axios from "axios";
import { useEffect, useState } from "react";
import CreateComment from "../comment/CreateComment";

function GetPost() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const data = await axios.get("http://localhost:5000/posts");

    setPosts(data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });
  console.log(renderedPost);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPost}
    </div>
  );
}

export default GetPost;
