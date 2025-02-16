import Link from 'next/link';
import { routesHeader } from '../../../../public/routesHeader';



export default function RoutesMenu({
  setMenuIsOpen,
}: {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const routes = routesHeader
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
