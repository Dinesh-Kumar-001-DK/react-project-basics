import { Children, useState } from 'react'
import { LearnComponents } from './components/LearnComponents'
import { Header } from './components/Header'
import { StudentDetails } from './components/StudentDetails'
import { ChildernDetails } from './components/ChildernDetails'


function App() {
  const items=[
    {id:1,name:"item1"},
    {id:2,name:"item2"},
    {id:3,name:"item3"},
    {id:4,name:"item4"},
    {id:5,name:"item5"},
  ]

  return (
    <>
      {/* <LearnComponents/>
      <Header/>
      <div>hello every one </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <StudentDetails namedetails="dinesh" age={21} classdetails="3rd year"/>
      <hr />
      <StudentDetails namedetails="dinesh" age={21} />
      <hr />
      <StudentDetails namedetails="dinesh" age={21} classdetails="3rd year"/>
      <StudentDetails/>

      <ChildernDetails>
        
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        
      </ChildernDetails>

    </>
  )
}

export default App
