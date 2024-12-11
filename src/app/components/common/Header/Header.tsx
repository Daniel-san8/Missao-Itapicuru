export default function Header() {
  return (
    <header className='flex justify-between bg-brand-brown text-primary-white h-[72px] items-center px-6 text-[20px]'>
      <div>
        Missão <span className='font-bold'>Itapicuru</span>
      </div>
      <div className='flex flex-col gap-y-2'>
        <span className='menu-hamburguer'></span>
        <span className='menu-hamburguer'></span>
        <span className='menu-hamburguer-last'></span>
      </div>
    </header>
  );
}
