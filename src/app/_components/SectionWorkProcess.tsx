import React from "react";
import EstetoscopioIcon from "../_utils/svg/EstetoscopioIcon";

const SectionWorkProcess = () => {
  const CDN_ASSETS = process.env.NEXT_PUBLIC_CDN_ASSETS;
  return (
    <section
      className="space bg-cover bg-center"
      style={{ backgroundImage: 'url(assets/img/bg/process_bg_1.jpg)' }}
    >
      <div className="container mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <span className="inline-block text-gray-500 mb-2">
            <EstetoscopioIcon />
            Nuestro proceso
          </span>
          <h2 className="text-3xl font-bold">Veamos como funciona nuestro proceso</h2>
        </div>

        {/* Tarjetas del proceso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="relative">
              <img
                src={CDN_ASSETS + "images/process_card_1.jpg"}
                alt="icon"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                01
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Busca y elige un profesional de salud</h3>
            <p className="text-gray-600">
            Encuentra enfermeros o médicos disponibles cerca de ti, filtrando por especialidad, calificaciones, y precio.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="relative">
              <img
                src={CDN_ASSETS + "images/process_card_2.jpg"}
                alt="icon"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                02
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Programa una cita rápida</h3>
            <p className="text-gray-600">
            Agenda la visita en el día y hora que prefieras directamente desde la plataforma.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="relative">
              <img
                src={CDN_ASSETS + "images/process_card_3.jpg"}
                alt="icon"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                03
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Recibe atención médica en casa</h3>
            <p className="text-gray-600">
            Un profesional de salud certificado llegará a tu domicilio para brindarte atención de calidad.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="relative">
              <img
                src={CDN_ASSETS + "images/process_card_4.jpg"}
                alt="icon"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                04
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Obtén seguimiento a tus cuidados</h3>
            <p className="text-gray-600">
            Recibe seguimiento de tu estado de salud y medicamentos, con IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorkProcess;
