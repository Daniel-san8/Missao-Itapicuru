import Image from "next/image";
import InstagramIcon from "../../../../public/svg/InstagramIcon";
import FacebookIcon from "../../../../public/svg/FacebookIcon";
import YoutubeIcon from "../../../../public/svg/YoutubeIcon";
import Link from "next/link";

export default function Footer() {
  return <footer className='bg-brand-light text-brand-beige lg:flex lg:justify-between lg:px-32 lg:items-center lg:py-20 lg:pt-0 px-6 pt-8'>
    <div>
      <Image src={"/assets/homeDesktop/logoHomeDesktop.png"} width={183} height={143} alt="logo" draggable={false} />
      <p className="mb-2 lg:mb-5">©2024 - Missão Itapicuru</p>
      <p>Todos os direitos reservados.</p>
    </div>

    <div className="flex pb-14 pt-8 gap-x-8 lg:pb-0 lg:pt-0">
      <Link href={"https://instagram.com"} target="_blank"><InstagramIcon /></Link>
      <Link href={"https://facebook.com"} target="_blank"><FacebookIcon /></Link>
      <Link href={"https://youtube.com"} target="_blank"><YoutubeIcon /></Link>
    </div>
  </footer>;
}
