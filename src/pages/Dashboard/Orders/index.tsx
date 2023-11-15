import { FoodCardType, OrderCardType } from "../../../common.types"
import OrderRow from "../../../components/Dashboard/Orders/OrderRow";

const OrdersPage = () => {
  

  //single fake order
  const fakeOrder:OrderCardType = {
    id: "12345",
    user: {
      id:"12345",
      name:"Jhon Doe",
      username:"@jhondoe",
      imgurl: "https://th.bing.com/th/id/OIP.0I-kogZfxYAsK2gvmWM9ZwHaKl?pid=ImgDet&rs=1",
  },
    user_id: "2345",
    menu: "Spicy seasoned seafood nooddles",
    totalPayment:99.99,
    status: 'preparing',
  }


  //?? fetch orders here ; and store them in data
  const data = new Array(20).fill(fakeOrder);

  //?? fake food
  const temp_food:FoodCardType = {
    id: "12345abcd",
    name: "California Pizza Kitchen",
    imgUrl:"/images/food.png",
    reduction: "10%",
    isRecomended: true,
    price: 23.99,
    reductionPrice:20.99
}
  //fake most ordered foods 
  const most = new Array(4).fill(temp_food);

  return (
    <main className="h-full flex flex-col-reverse md:flex-row  gap-4 rounded-lg overflow-y-auto lg:overflow-y-hidden relative">
      <section className={`h-full w-full md:w-8/12  bg-gray-100  dark:bg-slate-800 rounded-md `}>
        <article
          className="flex flex-col justify-start items-center gap-4 border-b-2 dark:border-b-slate-700 px-4 py-2 cursor-pointer">
            <div className="flex justify-between w-full">
              <h1 className="text-xl font-bold">Order Report</h1>
              <p>.</p>
            </div>
            <div className="flex justify-between w-full">
              {
              ["customer", "menu", "total payment", "status"].map((tab) => (
                <p key={tab} className="capitalize font-semibold text-lg">{tab}</p>
              ))
              }
            </div>
        </article>
        <article className="flex flex-col justify-start items-center gap-4  px-4 py-2 cursor-pointer  h-full overflow-y-auto overflow-x-auto">
        {
          data.map((order,i) => (
            <OrderRow key={i} {...order} />
            ))
        }
        </article>
        
      </section>
      <section className={`h-full w-full md:w-4/12  bg-gray-100  dark:bg-slate-800 rounded-md  `}>
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
              <div className="flex flex-col lg:flex-row gap-2 items-center w-full text-start border-y dark:border-slate-900 dark:border-t-0 hover:shadow-md hover:dark:shadow-slate-900 py-2 px-1 rounded-md">
              <img className="w-full lg:w-16 lg:h-16 object-cover rounded-sm" src={food.imgUrl} alt="food-img" />
              <div className="">
                <h2 className=" font-semibold">{food.name}</h2>
                <p className="text-sm">120 dishes ordered ..</p>
              </div>
            </div>)
          }
        </article>
        
      </section>
    </main>
  )
}

export default OrdersPage
