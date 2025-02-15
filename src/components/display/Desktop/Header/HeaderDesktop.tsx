import ButtonHeaderDesktop from "./ButtonHeaderDesktop";
import LogoHomeDesktop from "./LogoHomeDesktop";
import RoutesHeaderDesktop from "./RoutesHeaderDesktop";

export default function HeaderDesktop() {
    return <header className="lg:flex lg:bg-brand-brown lg:items-center lg:justify-around">
        <LogoHomeDesktop />
        <RoutesHeaderDesktop />
        <ButtonHeaderDesktop />
    </header>
}