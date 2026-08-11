const materiWorkshop = ["Git", "GitHub", "JavaScript"];

console.log(materiWorkshop);
console.log(`Materi pertama: ${materiWorkshop[0]}`);
console.log(`Jumlah materi: ${materiWorkshop.length}`);

const peserta = {
  nama: "Putri",
  jurusan: "RPL",
  ikutMokDev: true,
};

console.log(peserta.nama);
console.log(peserta.jurusan);

const daftarPeserta = [
  { nama: "Ayu", ikutMokDev: true },
  { nama: "Bagas", ikutMokDev: false },
  { nama: "Citra", ikutMokDev: true },
];

function ambilAnggotaMokDev(dataPeserta) {
  return dataPeserta.filter((peserta) => peserta.ikutMokDev === true);
}

const anggotaMokDev = ambilAnggotaMokDev(daftarPeserta);
const namaAnggota = anggotaMokDev.map((peserta) => peserta.nama);

console.log(anggotaMokDev);
console.log(namaAnggota);
