import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import NasaInfoBox from './components/NasaInfoBox'

const App = () => {
  
  const [currentComponent, setCurrentComponent] = useState('welcome')

  let content = <p>hooks app</p>
  
  if (currentComponent === 'welcome') content = <Welcome changeToNasa={() => changeToNasa()} />
  else if (currentComponent === 'nasa') content = <NasaInfoBox />

  const changeToNasa = () => setCurrentComponent('nasa')

  return (
    <div className="Centered">{content}</div>
  )
}

export default App;
