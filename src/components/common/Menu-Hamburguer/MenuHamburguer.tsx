import Link from 'next/link';
import FacebookIcon from '../../../../public/svg/FacebookIcon';
import InstagramIcon from '../../../../public/svg/InstagramIcon';
import YoutubeIcon from '../../../../public/svg/YoutubeIcon';
import RoutesMenu from './RoutesMenu';

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
    'pt-[72px] bg-brand-brown flex flex-col items-center font-dm-sans transition-header animateMenu';
  const headerActivate =
    'pt-[72px] bg-brand-light flex flex-col items-center font-dm-sans transition-header animateMenu';

  if (!menuOpen) return null;
  return (
    <div className={isActivateHeader ? headerActivate : headerNoActivate}>
      <RoutesMenu setMenuIsOpen={setMenuIsOpen} />

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
