import Image from "next/image";
import InstagramIcon from "../../../../public/svg/InstagramIcon";
import FacebookIcon from "../../../../public/svg/FacebookIcon";
import YoutubeIcon from "../../../../public/svg/YoutubeIcon";
import Link from "next/link";

export default function Footer() {
  return <footer className='lg:bg-brand-light lg:text-brand-beige lg:flex lg:justify-between lg:px-32 lg:items-center lg:py-20'>
    <div>
      <Image src={"/assets/logoHomeDesktop.png"} width={183} height={143} alt="logo" draggable={false} />
      <p className="mb-5">©2024 - Missão Itapicuru</p>
      <p>Todos os direitos reservados.</p>
    </div>

    <div className="lg:flex lg:gap-x-8">
      <Link href={"https://instagram.com"} target="_blank"><InstagramIcon /></Link>
      <Link href={"https://facebook.com"} target="_blank"><FacebookIcon /></Link>
      <Link href={"https://youtube.com"} target="_blank"><YoutubeIcon /></Link>
    </div>
  </footer>;
}
