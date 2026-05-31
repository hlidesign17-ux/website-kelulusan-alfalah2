import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scroll ke bawah -> sembunyikan
        setShow(false);
      } else {
        // scroll ke atas -> tampilkan
        setShow(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO & NAMA */}
        <div className="flex items-center gap-4">
          <img
            src="/website-kelulusan-alfalah2/images/logo.png"
            alt="Logo Sekolah"
            className="h-16 w-auto object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-xl leading-tight">
              SD Islam Al Falah 2
            </h1>
            <p className="text-green-300 text-base">Jambi</p>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#cek-kelulusan" className="hover:text-green-400 transition">
            Kelulusan
          </a>
          <a href="#tendik" className="hover:text-green-400 transition">
            Tendik
          </a>
        </nav>
      </div>
    </header>
  );
}
