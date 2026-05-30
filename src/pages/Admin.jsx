import { useState } from "react";

export default function Admin() {
  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  });

  const [form, setForm] = useState({
    nama: "",
    nisn: "",
    peserta: "",
    kelas: "",
    foto: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    const newData = [...students, form];
    setStudents(newData);
    localStorage.setItem("students", JSON.stringify(newData));

    setForm({
      nama: "",
      nisn: "",
      peserta: "",
      kelas: "",
      foto: ""
    });

    alert("Data siswa berhasil ditambahkan!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Panel Kelulusan
      </h1>

      <div className="grid gap-4 max-w-xl">

        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama Siswa"
          className="p-3 bg-white/10 rounded"
        />

        <input
          name="nisn"
          value={form.nisn}
          onChange={handleChange}
          placeholder="NISN"
          className="p-3 bg-white/10 rounded"
        />

        <input
          name="peserta"
          value={form.peserta}
          onChange={handleChange}
          placeholder="No Peserta"
          className="p-3 bg-white/10 rounded"
        />

        <input
          name="kelas"
          value={form.kelas}
          onChange={handleChange}
          placeholder="Kelas"
          className="p-3 bg-white/10 rounded"
        />

        <input
          name="foto"
          value={form.foto}
          onChange={handleChange}
          placeholder="Link Foto"
          className="p-3 bg-white/10 rounded"
        />

        <button
          onClick={addStudent}
          className="bg-green-500 text-black font-bold p-3 rounded"
        >
          Tambah Siswa
        </button>

      </div>

    </div>
  );
}