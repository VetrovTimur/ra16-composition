import React from 'react'

export const StockMarket = (props) => {
  const {dataStock} = props;
  return (
    <div className='boxStock'>
      {
        dataStock.map((stock, index) => (
          <div key={index} className='itemStock'>
            <div>{stock.name}</div>
            <div>{stock.cost}</div>
            <div>{stock.ratio}</div>
          </div>
        ))
      }
    </div>
  )
}
