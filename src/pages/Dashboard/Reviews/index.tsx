import { ReviewCardType } from '../../../common.types'
import ReviewCard from '../../../components/Dashboard/Review/ReviewCard';

const ReviewsPage = () => {
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

    //??fetch reviews from db
    //let use reviews from fake revews , jut for testing
    const reviews = new Array(30).fill(fakeReview);
  return (
    <div  className='h-full flex flex-col-reverse lg:flex-row gap-4 rounded-lg overflow-y-auto  text-gray-600 dark:text-white relative'>
      <section className='bg-gray-100 dark:bg-slate-800 p-2 w-full lg:w-2/3  md:p-4 overflow-y-hidden'>
        <article className='mb-4'>
            <h1 className='font-bold text-lg text-start'>Recent reviews</h1>
            <p className='text-sm text-start'>Here is customer reviews</p>
        </article>
        <article className='flex flex-col gap-4 overflow-y-auto h-full'>
            {
                reviews.map((review,i) => (
                    <ReviewCard key={i} {...review} />
                ))
            }
        </article>
      </section>
      <section className='bg-gray-100 dark:bg-slate-800 p-2 md:p-4 text-start max-h-full lg:w-1/3'>
        <h1 className='mb-4 font-bold text-xl'>Newest</h1>
        <ReviewCard {...reviews[0]}/>
      </section>
    </div>
  )
}

export default ReviewsPage

