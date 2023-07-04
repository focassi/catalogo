import Link from "next/link";
import Image from "next/image";
import { Cards } from "./components/Cars";
import { Contact } from "./components/Contact";

export default function homePage() {
  return (
    <>
      <div class="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("/hero-img.webp")',
        height: 500,
      }}>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="mt-2 mb-16 text-3xl font-semibold capitalize tracking-tight  md:text-4xl xl:text-5xl leading-loose">
                Comprometidos con la seguridad y <br />
                responsabilidad civil  <br /><span>en FOCASSI te formamos</span>
              </h1>
              <Link href={'/#contact-us'} scroll={false}
                class="rounded-md border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Ponte en contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Cards title={'Conoce Nuestros Cursos'} n={6} />
      <div class="container mx-auto max-w-screen-xl text-center">
        <div class="flex flex-wrap justify-center py-6">
          <div class="block max-w-sm my-6">
            <Link href={'/cursos'} className="w-full py-4 font-medium text-white text-xl transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
              Ver mas cursos
            </Link>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-around pb-8">
        <div class="block max-w-lg my-6">
          <h3 class="w-full text-3xl text-center font-light">
            Comunícate con nosotros
          </h3>
          <p class="py-4">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina. O escribenos un WhatsApp
          </p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-center pb-8">
        <div class="w-full max-w-sm my-6 mx-10">
          <Link
            href="https://wa.me/523318347660?text=Hola,%20quiero%20saber%20mas%20sobre%20cursos"
            class="pt-3 pb-2 bg-yellow-300 text-white w-full mt-2 rounded-md font-primary font-semibold text-xl flex 
                        justify-center items-center hover:bg-yellow-200" aria-label="cart-button">
            <Image src="/whats-app.svg" alt="whatsApp" width={24} height={24} class="svg-inline--fa fa-shopping-cart fa-w-18 w-5 mx-2" />
            Información
          </Link>

          <Link href={'tel:3318347660'} class="block mt-6 py-4 font-medium text-white text-center text-lg transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7" aria-label="cart-button">
            Llamanos
          </Link>
        </div>

        <div class="w-full max-w-md my-6 px-8 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" id="contact-us">
          <Contact />
        </div>
      </div>
    </>
  )
}
