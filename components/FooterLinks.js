import Link from 'next/link';

const MENU_LIST = [
  { text: 'Nyheter', href: '/' },
  { text: 'Om Oss', href: '/' },
  { text: 'Kontakt', href: '/' },
  { text: 'Schema', href: '/' },
  { text: 'Logga in', href: '/login-page' },
];


const FooterLinks = () => {
  return (
    <>
      {MENU_LIST.map((item, key) => {
        return (
          <Link key={key} href={item.href}>
            {item.text}
          </Link>
        );
      })}
    </>
  );
};

export default FooterLinks;