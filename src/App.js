import React from 'react'
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Main from './Components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
