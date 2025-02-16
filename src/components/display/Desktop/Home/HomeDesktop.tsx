import ArticleHomeDesktop from "./ArticleHomeDesktop";
import HelpUsDesktop from "./HelpUsDesktop";
import NossosProjetosDesktop from "./NossosProjetos/NossosProjetosDesktop";
import TitleHomeDesktop from "./TitleHomeDesktop";

export default function HomeDesktop() {
    return <div className="lg:block hidden">
        <TitleHomeDesktop />
        <ArticleHomeDesktop />
        <NossosProjetosDesktop />
        <HelpUsDesktop />
    </div>
}