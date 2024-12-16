import CardSobreNos from './SobreNos/CardSobreNos';
import DescriptionSobreNos from './SobreNos/DescriptionSobreNos';

export default function SobreNos() {
  return (
    <section className='bg-brand-beige'>
      <h1 className='font-bold font-dm-sans text-[14px] text-brand-brown pt-[100px] pl-6'>
        SOBRE NÓS
      </h1>
      <h2 className='font-bold font-dm-sans text-brand-brown text-[30px] pt-4 px-6 pb-6'>
        Entenda quem somos e por que existimos
      </h2>
      <DescriptionSobreNos />
      <CardSobreNos />
    </section>
  );
}
