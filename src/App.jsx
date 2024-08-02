// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import { Card } from './components/Card'
import { CardImg } from './components/CardImg'
import { Cards } from './components/Cards'
import { Yandex } from './components/yandex/Yandex'

function App() {


  return (
    <>
      <Yandex />
      <Cards> 
          <Card title='Title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit.' img='false'/>
          <CardImg title='Title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit.' img='false'/>
      </Cards>
    </>
  )
}

export default App
 