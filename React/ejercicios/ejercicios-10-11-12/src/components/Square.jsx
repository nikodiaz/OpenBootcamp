import React from 'react'

export default function Square({square, changeColor, stopChangeColor}) {

  return (
    <div style={{
        width: square.width,
        height: square.height,
        backgroundColor: square.backgroundColor
        }}
        onMouseEnter={changeColor}
        onMouseLeave={stopChangeColor}
        onDoubleClick={stopChangeColor}
        ></div>
  )
}
