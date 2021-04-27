import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState({});

  const changeHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post("http://localhost:8000/upload", file, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <form
        id="upload"
        action="/profile"
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" name="file" onChange={changeHandler} />
        <button class="btn-alert" type="submit">
          {" "}
          Upload{" "}
        </button>
      </form>
    </div>
  );
}

export default App;

