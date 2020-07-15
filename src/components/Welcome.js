import React, { useState, useEffect } from 'react'
import './componentStyles.css'

const Welcome = props => {
  
  const [greeting, setGreeting] = useState('mounting component ...')
  const [textToLog, setTextToLog] = useState('')
  
  /* 
  **************************************************************************
  COMPONENT DID MOUNT 
  this useEffect hook is equivalent to componentDidMount. note that useEffect
  accepts two arguments. the first is a function. the second is an array of values.
  if the array has named values, e.g. prop.something or prop.somethingElse, then useEffect
  will only run again if one of those values changes. 
  
  if, however, the second argument is an empty array, like so [], then useEffect will run 
  only once, when the component mounts 
  **************************************************************************
  */
  useEffect(()=> {
    setTimeout( () => {
      setGreeting('component did mount')
    }, 1500)
  }, [])

  /* 
  **************************************************************************
  COMPONENT DID UPDATE 
  same as the first useEffect hook, except that here we provide a second argument to
  useEffect. in this case the arg is [textToLog], a value that we have stored in state.
  this useEffect will run every time the component mounts. and every time the value of textToLog
  changes. 
  
  normally this completely takes the place of the first useEffect. however, it is remaining here
  for demonstration purposes 
  **************************************************************************
  */
  useEffect(()=> {
    console.log(textToLog)
  }, [textToLog])

  const updateTextToLog = () => setTextToLog(`component has updated! ${Math.random()}`)
   
  return (
    <div className="Box">
      <h2>welcome component</h2>
      <p>{greeting}</p>
      <button onClick={() => updateTextToLog()}>update component</button>
    </div>
  )
} 
  

export default Welcome