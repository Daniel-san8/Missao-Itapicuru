import CardSobreNos from './CardSobreNos';

export default function ContainerCardSobreNos() {
  return (
    <div className='flex flex-col px-[35px] gap-y-11 pb-24'>
      <CardSobreNos bgImage='cardOneSobreNos'>a</CardSobreNos>
      <CardSobreNos bgImage='cardTwoSobreNos'>a</CardSobreNos>
      <CardSobreNos bgImage='cardThreeSobreNos'>a</CardSobreNos>
    </div>
  );
}
