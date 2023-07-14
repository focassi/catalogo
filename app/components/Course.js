"use client"
import Image from "next/image";
import Link from "next/link";

const cloudURL = "https://res.cloudinary.com/dtisjc6sf/image/upload/c_thumb,w_385,h_274,g_auto/f_auto/q_auto/v1/";

export function Course({title, img, description}) {

  return(
    <div key={title} className={"block max-w-sm my-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"}>
    <a href="#!">
      <Image src={`${cloudURL}${img}`} width={385} height={274} alt={title} />
    </a>
    <div className={"p-6"}>
      <h5
        className={"mb-2 text-xl font-normal leading-tight text-neutral-800"}>
        { title }
      </h5>
        <p className={`py-3  text-sm mt-8 font-light`}>
          {
          description
          }
        </p>
        <p className="py-3">
          <Link
            type="button"
            href={`https://wa.me/523318347660?text=Hola,%20quiero%20saber%20mas%20sobre%20el%20curso:%20${title}`}
            className={"w-full font-medium transition-colors bg-yellow-200 hover:bg-yellow-300 rounded-md focus:outline-none focus:ring-offset-2 focus:ring focus:ring-amber-200 px-7 py-4"}
            data-te-ripple-init
            data-te-ripple-color="light">
            Obtener Detalles
          </Link>
        </p>
    </div>
  </div>
  )
}