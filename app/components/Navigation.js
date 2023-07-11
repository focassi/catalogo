import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "Inicio",
    route: "/"
  },
  {
    label: "Cursos",
    route: "/cursos"
  }
]

export function Navigation () {
  return (
    <header className="w-full bg-amber-100 py-10 px-6">
      <nav className="flex justify-start items-center mx-6">
        <Image src="https://res.cloudinary.com/dtisjc6sf/image/upload/v1689094700/Focassi/focassi_sjsvo1.png" alt='logo' width={60} height={60}/>
        <ul className="flex justify-start mx-6">
          {
            links.map(({label, route}) => (
              <li key={route} className="mr-6 text-lg">
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
