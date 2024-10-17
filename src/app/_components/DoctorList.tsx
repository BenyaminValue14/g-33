'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

function DoctorList({heading='Nuestro Top en G-33'}) {
    const CDN_ASSETS = process.env.NEXT_PUBLIC_CDN_ASSETS;
  //default value doctor list
  const defaultDoctorList=[
    {
        id:1,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor1.jpg'
                    }
                }
            }
        }
    },
    {
        id:2,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor2.jpg'
                    }
                }
            }
        }
    },
    {
        id:3,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor3.jpg'
                    }
                }
            }
        }
    },
    {
        id:4,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor4.jpg'
                    }
                }
            }
        }
    },
    {
        id:5,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor5.jpg'
                    }
                }
            }
        }
    },
    {
        id:6,
        attributes:{
            Name:'Dr. John Doe',
            Year_of_Experience:'5 Years',
            Address:'New York, USA',
            categories:{
                data:[
                    {
                        attributes:{
                            Name:'Cardiologist'
                        }
                    }
                ]
            },
            image:{
                data:{
                    attributes:{
                        url:'/doctor6.jpg'
                    }
                }
            }
        }
    }
  ]

  const [doctorList,setDoctorList]=useState(defaultDoctorList);
  return (
    <div className='mb-10 px-8'>
      
        <h2 className='font-bold text-xl text-center'>
          {heading}
        </h2>

        <div className='grid grid-cols-1
        sm:grid-cols-1 md:grid-cols-1
        gap-7 mt-4
         lg:grid-cols-1'>
          <Swiper
          className='container'
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
        }
    >
      {doctorList.length>0?doctorList.map((doctor,index)=>(
        <SwiperSlide>
          <div className='mt-3 items-baseline flex flex-col gap-1' data-src={CDN_ASSETS + 'images/doctor-0' + (index + 1) + '.jpg'}>
            <Image className='doctor-images-card'
            src={CDN_ASSETS + 'images/doctor-0' + (index + 1) + '.jpg'} alt='doctor'
            width={270} height={250}/>
            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
            px-2 text-primary'>{doctor.attributes?.categories.data[0].attributes?.Name}</h2>
            <h2 className='font-bold'>{doctor.attributes.Name}</h2>
            <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_Experience}</h2>
            <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
            <Link href={'/details/'+doctor?.id} className='w-full'>
            <h2 className='p-2 px-3 border-[1px] border-primary
            text-primary rounded-full w-full text-center
            text-[11px] mt-2
            cursor-pointer
            hover:bg-primary hover:text-white'>Book Now</h2>
            </Link>
          </div>
        </SwiperSlide>
            ))
        :
        // Skelton Effect 
        [1,2,3,4,5,6].map((item,index)=>(
          <SwiperSlide>
            <div className='h-[220px] bg-slate-200 
            w-[200px] rounded-lg animate-pulse'>

            </div>
            </SwiperSlide>
        ))
       
        }
    </Swiper>
            
        </div>
    </div>
  )
}

export default DoctorList