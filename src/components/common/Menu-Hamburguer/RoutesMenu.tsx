import Link from 'next/link';

interface IRoutes {
  route: string;
  name: string;
}

const routes: IRoutes[] = [
  {
    route: '/',
    name: 'Início',
  },
  {
    route: '/missao',
    name: 'Missão',
  },
  {
    route: '/valores',
    name: 'Valores',
  },
  {
    route: '/blog',
    name: 'Blog',
  },
  {
    route: '/onde-servimos',
    name: 'Onde servimos',
  },
  {
    route: '/declaracao-de-fe',
    name: 'Declaração de fé',
  },
];

export default function RoutesMenu({
  setMenuIsOpen,
}: {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <ul className='flex flex-col text-[24px] text-center text-primary-white font-bold gap-y-[48px] pt-14'>
      {routes.map(({ route, name }, index) => {
        return (
          <li key={index}>
            <Link onClick={() => setMenuIsOpen(false)} href={route}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
