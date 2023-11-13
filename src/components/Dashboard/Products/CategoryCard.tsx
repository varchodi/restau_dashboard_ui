import React,{Dispatch} from 'react'
import { categoryType } from '../../../common.types'

const CategoryCard = ({ data, setCategory, currentCategry }: {
    data: categoryType,
    setCategory: Dispatch<React.SetStateAction<string>>
    currentCategry:string
}) => {
  return (
      <div
          onClick={()=>setCategory(data.name)}
          className={`flex flex-row gap-1 sm:flex-col sm:justify-center sm:items-start w-28 min-w-[120px] py-2 px-2 border  border-gray-300  dark:border-slate-800    ${currentCategry===data.name ?"bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700 hover:bg-blue-400 text-white":"bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-slate-900 hover:dark:bg-slate-800"} shadow-sm hover:shadow-lg cursor-pointer`}>
          {data.icon !== "/" ? (<img src={data.icon} alt="cat-icon" />):(
            <div className='bg-gray-300 p-2 md:p-4 w-1/5  md:w-1/3'></div>
          )}
          <p className='sm:w-full text-start text-xs capitalize'>{data.name}</p>
          <p className='hidden sm:block w-full text-start text-sm font-semibold'>{data.quantity} items</p>
    </div>
  )
}

export default CategoryCard
