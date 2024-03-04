import React, { createContext, useContext, useState } from 'react';
import {Task,TodoContextProps} from './Types.ts'

const TodoContext = createContext<TodoContextProps | undefined>(undefined);
export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (text: string, date: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false,
            date,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    const toggleCompleted = (id: number) => {
        setTasks(
            tasks.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
        );
    };

    const updateTask = (id: number, newText: string, newDate: string) => {
        setTasks(
            tasks.map((item) =>
                item.id === id ? { ...item, text: newText, date: newDate, isEditing: !item.isEditing } : item));};

    console.log('tasks in provider:', tasks); // for checking the tasks in the console

    return (
        <TodoContext.Provider value={{ tasks, addTask, deleteTask, toggleCompleted, updateTask }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => 
{
    const context = useContext(TodoContext);
    if (!context) 
    {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};
