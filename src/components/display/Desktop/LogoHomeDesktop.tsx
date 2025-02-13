"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogoHomeDesktop () {
    const router = useRouter();

    return <div className="lg:flex lg:bg-brand-brown">
        <span className="cursor-pointer"
              onClick={() => router.push('/')}
        >
            <Image src={"/assets/logoHomeDesktop.png"} width={147} height={128} alt="logo"/>
        </span>
    </div>
}