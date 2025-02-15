"use client"
import { usePathname } from "next/navigation"
import { routesHeader } from "../../../../../public/routesHeader"
import Link from "next/link"


export default function RoutesHeaderDesktop() {
    const routes = routesHeader
    const path = usePathname()
    return <ul className="lg:flex lg:text-brand-beige-2 lg:gap-x-7">
        {routes.map(({ route, name }, index) => {
            return <li className={`relative ${path === route ? "lg:opacity-100 lg:font-bold" : "lg:opacity-65 lg:font-normal"}`} key={index}>
                <Link href={route}>{name}</Link>
                {path === route ? <div className="lg:bg-white lg:h-[2px] lg:z-50 lg:absolute lg:-bottom-full lg:w-full"></div> : null}
            </li>
        })}
    </ul>
}