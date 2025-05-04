import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' text-3xl text-center font-bold text-[#5c5c5c] '>
      hello to pre made compo
      <h1>
        here is compo
      </h1>

      <h2>
        check everything is working.
      </h2>
     </div>
    </>
  )
}

export default App
