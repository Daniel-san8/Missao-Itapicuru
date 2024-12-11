import MenuHamburguer from './MenuHamburguer';

export default function Header() {
  return (
    <header className='flex font-poppins justify-between bg-brand-brown text-primary-white h-[72px] items-center px-6 text-[20px]'>
      <div>
        Missão <span className='font-bold'>Itapicuru</span>
      </div>
      <MenuHamburguer />
    </header>
  );
}
