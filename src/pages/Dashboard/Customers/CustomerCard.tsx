import React, { Dispatch } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { CustomerCardType } from '../../../common.types'

const CustomerCard = ({currentCustomer, setCurrentCustomer, customer ,open}: {
    setCurrentCustomer: Dispatch<React.SetStateAction<string>>,
  customer: CustomerCardType, currentCustomer: string,
    open:Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <article
      onClick={() => { setCurrentCustomer(customer.id); open(true) }}
      className={`flex  items-center gap-6 px-4 py-2 ${currentCustomer===customer.id?"bg-gray-300 dark:bg-slate-800 shadow-md":"hover:bg-gray-300 hover:dark:bg-slate-700"}  cursor-pointer`}>
            <input className="scale-125 " type="checkbox" name="select-all" id="all" />
            <div className="flex justify-start min-w-[120px] items-center">
                <img className="w-12 h-12 md:w-8 md:h-8 rounded-full" src={customer.imgurl} alt="profile" />
                <div className="pl-2">
          <h1 className=" w-full text-start text-[14px]">{customer.name}</h1>
          <p className="w-full text-start text-[10px]">{customer.username}</p>
                </div>
          </div>
          {
              currentCustomer===customer.id ? <div className='w-full flex justify-end text-end'>
              <IoIosArrowForward/>
          </div>:("")
          }
        </article>
  )
}

export default CustomerCard
