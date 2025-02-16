import Image from "next/image"
import CarrosselProjetosDesktop from "./CarrosselProjetosDesktop"

export default function NossosProjetosDesktop() {
    return <section className="lg:bg-brand-light lg:pt-56">
        <div className="lg:flex lg:items-center">
            <Image className="lg:mx-8" src={"/assets/homeDesktop/chapeuHomeDesktop.png"} width={140} height={110} alt="chapéu cangaço" />
            <div className="lg:flex lg:flex-col lg:text-center lg:gap-y-3">
                <h1 className="lg:font-dm-sans lg:font-bold lg:text-4xl lg:text-white">Nossos projetos</h1>
                <p className="lg:font-montserrat lg:font-medium lg:text-[25px] lg:text-white">
                    Através desses projetos, <span className="lg:font-bold">ajudamos a espalhar a mensagem
                        de Deus</span> por onde vamos.
                </p>
            </div>
            <Image className="lg:mx-8" src={"/assets/homeDesktop/passaroHomeDesktop.png"} width={140} height={110} alt="pássaro" />
        </div>
        <CarrosselProjetosDesktop />

    </section>
}