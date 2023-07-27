import React, { useRef, useState } from 'react';
import './css/TodoForm.css'
const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState('')
    const textRef = useRef(null)
    const changeInput = e => {
        const { value } = e.target
        setText(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        onAdd(text)
        setText('')
        textRef.current.focus()
    }
    return (
        <form className='TodoForm' onSubmit={onSubmit}>
            <input type="text" name="" id="" ref={textRef} value={text} onChange={changeInput} />
            <button type="submit" >추가</button>
        </form>
    );
};

export default TodoForm;