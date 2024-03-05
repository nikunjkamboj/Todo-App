import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TodoList from './AllComponents/TodoList.tsx';
import { TodoProvider } from './TodoContextProvider.tsx';

const Main: React.FC = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <TodoProvider>
            <div className='text-center d-flex justify-content-between align-items-center'>
                <h3 className='text-success text-center'style={{width:'80%'}}>TODO APP</h3>
                <div className='text-end'>
                    {isAuthenticated && <span className='text-primary p-2'>Hello {user?.nickname ?? 'Guest'}</span>}
                    {isAuthenticated ? (
                        <button className='btn btn-danger m-2' onClick={(e) => logout()}>Logout</button>
                    ) : (
                        <button className='btn btn-success m-2' onClick={(e) => loginWithRedirect()}>Login</button>
                    )}
                </div>
            </div>
            <TodoList />
        </TodoProvider>
    );
};

export default Main;
