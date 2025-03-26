import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-auto w-full bg-slate-900 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <p className="text-lg font-semibold">Marcelo Henrique</p>
            <p className="text-sm text-gray-400">Full-Stack Web Developer</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/marceloxhenrique"
              target="_blank"
              className="hover:text-[#007ACC]"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
              target="_blank"
              className="hover:text-[#007ACC]"
            >
              LinkedIn
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
