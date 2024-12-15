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
    </section>
  );
}
