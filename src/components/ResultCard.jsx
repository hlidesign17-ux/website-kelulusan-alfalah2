import { motion } from "framer-motion";

export default function ResultCard({ student }) {
  const fadeIn = (delay) => ({
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: 0.8,
      delay,
    },
  });
  return (
    <>
      <motion.div
        id="result-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
mt-10
relative
overflow-hidden
bg-white/10
border
border-white/10
rounded-[30px]
md:rounded-[40px]
p-5
md:p-10
shadow-2xl
shadow-green-500/20
backdrop-blur-xl
max-w-2xl
mx-auto
"
      >
        {/* GLOW */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/20 blur-3xl rounded-full"></div>

        {/* HEADER */}
        <motion.div className="relative z-10 text-center" {...fadeIn(0.5)}>
          <img
            src="/website-kelulusan-alfalah2/images/logo.png"
            alt="Logo Sekolah"
            className="w-24 h-auto mx-auto mb-6"
          />

          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            HASIL KELULUSAN
          </h2>

          <p className="text-green-300 mt-2 tracking-[3px] uppercase text-sm">
            Tahun Ajaran 2025/2026
          </p>
        </motion.div>

        {/* FOTO */}
        <motion.div className="relative z-10 mt-10" {...fadeIn(1.2)}>
          <img
            src={student.foto}
            alt={student.nama}
            className="w-40 h-56 md:w-52 md:h-72 rounded-2xl mx-auto object-cover border-4 border-green-400 shadow-lg shadow-green-500/40"
          />
        </motion.div>

        {/* STATUS */}
        <motion.div
          className="relative z-10 mt-8 text-center"
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            delay: 3.2,
          }}
        >
          <span className="inline-block bg-green-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-green-400/30">
            {student.status}
          </span>
        </motion.div>

        {/* DATA SISWA */}
        <motion.div
          className="relative z-10 mt-10 text-center"
          {...fadeIn(1.8)}
        >
          <h3 className="text-2xl md:text-4xl font-bold break-words">
            {student.nama}
          </h3>

          <p className="text-gray-300 mt-3 text-lg">{student.kelas}</p>
        </motion.div>

        {/* DETAIL */}
        <motion.div
          className="relative z-10 mt-10 grid md:grid-cols-2 gap-5"
          {...fadeIn(2.4)}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-2">Nomor NISN</p>

            <h4 className="text-xl font-bold">{student.nisn}</h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-2">Nomor Peserta</p>

            <h4 className="text-xl font-bold">{student.peserta}</h4>
          </div>
        </motion.div>

        {/* PESAN */}
        <motion.div
          className="relative z-10 mt-10 text-center"
          {...fadeIn(4.5)}
        >
          <p className="text-gray-300 leading-relaxed">
            Selamat atas kelulusan Ananda{" "}
            <span className="font-bold text-green-300">{student.nama}</span>.
            Semoga menjadi generasi Islami yang berilmu, berakhlak, dan
            membanggakan kedua orang tua.
          </p>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          className="relative z-10 mt-12 text-center border-t border-white/10 pt-8"
          {...fadeIn(5.2)}
        >
          <p className="text-gray-400 text-sm">Kepala Sekolah</p>

          <h4 className="text-xl font-bold mt-3">Utomo Widyanto, S.Pd.,SD</h4>
        </motion.div>
      </motion.div>
    </>
  );
}
