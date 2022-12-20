import React from 'react'
import { useParams } from 'react-router-dom'
import university from '../../custom/university'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Whatsapp from '../common/Whatsapp'

function Course() {
    const {id,cid} = useParams()
    const uni = university.find(e=>e.id === Number(id))
    const course = uni.course.find(e=>e.cid === Number(cid))
    console.log(course)
  return (
    <div>
        <Navbar/>
        <div className="px-[5%] md:px-[10%] py-[5%]">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/2 space-y-5">
                <h1 className='text-2xl font-bold'>{course.title} - {uni.name}</h1>
                    
                    <p>{course.desc}</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img className='rounded-3xl h-full object-cover' src={`/image/university/course/${course.image}`} alt="" />
                </div>
            </div>

            <div className="flex gap-5 justify-center items-center flex-wrap mt-5">
                <Features icon='1.png' title='Awarded By' data={uni.name}/>
                <Features icon='2.png' title='Credit Value' data={course.credit}/>
                <Features icon='3.png' title='Duration' data={course.duration}/>
                <Features icon='4.png' title='Mode of Study' data={course.mode}/>
                <Features icon='5.png' title='Stucture' data={course.structure}/>
                <Features icon='6.png' title='assessment' data={course.assessment}/>
                <Features icon='7.png' title='Overall Grading' data={course.grading}/>
            </div>

            <div className="flex flex-col xl:flex-row gap-11 mt-10">
                <div className=" bg-[#EAEDEF] rounded-3xl p-10 space-y-5">
                    <h2 className='text-3xl font-medium '>Course Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum autem est incidunt veniam beatae reiciendis id illo nobis quisquam repellendus harum molestias accusamus odio esse rem, dolorum mollitia sunt?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique nihil dolores nisi, optio culpa alias doloremque, veniam ratione possimus cum. Voluptatem repudiandae architecto quaerat doloribus eum, eaque hic maxime.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In molestias amet totam sed ut similique iure sint odit dolore qui? Corrupti quis necessitatibus eius adipisci optio esse corporis eligendi et. </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, consequatur minus totam vitae illum reprehenderit esse adipisci, dolorem earum, exercitationem nostrum labore officiis alias fugiat quia cupiditate necessitatibus assumenda nemo!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, provident rerum tenetur quibusdam fugit eos maiores iste accusantium dicta vitae autem praesentium laborum quam asperiores qui hic ipsa ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis itaque consectetur eveniet quas. Velit, illum eos doloribus numquam hic, esse ab veritatis labore vero, facilis quaerat voluptatibus nobis nostrum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dignissimos repellat. Cumque similique, voluptas rerum non sequi fugit, error necessitatibus pariatur corrupti adipisci deserunt exercitationem quos nisi cum? Ipsam, sequi!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente reprehenderit veniam nostrum. Ducimus velit dolorem maiores? Ex odio voluptatem ut, aliquam autem quisquam illo libero officia, animi sed dolore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus illo voluptatem at fugiat ducimus natus dolorem voluptatum, adipisci totam reiciendis cupiditate, harum explicabo. Ullam suscipit ad perferendis inventore soluta?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur, beatae debitis itaque repudiandae reprehenderit. Sit laudantium ad nobis iste enim perspiciatis. Tempora aliquam fuga, aspernatur cupiditate saepe non corrupti.
                    </p>
                    <h2 className='text-3xl font-medium '>Application Procedure</h2>
                    <img src="/image/course/process.png" className='w-full ' alt="" />
                    <h2 className='text-3xl font-medium '>Student Testimonials</h2>
                    <div className="flex flex-wrap gap-5 w-full justify-center">
                        <img src="/image/course/v1.png" className='w-full md:w-[400px] object-cover rounded-2xl'  alt="" />
                        <img src="/image/course/v2.png" className='w-full md:w-[400px] object-cover rounded-2xl'  alt="" />
                        <img src="/image/course/v3.png" className='w-full md:w-[400px] object-cover rounded-2xl'  alt="" />
                    </div>
                </div>
                <div className="w-full xl:w-[400px]  flex-shrink-0 space-y-5">
                    <div className="bg-[#EAEDEF] rounded-3xl w-full h-[288px]"></div>
                    <div className="bg-[#EAEDEF] rounded-3xl w-full h-[613px]"></div>
                </div>
            </div>

        </div>
        <Whatsapp />
        <Footer />
    </div>
  )
}

export default Course

const Features = ({icon,title,data}) => <div className="w-[200px] h-[180px] rounded-3xl bg-[#EAEDEF] flex flex-col justify-center items-center gap-2">
        <img src={`/image/course/icon/${icon}`} className='h-[40px] object-cover' alt="" />
        <h2 className='text-center font-medium'>{title}</h2>
        <h3 className='text-center text-sm'>{data}</h3>
</div>