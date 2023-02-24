import Link from 'next/link';

const MENU_LIST = [
  // { text: 'Nyheter', href: '/' },
  { text: 'Om Oss', href: '/' },
  { text: 'Kontakt', href: '/' },
  // { text: 'Schema', href: '/' },
  { text: 'Logga in', href: '/login-page' },
];


const NavItemBurger = ({ setIsOpen }) => {
  return (
    <>
      {MENU_LIST.map((item, key) => {
        return (
          <Link key={key} href={item.href} onClick={() => setIsOpen(false)}>
            {item.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavItemBurger;