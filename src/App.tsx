import React from 'react'
import TodoList from './AllComponents/TodoList.tsx'

const App: React.FC = () => {
  return (
    <>
      <div className='text-center'>
        <h3 className=' mt-1 text-success'>TODO APP</h3>
      </div>
      <TodoList/>

    </>
  )
}

export default App
