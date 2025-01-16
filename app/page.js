import Link from "next/link";
import Image from "next/image";
// import { Cards } from "./components/Cars";
import { Courses } from "./components/Courses";
import { Multicarousel } from "./components/Multicarousel";

export default function homePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("https://res.cloudinary.com/dtisjc6sf/image/upload/v1689094793/Focassi/hero-img_gwgra4.jpg")',
        height: 500,
      }}>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h3 className="mt-2 mb-16 text-3xl font-medium tracking-tight  md:text-4xl xl:text-5xl leading-loose">
                Comprometidos con la Seguridad y <br />
                Responsabilidad Civil  <br /><span className="font-bold">En FOCASSI te Formamos</span>
              </h3>
              <Link href={'/contactanos'} scroll={false}
                className="rounded-md border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Ponte en contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Courses title={'Conoce Nuestros Cursos'} n={6} />
      <div className="container mx-auto max-w-screen-xl text-center">
        <div className="flex flex-wrap justify-center py-6">
          <div className="block max-w-sm my-6">
            <Link href={'/cursos'} className="w-full py-4 font-medium text-white text-xl transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
              Ver mas cursos
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl text-center">
        <div className="py-8 px-2">
          <h3  className={"w-full text-4xl text-center font-light my-10 py-5"}>
            Nuestros Clientes
          </h3>
          <Multicarousel />
        </div>
      </div>
    </>
  )
}
