import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🤩": "Star-Struck",
  "✨": "Sparkles",
  "😇": "Smiling Face with Halo",
  "🥶": "Cold face",
  "🙃": "Upside-Down Face",
  "❤️": "Red Heart",
  "🧐": "Face with Monocle",
  "🤢 ": "Nauseated Face",
  "😂": "Face with Tears of Joy",
  "🔥": "Fire",
  "🤪": "Zany Face",
  "👋": "Waving Hand",
  "🥵": "Hot Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😱": "Face Screaming in Fear",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "🤫": "Shushing Face"
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
      <h1 style={{ color: "#EAB308" }}>emoji interpreter</h1>
      <h3>Enter an emoji or click an emoji shown below to know the meaning.</h3>
      <input onChange={emojiChangeHandler}></input>
      <h2 style={{ color: "#EAB308" }}>{meaning}</h2>
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
