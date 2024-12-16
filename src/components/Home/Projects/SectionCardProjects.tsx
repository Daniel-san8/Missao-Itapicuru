import CardProjects from './CardProjects';

export interface ICardProjects {
  title: string;
  description: string;
}

const cardProjects: ICardProjects[] = [
  {
    title: 'Entendes o que lês?',
    description: 'alfabetização de jovens e adultos',
  },
  {
    title: 'Delas é o Reino',
    description: 'Ministério infantil',
  },
  {
    title: 'Lâmpada para os meus pés',
    description: 'Futebol feminino',
  },
  {
    title: 'Belém',
    description: 'Padaria comunitária',
  },
  {
    title: 'Salfons',
    description: 'Escola de música para crianças, jovens e adultos',
  },
];

export default function SectionCardProjects() {
  return (
    <div className='flex flex-col gap-y-10 pb-[13px]'>
      {cardProjects.map(({ title, description }, index) => (
        <CardProjects key={index} title={title} description={description} />
      ))}
    </div>
  );
}