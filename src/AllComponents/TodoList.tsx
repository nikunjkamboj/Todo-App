
import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem.tsx';
import EditTodo from './EditTodo.tsx';
<<<<<<< HEAD
import { useTodoContext } from '../TodoContextProvider.tsx';

const TodoList: React.FC = () => {
    const { tasks, addTask, deleteTask, toggleCompleted, updateTask } = useTodoContext();
    const [text, setText] = React.useState<string>('');
    const [dueDate, setDueDate] = React.useState<string>('');

    function addTaskHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
=======


interface Task {
    id: number;
    text: string;
    date: string;
    completed: boolean;
    isEditing?: boolean;
}


const TodoList: React.FC = () => {

    function addTaskHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
        if (!text.trim() || !dueDate) {
            alert('Please enter both the Todo and Todo Date');
            return;
        }
<<<<<<< HEAD
        addTask(text, dueDate);
=======
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false,
            date: dueDate,
        };
        setTasks([...tasks, newTask]);
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
        setText('');
        setDueDate('');
    }

<<<<<<< HEAD
=======
    function deleteTask(id: number) {
        setTasks(tasks.filter(item => item.id !== id));
    }

    function toggleCompleted(id: number) {
        setTasks(tasks.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
    }


    function updateTask(id: number, newText: string, newDate: string) {
        setTasks(tasks.map(item => (item.id === id ? { ...item, text: newText, date: newDate, isEditing: !item.isEditing } : item)));
    }



>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
    return (
        <>
         
            <div className="todo-list">
<<<<<<< HEAD
                <form name="inputForm" className="mainLayout" onSubmit={addTaskHandler}>
=======
                <form name="inputForm" className="mainLayout" onSubmit={addTask}>
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
                    <input
                        className="inputAdd"
                        type="text"
                        placeholder="Add an Item"
<<<<<<< HEAD
                        name="TodoInput"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
=======
                        name='TodoInput'
                        value={text}
                        onChange={(e) => setText(e.target.value)}

>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
                    />

                    <input
                        className="inputDate"
                        type="date"
<<<<<<< HEAD
                        name="todoDate"
                        value={dueDate}  // Use the controlled component pattern
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    <button className="buttonSubmit btn btn-primary" type="submit">
                        Add
                    </button>
                </form>
=======
                        name='todoDate'
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    <button
                        className="buttonSubmit btn btn-primary"
                        type="submit">
                        Add
                    </button>
                </form>

<<<<<<< HEAD
               

>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
                    {tasks.map((item) =>
                        item.isEditing ? (
                            <EditTodo key={item.id} item={item} updateTask={(newText, newDate) => updateTask(item.id, newText, newDate)} />
                        ) : (
<<<<<<< HEAD
                            // <TodoItem
                            //     key={item.id}
                            //     item={item}
                            //     deleteTask={() => deleteTask(item.id)}  // Ensure deleteTask is called correctly
                            //     toggleCompleted={() => toggleCompleted(item.id)}  // Ensure toggleCompleted is called correctly
                            //     updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}
                            // />
                            <></>
                        )
                    )}
=======
                            <TodoItem
                                key={item.id}
                                item={item}
<<<<<<< HEAD
                                deleteTask={() => deleteTask(item.id)}  // Ensure deleteTask is called correctly
                                toggleCompleted={() => toggleCompleted(item.id)}  // Ensure toggleCompleted is called correctly
                                updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}
                            />
                        )
                    )}
                   
=======
                                deleteTask={deleteTask}
                                toggleCompleted={toggleCompleted}
                                updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}

                            />
                        )
                ))}
>>>>>>> parent of fe361ff (context api and seperate ts files)
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
            </div>
           
        </>
    );
};

export default TodoList;
