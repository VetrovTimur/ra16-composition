import React from 'react'

export const Widget = ({children}) => {
  return (
    <div className='widget'>
        <h5>Title</h5>
        {children}
    </div>
  )
}
