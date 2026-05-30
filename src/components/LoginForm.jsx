import { useState } from "react";
import students from "../data/students.json";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import ResultCard from "./ResultCard";

export default function LoginForm() {
  const [nisn, setNisn] = useState("");
  const [peserta, setPeserta] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);
    setError("");
    setResult(null);

    setTimeout(() => {
      const student = students.find(
        (s) => s.nisn === nisn && s.peserta === peserta,
      );

      if (student) {
        setResult(student);
      } else {
        setError("Data tidak ditemukan");
      }

      setLoading(false);
    }, 2500);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">Cek Kelulusan</h2>

        <p className="text-center text-gray-300 mb-8">
          Masukkan NISN dan Nomor Peserta
        </p>

        {/* INPUT NISN */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-300">Nomor NISN</label>

          <input
            type="text"
            placeholder="Masukkan NISN"
            value={nisn}
            onChange={(e) => setNisn(e.target.value)}
            className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-400 text-white placeholder:text-gray-400"
          />
        </div>

        {/* INPUT PESERTA */}
        <div className="mb-8">
          <label className="block mb-2 text-sm text-gray-300">
            Nomor Peserta
          </label>

          <input
            type="text"
            placeholder="Masukkan Nomor Peserta"
            value={peserta}
            onChange={(e) => setPeserta(e.target.value)}
            className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-400 text-white placeholder:text-gray-400"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleCheck}
          className="w-full bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-xl shadow-lg shadow-green-500/30"
        >
          CEK SEKARANG
        </button>
        {/* LOADING */}
        {/* CINEMATIC LOADING */}
        {/* CINEMATIC LOADING */}
        {/* CINEMATIC LOADING */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
          >
            {/* GLOW */}
            <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

            {/* SPINNER */}
            <div className="relative z-10 w-24 h-24 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>

            {/* TEXT */}
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold mt-10 text-white tracking-widest">
              MEMPROSES...
            </h2>

            <p className="relative z-10 text-gray-400 mt-4 text-center">
              Mohon tunggu sebentar
            </p>
          </motion.div>
        )}
        {/* ERROR */}
        {error && <p className="text-red-400 text-center mt-5">{error}</p>}

        {/* RESULT */}
        {result && <ResultCard student={result} />}
      </div>
    </div>
  );
}
