import axios from "axios";
import { useState } from "react";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("comment");
    await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form>
        <div onSubmit={onSubmit} className="form-group">
          <label>Noew Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button className=" btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;
