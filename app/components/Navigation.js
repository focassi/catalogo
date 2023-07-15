"use client"
// import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const logo = "https://res.cloudinary.com/dtisjc6sf/image/upload/v1689094700/Focassi/focassi_sjsvo1.png"

export function Navigation() {
  const [collapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="w-full bg-amber-100 ">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <a href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image alt="logo-focassi" loading="lazy" width={200} height={200} decoding="async" data-nimg="1" className="w-16" style="color:transparent" src={logo} />
              </span>
              {/* <span>Nextly</span> */}
            </span>
          </a>
          <button aria-label="Toggle Menu" className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700" id="headlessui-disclosure-button-:R956:" type="button" aria-expanded="false" onClick={() => setSidebarCollapsed((prev) => !prev)}>
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>

        <div className={`${collapsed ? "" : "hidden"} text-center lg:flex lg:items-center`}>
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {
              links.map(({ label, route }) => (
                <li key={route} className="mr-3 text-left">
                  <Link href={route} className={`inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-amber-500 focus:text-amber-500 focus:outline-none `} onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    {label}
                  </Link>
                </li>
              ))
            }
            <li className="lg:hidden mr-3 text-left">
              <Link href={'/contactanos'} className={`inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-amber-500 focus:text-amber-500 focus:outline-none `} onClick={() => setSidebarCollapsed((prev) => !prev)}>
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        <div className={`hidden mr-3 space-x-4 lg:flex nav__item`}>
          <Link className="px-6 py-2 text-black text-sm focus:text-amber-500 active:text-amber-500 hover:text-amber-500 rounded-md border-2 border-black font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-amber-500 hover:bg-amber-500 hover:bg-opacity-10 focus:border-amber-500 focus:outline-none focus:ring-0 active:border-amber-500" href="/contactanos">CONTACTO</Link>
        </div>
      </nav>
    </div>
  )
}
