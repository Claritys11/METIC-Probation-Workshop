/*
  Task 2 - Cek kelulusan

  File ini adalah template.
  Salin ke submissions/<username-github>/javascript/task-02-cek-kelulusan.js
  lalu kerjakan salinannya.

  Tujuan:
  - Melatih function
  - Melatih if, else if, dan else
  - Melatih operator perbandingan

  Aturan:
  - Nilai 75 atau lebih: "Lulus"
  - Nilai di bawah 75: "Perlu belajar lagi"
  - Bonus: input tidak valid menghasilkan "Nilai tidak valid"

  Cara menjalankan:
  node modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js
*/

const batasLulus = 75;

function cekKelulusan(nilai) {
  // TODO: Lengkapi function ini.
  // Petunjuk:
  // 1. Cek dulu apakah nilai bukan number, lebih kecil dari 0, atau lebih besar dari 100.
  // 2. Jika nilai valid dan >= batasLulus, return "Lulus".
  // 3. Jika nilai valid dan < batasLulus, return "Perlu belajar lagi".
  return "Lengkapi function cekKelulusan";
}

console.log(cekKelulusan(90));
console.log(cekKelulusan(75));
console.log(cekKelulusan(60));

console.assert(cekKelulusan(90) === "Lulus", "Nilai 90 harus lulus");
console.assert(cekKelulusan(75) === "Lulus", "Nilai 75 harus lulus");
console.assert(cekKelulusan(60) === "Perlu belajar lagi", "Nilai 60 perlu belajar lagi");
console.assert(cekKelulusan("delapan puluh") === "Nilai tidak valid", "String harus tidak valid");
console.assert(cekKelulusan(120) === "Nilai tidak valid", "Nilai di atas 100 harus tidak valid");
