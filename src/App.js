import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import Title from "./Title";

function App() {
  return (
    <h1>
      <Title />
      <div>
        <Article />
        <Comment />
      </div>
    </h1>
  );
}

export default App;
