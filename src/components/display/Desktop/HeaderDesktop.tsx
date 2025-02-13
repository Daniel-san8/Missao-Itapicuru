import LogoHomeDesktop from "./LogoHomeDesktop";
import RoutesHeaderDesktop from "./RoutesHeaderDesktop";

export default function HeaderDesktop() {
    return <header className="lg:flex lg:bg-brand-brown lg:items-center">
        <LogoHomeDesktop />
        <RoutesHeaderDesktop />
    </header>
}