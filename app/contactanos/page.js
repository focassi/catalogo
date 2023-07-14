// contactanosPage
import Link from "next/link";
import Image from "next/image";
import { Contact } from "../components/Contact";


export default function contactanosPage() {
  return (
    <div class="my-10 px-4">
      <div className="flex flex-wrap justify-around pb-8">
        <div className="block max-w-lg my-6">
          <h3 className="w-full text-3xl text-center font-light">
            Comunícate con nosotros
          </h3>
          <p className="py-4">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina. O escribenos un WhatsApp
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center pb-8">
        <div className="w-full max-w-sm my-6 mx-10">
          <Link
            href="https://wa.me/523318347660?text=Hola,%20quiero%20saber%20mas%20sobre%20cursos"
            className="pt-3 pb-2 bg-yellow-300 text-white w-full mt-2 rounded-md font-primary font-semibold text-xl flex 
                    justify-center items-center hover:bg-yellow-200" aria-label="cart-button">
            <Image src="/whats-app.svg" alt="whatsApp" width={24} height={24} className="svg-inline--fa fa-shopping-cart fa-w-18 w-5 mx-2" />
            Información
          </Link>

          <Link href={'tel:3318347660'} className="block mt-6 py-4 font-medium text-white text-center text-lg transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7" aria-label="cart-button">
            Llamanos
          </Link>
        </div>

        <div className="w-full max-w-md my-6 px-8 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Contact id="contact-us" />
        </div>
      </div>ß
    </div>
  )
}