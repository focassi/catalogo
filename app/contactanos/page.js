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
          <Image src={"https://res.cloudinary.com/dtisjc6sf/image/upload/c_thumb,w_1200,h_850,g_auto/f_auto/q_auto/v1/Focassi/contact_us_hztnyf.jpg"} width={1200} height={850} alt="Imagen contactanos" />
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
          <div className="flex justify-center py-6">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="80" height="80">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
            </svg>
          </div>
          <Contact id="contact-us" />
        </div>
      </div>
    </div>
  )
}