import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";

interface TodoItemProps {jghj
    item: {
        id: number;
        text: string;
        date: string;
        completed: boolean;
        isEditing?: boolean;
    };
    deleteTask: (id: number) => void;
    toggleCompleted: (id: number) => void;
    updateTask: (id: number, newText: string, newDate: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, deleteTask, toggleCompleted, updateTask }) => {
    function handleChange() {
        toggleCompleted(item.id);
    }

    return (
        <>
            <div className='row justify-content-evenly '>
                <input
                    type='checkbox'
                    className='col-3 my-2 form-check-input'
                    checked={item.completed}
                    onChange={handleChange}
                />

                <span className={`col-3 my-2 ${item.completed ? 'completed-task' : ''}`}>
                    {item.completed ? <del>{item.text}</del> : item.text}
                </span>

                <span className={`col-3 my-2 ${item.completed ? 'completed-task' : ''}`}>
                    {item.completed ? <del>{item.date}</del> : item.date}
                </span>

                <div className='col-3 my-2'>
                    <CiEdit
                        size={30}
                        color='blue'
                        style={{ cursor: 'pointer', marginRight: '20px' }}
                        onClick={() => updateTask(item.id, item.text, item.date)}
                    />

                    <MdDeleteOutline
                        size={30}
                        color='#ff0066'
                        onClick={() => deleteTask(item.id)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </>
    );
};

export default TodoItem;
