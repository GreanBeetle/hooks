import React from 'react'
import './componentStyles.css'

const NasaInfoBox = props => {
  return (
    <div className="Box">
      <h2 className="Red">NASA stuff</h2>
      <div>
        <button onClick={() => props.changeToWelcome()} className="Button">go back</button>
        <button onClick={() => console.log('nasa stuff')} className="Button">nasa API call</button>
      </div>
    </div>
  )
}

export default NasaInfoBox
