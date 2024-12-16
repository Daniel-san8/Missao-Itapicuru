import CardSobreNos from './CardSobreNos';

export default function ContainerCardSobreNos() {
  return (
    <div className='flex flex-col px-[35px] gap-y-11 pb-24'>
      <CardSobreNos bgImage='cardOneSobreNos'>
        <span className='inline-block font-poppins font-black text-[40px] leading-[39px] text-white pr-[41px] pl-5 pt-[118px]'>
          MISSÃO, VALOR E VISÃO
        </span>
      </CardSobreNos>
      <CardSobreNos bgImage='cardTwoSobreNos'>
        <div className='font-poppins font-black text-[20px] leading-[19px] text-white pl-[30px] pt-[185px]'>
          <span className='inline-block '>Oque fazemos?</span>
          <p className='text-xs leading-[12px]'>
            Trabalhamos com a plantação e revitalização de Igrejas em povos não
            alcançados, evangelização de casa em casa, discipulado, EBD
            infantil, desenvolvimento comunitário, alfabetização de jovens e
            adultos, reforço escolar.
          </p>
        </div>
      </CardSobreNos>
      <CardSobreNos bgImage='cardThreeSobreNos'>a</CardSobreNos>
    </div>
  );
}
