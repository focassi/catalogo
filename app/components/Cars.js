"use client"
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const courses = [
  {
    "img": "/Focassi/Rescate_vertical_edaylk.jpg", 
    "title": "Rescate Vertical"
  },
  {
    "img": "/Focassi/Primeros_auxilios_mi70vb.jpg", 
    "title": "Primeros auxilios"
  },
  {
    "img": "/Focassi/Trabajo_de_Altura_en_Condiciones_De_Seguridad_b39epi.jpg", 
    "title": "Trabajo de Altura en Condiciones De Seguridad"
  },
  {
    "img": "/Focassi/Búsqueda_y_Rescate_yhtnzs.jpg", 
    "title": "Búsqueda y Rescate"
  },
  {
    "img": "/Focassi/Rescate_Acuatico_p2lfx6.jpg", 
    "title": "Rescate Acuatico"
  },
  {
    "img": "/Focassi/Seguridad_e_Higiene_Industrial_rlom4q.jpg", 
    "title": "Seguridad e Higiene Industrial"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg",
    "title": "Control y Combate De Incendios"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Evacuación en Caso de Emergencias"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Condiciones de Seguridad en Espacios Confinados"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Selección Uso y Manejo del Equipo de Protección Personal"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Identificación, Comunicación De Peligros Y Riesgos de Sustancias Químico Peligrosas en los centros de Trabajo"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Condiciones de Seguridad en Mantenimiento e Instalaciones Eléctricas"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Condiciones De Seguridad en la Construcción"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Uso y Armado de Andamios"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Loto Candadeo y Etiquetado de Energía"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Uso de Herramientas Manual y de Poder"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Riesgo Por Excavaciones"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Plataformas de Elevación"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Corte y Soldadura"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Trabajos en Caliente"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Seguridad en Maniobras de Grúas e Izajes"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Gestión Integral de Residuos"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Riesgo Electrico"
  },
  {
    "img": "/Focassi/Control_y_Combate_De_Incendios_sqodr7.jpg", 
    "title": "Manejo de Escaleras, Cuerdas y Nudos"
  }
]

export function Cards({title, n}) {
  const coursesToShow = n ? courses.slice(0, n) : courses

  return (
    <div className={'container mx-auto max-w-screen-xl'}>
      <div className={"pt-10 pb-5"}>
        <h3 className={"w-full text-3xl text-center font-light"}>
          {title}
        </h3>
      </div>
      <div className={"flex flex-wrap justify-around pb-8"}>
        {
          coursesToShow.map(({ title, img }) => (
            <div
              key={title} className={"block max-w-sm my-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"}>
              <a href="#!">
                <CldImage width={385} height={274}
                  className={"rounded-t-lg"}
                  src={img}
                  alt={title}
                  crop="thumb" 
                />
              </a>
              <div className={"p-6"}>
                <h5
                  className={"mb-2 text-xl font-normal leading-tight text-neutral-800"}>
                  { title }
                </h5>
                <p className={"mb-4 text-base text-neutral-600"}>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </p>
                <button
                  type="button"
                  className={"w-full py-4 font-semibolt transition-colors bg-yellow-200 hover:bg-yellow-300 rounded-md focus:outline-none focus:ring-offset-2 focus:ring focus:ring-amber-200 px-7"}
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Obtener Detalles
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
