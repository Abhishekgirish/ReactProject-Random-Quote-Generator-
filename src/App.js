import { useEffect, useState} from 'react';
import './App.css';
import React from 'react';
function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();}, []);
  const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text:data.content,
        author:data.author,
      });
    });
  };
  return (
    <div className= "App" >
      <div id ="quote-box">
        <p id ="text">{quoteInfo.text}</p>
        <p id ="author">{quoteInfo.author}</p>
        <button id = "new-quote" onClick={getQuote}>
          New Quote 
        </button>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='} id="tweet-quote">
        </a>
      </div>
    </div>
  )
}
export default App;