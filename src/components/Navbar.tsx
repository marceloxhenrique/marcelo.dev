import React from "react";
const pagesAvailable = ["Home", "Skills", "Projects", "About", "Contact"];
import Link from "next/link";

export default function navbar() {
  return (
    <header className="fixed flex h-20 w-full max-w-7xl items-center justify-between p-4 text-lg font-semibold backdrop-blur-md">
      <section>
        <Link scroll={true} href={"/"}>{`<Marcelo.dev/>`}</Link>
      </section>
      <section>
        <ul className="hidden  md:inline-flex">
          {pagesAvailable.map((page) => (
            <li key={page} className="md:ml-5">
              <Link scroll={true} href={`#${page}`}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">...</div>
      </section>
    </header>
  );
}
