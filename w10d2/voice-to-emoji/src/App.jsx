import logo from "./logo.svg";
import "./App.css";

import * as speechCommands from "@tensorflow-models/speech-commands";
import { useState } from "react";

const exampleResult = [
  0.0012800695840269327, 0.0011302863713353872, 0.00605676369741559, 0.00272705708630383,
  0.9846227169036865, 0.0008424766128882766, 0.0033407157752662897,
];
const boringWords = [
  "Background Noise",
  "Destiny",
  "Ehhhhhhhhh",
  "Explosion",
  "Potato",
  "Snickelfritz",
  "TOKEBAKICITTE",
];

const biggestValue = Math.max(...exampleResult);
const biggestValueIndex = exampleResult.indexOf(biggestValue);
console.log(boringWords[biggestValueIndex]);

const outputEmoji = (result) => {
  const convertedResult = Array.from(result.scores);
  const coolEmojis = [
    "🦗👻🦗",
    "📖🌠📖",
    "🧟🧟‍♂️🧟‍♀️",
    "🧨💥🤯",
    "🥔🍟🥔",
    "🐈‍⬛🐈‍⬛🐈‍⬛ ",
    "⚜️😤⚜️",
  ];
  const biggestValue = Math.max(...convertedResult);
  const biggestValueIndex = convertedResult.indexOf(biggestValue);

  return coolEmojis[biggestValueIndex];
};

const createModel = async () => {
  const URL = "http://localhost:3000/model/";
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();

  return recognizer;
};

const listen = async (options, actionCB) => {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // get class labels

  // listen() takes two arguments:
  // 1. A callback function that is invoked anytime a word is recognized.
  // 2. A configuration object with adjustable fields
  recognizer.listen((result) => actionCB(result, classLabels), options);

  // Stop the recognition in 5 seconds.
  // setTimeout(() => recognizer.stopListening(), 5000);
};

const options = {
  includeSpectrogram: true, // in case listen should return result.spectrogram
  probabilityThreshold: 0.75,
  invokeCallbackOnNoiseAndUnknown: true,
  overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
};

function App() {
  const [emoji, setEmoji] = useState("🦗👻🦗");

  const listenToEmoji = (result) => {
    const emoji = outputEmoji(result);
    if (emoji !== "🦗👻🦗") {
      setEmoji(emoji);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Super Voice to Emoji of Destiny!</h1>
        <h2 style={{ fontSize: 70 }}>{emoji}</h2>
      </header>
      <button onClick={() => listen(options, listenToEmoji)}>START LISTEN!</button>
    </div>
  );
}

export default App;
