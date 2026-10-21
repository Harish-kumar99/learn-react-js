import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-blue-700 p-4 rounded-2xl'>Tailwind test</h1>
      <div className="flex flex-wrap gap-4">
        <Card name="Harish" price="100" />
        <Card name="Manish" price="200"/>
        <Card />
      </div>
    </>
  )
}

export default App
