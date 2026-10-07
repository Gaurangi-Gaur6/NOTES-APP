import { X } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [tasks, setTasks] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...tasks]

    copyTask.push({ title, detail })

    setTasks(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...tasks]
    copyTask.splice(idx, 1)

    setTasks(copyTask)
  }

  return (
    <div className='h-screen bg-blue-200 text-white lg:flex'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex flex-col gap-4 items-start p-10 lg:w-1/2'>

        {/* FIRST INPUT FOR HEADING */}
        <input
          className='px-5 py-2 rounded border-2 w-full outline-none font-medium border-black text-blue-900'
          type='text'
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}
        />

        {/* DETAILED INPUT */}
        <textarea
          className='h-20 w-full px-5 py-2 flex items-start rounded border-2 outline-none font-medium border-black text-blue-900'
          placeholder='Write Details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);

          }}
        />

        <button
          className='bg-white text-blue-950 w-full px-5 py-2 cursor-pointer rounded outline-none font-medium active:scale-95 active:bg-gray-300'
        >
          Add notes
        </button>

        <div className='p-4 bg-blue-100 rounded-xl mt-20 ml-40'>
          <h1 className='text-gray-400 font-bold text-4xl'>
            "YOUR THOUGHTS,</h1>
          <p className='text-gray-500 font-medium text-2xl pl-5 mt-2'>
            one note at a time"</p>
          <h1 className='pl-5 mt-3 font-semibold text-gray-500 text-xl'>
            little notes, big ideas!</h1>
        </div>


      </form>

      <div className='p-10 lg:border-2 lg:w-1/2'>
        <h1 className='text-3xl font-bold text-black'>
          Recent Notes</h1>

        <div className='gap-5 justify-start items-start flex flex-wrap mt-5 h-[90%] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-width:none'>
          {tasks.map(function (elem, idx) {

            return <div key={idx} className='relative h-52 w-40 rounded-2xl text-black p-4
            bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-cover shadow-xl'>

              <div className="flex flex-col items-start gap-1">

                <button onClick={() => {
                  deleteNote(idx)
                }} className='bg-gray-400 text-white cursor-pointer active:scale-95 w-fit absolute mt-2.5 ml-29'>
                  <X size={17} />
                </button>

                <h3 className='mt-1.5 leading-tight text-lg font-bold'>
                  {elem.title}
                </h3>
              </div>

              <div>
                <h4 className='leading-tight text-sm font-medium text-gray-700 whitespace-pre-line'>
                  {elem.detail}
                </h4>
              </div>


            </div>
          })}

        </div>
      </div>

    </div >

  )
}

export default App
