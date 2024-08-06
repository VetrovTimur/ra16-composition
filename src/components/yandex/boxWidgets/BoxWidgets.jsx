import React from 'react'

import { Widget } from './Widget';
import { ContentWidget } from './ContentWidget';

import './Widget.css'

export const BoxWidgets = () => {
  return (
    <div className='containerWidget'>
      <Widget title='Tags widget'> 
        <ContentWidget/>
      </Widget>
      <Widget title='Socials widget'> 
        <ContentWidget/>
      </Widget>
      <Widget title='Socials widget'> 
        <ContentWidget/>
      </Widget>
      <Widget title='Socials widget'> 
        <ContentWidget />
      </Widget>
      <Widget title='Socials widget'> 
        <ContentWidget />
      </Widget>
    </div>
  )
}
