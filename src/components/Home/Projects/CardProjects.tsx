import { ICardProjects } from '@/models/card.interface';
import CheckedIcon from '../../../../public/svg/CheckedIcon';

export default function CardProjects({ title, description }: ICardProjects) {
  return (
    <div className='bg-white w-[248px] h-[238px] border border-brand-light rounded-[30px] flex flex-col justify-between'>
      <span className='ml-6 mt-[9px] inline-block bg-brand-light rounded-full p-1 self-start'>
        <CheckedIcon />
      </span>
      <div className='flex flex-col text-center font-poppins font-bold text-[13px] leading-5 text-gray-paragraph px-6 pb-4'>
        <p>{title}</p>
        <p className='font-normal'>( {description} )</p>
      </div>
    </div>
  );
}
