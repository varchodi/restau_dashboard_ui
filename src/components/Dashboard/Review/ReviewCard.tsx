import { ReviewCardType } from '../../../common.types'

const ReviewCard = ({user,date,avis,description}:ReviewCardType) => {
  return (
    <div className='flex gap-4 w-full text-start bg-gray-200 dark:bg-slate-900 hover:shadow-md p-2 rounded-md'>
          <img className='w-20 h-20 rounded-lg '
              src={user.imgurl} alt="profile-img" />
          <section>
              <div>
                  <h1 className='text-lg font-bold'>{user.name}</h1>
                  <div className='flex justify-between py-1'>
                    <p className='text-sm '>{date.toLocaleString()}</p>
                    <div className='flex gap-4 flex-wrap'>
                        {
                            avis.map((avi,i) => <p className='capitalize text-sm bg-blue-500 text-white px-3 pb-0.5 rounded-full text-center min-w-[100px]' key={i}>{avi}</p>)
                        }
                    </div>
                  </div>
                  <p className='text-sm'>{description}</p>
              </div>
              
              <p></p>
          </section>
    </div>
  )
}

export default ReviewCard
