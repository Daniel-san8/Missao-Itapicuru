import Image from "next/image";

export default function OneSectionSobreNosDesktop() {
    return <div className="bg-white grid grid-cols-2 px-24 pt-24">
        <div className="relative">
            <Image src={"/assets/cardOneSobreNos.png"} width={513} height={508} alt="cardOne" />
            <p className="absolute font-poppins font-black text-7xl text-white top-44 left-7 shadow-sm">MISSÃO, <br /> VALOR E <br /> VISÃO</p>
        </div>
        <div className="flex flex-col font-dm-sans font-bold text-brand-brown">
            <h1 className="text-sm">SOBRE NÓS</h1>
            <h2 className="text-4xl pr-36 pt-3">Entenda quem somos e por que existimos</h2>
            <div className="font-montserrat font-medium text-gray-paragraph py-6">
                <p className="pb-4">
                    A Missão Casa Farol Sertão Missão Itapicuru é uma organização missionária comprometida em levar a boa notícia para os povos não alcançados do sertão, aqueles que não ouviram nada ou muito pouco sobre Cristo.No ano de 2010 o pastor Savastane após uma busca no site do IBGE, descobriu que o município de Itapicuru possuía o menor IDH da Bahia. A partir de então, passou a visitar a cidade com uma caravana de jovens para evangelizar a cidade e atender de forma emergencial algumas famílias através da distribuição de cestas básicas.
                </p>

                <p className="pb-4">
                    Em 2014 o pastor Josival Amorim junto com o amigo Carlos Eduardo (Cadu), tentaram iniciar um projeto de evangelização nas praças de Itapicuru, mas após uma reunião com as lideranças da cidade chegaram a conclusão de que o Senhor desejava “resgatar uma noiva” que estava ferida. Iniciou-se então um trabalho de discipulado e aconselhamento na Primeira Igreja Batista de Itapicuru.
                </p>

                <p>
                    Em 2015, o pastor Wagner Ribeiro passou a integrar a equipe com visitas frequentes à cidade aos finais de semana, trabalhando com discipulado, fundamentos da fé cristã nas EBD, seminários de dons e Escola de Capacitação Ministerial através da Escola Siga-me (na época Ceifar).
                </p>
            </div>
        </div>
    </div>
}