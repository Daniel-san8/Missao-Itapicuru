"use client"
import { routesHeader } from "../../../../public/routesHeader"
import Link from "next/link"


export default function RoutesHeaderDesktop() {
    const routes = routesHeader

    return <ul className="lg:flex">
        {routes.map(({ route, name }, index) => {
            return <li key={index}><Link href={route}>{name}</Link></li>
        })}
    </ul>
}