import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeDataReducer } from '../redux/dataStor';

const FileExplor = ({className = " "}) => {

    const list = useSelector((state)=> state.dataStor.navData )

    const dispatch = useDispatch()

  return (
    <div className={`h-full pt-16 bg-[#232324] border-r border-r-[#ffffff2d] min-w-0 flex-1 ${className}`}>
      <p className='text-[11px] pl-4  text-[#c3c0c0] font-medium tracking-[1px] '>PORTFOLIO</p>
      <div className=' pl-5 pt-2.5'>
            <ul className="flex flex-col gap-3">
                {
                    list.map((items)=>{
                    const Icon = items.Icon;

                        return (
                          <li
                         
                          onClick={()=> {dispatch(activeDataReducer({name:items.name, id: items.id}))}}
                          
                            key={items.id ?? items.name}
                            className="flex justify-between cursor-pointer items-center text-white"
                          >
                            <Icon className={`${items.color} text-lg `} />
                            <span className=" text-[11px] text-[#c9c9c9] ">{items.name}</span>
                            <span></span>
                          </li>
                        );
                    })
                }

            </ul>
      </div>
    </div>
  );
}

export default FileExplor
