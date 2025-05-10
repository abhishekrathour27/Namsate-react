import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Items from './components/Items'
import { doctorsData } from './data/doctorData'
import To_DoList from './components/To_DoList'
import TabList from './components/TabList'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div>
      <Navbar />
      {/* <Items  /> */}
      <To_DoList/>
      <TabList/>
    </div>
  )
}

export default App
