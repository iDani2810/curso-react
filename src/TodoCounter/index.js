import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const { totalTodos, completedTodos } = useContext(TodoContext);
    return (
        <p className='TodoCounter'>completedTodos {completedTodos} to {totalTodos}</p>
    );
}

export { TodoCounter };