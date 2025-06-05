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
import Chips from './components/Chips'
import GuessNum from './components/GuessNum'
import ToolTip from './components/ToolTip'
import Validation from './components/Validation'
import PersistValue from './components/useRef/Ref'
import TimerRef from './components/useRef/TimerRef'
import Form from './components/Form'
import DarkMode from './components/DarkMode'
import Slider from './components/Slider'

function App() {


  return (
    <div>
      {/* <Navbar /> */}
      {/* <Items  /> */}
      {/* <To_DoList/> */}
      {/* <TabList/> */}
      {/* <Pagination/> */}
      {/* <ProgressBar/> */}
      {/* <Accordian /> */}
      {/* <Chips/> */}
      {/* <GuessNum/> */}
      {/* <ToolTip/> */}
      {/* <Validation/> */}
      {/* <UseEffect/>  */}
      {/* <UnMount/> */}
      {/* <PersistValue /> */}
      {/* <TimerRef/> */}
      {/* <Form /> */}
      {/* <DarkMode/> */}
      <Slider />
    </div>
  )
}

export default App
