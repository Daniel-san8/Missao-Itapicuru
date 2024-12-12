'use client';

import React, { useRef } from 'react';
import MenuHamburguer from './MenuHamburguer';

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const headerNoActivate =
    'flex font-poppins justify-between bg-brand-brown text-primary-white h-[72px] items-center px-6 text-[20px]';
  const headerActivate =
    'flex font-poppins justify-between bg-brand-light text-primary-white h-[72px] items-center px-6 text-[20px]';

  React.useEffect(() => {
    addEventListener('scroll', changeHeader);

    function changeHeader() {
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (headerRef.current && scrollY > 1) {
        headerRef.current.className = headerActivate + ' transition-header';
      }
      if (headerRef.current && scrollY === 0) {
        headerRef.current.className = headerNoActivate + ' transition-header';
      }
    }

    return () => {
      removeEventListener('scroll', changeHeader);
    };
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
      className='flex font-poppins justify-between bg-brand-brown text-primary-white h-[72px] items-center px-6 text-[20px] '
    >
      <div>
        Missão <span className='font-bold'>Itapicuru</span>
      </div>
      <MenuHamburguer />
    </header>
  );
}
