import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className='pt-[72px] bg-brand-light font-dm-sans text-center overflow-hidden flex flex-col items-center'>
      <h1 className='font-bold pt-10 pb-8 text-brand-brown text-[14px]'>
        BOAS-VINDAS A MISSÃO ITAPICURU
      </h1>
      <h2 className='text-white text-2xl font-bold px-5 pb-24'>
        “Como as águas cobrem o mar, todo sertão será cheio da glória de Deus.”
      </h2>

      <div className='flex flex-col text-center px-6 pb-3 text-white text-[15px] leading-[18px] font-montserrat font-medium'>
        <p>
          <span className='font-bold'>Ajude-nos</span> a fazer mais por quem
          precisa! Conheça-nos melhor e{' '}
          <span className='font-bold'>
            contribua do modo que seu coração preferir
          </span>
          .
        </p>
        <p>
          “E desta maneira me esforcei para
          <span className='font-bold'> anunciar o evangelho</span>, não onde{' '}
          <span className='font-bold'>Cristo</span> haja sido nomeado, para não
          edificar sobre o fundamento alheio”.{' '}
          <span className='font-bold'>(Romanos 15:20)</span>
        </p>
      </div>
      <button className='rounded-[40px] bg-brand-brown text-white w-[147px] h-[50px] font-bold text-sm mb-24'>
        DOE AGORA
      </button>
      <Image
        className='opacity-25 max-w-none max-h-none h-[469px] pb-10'
        src={'/assets/sertaoHome.png'}
        width={447}
        height={469}
        alt='sertao'
      />
    </div>
  );
}
