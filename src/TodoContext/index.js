import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {
    //Destructuramos los nuevos datos de nuestro custom hook
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } =useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [ openModal, setOpenModal ] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos]; //... 3 puntitos es spread operator
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);//Examinar ToDo x Todo para ver cual tiene el mismo texto
        const newTodos = [...todos]; //... 3 puntitos es spread operator
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text); //Examinar ToDo x Todo para ver cual tiene el mismo texto
        const newTodos = [...todos]; //... 3 puntitos es spread operator ... Copia de los Item
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);  //Actualizar nuestro estado
    };
    return (
        <TodoContext.Provider value={{
            loading, 
            error, 
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue, 
            searchedTodos, 
            addTodo,
            toggleCompleteTodo, 
            deleteTodo, 
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider};