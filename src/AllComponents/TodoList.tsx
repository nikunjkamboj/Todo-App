import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem.tsx';
import EditTodo from './EditTodo.tsx';
import { useTodoContext } from '../TodoContextProvider.tsx';

const TodoList: React.FC = () => {
    const { tasks, addTask, deleteTask, toggleCompleted, updateTask } = useTodoContext();
    const [text, setText] = React.useState<string>('');
    const [dueDate, setDueDate] = React.useState<string>('');

    function addTaskHandler(e: React.FormEvent<HTMLFormElement>) 
    {
        e.preventDefault();
        if (!text.trim() || !dueDate) {
            alert('Please enter both the Todo and Todo Date');
            return;
        }
        addTask(text, dueDate);
        setText('');
        setDueDate('');
    }

    return (
        <>
            <div className="todo-list">
                <form name="inputForm" className="mainLayout" onSubmit={addTaskHandler}>
                    <input
                        className="inputAdd"
                        type="text"
                        placeholder="Add an Item"
                        name="TodoInput"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <input
                        className="inputDate"
                        type="date"
                        name="todoDate"
                        value={dueDate}  // Use the controlled component pattern
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    <button className="buttonSubmit btn btn-primary" type="submit">
                        Add
                    </button>
                </form>

                {tasks.map((item) =>
                    item.isEditing ? (
                        <EditTodo key={item.id} item={item} updateTask={(newText, newDate) => updateTask(item.id, newText, newDate)} />
                    ) : (
                        <TodoItem
                            key={item.id}
                            item={item}
                            deleteTask={() => deleteTask(item.id)}  // Ensure deleteTask is called correctly
                            toggleCompleted={() => toggleCompleted(item.id)}  // Ensure toggleCompleted is called correctly
                            updateTask={(id, newText, newDate) => updateTask(id, newText, newDate)}
                        />
                    )
                )}
            </div>
        </>
    );
};

export default TodoList;
