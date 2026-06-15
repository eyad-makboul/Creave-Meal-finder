import Link from "next/link";

import { Utensils } from "lucide-react";

const navLinks = [
  { href: "/", name: "home" },
  { href: "/products", name: "products" },
  { href: "/todo", name: "todo" },
  { href: "/contact", name: "contact" },
];

export default function Header() {
  return (
    <div className="flex items-center justify-around bg-gradient-to-r from-stone-950 via-stone-700 to-stone-900 p-4 text-white text-3xl">
      

      <Link href="/" className="flex items-center gap-2 group cursor-pointer no-underline">
        <div className="bg-amber-500 p-2 rounded-xl text-stone-950 transition-transform duration-200 group-hover:scale-110">
          <Utensils size={28} strokeWidth={2.5} />
        </div>
        <span className="font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
          Crave
        </span>
      </Link>


      <ul className="flex items-center gap-6 list-none m-0 p-0 text-xl">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-amber-400 hover:text-white transition-colors capitalize font-medium">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}