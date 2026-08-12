/*
  Bonus - Data anggota METIC

  File ini adalah template.
  Salin ke submissions/<username-github>/javascript/bonus-anggota-metic.js
  lalu kerjakan salinannya.

  Tujuan:
  - Melatih array
  - Melatih object
  - Mengenal filter() dan map()

  Callback adalah function yang dikirim sebagai argumen ke function lain.
  Pada filter() dan map(), callback dijalankan untuk setiap data di dalam array.

  Cara menjalankan:
  node modules/03-basic-javascript/tasks/bonus-anggota-metic.js
*/

const daftarPeserta = [
  { nama: "Ayu Lestari", kelas: "X RPL 1", ikutMETIC: true },
  { nama: "Bagas Saputra", kelas: "X RPL 1", ikutMETIC: false },
  { nama: "Citra Dewi", kelas: "X RPL 2", ikutMETIC: true },
  { nama: "Dimas Prakoso", kelas: "X RPL 2", ikutMETIC: false },
  { nama: "Eka Wulandari", kelas: "X RPL 3", ikutMETIC: true },
];

// TODO 1: Gunakan filter() untuk mengambil peserta yang ikut METIC.
const anggotaMETIC = [];

// TODO 2: Gunakan map() untuk mengambil nama anggota saja.
const namaAnggotaMETIC = [];

console.log("Daftar anggota METIC:");
console.log(namaAnggotaMETIC);
console.log(`Total anggota METIC: ${namaAnggotaMETIC.length} orang`);

console.assert(anggotaMETIC.length === 3, "Harusnya ada 3 anggota METIC");
console.assert(namaAnggotaMETIC.includes("Ayu Lestari"), "Ayu Lestari harus ada");
console.assert(!namaAnggotaMETIC.includes("Bagas Saputra"), "Bagas Saputra tidak ikut METIC");
