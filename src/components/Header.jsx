import React from 'react'
import '../App.css'
export const Header = () => {
  const itmes=["item1","item2",'item3']
  return (
    <div>
        <h1 className='bannertext'>learn react</h1>
        {/* javascript expression in react */}
        <p>25+25 = {25+25}</p>
        <ul>
          {itmes.map((item,index)=>(
            <li>{item}</li>
          ))}
        </ul>

    


    </div>
  )

}
 