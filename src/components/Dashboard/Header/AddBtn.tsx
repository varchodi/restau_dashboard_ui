import { Link } from 'react-router-dom'
import { BiPlus} from "react-icons/bi";
const AddBtn = () => {
  return (
    <Link
            className="flex justify-center gap-4 items-center font-semibold rounded-full p-2 sm:py-2 sm:px-4 sm:rounded-md text-white bg-blue-500 dark:bg-blue-800 hover:bg-blue-900 shadow-lg"
            to={'/dashboard/add-food'}>
                <p className="text-2xl"><BiPlus /></p> 
                <p className="text-sm hidden sm:block">Add</p>
        </Link>
  )
}

export default AddBtn
