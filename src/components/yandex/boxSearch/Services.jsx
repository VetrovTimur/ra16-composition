import React from 'react'

export const Services = () => {

  return (
    <ul className='listServ'>
        {
            [...Array(8)].map((_, index) => (
                <li key={index}>Элемент</li>
            ))
        }
    </ul>
  )
}
