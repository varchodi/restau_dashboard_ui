import {Dispatch} from 'react'
import { nav_links } from '../../../constants/components_constats'
import { Nav_link_types } from '../../../common.types'
import NavLinkCard from './NavLinkCard'

const Navbar = ({ isShown, setShow }: {
  isShown: boolean,
  setShow:Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <nav className={`w-full min-w-[200px] md:w-1/6 p-2 md:p-4 md:h-full ${isShown ? 'h-5/6 absolute z-50 w-72 bg-transparent backdrop-blur-md':'hidden'} md:relative md:flex flex-col justify-between shadow-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-xl`}>
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
                    <NavLinkCard key={title} title={title} icon={icon}/>
                  ))    
            }
        </div>
      </section>
      <section>
              <h1>helps and stuffs</h1>
              <h1>theme mode change</h1>
      </section>
    </nav>
  )
}

export default Navbar
