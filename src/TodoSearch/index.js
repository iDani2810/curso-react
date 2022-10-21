import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch(){
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="inputWrapper">
      <input 
        className="input-search" 
        type={"search"} 
        placeholder="Search" 
        value={searchValue}
        onChange={onSearchValueChange}  
      />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="inputIcon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
    </div>
  );
}
  
  
export { TodoSearch };