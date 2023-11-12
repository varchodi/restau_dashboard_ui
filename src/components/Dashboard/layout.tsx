import React,{useState} from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header'

const Layout = ({ children }: {
    children:React.ReactNode
}) => {
  const [showNav, setSetshowNav] = useState<boolean>(true)
  return (
      <div className='w-full h-screen p-2 flex flex-row gap-4 bg-gray-200 dark:bg-slate-950 dark:text-slate-100 md:p-10 xl:p-20 2xl:p-24'>
          {/* navbar */}
          <Navbar setShow={setSetshowNav} isShown={showNav} />

          {/*  header + other sections*/}
          <section className='flex-1 w-full'>
              {/*?? may have same props to add on header components */}
        <Header setShow={setSetshowNav} isShown={showNav} />
              {children}
          </section>
    </div>
  )
}

export default Layout
