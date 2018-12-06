import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loremIpsum from "lorem-ipsum";

console.log(loremIpsum);

const output = loremIpsum({
  count: 1                      // Number of words, sentences, or paragraphs to generate.
  , units: 'sentences'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 5         // Minimum words per sentence.
  , sentenceUpperBound: 15        // Maximum words per sentence.
  , paragraphLowerBound: 3        // Minimum sentences per paragraph.
  , paragraphUpperBound: 7        // Maximum sentences per paragraph.                // The character to insert between paragraphs. Defaults to default EOL for your OS.
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {output}
      </div>
    );
  }
}

export default App;
