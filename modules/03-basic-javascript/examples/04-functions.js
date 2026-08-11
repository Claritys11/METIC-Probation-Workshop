function sapaPeserta(nama) {
  return `Halo, ${nama}! Selamat belajar JavaScript.`;
}

console.log(sapaPeserta("Rani"));
console.log(sapaPeserta("Fajar"));

function hitungTotalLatihan(latihanGit, latihanJavaScript) {
  return latihanGit + latihanJavaScript;
}

const totalLatihan = hitungTotalLatihan(1, 2);
console.log(`Total latihan selesai: ${totalLatihan}`);

function cekSiapWorkshop(sudahInstallGit, sudahInstallNode) {
  if (sudahInstallGit && sudahInstallNode) {
    return "Siap";
  }

  return "Belum siap";
}

console.log(cekSiapWorkshop(true, true));
console.log(cekSiapWorkshop(true, false));
