import React, { useState } from "react";
import axios from "axios";
function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({})

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:5000/api/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log("Success:", res);
        const { fileName, filePath } = res.data;

        setUploadedFile({ fileName, filePath })
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={handleSubmission}>
      <h3>{uploadedFile.fileName}</h3>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
export default App;