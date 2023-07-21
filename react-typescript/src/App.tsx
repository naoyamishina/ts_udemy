import React from 'react';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import EventComponent from './components/EventComponent';
import PropsComponent from './components/PropsComponent';
import FCPropsComponent from './components/FCPropsComponent';

const App = () => {
  return (
    <div className="App">
      <UseStateComponent />
      <EventComponent/>
      <PropsComponent name="田中"/>
      <FCPropsComponent name="FC田中"/>
    </div>
  );
}

export default App;
