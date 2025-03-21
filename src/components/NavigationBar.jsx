export default function NavigationBar({ className = "" }) {
  const NavigationLinks = [
    {
      id: 1,
      text: "Home",
      href: "/",
    },
    {
      id: 2,
      text: "About",
      href: "/",
    },
    {
      id: 3,
      text: "Contact Us",
      href: "/",
    },
    {
      id: 4,
      text: "Blog",
      href: "/",
    },
  ];
  return (
    <nav
      className={`${className} flex flex-row sm:gap-3 lg:gap-14 text-black/30 text-sm`}
    >
      {NavigationLinks.map((link) =>
        link.id === 1 ? (
          <a className="text-black" key={link.id} href={link.href}>
            {link.text}
          </a>
        ) : (
          <a key={link.id} href={link.href}>
            {link.text}
          </a>
        )
      )}
    </nav>
  );
}
