# Troubleshooting Workshop

Gunakan halaman ini saat persiapan atau praktik mengalami error. Baca pesan error lengkap sebelum mencoba solusi.

## Format Melaporkan Masalah

```text
Sistem operasi:
Command yang dijalankan:
Pesan error lengkap:
Folder saat ini:
Langkah yang sudah dicoba:
```

Untuk mengecek folder saat ini:

```bash
pwd
```

Di PowerShell Windows:

```powershell
Get-Location
```

## `git: command not found`

Kemungkinan penyebab:

- Git belum terinstal.
- Terminal dibuka sebelum instalasi selesai.
- Git belum masuk ke `PATH`.

Langkah pemeriksaan:

```bash
git --version
```

Solusi aman:

1. Instal Git dari [git-scm.com/downloads](https://git-scm.com/downloads).
2. Tutup semua terminal.
3. Buka terminal baru.
4. Jalankan `git --version` lagi.
5. Jika masih gagal di Windows, coba buka **Git Bash**.

## `node: command not found`

Kemungkinan penyebab:

- Node.js belum terinstal.
- Terminal belum dibuka ulang.
- Instalasi Node.js belum masuk ke `PATH`.

Langkah pemeriksaan:

```bash
node --version
npm --version
```

Solusi aman:

1. Instal Node.js versi LTS dari [nodejs.org](https://nodejs.org/).
2. Tutup terminal.
3. Buka terminal baru.
4. Jalankan `node --version` dan `npm --version`.

## Salah Direktori

Gejala umum:

- File tidak ditemukan.
- `git status` menampilkan error.
- Command Node.js tidak menemukan file.

Langkah pemeriksaan:

```bash
pwd
ls
```

Di PowerShell:

```powershell
Get-Location
dir
```

Solusi aman:

Masuk ke folder repository dengan `cd`.

```bash
cd <nama-repository>
git status
```

## Repository Belum Di-clone

Kemungkinan penyebab:

- Kamu menjalankan command di folder kosong.
- Fork dari GitHub belum disalin ke laptop.

Langkah pemeriksaan:

```bash
ls
git status
```

Solusi aman:

Fork repository utama di GitHub, lalu clone fork milikmu:

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
git status
git remote -v
```

## `fatal: not a git repository`

Kemungkinan penyebab:

- Terminal berada di luar folder repository.
- Folder yang dibuka bukan hasil `git clone`.

Langkah pemeriksaan:

```bash
pwd
ls
```

Solusi aman:

Masuk ke folder repository yang benar:

```bash
cd <nama-repository>
git status
```

Jangan menjalankan command berisiko seperti `git reset` untuk masalah ini.

## Peserta Masih Berada di Branch `main`

Langkah pemeriksaan:

```bash
git branch --show-current
```

Jika output-nya `main`, buat branch submission:

```bash
git switch -c submission/<username-github>
```

Periksa ulang:

```bash
git branch --show-current
```

Output harus `submission/<username-github>`.

## Sudah Mengubah File Saat Masih di `main`, Tetapi Belum Commit

Perubahan yang belum di-commit bisa dibawa ke branch baru.

Jalankan:

```bash
git switch -c submission/<username-github>
git status
```

Setelah itu lanjutkan staging dan commit di branch `submission/<username-github>`.

## Peserta Tidak Sengaja Commit di `main` Lokal

Jika commit belum di-push ke mana pun, solusi aman untuk workshop pemula adalah membuat branch dari kondisi saat ini:

```bash
git switch -c submission/<username-github>
git push -u origin submission/<username-github>
```

Dengan begitu commit yang terlanjur dibuat tetap ikut berada di branch submission. Jangan gunakan `reset --hard` sebagai solusi workshop pemula.

## Salah Meng-clone Repository Utama

Kemungkinan penyebab:

- `origin` mengarah ke repository penyelenggara, bukan fork peserta.
- Peserta clone URL repository utama sebelum melakukan fork.

Langkah pemeriksaan:

```bash
git remote -v
```

Jika `origin` mengarah ke repository penyelenggara, ubah ke fork peserta:

```bash
git remote set-url origin https://github.com/<username-github>/<nama-repository>.git
```

Periksa ulang:

```bash
git remote -v
```

Pastikan URL sudah mengarah ke akun GitHub peserta.

## Branch Sudah Ada

Contoh error:

```text
fatal: a branch named 'submission/<username-github>' already exists
```

Solusi aman:

```bash
git switch submission/<username-github>
```

Periksa:

```bash
git branch --show-current
```

## `Author identity unknown`

Kemungkinan penyebab:

- `user.name` atau `user.email` Git belum diatur.

Langkah pemeriksaan:

```bash
git config --global user.name
git config --global user.email
```

Solusi aman:

```bash
git config --global user.name "Nama Lengkap"
git config --global user.email "email@example.com"
```

Setelah itu ulangi commit.

## `Authentication failed`

Kemungkinan penyebab:

- Belum login GitHub.
- Menggunakan password akun GitHub untuk Git.
- Credential lama sudah tidak berlaku.

Langkah pemeriksaan:

```bash
git remote -v
git branch --show-current
```

Solusi aman:

1. Pastikan `origin` mengarah ke fork milikmu.
2. Pastikan kamu login ke akun GitHub yang benar di browser.
3. Coba `git push -u origin submission/<username-github>` ulang dan ikuti instruksi login yang muncul.
4. Jika diminta password, jangan masukkan password akun ke chat atau repository.
5. Panggil pemateri untuk membantu login menggunakan metode yang sesuai.

## `Permission denied` Ketika Push

Kemungkinan penyebab:

- `origin` mengarah ke repository utama penyelenggara.
- Kamu tidak punya akses menulis ke repository tujuan.
- Branch aktif bukan branch submission.

Langkah pemeriksaan:

```bash
git remote -v
git branch --show-current
git status
```

Solusi aman:

1. Pastikan `origin` adalah fork peserta.
2. Pastikan branch aktif adalah `submission/<username-github>`.
3. Jika `origin` salah, gunakan `git remote set-url origin https://github.com/<username-github>/<nama-repository>.git`.
4. Push ulang dengan `git push -u origin submission/<username-github>`.

## Push Branch Ditolak

Kemungkinan penyebab:

- `origin` bukan fork peserta.
- Branch aktif masih `main`.
- Ada perubahan yang belum di-commit.

Langkah pemeriksaan:

```bash
git remote -v
git branch --show-current
git status
```

Solusi aman:

1. Pastikan `origin` adalah fork peserta.
2. Pastikan branch aktif mengikuti format `submission/<username-github>`.
3. Commit perubahan terlebih dahulu jika masih ada perubahan.
4. Push dengan `git push -u origin submission/<username-github>` untuk push pertama.
5. Jangan memakai `git reset --hard`.

## Branch Tidak Ditemukan

Kemungkinan penyebab:

- Salah mengetik nama branch.
- Branch belum dibuat.

Langkah pemeriksaan:

```bash
git branch
git branch --show-current
```

Solusi aman:

Jika branch belum ada:

```bash
git switch -c submission/<username-github>
```

Jika branch sudah ada:

```bash
git switch submission/<username-github>
```

## File JavaScript Tidak Ditemukan

Contoh error:

```text
Cannot find module
```

Kemungkinan penyebab:

- Nama file salah.
- Path file salah.
- Terminal berada di folder yang berbeda.
- File template belum disalin ke folder submission milik peserta.

Langkah pemeriksaan:

```bash
ls submissions/<username-github>/javascript
```

Solusi aman:

Jalankan file milikmu dari folder utama repository:

```bash
node submissions/<username-github>/javascript/task-01-profile.js
```

Jika folder belum ada, buat folder dan salin template dari `modules/03-basic-javascript/tasks/`.

## Syntax Error JavaScript

Kemungkinan penyebab:

- Kurung `(`, `)`, `{`, atau `}` kurang.
- Tanda kutip belum ditutup.
- Salah menulis nama keyword seperti `function`, `const`, atau `return`.

Langkah pemeriksaan:

1. Baca baris error yang ditampilkan Node.js.
2. Buka file dan cek baris tersebut.
3. Cek juga 1-3 baris di atasnya.

Solusi aman:

- Perbaiki tanda kurung atau kutip yang kurang.
- Jalankan file lagi dengan `node`.
- Jika bingung, kirim pesan error lengkap.

## Pull Request Tidak Menampilkan Perubahan

Kemungkinan penyebab:

- File belum di-commit.
- Commit belum di-push.
- Pull Request dibuat dari branch yang salah.
- Konfigurasi base/head Pull Request keliru.

Langkah pemeriksaan:

```bash
git status
git log --oneline -5
git branch --show-current
git remote -v
```

Solusi aman:

1. Pastikan branch aktif adalah `submission/<username-github>`.
2. Jika `git status` masih menampilkan perubahan, lakukan `git add submissions/<username-github>/` dan commit.
3. Push branch dengan `git push -u origin submission/<username-github>` atau `git push` jika upstream sudah terhubung.
4. Pastikan Pull Request memakai:

```text
base repository: <repository-workshop-utama>
base branch: main

head repository: <username-peserta>/<nama-repository>
compare branch: submission/<username-github>
```

5. Refresh halaman Pull Request.

## Tidak Sengaja Mengedit File Peserta Lain

Kemungkinan penyebab:

- Salah membuka file.
- Memakai `git add .` tanpa mengecek perubahan.

Langkah pemeriksaan:

```bash
git status
```

Solusi aman:

1. Jangan langsung menghapus file.
2. Jangan menjalankan `git reset` atau `git checkout` tanpa arahan.
3. Beri tahu pemateri file mana yang ikut berubah.
4. Pemateri akan membantu memisahkan perubahan yang aman.

## Tips Umum

- Jalankan `git branch --show-current` sebelum mulai mengedit.
- Jalankan `git status` sebelum dan sesudah `git add`.
- Gunakan `git add submissions/<username-github>/` saat workshop.
- Pastikan `origin` mengarah ke fork peserta.
- Simpan pesan error lengkap agar bantuan lebih cepat.
