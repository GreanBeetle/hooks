import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import NasaInfoBox from './components/NasaInfoBox'
import { useComponent } from './hooks/componentHook'

const App = () => {
  /* **************************************************************************
  STATE from CUSTOM HOOK
  here i'm retrieving the component name to display and the setComponent function.
  i'm passing setComponent as a prop however, I'm curious what it would take 
  to import setComponent directly within either <Welcome/> or <NasaInfoBox/>
  perhaps this is where redux would come in ...     
  ************************************************************************** */
  const [component, setComponent] = useComponent('welcome', [])

  let content  
  if (component === 'welcome') content = <Welcome changeToNasa={() => setComponent('nasa')} />
  else if (component === 'nasa') content = <NasaInfoBox changeToWelcome={() => setComponent('welcome')} />
  else content = <p>hooks app</p>

  return ( <div className="Centered">{content}</div> )
}

export default App;
