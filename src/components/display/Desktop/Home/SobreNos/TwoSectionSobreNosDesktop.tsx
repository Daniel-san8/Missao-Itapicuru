import Image from "next/image";

export default function TwoSectionSobreNosDesktop() {
    return <div className="grid grid-cols-2 px-6 py-8 gap-x-6">
        <div className="relative">
            <Image src={"/assets/cardTwoSobreNos.png"} width={722} height={622} alt="card dois" draggable={false} />
            <div className="flex flex-col absolute font-black font-poppins text-white bottom-16 left-10 pr-20">
                <h1 className="text-5xl pb-6">O que fazemos?</h1>
                <p className="text-sm">
                    Trabalhamos com a plantação e revitalização de Igrejas em povos não alcançados,  evangelização de casa em casa, discipulado, EBD infantil, desenvolvimento  comunitário, alfabetização de jovens e adultos, reforço escolar.
                </p>
            </div>
        </div>
        <div className="relative">
            <Image src={"/assets/cardThreeSobreNos.png"} width={722} height={622} alt="card dois" draggable={false} />
            <div className="flex flex-col absolute font-black font-poppins text-white bottom-52 left-5 pr-20">
                <h1 className="text-7xl pb-4">
                    É a sua vez de
                    contribuir.
                </h1>
                <p className="text-sm">
                    Queremos compartilhar a nossa missão no Brasil com cada um de vocês. Através da nossa visão, você pode fazer parte dessa corrente  e iniciar uma história. Nós ajudamos pessoas com sua ajuda.
                </p>
                <button className='lg:rounded-[40px] lg:bg-brand-light lg:text-white lg:w-[143px] lg:h-[50px] lg:font-bold lg:font-dm-sans lg:text-sm lg:absolute lg:-bottom-48'>
                    SAIBA MAIS
                </button>
            </div>
        </div>
    </div>
}