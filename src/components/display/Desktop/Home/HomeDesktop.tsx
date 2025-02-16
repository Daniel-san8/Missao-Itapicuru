import ArticleHomeDesktop from "./ArticleHomeDesktop";
import HelpUsDesktop from "./HelpUsDesktop";
import NossosProjetosDesktop from "./NossosProjetos/NossosProjetosDesktop";
import TitleHomeDesktop from "./TitleHomeDesktop";

export default function HomeDesktop() {
    return <>
        <TitleHomeDesktop />
        <ArticleHomeDesktop />
        <NossosProjetosDesktop />
        <HelpUsDesktop />
    </>
}