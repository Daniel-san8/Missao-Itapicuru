'use client';

import React, { useRef } from 'react';
import MenuHamburguer from './MenuHamburguer';

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isActivateHeader, setIsActivateHeader] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    addEventListener('scroll', changeHeader);

    function changeHeader() {
      const scrollY = window.scrollY;
      if (!headerRef.current) return null;
      if (scrollY > 1) {
        headerRef.current.classList.remove('headerNoActivate');
        headerRef.current.classList.add('headerActivate');
        setIsActivateHeader(true);
      } else {
        headerRef.current.classList.remove('headerActivate');
        headerRef.current.classList.add('headerNoActivate');
        setIsActivateHeader(false);
      }
    }

    return () => {
      removeEventListener('scroll', changeHeader);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className='headerNoActivate'>
      <div>
        Missão <span className='font-bold'>Itapicuru</span>
      </div>
      <MenuHamburguer activate={isActivateHeader} />
    </header>
  );
}
