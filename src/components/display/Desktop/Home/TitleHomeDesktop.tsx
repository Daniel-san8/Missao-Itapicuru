import Image from "next/image";

export default function TitleHomeDesktop() {
    return <div className="lg:relative lg:font-bold lg:font-dm-sans lg:mt-10">
        <Image src={"/assets/homeDesktop/mainHomeDesktop.png"} height={658} width={1366} alt="imagem-central" draggable={false} className="lg:w-screen" />
        <div className="lg:absolute lg:top-0 lg:pt-20 lg:pl-32">
            <h1 className="lg:text-sm lg:text-heat-text-home lg:mb-4">BOAS-VINDAS A MISSÃO ITAPICURU 👋</h1>
            <p className="lg:text-4xl lg:text-brand-beige-2 lg:pr-96 lg:mr-52">“Como as águas cobrem o mar, todo sertão será cheio da glória de Deus.”</p>
        </div>
    </div>
}