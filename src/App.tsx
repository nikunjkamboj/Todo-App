<<<<<<< HEAD
import React from 'react';
import Main from './Main.tsx';


const App: React.FC = () => {

    return (
        <>
        <Main/>
        </>
        
    );
};
=======
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
>>>>>>> parent of fe361ff (context api and seperate ts files)

export default App
