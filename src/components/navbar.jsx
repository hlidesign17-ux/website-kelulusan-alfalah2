export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO & NAMA */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Logo Sekolah"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-lg leading-tight">
              SD Islam Al Falah 2
            </h1>

            <p className="text-green-300 text-sm">Kota Jambi</p>
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
