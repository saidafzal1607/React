import { useState } from "react";
import { FaPlus} from 'react-icons/fa'
import './App.css';
import Content from "./Content";

const App = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))


  const handleChecked =(id)=>{
    const listItems = items.map((item)=>item.id === id ? {...item, checked:!item.checked } : item)
    setAndSaveItems(listItems)
  } 

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id !== id )
    setAndSaveItems(listItems)
  }

  const [newItem, setNewItem] = useState('');

  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!newItem) return
    //add item
    addItem(newItem)
    setNewItem('')

  }

  const addItem = (task) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked:false,task }
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
    
  }

  const setAndSaveItems =(newItems) =>{
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <h1>Enter your daily Tasks!</h1>
      <form onSubmit={handleSubmit}  className="addItem">
        <input 
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
        <button>
          <FaPlus/>
        </button>
      </form>
      <form onSubmit={(e)=>e.preventDefault()}>
            <input 
              type="text"
              role="searchbox"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search Task"
            />
      </form>
      <Content
        items={items.filter(item=>((item.task).toLowerCase()).includes(search.toLowerCase()))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;