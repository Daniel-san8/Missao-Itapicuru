import Image from "next/image";

export default function HelpUsDesktop() {
    return <div className="bg-brand-light flex items-center gap-x-14 pt-8">
        <Image src={"/assets/homeDesktop/cactoHomeDesktop.png"} width={209} height={250} alt="cacto" />
        <div className="flex flex-col items-center">
            <h1 className="text-white font-montserrat text-2xl pl-10 text-center"><span className="font-bold">Pode nos ajudar?</span> Entre em contato conosco ou clique abaixo <br /> para doar!</h1>
            <button className='lg:rounded-[40px] lg:bg-brand-brown lg:text-white lg:w-24 lg:h-12 lg:font-dm-sans lg:font-bold lg:text-sm lg:mb-5 ml-10 mt-10'>DOAR</button>
        </div>
    </div>
}