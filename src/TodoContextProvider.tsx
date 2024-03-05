import React, { createContext, useContext, useEffect, useState } from 'react';
import { Task, TodoContextProps } from './Types.ts';

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getLocalItems = () => {
    let list = localStorage.getItem('Lists');
    if (list) {
      return JSON.parse(localStorage.getItem('Lists')!) as Task[];
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState<Task[]>(getLocalItems());

  const addTask = (text: string, date: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      date,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem('Lists', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const updateTask = (id: number, newText: string, newDate: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, text: newText, date: newDate, isEditing: !item.isEditing } : item
      )
    );
  };

  console.log('tasks in provider:', tasks);

  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask, toggleCompleted, updateTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
