import Image from "next/image"

export default function SobreNosDesktop() {
    return <div className="bg-white grid grid-cols-2 px-24 pt-24">
        <div className="relative">
            <Image src={"/assets/cardOneSobreNos.png"} width={513} height={508} alt="cardOne" />
            <p className="absolute font-poppins font-black text-7xl text-white bottom-28 left-7">MISSÃO, <br /> VALOR E <br /> VISÃO</p>
        </div>
    </div>
}