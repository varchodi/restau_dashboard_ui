import {Dispatch} from 'react'
import { BiMessageDetail, BiMenu } from "react-icons/bi";
import AddBtn from "./AddBtn"
import SearchBar from "./SearchBar"
import { IoMdNotificationsOutline} from "react-icons/io";


const Header = ({  setShow }: {
    isShown: boolean,
    setShow:Dispatch<React.SetStateAction<boolean>>
  }) => {
    
  return (
    <header className="p-2 md:p-4 flex flex-col md:flex-row gap-x-2 gap-y-4 justify-between items-center shadow-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-xl">
      <section className="w-full px-2 md:hidden flex justify-between">
        <button className="text-3xl" onClick={()=>setShow(true)}>
            <BiMenu/>
        </button>
        <h1>
        Logo
        </h1>
      </section>
      
      {/* search bar */}
        <SearchBar/>
      {/* others actions ... */}
      <section className="w-full md:w-auto flex flex-row-reverse md:flex-row  items-center gap-4  justify-between">
        {/*?? Add new recepe or food btn(link) */}
        <AddBtn/>
        <div className="hidden lg:flex flex-row-reverse md:flex-row  justify-center items-center">    
            {/* message notif btn */}
            <article className="flex justify-center m-0">
                <p className="font-bold text-2xl"><BiMessageDetail/></p>
                <strong className="bg-red-500 w-7 h-7 scale-50 text-sm rounded-full relative right-5 -top-2 border-4 border-white"></strong>
            </article>
            {/* notifications notif btn */}
            <article className="flex justify-center m-0">
                <p className="font-bold text-2xl"><IoMdNotificationsOutline/></p>
                <strong className="bg-red-500 w-7 h-7 scale-50 text-sm rounded-full relative right-5 -top-2 border-4 border-white"></strong>
            </article>
            
            {/* profile img*/}
            <div
            className="bg-green-800 w-10 h-10 rounded-full"
            >
                
            </div>
        </div>
      </section>
    </header>
  )
}

export default Header
