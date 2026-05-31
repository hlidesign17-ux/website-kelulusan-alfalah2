import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import ParticlesBackground from "../components/ParticlesBackground";
import { useEffect } from "react";

export default function HomePage() {
  const targetDate = new Date("2026-05-31T13:10:00").getTime();

  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsOpen(true);
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (ms) => {
    const total = Math.floor(ms / 1000);

    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    return { days, hours, minutes, seconds };
  };

  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const toggleMusic = () => {
    if (!musicOn) {
      audioRef.current.play();
      setMusicOn(true);
    } else {
      audioRef.current.pause();
      setMusicOn(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* BUTTON MUSIC */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-black px-5 py-3 rounded-full shadow-lg shadow-green-500/30"
      >
        {musicOn ? "🔇 Matikan Musik" : "🔊 Nyalakan Musik"}
      </button>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

        <img
          src="/website-kelulusan-alfalah2/images/logo.png"
          alt="Logo Sekolah"
          className="relative z-10 w-[180px] sm:w-[240px] md:w-[420px] h-auto mb-3 drop-shadow-[0_0_50px_rgba(34,197,94,0.6)]"
        />

        <div className="relative z-10 mb-6">
          <span className="bg-green-500/20 border border-green-400/30 text-green-300 px-6 py-2 rounded-full text-sm tracking-[3px] uppercase backdrop-blur-md">
            Tahun Ajaran 2025/2026
          </span>
        </div>

        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
          SD S Islam <br />
          Al Falah 2 Jambi
        </h1>

        <p className="relative z-10 mt-6 text-green-200 text-base sm:text-lg md:text-2xl italic">
          “Taqwa, Cerdas, Terampil”
        </p>

        <p className="relative z-10 mt-8 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          Website resmi pengumuman kelulusan siswa SD S Islam Al Falah 2 Jambi
          Tahun Pelajaran 2025/2026.
        </p>

        <a
          href="#cek-kelulusan"
          className="relative z-10 mt-12 bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold px-7 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-base sm:text-lg shadow-2xl shadow-green-500/30 hover:scale-105"
        >
          Cek Kelulusan
        </a>
      </section>

      {/* FORM SECTION */}
      <section
        id="cek-kelulusan"
        className="min-h-screen flex items-center justify-center px-6"
      >
        {!isOpen ? (
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-green-300 mb-6">
              Harap Menunggu
            </h2>

            <div className="text-center text-white mt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-8 tracking-wide">
                Pengumuman Dibuka Dalam
              </h2>

              <div className="flex justify-center gap-3 md:gap-6">
                {/* DAYS */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-black text-white bg-white/10 px-5 py-4 rounded-2xl backdrop-blur-md shadow-lg shadow-green-500/20">
                    {String(formatTime(timeLeft).days).padStart(2, "0")}
                  </div>
                  <span className="text-green-300 text-sm mt-2">Hari</span>
                </div>

                {/* HOURS */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-black text-white bg-white/10 px-5 py-4 rounded-2xl backdrop-blur-md shadow-lg shadow-green-500/20">
                    {String(formatTime(timeLeft).hours).padStart(2, "0")}
                  </div>
                  <span className="text-green-300 text-sm mt-2">Jam</span>
                </div>

                {/* MINUTES */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-black text-white bg-white/10 px-5 py-4 rounded-2xl backdrop-blur-md shadow-lg shadow-green-500/20">
                    {String(formatTime(timeLeft).minutes).padStart(2, "0")}
                  </div>
                  <span className="text-green-300 text-sm mt-2">Menit</span>
                </div>

                {/* SECONDS */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-black text-white bg-white/10 px-5 py-4 rounded-2xl backdrop-blur-md shadow-lg shadow-green-500/20 animate-pulse">
                    {String(formatTime(timeLeft).seconds).padStart(2, "0")}
                  </div>
                  <span className="text-green-300 text-sm mt-2">Detik</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <LoginForm />
        )}
      </section>

      {/* TENDIK SECTION */}
      {/* TENDIK SECTION */}
      <section id="tendik" className="min-h-screen py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          {/* JUDUL */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">
              Kepala Sekolah dan Wali Kelas
            </h2>

            <div className="w-32 h-1 bg-green-500 mx-auto rounded-full"></div>

            <p className="mt-6 text-gray-300">
              Ucapan dan pesan dari Kepala Sekolah serta Wali Kelas 6
            </p>
          </div>

          {/* KEPALA SEKOLAH */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div>
              <img
                src="/website-kelulusan-alfalah2/images/kepala-sekolah.jpg"
                alt="Kepala Sekolah"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div>
              <span className="text-green-400 uppercase tracking-[4px]">
                Kepala Sekolah
              </span>

              <h3 className="text-4xl font-bold mt-3">
                Utomo Widyanto, S.Pd., SD
              </h3>

              <p className="text-gray-300 mt-2">SD S Islam Al Falah 2 Jambi</p>

              <div className="mt-8 text-gray-200 leading-relaxed space-y-4">
                <p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>

                <p>
                  Selamat kepada seluruh siswa yang telah menyelesaikan
                  pendidikan di SD S Islam Al Falah 2 Jambi.
                </p>

                <p>
                  Anak -anakku ,Tetaplah menjadi pribadi yang berakhlak baik.
                  Betapapun tinggi ilmumu, kalau tidak menunaikan kewajiban
                  salat lima waktu, kita bukan siapa - siapa
                </p>
              </div>
            </div>
          </div>

          {/* GURU */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              Wali Kelas 6
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Guru 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <img
                  src="/website-kelulusan-alfalah2/images/guru1.jpg"
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-bold text-xl">
                    Laura Delfiyana, S.TP., S,Pd., Gr
                  </h4>

                  <p className="text-green-400 text-sm">Wali Kelas 6A</p>

                  <p className="mt-4 text-gray-300 text-sm italic">
                    "Teruslah belajar, di manapun kalian berada. Jadilah pribadi
                    yang berintegrasi, bertanggung jawab, dan bermanfaat bagi
                    orang lain. Jangan takut gagal karena dari kegagalan kalian
                    akan tumbuh menjadi lebih kuat. Percayalah pada diri
                    sendiri, karena kalian hebat dengan versi kalian
                    masing-masing"
                  </p>
                </div>
              </div>

              {/* Guru 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <img
                  src="/website-kelulusan-alfalah2/images/guru2.jpg"
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-bold text-xl">
                    Dwi Haryani, S.Pd., M.Pd
                  </h4>

                  <p className="text-green-400 text-sm">Wali Kelas 6B</p>

                  <p className="mt-4 text-gray-300 text-sm italic">
                    "Selamat atas kelulusanmu, anak-anak hebat!".Enam tahun
                    bukanlah waktu yang singkat. Kalian telah belajar,
                    bertumbuh, dan menunjukkan kerja keras yang luar biasa.
                    Ingatlah, ini bukanlah akhir dari segalanya, melainkan
                    langkah pertama dari pertualangan besar kalian. Teruslah
                    bermimpi besar, tetaplah menjadi anak yang baik dan cerdas,
                    dan berakhlak mulia. Bapak/ibu guru selalu bangga pada
                    kalian!"
                  </p>
                </div>
              </div>

              {/* Guru 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <img
                  src="/website-kelulusan-alfalah2/images/guru3.jpg"
                  className="w-full h-[420px] object-cover object-top"
                />

                <div className="p-6">
                  <h4 className="font-bold text-xl">Sukarni Bagindo, S.Pd</h4>

                  <p className="text-green-400 text-sm">Wali Kelas 6C</p>

                  <p className="mt-4 text-gray-300 text-sm italic">
                    1.Belajarlah dengan penuh kesadaran dan ketulusan karena
                    hasilnya untuk Ananda sendiri <br></br>
                    2.Semoga Ananda mengamalkan dan menerapkan ajaran kebaikan
                    dalam kehidupan sehari- hari. <br></br>
                    3.Berpegang teguh pada Alquran,rajin salat,dan ibadah
                    lainnya. <br></br>
                    4.Jaga nama baik SD ISLAM AL FALAH 2 KOTA JAMBI.
                  </p>
                </div>
              </div>

              {/* Guru 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <img
                  src="/website-kelulusan-alfalah2/images/guru4.jpg"
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-bold text-xl">Widowati, S.Pd</h4>

                  <p className="text-green-400 text-sm">Wali Kelas 6D</p>

                  <p className="mt-4 text-gray-300 text-sm italic">
                    Selamat lulus anak ku. <br></br>
                    Rajinlah beribadah, teruslah belajar dan berkarya. <br></br>{" "}
                    Raihlah cita citamu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source
          src="/website-kelulusan-alfalah2/music/kelulusan.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
