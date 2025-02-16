import Image from "next/image";
import Link from "next/link";

export default function LogoHomeDesktop() {
    return <span className="cursor-pointer"><Link href={"/"}><Image src={"/assets/homeDesktop/logoHomeDesktop.png"} width={147} height={128} alt="logo" /></Link>
    </span>
}