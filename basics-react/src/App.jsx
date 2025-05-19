import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Items from './components/Items'
import { doctorsData } from './data/doctorData'
import To_DoList from './components/To_DoList'
import TabList from './components/TabList'
import Pagination from './components/pagination/Pagination'
import ProgressBar from './components/ProgressBar'
import Accordian from './components/Accordian'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Navbar />
      {/* <Items  /> */}
      {/* <To_DoList/>
      <TabList/>
      <Pagination/>
      <ProgressBar/> */}
      <Accordian />
    </div>
  )
}

export default App
