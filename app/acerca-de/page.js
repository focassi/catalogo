import Image from "next/image";
import { TeamMember } from "../components/Teammenber";

import { teamMembers } from "../components/members.json";
import Link from "next/link";

export default function AcercaDePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://res.cloudinary.com/dtisjc6sf/image/upload/v1689289539/Focassi/Seguridad_e_Higiene_Industrial_ordnuv.jpg")',
        height: 650,
      }}>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h3 className="mt-2 mb-16 text-3xl font-medium tracking-tight  md:text-4xl xl:text-5xl leading-loose">
                Acerca De Nosotros
              </h3>
              <p className="max-w-lg my-8 text-justify">
                FOCASSI es una organización comprometida con la Seguridad y Responsabilidad Civil. Nuestra misión es proporcionar cursos de capacitación especializados en seguridad laboral, enfocados en la prevención de riesgos y la protección de la integridad de los trabajadores en distintos entornos laborales.
              </p>
              <Link href={'/contactanos'} scroll={false}
                className="rounded-md border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Ponte en contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center py-16">
        <div className="py-8 px-2 w-6/12">
          <Image src={`https://res.cloudinary.com/dtisjc6sf/image/upload/v1689723775/Focassi/Rescate_Acuatico_hacgno.jpg`} width={650} height={650} alt="nosotros" />
        </div>
        <div className="py-8 px-8 w-6/12 self-center">
          <p className="my-8 text-justify text-xl">
            Nos enorgullecemos de contar con un equipo de expertos en seguridad que imparten programas de formación integrales y actualizados, diseñados para satisfacer las necesidades específicas de cada empresa o industria.
          </p>
        </div>

        <div className="py-8 px-2 w-6/12 self-center">
          <section>
            <h2 className="text-3xl">Nuestra Misión</h2>
            <p className="text-xl">Nuestra misión en FOCASSI es contribuir al desarrollo de un entorno laboral seguro y responsable, mediante la capacitación y formación en seguridad, promoviendo así una cultura preventiva que proteja la vida y bienestar de los trabajadores.</p>
          </section>
        </div>
        <div className="py-8 px-2 w-6/12">
          <Image src={`https://res.cloudinary.com/dtisjc6sf/image/upload/v1690570283/Focassi/about-us_pke83y.jpg`} width={650} height={650} alt="nosotros" />
        </div>
        <div className="py-8 px-2 w-6/12">
          <Image src={`https://res.cloudinary.com/dtisjc6sf/image/upload/v1690579763/Focassi/about-us2_vt4t0n.jpg`} width={650} height={650} alt="cursor" />
        </div>
        <div className="py-8 px-2 w-6/12 self-center">
          <section>
              <h2 className="text-3xl">Nuestros Valores</h2>
              <ul>
                <li>Compromiso con la seguridad y la integridad de las personas</li>
                <li>Excelencia en la calidad de nuestros cursos y servicios</li>
                <li>Ética y profesionalismo en todas nuestras acciones</li>
                <li>Innovación y adaptación a las últimas tendencias en seguridad laboral</li>
                <li>Trabajo en equipo y colaboración con nuestros clientes</li>
              </ul>
            </section>
        </div>
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl">
            Nuestro  <u className="text-primary dark:text-primary-400">Equipo</u>
          </h2>

          <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {
              teamMembers.map(({ avatar, name, role }) => (
                <TeamMember key={name} avatar={avatar} name={name} role={role} />
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}