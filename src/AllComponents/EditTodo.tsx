import React, { useState } from 'react';


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

    return (
        <>
            <form className="mainLayout">
                <input
                    className="inputAdd"
                    type="text"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input
                    className="inputDate"
                    type="date"
                    required
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
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