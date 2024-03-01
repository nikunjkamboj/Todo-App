import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem.tsx';
import EditTodo from './EditTodo.tsx';

interface Task {
    id: number;
    text: string;
    date: string;
    completed: boolean;
    isEditing?: boolean;
}


const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            text: 'hello world',
            date: '2024-02-28',
            completed: true,
        },
        {
            id: 2,
            text: 'india',
            date: '2024-02-23',
            completed: false,
        },
    ]);

    const [text, setText] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');


    function addTask(text: string, date: string) {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false,
            date,
        };

        setTasks([...tasks, newTask]);
        setText('');
        setDueDate('');
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter(item => item.id !== id));
    }

    function toggleCompleted(id: number) {
        setTasks(tasks.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
    }

    
    function updateTask(id: number, newText: string, newDate: string) {
        setTasks(tasks.map(item => (item.id === id ? { ...item, text: newText, date: newDate, isEditing: !item.isEditing } : item)));
    }



    return (
        <>
            <div className="todo-list">
                <form className="mainLayout">
                    <input
                        className="inputAdd"
                        type="text"
                        placeholder="Add an Item"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <input
                        className="inputDate"
                        type="date"
                        required
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    <button
                        className="buttonSubmit btn btn-primary"
                        onClick={() => addTask(text, dueDate)}
                        type="button">
                        Add
                    </button>
                </form>

                {tasks.map(item => (
                    item.isEditing ?
                        (
                            <EditTodo
                                key={item.id}
                                item={item}
                                updateTask={(newText, newDate) => updateTask(item.id, newText, newDate)}
                            />
                        ) : (
                            <TodoItem
                                key={item.id}
                                item={item}
                                deleteTask={deleteTask}
                                toggleCompleted={toggleCompleted}
                                updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}

                            />
                        )
                ))}
            </div>
        </>
    );
};

export default TodoList;
