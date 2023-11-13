import { Link } from 'react-router-dom'
import { FoodCardType } from '../../../common.types'

const FoodCard = ({id,name,price,imgUrl,reduction,reductionPrice,isRecomended}:FoodCardType) => {
  return (
      <Link
          className='w-full sm:w-11/12 max-h-full flex gap-1 flex-col relative shadow-md hover:bg-gray-200 hover:dark:bg-slate-800 hover:shadow-lg'
          to={`/dashboard/products/${id}`}>
        <img className='object-cover h-64 sm:h-2/3 ' src={imgUrl} alt={name}/>
        <p className='text-sm text-gray-600 w-full text-start'>{name}</p>
        <div className='flex items-baseline justify-start'>
              <p className='text-lg font-bold'>${reductionPrice?reductionPrice:price}</p>
              {reductionPrice && <del className='text-xs font-semibold text-gray-600'>${price}</del> }
        </div>
        {/* recommandations */}
        {isRecomended && <p className='w-fit p-1 py-0  text-[10px] bg-red-500 text-white absolute bottom-[35%] right-2'>Recommendation</p>}
          {reduction && <p className='w-fit p-1 text-[8px] bg-blue-700 text-white absolute top-1 left-1'>{reduction} OFF</p>}
    </Link>
  )
}

export default FoodCard
