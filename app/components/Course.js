"use client"
import Image from "next/image";
import Link from "next/link";

const cloudURL = "https://res.cloudinary.com/dtisjc6sf/image/upload/c_fill,e_improve,w_385,h_274,g_auto/f_auto/q_auto/v1/";

export function Course({ title, img, description }) {
  return (
    <div key={title} className={"block max-w-sm my-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"}>
      <a href="#!">
        <Image src={`${cloudURL}${img}`} width={385} height={274} alt={title} />
      </a>
      <div className={"p-6"}>
        <h5
          className={"mb-2 text-xl font-normal leading-tight text-neutral-800"}>
          {title}
        </h5>
        <div className={`py-3 text-sm mt-2 mb-4 list-disc font-light`} dangerouslySetInnerHTML={{ __html: description }}></div>

        <Link
          type="button"
          href={`https://wa.me/523318347660?text=Hola,%20quiero%20saber%20mas%20sobre%20el%20curso:%20${title}`}
          className={"inline-block w-full font-medium transition-colors bg-yellow-200 hover:bg-yellow-300 rounded-md focus:outline-none focus:ring-offset-2 focus:ring focus:ring-amber-200 px-7 py-4 | text-center flex justify-center items-center"}
          data-te-ripple-init
          data-te-ripple-color="light">
            <Image src="/whats-app-black.svg" alt="whatsApp" width={24} height={24} className="svg-inline--fa fa-shopping-cart fa-w-18 w-5 mx-2 fill-black-500" />
          Obtener Detalles
        </Link>
      </div>
    </div>
  )
}