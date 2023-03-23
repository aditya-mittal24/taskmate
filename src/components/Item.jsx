import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Item(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div
      key={props.id}
      className="flex justify-between p-4 border rounded-md mb-3"
    >
      <h1 className="capitalize">{props.item}</h1>
      <AiFillDelete
        onClick={handleDelete}
        className="cursor-pointer rounded-full p-1 text-white bg-[#9333EA]"
        size={24}
      />
    </div>
  );
}

export default Item;
