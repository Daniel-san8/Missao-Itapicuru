import Image from "next/image"

export default function NossosProjetosDesktop() {
    return <section className="lg:bg-brand-light lg:pt-56">
        <div className="flex items-center">
            <Image className="mx-8" src={"/assets/homeDesktop/chapeuHomeDesktop.png"} width={140} height={110} alt="chapéu cangaço" />
            <div className="flex flex-col text-center gap-y-3">
                <h1 className="font-dm-sans font-bold text-4xl text-white">Nossos projetos</h1>
                <p className="font-montserrat font-medium text-[25px] text-white">
                    Através desses projetos, <span className="font-bold">ajudamos a espalhar a mensagem
                        de Deus</span> por onde vamos.
                </p>
            </div>
            <Image className="mx-8" src={"/assets/homeDesktop/passaroHomeDesktop.png"} width={140} height={110} alt="pássaro" />
        </div>
    </section>
}