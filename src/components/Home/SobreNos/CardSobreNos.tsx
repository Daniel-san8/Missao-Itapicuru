import { ReactNode } from 'react';

export default function CardSobreNos({
  bgImage,
  children,
}: {
  bgImage: 'cardOneSobreNos' | 'cardTwoSobreNos' | 'cardThreeSobreNos';
  children: ReactNode;
}) {
  const classImageMap = {
    cardOneSobreNos: 'bg-cardOneSobreNos',
    cardTwoSobreNos: 'bg-cardTwoSobreNos',
    cardThreeSobreNos: 'bg-cardThreeSobreNos',
  };

  const classImage = `w-[309px] h-[304px] rounded-[30px] bg-cover ${classImageMap[bgImage]}`;

  return <div className={classImage}>{children}</div>;
}
