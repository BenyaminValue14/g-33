"use client"
import { Button } from '@/components/ui/button'
//import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
//import {
//    Popover,
//    PopoverContent,
//    PopoverTrigger,
//  } from "@/components/ui/popover"
  

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {/*
            id:2,
            name:'Explore',
            path:'/explore'
        */},
        {/*
            id:3,
            name:'Contact Us',
            path:'/'
        */},
    ]

    //const {user} = useKindeBrowserClient();
    const user = false;
    //useEffect(()=>{
    //    console.log(user);
    //},[user])
  return (
    <div className='flex items-center 
    justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
            <Image src='/logo_health_tech.svg' alt='logo'
            width={80} height={80}
            />
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item,index)=>(
                    <Link href={item.path || "#"} key={index}>
                    <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
   
       {user ?
      
       <div>POPOVER</div>

   
       :
         <Button>Conoce más</Button>
       } 
        
    </div>
  )
}

export default Header