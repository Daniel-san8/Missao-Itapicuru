export default function MenuHamburguer({ menuOpen }: { menuOpen: boolean }) {
  if (!menuOpen) return null;
  return <div className='pt-[72px]'>Menu Hamburguer</div>;
}
