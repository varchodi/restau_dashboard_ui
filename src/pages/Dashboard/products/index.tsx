import { useState } from "react"
import { categories } from "../../../constants/commons"
import CategoryCard from "../../../components/Dashboard/Products/CategoryCard"
import { FoodCardType } from "../../../common.types"
import FoodCard from "../../../components/Dashboard/Products/FoodCard"

const ProductsPage = () => {
    const [currentCategory, setCategory] = useState<string>("")
    
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
    const foods:FoodCardType[] = new Array(24).fill(temp_food);
  return (
    <div className="h-full  bg-white dark:bg-slate-900 rounded-lg overflow-x-auto relative">
        {/* categories */}
      <section className="flex justify-start items-center gap-4 overflow-y-auto p-4 z-50 bg-gray-100 dark:bg-slate-900 dark:bg-opacity-80 bg-opacity-40 backdrop-blur-lg sticky top-0">
        {
          categories.map((category,i) => <CategoryCard key={category.name+i} data={category} currentCategry={ currentCategory}  setCategory={setCategory}/>)
        }
      </section>
      {/* foods */}
      <section className="grid p-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-1 sm:gap-y-4">
        {
            foods.map((food) => (
            // ??  try to fix this ...
            
                <FoodCard {...food} />
            ))
        }
      </section>
    </div>
  )
}

export default ProductsPage
