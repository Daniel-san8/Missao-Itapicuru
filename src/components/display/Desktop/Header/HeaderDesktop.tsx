import ButtonHeaderDesktop from "./ButtonHeaderDesktop";
import LogoHomeDesktop from "./LogoHomeDesktop";
import RoutesHeaderDesktop from "./RoutesHeaderDesktop";

export default function HeaderDesktop() {
    return <header className="lg:flex lg:bg-brand-brown lg:items-center lg:justify-around lg:fixed lg:top-0 lg:z-10 lg:w-full hidden">
        <LogoHomeDesktop />
        <RoutesHeaderDesktop />
        <ButtonHeaderDesktop />
    </header>
}