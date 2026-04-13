import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TagComponent from './component/TagComponent'


const MAX_LENGTH = 10

function App() {

  const [listTag, setListTag] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e) => {

    if ( text.trim() > text) {
      if (listTag.includes(text.trim())) {
        setError("Duplicates")

      }

      if (listTag.length >= MAX_LENGTH) {
        setError("Can't Be More than 10")

      }

      console.log(e)
      // console.log(e.code)

      if (e.code === "Space") {

        setListTag([...listTag, text])
        setText("")
      }
    }

    // console.log(e)
    setText(e.target.value)
  }

  // const handleSpace = (e) => {

  //   // if(text.trim()===""){
  //   //   setError("Empty Is not considered")
  //   //   return
  //   // }


  // }

  const handleDelete = (index) => {
    setListTag((prev) => prev.slice(index, 1))
  }

  if (error) return <>{error}</>

  return (
    <>
      <div>
        <label>Enter Tag : </label>
        <input value={text}
          placeholder='Enter To Add'
          // onKeyDown={(e) => handleSpace(e)}
          type='text'
          onChange={(e) => handleChange(e)}
        >
        </input>
      </div>

      {(listTag.length > 0) && <TagComponent list={[history, listTag]} handleDelete={handleDelete} />}

    </>
  )
}

export default App
