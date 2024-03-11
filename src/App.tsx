import React from 'react';
import Main from './Main.tsx';
import { TodoProvider } from './TodoContextProvider.tsx';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Main />
    </TodoProvider>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
