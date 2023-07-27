import React, { useRef, useState } from 'react';
import "./css/Todos.css"
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const Todos = () => {
    const [data, setData] = useState([
        { id: 1, text: '힘내기' },
        { id: 2, text: '파이팅하기' }
    ])
    const no = useRef(data.length + 1) //no값을 1번부터 시작
    //데이터 추가
    const onAdd = (text) => {
        setData([
            ...data,
            { id: no.current++, text: text, isChk: false }
        ])
    }
    //데이터 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
        console.log(id);
    }
    //데이터 체크 확인
    const onChk = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isChk: !item.isChk } : item))
    }
    return (
        <div className='Todos'>
            <h1>할일 만들기</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onChk={onChk} />
        </div>
    );
};

export default Todos;