import React from 'react'
import HelloWorld from './HelloWorld';

const about = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      
      {/* 2. Use your component like an HTML tag */}
      <HelloWorld /> 
    </div>
  )
}

export default about