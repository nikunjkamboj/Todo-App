import React, { useState } from 'react';
<<<<<<< HEAD
import { EditTodoProps } from './ComponentsTypes.ts'

const EditTodo: React.FC<EditTodoProps> = ({ updateTask, item }) => {
    const [text, setText] = useState<string>(item.text);
    const [dueDate, setDueDate] = useState<string>(item.date);
=======


interface EditTodoProps {
    updateTask: (text: string, date: string, id: number) => void;
    item: {
        id: number;
        text: string;
        date: string;
        completed: boolean;
    };
}


const EditTodo: React.FC<EditTodoProps> = ({ updateTask, item }) => {
    const [text, setText] = useState<string>(item.text); 
    const [dueDate, setDueDate] = useState<string>(item.date); 
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f

    return (
        <>
            <form className="mainLayout">
                <input
                    className="inputAdd"
                    type="text"
                    required
                    value={text}
<<<<<<< HEAD
                    onChange={(e) => setText(e.target.value)} />
=======
                    onChange={(e) => setText(e.target.value)}
                />
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f

                <input
                    className="inputDate"
                    type="date"
                    required
                    value={dueDate}
<<<<<<< HEAD
                    onChange={(e) => setDueDate(e.target.value)} />

=======
                    onChange={(e) => setDueDate(e.target.value)}
                />
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
                <button
                    className=" UpdateButton buttonSubmit btn btn-primary"
                    onClick={() => updateTask(text, dueDate, item.id)}
                    type="button"> Update Todo
                </button>
            </form>
        </>
    );
};

export default EditTodo;