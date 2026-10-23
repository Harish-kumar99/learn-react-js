import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  // ref hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+[]{};:',.<>/?`~|"
    }
    for (let index = 1; index <= length; index++) {
      const inx = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(inx);
    }
    setPass(pass)
  }, [length, numberAllowed, charAllowed, setPass])

  const copyPassToClickboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(pass)

  },[pass])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 bg-gray-800 text-orange-500 text-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div
          className='flex-shadow 
          rounded-lg overflow-hidden mb-4'
        >
          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3 bg-white rounded-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0
          hover:bg-blue-800
          active:scale-95 active:bg-blue-900
          transition-all duration-150
          '
          onClick={copyPassToClickboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label> Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label> Numbers </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label> Character </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
