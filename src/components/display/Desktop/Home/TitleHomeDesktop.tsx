import Image from "next/image";

export default function TitleHomeDesktop() {
    return <div className="relative font-bold font-dm-sans">
        <Image src={"/assets/homeDesktop/mainHomeDesktop.png"} height={658} width={1366} alt="imagem-central" draggable={false} />
        <div className="absolute top-0 pt-20 pl-32">
            <h1 className="text-sm text-heat-text-home mb-4">BOAS-VINDAS A MISSÃO ITAPICURU 👋</h1>
            <p className="text-4xl text-brand-beige-2 pr-96 mr-52">“Como as águas cobrem o mar, todo sertão será cheio da glória de Deus.”</p>
        </div>
    </div>
}