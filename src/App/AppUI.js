import React, { useContext } from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../TodoContext";
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { TittleApp } from '../TittleApp';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TittleApp/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <TodosError/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={ todo.text}
            completed={todo.completed}
            onComplete = { () => toggleCompleteTodo(todo.text)}
            onDelete = { () => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
      </Modal>
      )}
      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
    );
}

export { AppUI };