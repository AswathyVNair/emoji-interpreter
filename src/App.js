import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🤩": "Star-Struck",
  "😇": "Smiling Face with Halo",
  "🙃": "Upside-Down Face",
  "🧐": "Face with Monocle",
  "😂": "Face with Tears of Joy",
  "🤪": "Zany Face",
  "😄":"Grinning Face with Smiling Eyes",
  "😉":"Winking Face",
  "🥰":"Smiling Face with Hearts",
  "🤫":"Shushing Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
      console.log(meaning);
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <input onChange={emojiChangeHandler}></input>
      <h2>{meaning}</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
