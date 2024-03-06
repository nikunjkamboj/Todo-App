import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TodoList from './AllComponents/TodoList.tsx';
import { useTodoContext } from './TodoContextProvider.tsx';
import Home from './Home.tsx';

const Main: React.FC = () => {
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
    const { theme, setTheme } = useTodoContext();

    const themeToggle = () => {
        setTheme(!theme);
    };

    const appStyles = {
        backgroundColor: theme ? '#343a40' : 'white',
        minHeight: '100vh',
        color: theme ? 'white' : 'black',
      
        transition: 'background-color 0.3s ease',
    };

    const renderNavbar = () => {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className=" nav-link"  href="#" onClick={themeToggle}>
                                Theme
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Completed</a></li>
                                <li><a className="dropdown-item" href="#">Incompleted</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Views
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" >List</a></li>
                                <li><a className="dropdown-item" href="#">Card</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {isAuthenticated ? (
                        <>
                            <div className='text-center d-flex justify-content-between align-items-center'>
                                <span className='text-primary'>Hello {user?.nickname ?? 'Guest'}</span>
                                <button className='btn btn-danger m-2' onClick={(e) => logout()}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-success" onClick={(e) => loginWithPopup()}>Login</button>
                        </>
                    )}
                </div>
            </nav>
        );
    };

    return (
        <div style={appStyles}>
            {renderNavbar()}
            {!isAuthenticated ? <Home /> : <TodoList />}
        </div>
    );
};

export default Main;
