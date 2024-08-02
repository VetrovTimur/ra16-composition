import React from 'react'

export const Advertising = (props) => {
  const {dataAdvent} = props;
  return (
    <div>
      {
        dataAdvent.map((ad, index) => 
          <div key={index}>
            <img src={ad.img} alt={ad.alt} />
            <h2>{ad.title}</h2>
            <h3>{ad.subtitle}</h3>
          </div>
        )
      }
    </div>
  )
}
