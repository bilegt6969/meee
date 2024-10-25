import React from 'react'
import {News} from '../part3/data'

function page() {
  return (
    <div>

        {News.Content.map((item)=>(<h1>{item.description}</h1>))}

        
      
    </div>
  )
}

export default page
