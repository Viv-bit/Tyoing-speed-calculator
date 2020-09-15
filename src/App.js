import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 15

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)


  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }
  
  function countWords(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(words => words !== "").length;
  }

  function startGame() {
    setIsTimeRuning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  function endGame() {
    setIsTimeRuning(false)
    setWordCount(countWords(text))
  }


  useEffect(() => {
    if(isTimeRuning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }else if(timeRemaining === 0) {
      endGame()
    }

  }, [timeRemaining, isTimeRuning])

  return (
    <div className="App">
      <h1>Check How Fast You Type</h1>
      <textarea 
        ref={textBoxRef}
        onChange={handleChange}
        disabled={!isTimeRuning}
        value={text} />

      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRuning}
        >Start
      </button>
      <h1>Word Count: {wordCount} </h1>
      <h3>Words per Second:</h3>
    </div>
  );
}

export default App;
