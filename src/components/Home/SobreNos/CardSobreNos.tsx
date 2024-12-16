import { ReactNode } from 'react';

export default function CardSobreNos({
  bgImage,
  children,
}: {
  bgImage: string;
  children: ReactNode;
}) {
  return (
    <div
      className='w-[309px] h-[304px] rounded-[30px] bg-cover'
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {children}
    </div>
  );
}
