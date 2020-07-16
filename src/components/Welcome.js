import React, { useState, useEffect } from 'react'
import './componentStyles.css'

const Welcome = props => {
  /* 
  **************************************************************************
  STATE
  useState always returns two things
  first, is the current state of exampleThing. you can call exampleThing whatever you want.
  it's simply the value that is returned
  second, it returns the equivalent of setState for the exampleThing, e.g. setExampleThingValue

  you don't have to use useState multiple times. you can do this
  const [stuff, setStuff] = useState({a:1, b:2, c:3})
  however when you use setStuff here, like this setStuff({c:99}), it writes over the previous values, 
  so what you end up doing is using a spread operator, e.g. setStuff({ ...state, c:99}), multiple times,
  which isn't particularly economical 
  **************************************************************************
  */
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

  /* 
  **************************************************************************
  COMPONENT WILL UNMOUNT 
  if you simply return a function in useEffect, but do nothing else, it is
  equivalent to componentWillUnmount. don't forget to pass an empty array as the second argument!  
  **************************************************************************
  */
  useEffect(() => {
    return () => alert('component will unmount')
  }, [])

/*
**************************************************************************
"CLEAN UP" COMPONENT
similar to component will unmount, this will run after component has mounted,
right before useEffect runs again, and before it runs again the next time, and the next, etc. 
the main difference here is that, in the second useEffect argument, we've specified a value to monitor
every time this value changes, the component will run the "clean up" method next time
this also runs before component unmounts 
**************************************************************************
*/
useEffect(()=> { return () => console.log('cleaning up...')}, [textToLog])
   
  return (
    <div className="Box">
      <h2>welcome component</h2>
      <p>{greeting}</p>
      <div>
        <button onClick={() => updateTextToLog()} className="Button">update component</button>
        <button onClick={() => props.changeToNasa()} className="Button">NASA</button>
      </div>
    </div>
  )
} 
  
/*
**************************************************************************
SHOULD COMPONENT UPDATE
React.memo(yourFunctionalComponentName) is the same as shouldComponentUpdate
it means the component will update only when its props change
to strictly dictate which new props allow the component to update,
pass a second argument, i.e. a function with prevProps and nextProps args, to React.memo
For example

React.memo(Welcome, (prevProps, nextProps) => nextProps.whatever === prevProps.whatever )
  return TRUE to DISABLE re-render
  return FALSE to ENABLE re-render
  note that this is counterintuitive and backwards
  also note that this is likely unnecessary, as React.memo handles this out of the box
**************************************************************************
*/
export default React.memo(Welcome)

  