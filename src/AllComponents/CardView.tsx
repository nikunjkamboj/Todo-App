import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";
import { TodoItemProps } from './ComponentsTypes.ts';


const CardView: React.FC<TodoItemProps> = ({ item, deleteTask, toggleCompleted, updateTask }) => {
    function handleChange() {
        toggleCompleted(item.id);
    }
    return (
        
        <div className="col-sm-3 mb-3 mb-sm-0 mt-3">
            <div style={{ width: '100%' }} className={`card mb-12 ${item.completed ? 'completed-card' : ''}`}>
                <div className='card-body'>
                    <div>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            checked={item.completed}
                            onChange={handleChange}
                        />
                    </div>

                    <span className={`task-text ${item.completed ? 'completed-task' : ''}`}>
                        <h5 className="">{item.completed ? <del>{item.text}</del> : item.text}</h5>
                    </span>

                    <div className={`task-date ${item.completed ? 'completed-task' : ''}`}>
                    <p className="card-text"> {item.completed ? <del>{item.date}</del> : item.date}</p>
                    </div>

                    <div className='d-flex justify-content-evenly'>
                        <CiEdit
                        className='g-col-6'
                            size={30}
                            color='blue'
                            style={{ cursor: 'pointer'}}
                            onClick={() => updateTask(item.id, item.text, item.date)}
                        />
                        <MdDeleteOutline
                        className='g-col-6'
                            size={30}
                            color='#ff0066'
                            onClick={() => deleteTask(item.id)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardView;
