import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TodoItem from './AllComponents/TodoItem.tsx';
import { useTodoContext } from './TodoContextProvider.tsx';
import Home from './Home.tsx';
import CardView from './AllComponents/CardView.tsx';
import TodoList from './AllComponents/TodoList.tsx';
import ReactPaginate from 'react-paginate';
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import './Main.css';

//done with the task

const Main: React.FC = () => {
    const { tasks, deleteTask, toggleCompleted, updateTask } = useTodoContext();
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
    const { theme, setTheme } = useTodoContext();
    const [view, setView] = useState<string>('List'); // Default view is 'List'
    const [PageNumber, setPageNumber] = useState(0);
    const [filter, setFilter] = useState<string>('All');
    const [search, setSearch] = useState<string>("");

    
    const itemPerPage: number = 8;
    const pageVisited: number = PageNumber * itemPerPage;
    const PageCount: number = Math.ceil(tasks.length / itemPerPage);

    const completedTasks = tasks.filter(task => task.completed);
    const incompletedTasks = tasks.filter(task => !task.completed);
    const filteredTasks = filter === 'Completed' ? completedTasks : filter === 'Incompleted' ? incompletedTasks : tasks;
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const themeToggle = () => {
        setTheme(!theme);
    };
    const switchView = () => {
        setView(view === 'List' ? 'Card' : 'List');
    };
    const renderNavbar = () => {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={themeToggle}>
                                Theme
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => setFilter('All')}>All</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setFilter('Completed')}>Completed</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setFilter('Incompleted')}>Incompleted</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={switchView}>
                                {view === 'Card' ? 'List View' : 'Card View'}
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }} />

                    </div>
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
        <>
            <div style={{ backgroundColor: theme ? '#343a40' : 'white', minHeight: '100vh', color: theme ? 'white' : 'black', transition: 'background-color 0.3s ease' }}>
                {renderNavbar()}
                {!isAuthenticated ? (
                    <Home />
                ) : (
                    <div className='row mx-3'>
                        <TodoList />
                        {view === 'List' ? (
                            filteredTasks
                                .filter((val) => {
                                    if (search === '') {
                                        return val;
                                    } else if (val.text.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .slice(pageVisited, pageVisited + itemPerPage)
                                .map((item) => (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        deleteTask={() => deleteTask(item.id)}
                                        toggleCompleted={() => toggleCompleted(item.id)}
                                        updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}
                                    />
                                ))
                        ) : (
                            filteredTasks
                                .filter((val) => {
                                    if (search === '') {
                                        return val;
                                    } else if (val.text.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .slice(pageVisited, pageVisited + itemPerPage)
                                .map((item) => (
                                    <CardView
                                        key={item.id}
                                        item={item}
                                        deleteTask={deleteTask}
                                        toggleCompleted={toggleCompleted}
                                        updateTask={updateTask}
                                    />
                                ))
                        )}
                        {tasks.length > itemPerPage + 1 && (
                            <div className='pagination'>
                                <ReactPaginate
                                    previousLabel={<GiPreviousButton size={20} color=' #ff9933' />}
                                    nextLabel={<GiNextButton size={20} color=' #ff9933' />}
                                    pageCount={PageCount}
                                    onPageChange={changePage}
                                    containerClassName={'paginationContainer'}
                                    previousLinkClassName={'prevBtn'}
                                    nextLinkClassName={'nextBtn'}
                                    activeClassName={'activePagination'}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Main;
