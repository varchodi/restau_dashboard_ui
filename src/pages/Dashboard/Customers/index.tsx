import { useState } from "react"
import { CustomerCardType } from "../../../common.types"
import CustomerCard from "./CustomerCard"
import CustomerInfos from "./CustomerInfos"

const Customers = () => {
  const [setselectedCustomers, setSetselectedCustomers] = useState<string>("");
  const [currentCustomer, setCurrentCustomer] = useState<string>("");
  const [openInfo, setOpenInfo] = useState<boolean>(false);

    const fakeCustomer: CustomerCardType = {
        id:"12345",
    name:"Jhon Doe",
    username:"@jhondoe",
    imgurl: "https://th.bing.com/th/id/OIP.0I-kogZfxYAsK2gvmWM9ZwHaKl?pid=ImgDet&rs=1",
    }
    
  return (
    <main className='h-full flex gap-4 rounded-lg overflow-y-hidden relative'>
      <section className={`h-full w-full md:w-5/12 ${openInfo?"hidden sm:block":"block"}  bg-gray-100  dark:bg-slate-800 rounded-md `}>
        <article
        
         className="flex justify-start items-center gap-4 border-b-2 dark:border-b-slate-700 p-4 cursor-pointer">
            <input onChange={(e)=>setSetselectedCustomers(e.target.id)} className="scale-125 " type="checkbox" name="select-all" id="all" />
            <p className="text-sm">Names</p>
        </article>
        <div className="h-full overflow-y-auto">
                  
        {
                  new Array(20).fill(fakeCustomer).map((customer: CustomerCardType,i) => (
                <CustomerCard open={setOpenInfo} key={i} customer={customer} currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer} />
            ))
        }
        </div>
      </section>
      <CustomerInfos close={setOpenInfo} isOpened={openInfo} customer={ currentCustomer} />
    </main>
  )
}

export default Customers
