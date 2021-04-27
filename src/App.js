import React from "react";

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <form id="upload" action="/profile" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="avatar" />
        <button class='btn-alert' type='submit'> Upload </button>

      </form>
    </div>
  );
}

export default App;
