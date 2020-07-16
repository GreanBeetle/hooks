/* **************************************************************************
CUSTOM HOOK
begin the function name with "use"
this convention signals that this will be an http hook
************************************************************************** */
import { useState, useEffect } from 'react'

export const useComponent = (name, dependencies) => {
  const [component, setComponent] = useState(null)

  /* ************************************************************************** 
  when hooks are imported elsewhere, e.g. in app.js, they must be used at the top level
  of the function. that is, you can't use them inside a useEffect (lifecycle) method,
  or any other function, so we instead utilize useEffect here
  ************************************************************************** */
  useEffect(() => { 
    console.log('component hook, name:', name)
    if (name) setComponent(name)
  }, dependencies)
  /* dependencies will be either an empty arry [] or an array with vals [valA, valB, valC, etc]
  if these values change, useEffect will execute again
  or perhaps i need a bit more code before juggling dependencies */
 
  return [component, setComponent]
  /* with multiple state properties you can also return something to the effect of
  return [componentToDisplay, otherVal, thirdReturnVal, etc] */
}

/* **************************************************************************
ADDITIONAL HOOK 
here is another example of a custom hook that i've not yet implemented 
************************************************************************** */
export const useNASAapi = (url, dependencies) => {
  const [nasaData, setNasaData] = useState(null) 
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('use effect in NASA api call')
    setIsLoading(true)

    fetch(url)
      .then(res => {
        console.log('NASA response', res)
        setNasaData(res)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.log('error with NASA API request', err)
      })
  }, dependencies)

  console.log('nasaData', nasaData)
  return [nasaData, isLoading] 
}