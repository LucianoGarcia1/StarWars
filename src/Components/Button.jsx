import React from 'react'

export const Button = ({children, onClick}) => {
  return (
    <button className="c-button fadeUp" onClick={onClick}>
        {children}
    </button>
  )
}
