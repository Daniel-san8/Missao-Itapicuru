export default function MenuHamburguer({ activate }: { activate: boolean }) {
  const isLineNotActivate = 'bg-brand-brown w-[20px] h-[2px] rounded-sm';
  const lineActivate = 'bg-brand-beige w-[20px] h-[2px] rounded-sm self-end';

  const isLineEndActivate =
    'bg-brand-brown w-[12px] h-[2px] rounded-sm self-end';
  const lineEndNotActivate =
    'bg-brand-beige w-[12px] h-[2px] rounded-sm self-end';

  console.log();
  return (
    <div className='flex flex-col gap-y-2 cursor-pointer'>
      <span className={activate ? isLineNotActivate : lineActivate}></span>
      <span className={activate ? isLineNotActivate : lineActivate}></span>
      <span
        className={activate ? isLineEndActivate : lineEndNotActivate}
      ></span>
    </div>
  );
}
