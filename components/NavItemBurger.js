import Link from 'next/link';

const MENU_LIST = [
  { text: 'Hem', href: '/' },
  { text: 'Om Oss', href: '/about-us' },
  { text: 'Kontakt', href: '/contact' },
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
