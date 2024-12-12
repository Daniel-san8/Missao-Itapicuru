export default function MenuHamburguer({ menuOpen }: { menuOpen: boolean }) {
  if (!menuOpen) return null;
  return (
    <div className='pt-[72px] h-full bg-brand-brown flex flex-col items-center'>
      <ul className='flex flex-col text-[24px] text-center text-primary-white font-dm-sans font-bold gap-y-[48px] pt-14'>
        <li>Início</li>
        <li>Missão</li>
        <li>Valores</li>
        <li>Blog</li>
        <li>Onde servimos</li>
        <li>Declaração de fé</li>
      </ul>
    </div>
  );
}
