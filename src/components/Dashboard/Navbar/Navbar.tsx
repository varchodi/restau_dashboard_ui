import {Dispatch,useState} from 'react'
import { nav_links } from '../../../constants/components_constats'
import { Nav_link_types } from '../../../common.types'
import NavLinkCard from './NavLinkCard'
import { BiMessageDetail } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = ({ isShown, setShow }: {
  isShown: boolean,
  setShow:Dispatch<React.SetStateAction<boolean>>
}) => {
  const [selectedTab, setSelectedTab] = useState("home")
  return (
    <nav className={`w-full min-w-[200px] md:w-1/6 p-2 md:p-4 md:h-full ${isShown ? 'flex h-[95%] absolute z-50 w-72 bg-transparent backdrop-blur-md':'hidden'} md:relative md:flex flex-col justify-between shadow-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-xl`}>
      <section className='flex flex-col gap-6'>
        {/* restaurent logo */}
        <div className='text-start p-4 font-bold text-2xl flex justify-between'>
          <h1>Logo</h1>
          <button className='md:hidden font-normal text-lg' onClick={()=>setShow((x)=>!x)}>X</button>
        </div>
        {/* navbar links */}
        <div className='flex flex-col gap-2'>
            {
                nav_links.map(({ title, icon }: Nav_link_types) => (
                    <NavLinkCard currentTab={selectedTab} setTab={setSelectedTab}  close={setShow} key={title}  title={title} icon={icon}/>
                  ))    
            }
        </div>
      </section>
      <section className='w-full'>
              <h1>helps and stuffs</h1>
              <div className="w-full flex lg:hidden flex-row md:flex-row  justify-start items-center">    
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
    </nav>
  )
}

export default Navbar
