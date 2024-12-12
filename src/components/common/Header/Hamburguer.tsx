import React from 'react';
import ClosedMenu from './ClosedMenu';

export default function Hamburguer({
  activate,
  menuOpen,
  setMenuOpen,
}: {
  activate: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isLineNotActivate = 'bg-brand-brown w-[20px] h-[2px] rounded-sm';
  const lineActivate = 'bg-brand-beige w-[20px] h-[2px] rounded-sm self-end';

  const isLineEndActivate =
    'bg-brand-brown w-[12px] h-[2px] rounded-sm self-end';
  const lineEndNotActivate =
    'bg-brand-beige w-[12px] h-[2px] rounded-sm self-end';

  return (
    <div
      className='flex flex-col gap-y-2 cursor-pointer'
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? (
        <ClosedMenu />
      ) : (
        <>
          <span className={activate ? isLineNotActivate : lineActivate}></span>
          <span className={activate ? isLineNotActivate : lineActivate}></span>
          <span
            className={activate ? isLineEndActivate : lineEndNotActivate}
          ></span>
        </>
      )}
    </div>
  );
}
