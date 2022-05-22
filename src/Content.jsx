import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = ({items, handleChecked, handleDelete}) => {
    return (
        <ul>
        {items.map((item)=>(
          <li key={item.id}> 
            <input 
              type="checkbox"
              checked={item.checked} 
              onChange={()=>handleChecked(item.id)}
              
            />
            <label>
              {item.task}
            </label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              className="trash-btn"
              onClick={()=>handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    );
};

export default Content;