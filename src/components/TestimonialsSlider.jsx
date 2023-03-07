import React from 'react'

import { testimonials } from '../data'

import {Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay , Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'

const TestimonialsSlider = () => {
  return (
   <>

        <Swiper
        pagination={{
            clickable:true,
        }}
        autoplay={{
            delay:30000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className='mySwiper ' >

            {
                testimonials.map((item, index)=>{
                    const {authorImg , authorText, authorName, authorPosition } = item
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32" data-aos="fade-right" data-aos-duration="2000">
                                <div className="w-48 h-48 lg:w-[528px] lg:h-[428px]">
                                    <img className='rounded-xl' src={authorImg} alt="" />
                                </div>
                                <div className="flex flex-col max-w-3xl">
                                <h5  className='font-body text-2xl mb-8 italic font-normal'>{authorText}</h5>
                                <div>
                                    <p style={{color:"var(--red"}} className='text-lg text-accent'>{authorName}</p>
                                    <p>{authorPosition}</p>
                                </div>
                            </div>
                            </div>
                            
                        </SwiperSlide>
                    )

                })
            }

        </Swiper>



   </>
  )
}

export default TestimonialsSlider