import Link from "next/link";
import { Cards } from "./components/Cars";

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
              Comprometidos con la seguridad y <br/>
              responsabilidad civil  <br/><span>en FOCASSI te formamos</span>
            </h1>
            <button type="button"
              class="rounded-md border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              Ponte en contacto
            </button>
          </div>
        </div>
      </div>
    </div>
    <Cards />
    <div class="container mx-auto max-w-screen-xl text-center">
      <div class="flex flex-wrap justify-center py-6">
        <div class="block max-w-sm my-6">
          <Link href={'/cursos'} className="w-full py-4 font-medium text-white text-xl transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black">
            Ver mas cursos
          </Link>
        </div>
      </div>
    </div>
    
  </>
  )
}
