import { TbUsers } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { AnalyticCardType } from '../../../common.types'

const AnalyticsCard = ({
    type,percentage,direction,total
}: AnalyticCardType) => {
  return (
    <div className="w-full lg:w-[230px]  flex flex-col justify-between gap-6 bg-gray-200 dark:bg-slate-900 rounded-lg p-4 text-start hover:shadow-md dark:shadow-slate-900">
          <section className="flex gap-4">
        <p className={`text-2xl p-2 rounded-lg dark:bg-opacity-20 ${type==='revenue'?'text-purple-600 dark:text-purple-400 bg-purple-300  ':type==='ordered'?'text-orange-600 dark:text-orange-400 bg-orange-100 ':'text-green-600 dark:text-green-400 bg-green-100 '}`}>
              {
                type==='revenue' ?<BsCoin/>:type==='customer'?<TbUsers/>:<AiOutlineShoppingCart />
              }
            </p>
            <div className="flex gap-2 justify-center items-center">
              <p className={`${type==='revenue'?'text-purple-600 dark:text-purple-400   ':type==='ordered'?'text-orange-600 dark:text-orange-400 ':'text-green-600 dark:text-green-400  '}`}>{direction==='up'?'+':'-'} {percentage}</p>
              <p className={`text-[12px] p-1 rounded-full dark:bg-opacity-20 ${type==='revenue'?'text-purple-600 dark:text-purple-400 bg-purple-300  ':type==='ordered'?'text-orange-600 dark:text-orange-400 bg-orange-100 ':'text-green-600 dark:text-green-400 bg-green-100 '}`}>{
                direction==='up'?<FaLongArrowAltUp/>:<FaLongArrowAltDown/>
                }</p>
            </div>
          </section>
          <section>
        <p className="text-2xl font-bold font-mono">{ type==='revenue' && "$"}{total}</p>
            <p className="capitalize font-semibold dark:text-slate-400">
          Total <span>{type==='ordered' && 'dishes ' }{type}</span>
            </p>
          </section>
    </div>
  )
}

export default AnalyticsCard
