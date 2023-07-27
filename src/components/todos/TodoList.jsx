import React from 'react';
import TodoItem from './TodoItem'
import './css/TodoList.css'
const TodoList = ({ data, onDel, onChk }) => {
    return (
        <div className='TodoList'>
            {
                data.map(item => {
                    return <TodoItem key={item.id} item={item} onDel={onDel} onChk={onChk} />
                })
            }
        </div>
    );
};

export default TodoList;