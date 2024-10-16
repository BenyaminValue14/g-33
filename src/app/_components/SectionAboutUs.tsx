import { StarIcon } from "lucide-react";
import React from "react";
import EstetoscopioIcon from "../_utils/svg/EstetoscopioIcon";


const SectionAboutUs = () => {
  const CDN_ASSETS = process.env.NEXT_PUBLIC_CDN_ASSETS;
  return (
    <div className="space shape-mockup-wrap" id="about-sec">
      <div className="shape-mockup" style={{ top: '0px', right: '0px' }}>
        <img src={CDN_ASSETS + "images/pattern_shape_1.png"} alt="shape" />
      </div>
      <div className="shape-mockup jump" style={{ right: '3%', bottom: '10%' }}>
        <img src={CDN_ASSETS + "images/medicine_1.png"} alt="shape" />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center">
          {/* Imagen de la izquierda */}
          <div className="w-full xl:w-1/2 mb-8 xl:mb-0">
            <div className="relative img-box1">
              <img src={CDN_ASSETS + "images/about_1_3.png"} alt="About" />
              <div className="bg-white shadow-lg p-6 mt-4 about-info">
                <h3 className="text-2xl font-bold mb-2">Dr. Esita Jabed</h3>
                <p className="text-gray-600">Mention the languages<br />in which the staff.</p>
                <div className="flex space-x-1 mt-2">
                  {/* Estrellas */}
                  {
                    [1, 2, 3, 4, 5].map((star, index) => (
                      <StarIcon key={index} className="w-4 text-green-600" />
                    ))
                  }
                </div>
                <a href="tel:+16356478965" className="block mt-4 text-blue-500 hover:underline">
                  <i className="fa-solid fa-phone"></i> +163 564 78965
                </a>
              </div>
            </div>
          </div>

          {/* Texto de la derecha */}
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            <div className="px-4 xl:px-8">
              <div className="mb-8">
                <EstetoscopioIcon />
                <span className="inline-block mb-2 text-gray-500">
                  Sobre nosotros
                </span>
                <h2 className="text-3xl font-bold mb-4">Comprometidos con tu bienestar desde casa</h2>
                <p className="text-gray-600">
                  Ofrecemos un servicio cómodo, seguro y personalizado directamente en tu hogar.<br/>
                  Nuestro objetivo es facilitar su acceso a una atención de calidad, eliminando los tiempos de espera, para que puedas enfocarte en lo más importante: tu bienestar.
                </p>
              </div>
              <div className="mb-8">
                <ul className="grid grid-cols-2 gap-y-2 text-gray-700">
                  <li className="flex items-center"><i className="fas fa-heart-pulse mr-2 text-red-500"></i> Comodidad Total</li>
                  <li className="flex items-center"><i className="fas fa-heart-pulse mr-2 text-red-500"></i>Disponibilidad inmediata</li>
                  <li className="flex items-center"><i className="fas fa-heart-pulse mr-2 text-red-500"></i>Confianza</li>
                  <li className="flex items-center"><i className="fas fa-heart-pulse mr-2 text-red-500"></i>Seguimiento</li>
                </ul>
              </div>
              <div>
                <a href="about.html" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">More About Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default SectionAboutUs;
