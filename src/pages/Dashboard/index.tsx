import React from 'react'
import { CiBitcoin} from "react-icons/ci";
import { AnalyticCardType, FoodCardType, ReviewCardType } from '../../common.types';
import AnalyticsCard from '../../components/Dashboard/Home/analyticsCard';
import FoodCard from '../../components/Dashboard/Products/FoodCard';
import ReviewCard from '../../components/Dashboard/Review/ReviewCard';
const Dashboard = () => {
  //?? fetch here analytics data
  const fakeAnalyticItem:AnalyticCardType={
    type: 'ordered',
    percentage: 9.99,
    direction: 'up',
    total: 99999.999,
    icon: <CiBitcoin />
  }
  
  //?? store ur analytics here 
  const analytics = new Array(3).fill(fakeAnalyticItem);

  //simgle product exemple:
  const temp_food:FoodCardType = {
    id: "12345abcd",
    name: "California Pizza Kitchen",
    imgUrl:"/images/food.png",
    reduction: "10%",
    isRecomended: true,
    price: 23.99,
    reductionPrice:20.99
}

// fetch foods here 
  const foods: FoodCardType[] = new Array(4).fill(temp_food);
  
  //fetch your latest review here 
  //fetch review
  const fakeReview: ReviewCardType = {
    user: {
        id:"12345",
        name:"Jhon Doe",
        username:"@jhondoe",
        imgurl: "https://th.bing.com/th/id/OIP.0I-kogZfxYAsK2gvmWM9ZwHaKl?pid=ImgDet&rs=1",
    },
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, obcaecati, numquam delectus culpa aut eveniet odio rem, exercitationem voluptatum laboriosam eligendi accusamus excepturi? Sint provident error ratione? Et, temporibus beatae.Delectus cumque ratione dolorem voluptatum quod culpa nisi dolor rerum inventore!  ",
    avis: ["Great", "Good Services"],
    date:new Date()
  }
  
  //fake most ordered foods 
  // ?? fetch most ordered foods here
  const most = new Array(2).fill(temp_food);
  return (
    <main className='w-full h-full flex flex-col lg:flex-row gap-4 rounded-md overflow-y-auto lg:overflow-y-hidden   text-gray-600 dark:text-white relative text-start'>
      <section className='md:h-full w-full lg:w-8/12  bg-gray-100  dark:bg-slate-800 rounded-md flex flex-col lg:overflow-y-auto'>
      <article className='mb-4 border-b-2 border-b-gray-300 p-2 md:p-4'>
          <h1 className='font-bold text-xl text-start'>Dashboard</h1>
          <p className='text-sm text-start'>{ new Date().toDateString()}</p>
      </article>
        
      <article className='flex flex-wrap justify-start gap-4 p-2 md:p-4 '>
          {
            analytics.map((analytic, i) => <AnalyticsCard key={i} {...analytic} />)
          }
        </article>
        {/* foods */}
      <article className='p-2 md:p-4 text-xl '>
          <h1 className=' font-bold'>Popolar Foods</h1>
          <div className=" grid p-4 grid-cols-1 sm:grid-cols-3 md:hidden lg:grid gap-y-1 sm:gap-y-4  overflow-y-auto">
          {
              foods.map((food,i) => (
              // ??  try to fix this ...
              
                  <FoodCard key={i} {...food} />
              ))
          }
        </div>
        </article>
        
      </section>

      <section className='h-auto w-full lg:w-4/12   rounded-md flex flex-col gap-4'>
        
      <article className='bg-gray-100 dark:bg-slate-800 p-2 md:p-4 text-start'>
        <h1 className='mb-4 font-bold text-xl'>Latest Review</h1>
        <ReviewCard {...fakeReview}/>
        </article>
        
        {/* most ordered items */}
        <section className={`  bg-gray-100  dark:bg-slate-800 rounded-md  `}>
        <article
          className="flex flex-col justify-start items-center gap-4 border-b-2 dark:border-b-slate-700 p-4 cursor-pointer">
            <div className="flex justify-between w-full">
              <h1 className="text-xl font-bold">Most Ordered</h1>
              <p>.</p>
            </div>
        </article>
        <article className="flex flex-col justify-start items-center gap-4  px-4 py-2 cursor-pointer  h-full overflow-y-auto overflow-x-auto">
          {
            most.map((food) =>
              <div className="flex flex-col lg:flex-row gap-2 items-center w-full text-start border-y dark:border-slate-900 dark:border-t-0 hover:shadow-md hover:dark:shadow-slate-900 py-1 px-1 rounded-md">
              <img className="w-full lg:w-16 lg:h-16 object-cover rounded-sm" src={food.imgUrl} alt="food-img" />
              <div className="">
                <h2 className=" font-semibold">{food.name}</h2>
                <p className="text-sm">120 dishes ordered ..</p>
              </div>
            </div>)
          }
        </article>
        
      </section>
      </section>
      
    </main>
  )
}

export default Dashboard
