import React from 'react';
import { RecoilRoot } from 'recoil';
// import {RecoilRoot} from 'recoil';
import './App.css';
import { CharacterCounter } from './CharacterCounter';
import { People } from './People';

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter />
        <People />
      </div>
    </RecoilRoot>
  );
}

export default App;
