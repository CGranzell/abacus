import Link from 'next/link';

const MENU_LIST = [
  // { text: 'Nyheter', href: '/' },
  { text: 'Om Oss', href: '/about-us' },
  { text: 'Kontakt', href: '/contact' },
  // { text: 'Schema', href: '/' },
];

const NavItem = () => {
  return (
    <>
      {MENU_LIST.map((item, key) => {
        return (
          <Link key={key} href={item.href} >
            {item.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavItem;