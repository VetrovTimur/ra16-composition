import React from 'react'
import { BoxNews } from './boxNews/BoxNews';
import { BoxSearch } from './boxSearch/BoxSearch';
import { BoxWidgets } from './boxWidgets/BoxWidgets';

export const Yandex = () => {
  return (
    <div className='contaianerYa'>
        <BoxNews />
        <BoxSearch />
        <BoxWidgets />
    </div>
  )
}
