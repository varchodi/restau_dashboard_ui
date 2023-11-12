import { Nav_link_types } from '../../../common.types'
import { NavLink } from 'react-router-dom'

const NavLinkCard = ({icon,title,close}:Nav_link_types) => {
  return (
      <NavLink
          onClick={()=>close(false)}
          className={`flex gap-2 items-center py-2 pl-2 rounded-md font-medium hover:bg-slate-200 hover:dark:bg-slate-800 hover:shadow-md`}
          to={`/dashboard/${title==='home'?'/':title}`}>
          <p className='text-2xl'>{icon}</p>
          <p  className='capitalize text-md font-medium'>{title}</p>
    </NavLink>
  )
}

export default NavLinkCard
