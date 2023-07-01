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
    <header class="w-full bg-amber-100 py-10 px-6">
      <nav class="flex justify-start items-center mx-6">
        <Image src="/focassi.png" alt='logo' width={60} height={60}/>
        <ul class="flex justify-start mx-6">
          {
            links.map(({label, route}) => (
              <li key={route} class="mr-6 text-lg">
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
