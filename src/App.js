import React, {useState} from 'react';
import './App.css';

function App() {
  

  const [text, setText] = useState("")

  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }
  
  function countWords(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(words => words !== "").length;
  }

  return (
    <div className="App">
      <h1>Check How Fast You Type</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining: seconds</h4>
      <button onClick={() => console.log(countWords(text))}>Start</button>
      <h1>Word Count:</h1>
      <h3>Words per Second:</h3>
    </div>
  );
}

export default App;
