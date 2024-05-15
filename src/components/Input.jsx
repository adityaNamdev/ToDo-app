import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const Input = (props) => {
  const darkMode =props.darkMode
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);

  let handleClick = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <div className={` input-group mb-3 ${darkMode? 'inputBox-dark ' : 'inputBox' }`} >
        <input
          type="text"
          placeholder="Enter the text here..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          value={input}
          className="form-control"
          id="f"
        />
        <button className={`btn btn-${darkMode? "secondary":'primary'}`} onClick={handleClick}>
          <span className="fw-bold ">Add</span>
          <IoMdAddCircleOutline size={"19px"} />
        </button>
      </div>

      <ul className={`list-group`}>
        {todos.length == 0 ? <h1 className="text-center">Oops!!No item found</h1>:
        todos.map((todo, index) => (
          <li
            key={index}
            className={` list-group-item d-flex justify-content-between ${darkMode?" text-black":null}`}  
          >
            {todo}
            <button className="delete-btn"  onClick={() => handleDelete(index)}>
              <RiDeleteBin5Line />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Input;
