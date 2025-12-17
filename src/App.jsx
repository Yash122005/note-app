import { useState } from 'react'
import { Footer } from './Footer'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='flex flex-col'
    style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        boxShadow: 'inset 0 0 100px rgba(100, 200, 255, 0.1)'
      }}>
    <div className='min-h-screen lg:flex text-white relative overflow-hidden'>
      
      {/* Decorative light effects */}
      {/* <div className='absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse'></div>
      <div className='absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse'></div> */}

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start relative z-10'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded bg-gray-900 border-gray-700 text-white'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded bg-gray-900 border-gray-700 text-white'
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-gradient-to-r from-blue-500 to-purple-600 active:scale-95 font-medium w-full outline-none text-white px-5 py-2 rounded hover:shadow-lg hover:shadow-purple-500/50 transition'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 border-gray-700 p-10 relative z-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default App