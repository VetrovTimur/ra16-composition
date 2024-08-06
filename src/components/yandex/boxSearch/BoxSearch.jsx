import React from 'react'
import { Services } from './Services'
import { Search } from './Search'
import { Banner } from './Banner'
import './Search.css'

export const BoxSearch = () => {
  return (
    <div className='containerSearch'>
      <Services/>
      <Search/>
      <Banner/>
    </div>
  )
}
