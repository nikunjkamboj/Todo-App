
import React from 'react';
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

    function addTaskHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!text.trim() || !dueDate) {
            alert('Please enter both the Todo and Todo Date');
            return;
        }
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false,
            date: dueDate,
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
                <form name="inputForm" className="mainLayout" onSubmit={addTask}>
                    <input
                        className="inputAdd"
                        type="text"
                        placeholder="Add an Item"
                        name='TodoInput'
                        value={text}
                        onChange={(e) => setText(e.target.value)}

                    />

                    <input
                        className="inputDate"
                        type="date"
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
               

                    {tasks.map((item) =>
                        item.isEditing ? (
                            <EditTodo key={item.id} item={item} updateTask={(newText, newDate) => updateTask(item.id, newText, newDate)} />
                        ) : (
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
            </div>
           
        </>
    );
};

export default TodoList;
