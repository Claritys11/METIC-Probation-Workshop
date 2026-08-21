/*
  Task 1 - Profil sederhana

  File ini adalah template.
  Salin ke submissions/<username-github>/javascript/task-01-profile.js
  lalu kerjakan salinannya.

  Tujuan:
  - Melatih console.log()
  - Melatih variabel const
  - Melatih tipe data dasar

  Cara menjalankan:
  node modules/03-basic-javascript/tasks/task-01-profile.js
*/

const nama = "GANTI_DENGAN_NAMA_KAMU";
const jurusan = "GANTI_DENGAN_JURUSAN_KAMU";
const angkatan = 2026;
const minatTeknologi = "GANTI_DENGAN_MINAT_KAMU";

console.log("Profil Peserta MokDev");
console.log(`Nama: ${nama}`);
console.log(`Jurusan: ${jurusan}`);
console.log(`Angkatan: ${angkatan}`);
console.log(`Minat teknologi: ${minatTeknologi}`);

console.assert(nama !== "GANTI_DENGAN_NAMA_KAMU", "Ganti nilai variabel nama");
console.assert(jurusan !== "GANTI_DENGAN_JURUSAN_KAMU", "Ganti nilai variabel jurusan");
console.assert(minatTeknologi !== "GANTI_DENGAN_MINAT_KAMU", "Ganti nilai variabel minatTeknologi");
