import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TodoList from './AllComponents/TodoList.tsx';
import { TodoProvider } from './TodoContextProvider.tsx';

const App: React.FC = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    //console.log(user);

    return (
        <TodoProvider>
            <>
                <div className='text-end'>
                    {isAuthenticated && <span className='text-primary p-2'>Hello {user?.nickname ?? 'Guest'}</span>}
                    {isAuthenticated ? (
                        <button className='btn btn-danger m-2' onClick={(e) => logout()}>Logout</button>
                    ) : (
                        <button className='btn btn-success m-2' onClick={(e) => loginWithRedirect()}>Login</button>
                    )}
                </div>
                <div className='text-center'>
                    <h3 className='mt-1 text-success'>TODO APP</h3>
                </div>
                <TodoList />
            </>
        </TodoProvider>
    );
};

export default App;
