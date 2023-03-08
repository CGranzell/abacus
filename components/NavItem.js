import Link from 'next/link';

const MENU_LIST = [
  { text: 'Hem', href: '/' },
  { text: 'Om oss', href: '/about-us' },
  { text: 'Kontakt', href: '/contact' },
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