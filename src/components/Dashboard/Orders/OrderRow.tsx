import React from 'react'
import { OrderCardType } from '../../../common.types'

const OrderRow = ({ id, menu, status, totalPayment, user, user_id }: OrderCardType) => {
    // ?? add a state to select a specific id ; to select, update it or ...
  return (
    <div  className='w-full text-left flex justify-between items-center border-y dark:border-slate-900 dark:border-t-0 hover:shadow-md hover:dark:shadow-slate-900 py-2 px-1 rounded-md'>
        <section className=' flex justify-center items-center gap-2 '>
            <img className='w-10 h-10 rounded-full' src={user?.imgurl} alt="user-img" />
              <p className='text-sm'>{user?.name}</p>
        </section>
        <section className='w-full max-w-[140px] '>
            {menu}
        </section>
          <section>$ {totalPayment}</section>
          <section className={`${status==='completed'?'bg-green-400 text-green-800 dark:text-green-500':status==='pending'?'bg-orange-400 text-orange-600 dark:text-orange-300':'bg-violet-400 text-violet-700 dark:text-violet-300'} bg-opacity-50 rounded-lg px-2 py-0.5 text-xs max-h-6`}>{status}</section>
    </div>
  )
}

export default OrderRow
