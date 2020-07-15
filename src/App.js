import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome'

const App = props => {
  
  const [currentComponent, setCurrentComponent] = useState('welcome')

  // let content = <div className="Centered"><p>i am the hooks app</p></div>
  let content = <p>i am the hooks app</p>
  
  if (currentComponent === 'welcome') content = <Welcome />

  return (
    <div className="Centered">{content}</div>
  )
}

export default App;
