import React from 'react'

export const ActiveNews = (props) => {
    const {arrActiveNews} = props;
  return (
   <div className='boxActiveNews'>
    {
        arrActiveNews.map((item, index) => 
            <div key={index} className='activeNews'>
                <div>{item.icon}</div>
                <div>
                    <a href={item.url}>{item.title}</a>
                </div>
            </div>
        )
    }
   </div>
  )
}
