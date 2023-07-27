import React from 'react';

const TodoItem = ({ item, onDel, onChk }) => {
    const { id, text, isChk } = item
    return (
        <div className='TodoItem'>
            <li className={isChk ? "on" : ""} >
                <span onClick={() => onChk(id)}>✓</span>
                <em>{text}</em>
                <button onClick={() => onDel(id)} >삭제</button>
            </li>
        </div >
    );
};

export default TodoItem;