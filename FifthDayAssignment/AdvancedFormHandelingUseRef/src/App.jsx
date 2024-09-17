import { useState } from 'react'

import './App.css'
import DynamicInputFocus from './components/dynamicInputfocus'
import RealTimeValidationForm from './components/realTimeValidationForm'
import CustomFormSubmission from './components/customFormSubmission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicInputFocus/>
      <RealTimeValidationForm/>
      <CustomFormSubmission/>
    </>
  )
}

export default App
