import { useState } from "react";
import axios from "axios";
function CreatePost() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", { title });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
