import { useState } from "react";
import StyledTbody from "./styles/Tbody.styled";
import {FaTrashAlt} from "react-icons/fa"

const Tbody = () => {
  const [users, setUsers] = useState([
    {
      id:1,
      title:'Terminator',
      genre:'Action',
      stock:6,
      rate:2.5
    },
    {
      id:2,
      title:'Die Hard',
      genre:'Action',
      stock:5,
      rate:2.5
    },
    {
      id:3,
      title:'Get Out',
      genre:'Thriller',
      stock:8,
      rate:3.5
    },
    {
      id:4,
      title:'Trip to Italy',
      genre:'Comedy',
      stock:7,
      rate:3
    },
    {
      id:5,
      title:'AirPlane',
      genre:'Comedy',
      stock:7,
      rate:3.5
    },
    {
      id:6,
      title:'Pain and Gain',
      genre:'Action',
      stock:8,
      rate:4
    }
  ])


  const handleDelete =(id)=>{
    const items = users.filter(user=>user.id !== id);
    setUsers(items);
  }    
    return (
        users.length?(
            <>
            <StyledTbody>
            {users.map(user=>(
                <tr  key={user.id}>
                    <td>{user.title}</td>
                    <td>{user.genre}</td>
                    <td>{user.stock}</td>
                    <td>{user.rate}</td>
                    <td>
                        <FaTrashAlt
                            className="btn"
                            role="button"
                            tabIndex={0}
                            onClick={()=>handleDelete(user.id)}
                        />
                    </td>
                </tr>

            ))}
            </StyledTbody>
            <h2 className="result">Movies-{users.length}</h2>
            </>

        ):<p className="noData">Creat Movie !</p>
        

    );
};

export default Tbody;