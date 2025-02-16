import Image from "next/image";

export default function HelpUsDesktop() {
    return <div className="lg:bg-brand-light lg:flex lg:items-center lg:gap-x-14 lg:pt-8">
        <Image src={"/assets/homeDesktop/cactoHomeDesktop.png"} width={209} height={250} alt="cacto" />
        <div className="lg:flex lg:flex-col lg:items-center">
            <h1 className="lg:text-white lg:font-montserrat lg:text-2xl lg:pl-10 lg:text-center"><span className="lg:font-bold">Pode nos ajudar?</span> Entre em contato conosco ou clique abaixo <br /> para doar!</h1>
            <button className='lg:rounded-[40px] lg:bg-brand-brown lg:text-white lg:w-24 lg:h-12 lg:font-dm-sans lg:font-bold lg:text-sm lg:mb-5 ml-10 mt-10'>DOAR</button>
        </div>
    </div>
}