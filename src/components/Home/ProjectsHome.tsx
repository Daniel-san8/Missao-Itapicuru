import Image from 'next/image';

export default function ProjectsHome() {
  return (
    <section className='relative'>
      <div className='bg-criancaHome bg-cover w-[327px] h-[470px] mb-12 font-black font-poppins text-4xl text-white text-start  flex rounded-md textShadow absolute -translate-y-2/4 left-6'>
        <span className='self-end pr-[31px] pl-[20px] pb-[10px]'>
          Mudamos para sempre o jeito de ver o mundo.
        </span>
      </div>
      <Image
        className='pt-[245px] mr-5 justify-self-end'
        width={88}
        height={88}
        src={'/assets/chapeuHome.png'}
        alt='chapeu de cangaceiro'
      />
      <div className='flex flex-col text-brand-brown text-center text-[25px] leading-[31px] pb-16'>
        <h1 className='font-dm-sans font-bold text-sm pb-[19px]'>
          NOSSOS PROJETOS
        </h1>
        <h2 className='font-montserrat px-[30px] font-medium'>
          Através desses projetos,{' '}
          <span className='font-bold'>ajudamos a espalhar a mensagem</span>{' '}
          <p>
            <span className='font-bold pr-2'>de Deus</span>por onde vamos.
          </p>
        </h2>
      </div>
    </section>
  );
}
