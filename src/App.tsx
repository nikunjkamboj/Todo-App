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

export default App
