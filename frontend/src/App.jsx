import { useState } from 'react'
import './App.css'
import CompoRoute from './Routes/CompoRoute'
import Carousel from './Component/Carausel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' text-3xl text-center font-bold text-[#5c5c5c] '>
      hello to pre made compo
     <CompoRoute/>
     </div>

     <div>
      <Carousel className='border'  slides={[
         <img src="/image1.jpg" alt="Slide 1" className="w-full" />,
         <img src="/image2.jpg" alt="Slide 2" className="w-full" />,
         <img src="/image3.jpg" alt="Slide 3" className="w-full" />
      ]}
      autoSlide
      autoSlideInterval={4000}

      />
     </div>
    </>
  )
}

export default App
