import { ReactNode } from 'react';

export default function CardSobreNos({
  bgImage,
  children,
}: {
  bgImage:
    | 'criancaHome'
    | 'cardOneSobreNos'
    | 'cardTwoSobreNos'
    | 'cardThreeSobreNos';
  children: ReactNode;
}) {
  const classImage = `w-[309px] h-[304px] rounded-[30px] bg-cover bg-${bgImage}`;

  return <div className={classImage}>{children}</div>;
}
