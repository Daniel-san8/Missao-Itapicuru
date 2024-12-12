import FacebookIcon from '../../../../public/svg/facebookIcon';
import InstagramIcon from '../../../../public/svg/instagramIcon';
import YoutubeIcon from '../../../../public/svg/youtubeIcon';

export default function MenuHamburguer({ menuOpen }: { menuOpen: boolean }) {
  if (!menuOpen) return null;
  return (
    <div className='pt-[72px] h-full bg-brand-brown flex flex-col items-center font-dm-sans'>
      <ul className='flex flex-col text-[24px] text-center text-primary-white font-bold gap-y-[48px] pt-14'>
        <li>Início</li>
        <li>Missão</li>
        <li>Valores</li>
        <li>Blog</li>
        <li>Onde servimos</li>
        <li>Declaração de fé</li>
      </ul>

      <button className='rounded-[40px] bg-white text-brand-brown text-[18px] font-bold mt-[43px] mb-[74px] w-[170px] h-[55px]'>
        DOE AGORA
      </button>

      <div className='flex gap-x-8 mb-[176px]'>
        <InstagramIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}
