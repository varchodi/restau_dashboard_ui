import React, { Dispatch } from 'react'

const CustomerInfos = ({ close,isOpened, customer }: {
    close: Dispatch<React.SetStateAction<boolean>>;
    customer: string;
    isOpened:boolean;
}) => {
  return isOpened? (
    <section className="bg-white w-full  dark:bg-slate-900 rounded-md p-2 ">
        <article className='w-full text-end'>
            <button onClick={()=>close(false)} className='p-1 px-3 bg-white hover:bg-gray-300 dark:bg-slate-950 dark:hover:bg-slate-800  shadow-sm shadow-gray-400 rounded-full'>X</button>
        </article>
          <article>
              {customer}
        </article>
    </section>
  ) : (
    <section className="bg-gray-100 w-full hidden sm:block  dark:bg-slate-900 rounded-md">select a user</section>
  )
}

export default CustomerInfos
