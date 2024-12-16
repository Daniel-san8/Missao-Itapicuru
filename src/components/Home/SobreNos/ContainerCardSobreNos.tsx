import CardSobreNos from './CardSobreNos';

export default function ContainerCardSobreNos() {
  return (
    <div className='flex flex-col px-[35px] gap-y-11 pb-24 font-poppins font-black text-white'>
      <CardSobreNos bgImage='cardOneSobreNos'>
        <span className='inline-block text-[40px] leading-[39px] pr-[41px] pl-5 pt-[118px]'>
          MISSÃO, VALOR E VISÃO
        </span>
      </CardSobreNos>
      <CardSobreNos bgImage='cardTwoSobreNos'>
        <div className='text-[20px] leading-[19px] pl-[30px] pt-[185px]'>
          <span className='inline-block '>Oque fazemos?</span>
          <p className='text-xs leading-[12px]'>
            Trabalhamos com a plantação e revitalização de Igrejas em povos não
            alcançados, evangelização de casa em casa, discipulado, EBD
            infantil, desenvolvimento comunitário, alfabetização de jovens e
            adultos, reforço escolar.
          </p>
        </div>
      </CardSobreNos>
      <CardSobreNos bgImage='cardThreeSobreNos'>
        <div className='pl-3 pt-24'>
          <h1 className='text-4xl'>É a sua vez de contribuir.</h1>
          <p className='text-[10px] leading-[10px] pr-12 pt-4'>
            Queremos compartilhar a nossa missão no Brasil com cada um de
            vocês. Através da nossa visão, você pode fazer parte dessa corrente
            e iniciar uma história. Nós ajudamos pessoas com sua ajuda.
          </p>
        </div>
        <button className='font-dm-sans font-bold text-[10px] leading-[13px] w-[78px] h-[25px] rounded-[40px] bg-brand-light ml-[18px] mt-[23px] cursor-pointer'>
          SAIBA MAIS
        </button>
      </CardSobreNos>
    </div>
  );
}
