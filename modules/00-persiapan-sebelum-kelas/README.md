# Modul 00 — Persiapan Sebelum Kelas

Selesaikan modul ini sebelum workshop dimulai. Waktu persiapan biasanya 20-40 menit, tergantung koneksi internet dan kondisi laptop.

## 1. Membuat Akun GitHub

1. Buka [github.com](https://github.com/).
2. Pilih **Sign up** jika belum punya akun.
3. Gunakan username yang pantas, mudah dibaca, dan tidak terlalu panjang.
4. Simpan username GitHub karena akan dipakai sebagai nama folder submission dan nama branch.

Contoh username yang aman dipakai:

```text
wirya-mokdev
elangmetic
```

## 2. Memverifikasi Email GitHub

1. Buka inbox email yang dipakai untuk mendaftar GitHub.
2. Cari email dari GitHub.
3. Klik tombol verifikasi.
4. Login ulang ke GitHub dan pastikan tidak ada peringatan verifikasi email.

GitHub membutuhkan email terverifikasi agar akun bisa dipakai normal untuk kontribusi.

## 3. Menginstal Git

Git adalah aplikasi untuk mencatat perubahan file pada project.

### Windows

1. Unduh Git dari [git-scm.com/download/win](https://git-scm.com/download/win).
2. Jalankan installer.
3. Jika bingung dengan pilihan installer, gunakan pilihan bawaan.
4. Setelah selesai, buka **Git Bash** atau **PowerShell**.

### Linux

Untuk Ubuntu atau Debian:

```bash
sudo apt update
sudo apt install git
```

`sudo apt update` memperbarui daftar aplikasi yang bisa diinstal.
`sudo apt install git` menginstal Git.

### macOS Singkat

Instal Git dari [git-scm.com/download/mac](https://git-scm.com/download/mac) atau gunakan Homebrew jika sudah terbiasa:

```bash
brew install git
```

## 4. Mengecek Instalasi Git

Jalankan:

```bash
git --version
```

Command ini mengecek apakah Git sudah bisa dipanggil dari terminal.

Hasil yang diharapkan:

```text
git version 2.x.x
```

Nomor versi boleh berbeda.

## 5. Menginstal Node.js LTS

Node.js digunakan untuk menjalankan file JavaScript dari terminal.

### Windows

1. Buka [nodejs.org](https://nodejs.org/).
2. Unduh versi **LTS**.
3. Jalankan installer.
4. Gunakan pilihan bawaan.
5. Tutup lalu buka lagi terminal setelah instalasi selesai.

### Linux

Cara paling sederhana untuk workshop adalah memakai installer dari [nodejs.org](https://nodejs.org/). Jika memakai Ubuntu/Debian dan sudah terbiasa terminal, ikuti dokumentasi resmi Node.js untuk versi LTS.

### macOS Singkat

Unduh installer LTS dari [nodejs.org](https://nodejs.org/) atau gunakan Homebrew:

```bash
brew install node
```

## 6. Mengecek Node.js dan npm

Jalankan:

```bash
node --version
npm --version
```

`node --version` mengecek apakah Node.js sudah siap.
`npm --version` mengecek package manager bawaan Node.js.

Hasil yang diharapkan:

```text
v20.x.x
10.x.x
```

Nomor versi boleh berbeda selama Node.js yang dipakai adalah versi LTS modern.

## 7. Menginstal VS Code atau Editor Lain

Visual Studio Code dapat diunduh dari [code.visualstudio.com](https://code.visualstudio.com/).

Setelah terinstal:

1. Buka VS Code.
2. Pilih **File > Open Folder**.
3. Pilih folder yang akan dipakai untuk workshop.

Kamu boleh memakai editor lain jika sudah nyaman, tetapi pemateri biasanya akan mendemokan dengan VS Code.

## 8. Mengatur Identitas Git

Git perlu tahu nama dan email yang akan tercatat pada commit.

Jalankan:

```bash
git config --global user.name "Nama Lengkap"
git config --global user.email "email@example.com"
```

`git config --global user.name` menyimpan nama pembuat commit.
`git config --global user.email` menyimpan email pembuat commit.

Periksa hasilnya:

```bash
git config --global user.name
git config --global user.email
```

Jika tidak ingin email utama terlihat publik, gunakan email `noreply` dari pengaturan email GitHub.

## 9. Membuat dan Menjalankan `hello.js`

Buat folder latihan:

### Windows PowerShell

```powershell
mkdir cek-persiapan
cd cek-persiapan
```

### Linux, macOS, atau Git Bash

```bash
mkdir cek-persiapan
cd cek-persiapan
```

`mkdir cek-persiapan` membuat folder baru.
`cd cek-persiapan` masuk ke folder tersebut.

Buat file bernama `hello.js`, lalu isi:

```js
console.log("Persiapan METIC berhasil!");
```

Jalankan:

```bash
node hello.js
```

Command ini menjalankan file JavaScript menggunakan Node.js.

Hasil yang diharapkan:

```text
Persiapan METIC berhasil!
```

## 10. Menyiapkan Folder Workshop

Buat satu folder khusus agar file workshop tidak tercampur.

### Windows PowerShell

```powershell
mkdir metic-workshop
cd metic-workshop
```

### Linux, macOS, atau Git Bash

```bash
mkdir metic-workshop
cd metic-workshop
```

## 11. Fork dan Clone Repository Peserta

Lakukan bagian ini setelah pemateri memberikan URL repository.

Pertama, buka repository workshop utama di GitHub lalu klik **Fork**. Fork adalah salinan repository utama di akun GitHub milikmu. Dengan fork, kamu bisa push pekerjaanmu tanpa membutuhkan akses write ke repository penyelenggara.

Setelah fork selesai, clone URL dari akun GitHub milikmu sendiri:

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
git status
```

`git clone` menyalin fork dari GitHub ke laptop.
`cd <nama-repository>` masuk ke folder repository hasil clone.
`git status` mengecek kondisi repository saat ini.

Ganti `<username-github>` dengan username GitHub milikmu dan `<nama-repository>` dengan nama repository workshop.

Periksa remote:

```bash
git remote -v
```

Pastikan `origin` mengarah ke fork milikmu, bukan repository utama penyelenggara.

Saat workshop dimulai, kamu akan membuat branch dengan format:

```text
submission/<username-github>
```

## 12. Checklist Kesiapan Sebelum Kelas

Pastikan semua bagian ini sudah selesai:

- [ ] Akun GitHub sudah dibuat.
- [ ] Email GitHub sudah diverifikasi.
- [ ] `git --version` berhasil.
- [ ] `node --version` berhasil.
- [ ] `npm --version` berhasil.
- [ ] VS Code atau editor lain sudah siap.
- [ ] `user.name` dan `user.email` Git sudah diatur.
- [ ] File `hello.js` berhasil dijalankan.
- [ ] Folder workshop sudah disiapkan.
- [ ] Repository hasil fork sudah berhasil di-clone setelah URL diberikan.
- [ ] `git remote -v` mengarah ke fork milik peserta.
- [ ] Paham bahwa tugas nanti dikerjakan pada branch `submission/<username-github>`, bukan `main`.

## Jika Mengalami Kendala

Buka [Troubleshooting](../../TROUBLESHOOTING.md), lalu laporkan error dengan format:

```text
Sistem operasi:
Command yang dijalankan:
Pesan error lengkap:
Folder saat ini:
Langkah yang sudah dicoba:
```

Jangan membagikan password, token, recovery code, atau data rahasia apa pun.
