import Link from "next/link";

export default function Header() {
  const nav = [
    { href: "/", name: "home" },
    { href: "/products", name: "products" },
    { href: "/todo", name: "todo" },
    { href: "/contact", name: "contact" },
  ];

  return (
    <div className="flex items-center justify-around bg-linear-to-r from-stone-950 via-stone-700 to-stone-900 p-4 text-white text-3xl">
      <div className=" font-bold">Logo</div>
      <ul className="flex items-center gap-6 list-none m-0 p-0">
        {nav.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-amber-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}