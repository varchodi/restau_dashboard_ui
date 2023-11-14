import React, { Dispatch } from 'react'
import { BiSolidMessageDetail } from "react-icons/bi";
import { ReviewCardType } from '../../../common.types';
import ReviewCard from '../../../components/Dashboard/Review/ReviewCard';
const CustomerInfos = ({ close,isOpened, customer }: {
    close: Dispatch<React.SetStateAction<boolean>>;
    customer: string;
    isOpened:boolean;
}) => {
    // customer props has customer id , u can fetch specific user from that id


    //fake fetched customer data 
    const data = {
        id:"12345",
    name:"Jhon Doe",
    username:"@jhondoe",
        imgurl: "https://th.bing.com/th/id/OIP.0I-kogZfxYAsK2gvmWM9ZwHaKl?pid=ImgDet&rs=1",
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, obcaecati, numquam delectus culpa aut eveniet odio rem, exercitationem voluptatum laboriosam eligendi accusamus excepturi? Sint provident error ratione? Et, temporibus beatae.Delectus cumque ratione dolorem voluptatum quod culpa nisi dolor rerum inventore! Laudantium aspernatur vero tempore nihil voluptatem. Quisquam necessitatibus, debitis consectetur saepe, vero suscipit et obcaecati fugiat quam, placeat dicta Unde eveniet excepturi est. Repellat id qui magnam tempora necessitatibus. Iure at necessitatibus distinctio autem laudantium in dolore provident expedita libero. Excepturi assumenda eveniet animi officia voluptates? Recusandae, eaque dolore!"
    }

    //?? fetch customer reviews (these are fake ob=ne ; just for testing)
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

  //??fetch reviews from db
  //let use reviews from fake revews , jut for testing
  const reviews = new Array(3).fill(fakeReview);

  return isOpened? (
    <section className="bg-white w-full  dark:bg-slate-900  rounded-md p-2 shadow-md shadow-gray-400 overflow-y-scroll">
        <article className='w-full text-end'>
            <button onClick={()=>close(false)} className='p-1 px-3 bg-white hover:bg-gray-300 dark:bg-slate-950 dark:hover:bg-slate-800  shadow-sm shadow-gray-400 dark:shadow-slate-700 rounded-full'>X</button>
        </article>
        <article className='px-2 md:px-4 flex justify-between items-center '>
              <div className='flex justify-start items-center gap-2'>
                  <img className='w-20 h-20 rounded-full object-cover' src={data.imgurl} alt="customer-img" />
                  <div>
                      <h1 className='text-lg font-bold capitalize'>{data.name}</h1>
                      <p className='text-xs w-full text-start text-gray-500'>{data.username}</p>
                  </div>
              </div>
              {/* ?? message btn */}
              <div className='flex justify-center gap-1 border p-1 rounded-lg dark:border-slate-800 dark:text-slate-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-800 hover:shadow-md'>
                  <p className='font-bold '>Message</p>
                  <p className='text-2xl  pt-1'><BiSolidMessageDetail/></p>
                
              </div> 
          </article>

          {/* bio */}
          <article className='py-4'>
              <h1 className='w-full text-start font-semibold text-lg capitalize'>
                  Customer bio
              </h1>
              <p className='w-full text-start text-sm pl-4'>
                  {data.bio}
              </p>
          </article>

          {/* revirews */}
          <article className='py-4'>
              <h1 className='w-full text-start font-semibold text-lg capitalize'>
                  Customer Reviews
              </h1>

              <article className='flex flex-col gap-4 h-full p-4'>
            {
                reviews.map((review,i) => (
                    <ReviewCard key={i} {...review} />
                ))
            }
        </article>
          </article>


    </section>
  ) : (
    <section className="bg-gray-100 w-full hidden sm:block  dark:bg-slate-900 rounded-md">select a user</section>
  )
}

export default CustomerInfos
