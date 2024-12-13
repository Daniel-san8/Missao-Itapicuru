import Link from 'next/link';
import FacebookIcon from '../../../../public/svg/FacebookIcon';
import InstagramIcon from '../../../../public/svg/InstagramIcon';
import YoutubeIcon from '../../../../public/svg/YoutubeIcon';

export default function MenuHamburguer({
  menuOpen,
  isActivateHeader,
  setMenuIsOpen,
}: {
  menuOpen: boolean;
  isActivateHeader: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const headerNoActivate =
    'pt-[72px] bg-brand-brown flex flex-col items-center font-dm-sans transition-header';
  const headerActivate =
    'pt-[72px] bg-brand-light flex flex-col items-center font-dm-sans transition-header';

  if (!menuOpen) return null;
  return (
    <div className={isActivateHeader ? headerActivate : headerNoActivate}>
      <ul className='flex flex-col text-[24px] text-center text-primary-white font-bold gap-y-[48px] pt-14'>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/'}>
            Início
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/missao'}>
            Missão
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/valores'}>
            Valores
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/blog'}>
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/onde-servimos'}>
            Onde servimos
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuIsOpen(false)} href={'/declaracao-de-fe'}>
            Declaração de fé
          </Link>
        </li>
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
