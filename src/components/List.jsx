import React, {useState} from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function List() {
    const [todoList, setTodoList] = useState([])
  return (
    <div className="bg-[#ffffff] grid content-between w-[72%] h-[370px] rounded-[10px] ml-4 py-[18px] px-[16px]">
        <div></div>
        <div className='flex w-[100%] relative'>
            <input type="text" className='w-full bg-[#F3F3F3] rounded-[5px] py-[8px] px-[10px]' placeholder='Add todo'/>
            <AttachFileIcon className='absolute text-[#9333EA] right-10 top-2'/>
            <AddCircleRoundedIcon className='absolute text-[#9333EA] right-3 top-2'/>
        </div>
    </div>
  )
}

export default List