import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function ResultCard({ student }) {
  return (
    <>
      <Confetti />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 relative overflow-hidden bg-white/10 border border-white/10 rounded-[40px] p-10 shadow-2xl backdrop-blur-xl max-w-2xl mx-auto"
      >
        {/* GLOW */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/20 blur-3xl rounded-full"></div>

        {/* HEADER */}
        <div className="relative z-10 text-center">
          <img
            src="/images/logo.png"
            alt="Logo Sekolah"
            className="w-24 h-auto mx-auto mb-6"
          />

          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            HASIL KELULUSAN
          </h2>

          <p className="text-green-300 mt-2 tracking-[3px] uppercase text-sm">
            Tahun Ajaran 2025/2026
          </p>
        </div>

        {/* FOTO */}
        <div className="relative z-10 mt-10">
          <img
            src={student.foto}
            alt={student.nama}
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-green-400 shadow-lg shadow-green-500/40"
          />
        </div>

        {/* STATUS */}
        <div className="relative z-10 mt-8 text-center">
          <span className="bg-green-400 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg shadow-green-400/30">
            DINYATAKAN LULUS
          </span>
        </div>

        {/* DATA SISWA */}
        <div className="relative z-10 mt-10 text-center">
          <h3 className="text-4xl font-bold">{student.nama}</h3>

          <p className="text-gray-300 mt-3 text-lg">{student.kelas}</p>
        </div>

        {/* DETAIL */}
        <div className="relative z-10 mt-10 grid md:grid-cols-2 gap-5">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-2">Nomor NISN</p>

            <h4 className="text-xl font-bold">{student.nisn}</h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-2">Nomor Peserta</p>

            <h4 className="text-xl font-bold">{student.peserta}</h4>
          </div>
        </div>

        {/* PESAN */}
        <div className="relative z-10 mt-10 text-center">
          <p className="text-gray-300 leading-relaxed">
            Selamat atas kelulusan Anda. Semoga menjadi generasi Islami yang
            berilmu, berakhlak, dan membanggakan kedua orang tua.
          </p>
        </div>

        {/* FOOTER */}
        <div className="relative z-10 mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm">Kepala Sekolah</p>

          <h4 className="text-xl font-bold mt-3">
            Drs. H. Nama Kepala Sekolah
          </h4>
        </div>
      </motion.div>
    </>
  );
}
