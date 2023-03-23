import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Item from "./Item";

function List(props) {
  const handleDelete = (id) => {
    let t = "";
    if (props.tab === 1) t = "today";
    else if (props.tab === 2) t = "work";
    else if (props.tab === 3) t = "project";
    else t = "important";
    setTodoList((prevValue) => {
      return {
        ...prevValue,
        [t]: prevValue[t].filter((item, index) => {
          return index !== id;
        }),
      };
    });
  };
  const makeItem = (item, index) => {
    return <Item item={item} id={index} onDelete={handleDelete}/>;
  };
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState({
    today: [],
    work: [],
    project: [],
    important: [],
  });
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = (event) => {
    let t = "";
    if (props.tab === 1) t = "today";
    else if (props.tab === 2) t = "work";
    else if (props.tab === 3) t = "project";
    else t = "important";
    setTodoList((prevValue) => {
      return {
        ...prevValue,
        [t]: [...prevValue[t], text],
      };
    });
    event.preventDefault();
    setText("");
  };
  return (
    <div className="bg-[#ffffff] col-span-3 grid content-between w-[100%] h-[450px] rounded-[10px] py-[18px] px-[16px]">
      <div className="flex flex-col overflow-y-scroll">
        {props.tab === 1
          ? todoList.today.map(makeItem)
          : props.tab === 2
          ? todoList.work.map(makeItem)
          : props.tab === 3
          ? todoList.project.map(makeItem)
          : todoList.important.map(makeItem)}
      </div>
      <form action="" className="flex w-[100%] relative">
        <input
          type="text"
          onChange={handleChange}
          className="w-full bg-[#F3F3F3] rounded-[5px] py-[8px] px-[10px]"
          placeholder="Add todo"
          value={text}
          autoFocus
        />
        <button
          type="submit"
          onClick={handleClick}
          className="absolute text-[#9333EA] right-3 top-2 cursor-pointer"
        >
          <AiFillPlusCircle size={24} />
        </button>
      </form>
    </div>
  );
}

export default List;
