import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import SectionAboutUs from './SectionAboutUs'
import SectionWorkProcess from './SectionWorkProcess'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl">
            Busca y 
            <span className='text-primary'> reserva tu cita </span> 
            con tus
            <span className='text-primary '> especialistas en casa</span></h2>

        <p className="mt-4 text-gray-500">
        Encuentra a los mejores profesionales de salud y agenda tu cita para recibir atención personalizada 
        en la comodidad de tu hogar. Desde médicos hasta terapeutas, te conectamos con los especialistas 
        que necesitas, de manera rápida y sencilla. Cuida tu salud sin salir de casa.
        </p>

        <Button className="mt-10">Conoce más</Button>
      </div>
    </div>
      <SectionAboutUs/>
      <SectionWorkProcess/>
  </div>
</section>
  )
}

export default Hero