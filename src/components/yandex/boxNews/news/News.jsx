import React from 'react'
import { ActiveNews } from './ActiveNews';

export const News = (props) => {
  const {data} = props;
  let arrFilter = data.filter(item => item.active === true);
  let arrActiveNews = arrFilter[0].content;


  return (
    <div className='boxNews'>
      <div className='boxTitleNews'>
        {
          data.map((item) => 
            <div key={item.id}>
              {item.name}
            </div>
          )
        }
        <div>Дата</div>
      </div>
      <ActiveNews arrActiveNews={arrActiveNews}/>
    </div>
  )
}
