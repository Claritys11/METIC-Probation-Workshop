# Panduan Belajar Mandiri — METIC Probation Workshop 2.0

Panduan ini dibuat untuk siapa pun yang membuka repository ini dan ingin belajar sendiri. Kamu bisa mengikutinya dari awal sampai akhir tanpa harus menunggu kelas.

Kamu tidak perlu sudah mahir coding. Ikuti langkahnya pelan-pelan, jalankan command yang diminta, lalu baca pesan error jika ada yang gagal.

## Target Belajar

Setelah menyelesaikan materi ini, kamu diharapkan bisa:

- Menjelaskan cara kerja website secara sederhana.
- Memahami peran HTML, CSS, dan JavaScript.
- Memahami perbedaan Git dan GitHub.
- Menjelaskan kenapa branch `main` perlu dijaga stabil.
- Membuat branch kerja `submission/<username-github>`.
- Mengirim hasil latihan melalui Pull Request.
- Menulis dan menjalankan JavaScript dasar dengan Node.js.

## Estimasi Waktu

Jika dikerjakan santai, materi ini bisa selesai dalam 1 jam 30 menit sampai 2 jam.

| Urutan | Materi | Estimasi |
| ---: | --- | ---: |
| 1 | Persiapan perangkat | 20-40 menit |
| 2 | Cara kerja website | 5-10 menit |
| 3 | Git dan GitHub Basic | 35-40 menit |
| 4 | Basic JavaScript | 35-40 menit |
| 5 | Commit, push, dan Pull Request | 10-15 menit |

Jika waktumu terbatas, prioritaskan Modul 00, Modul 02, Task 1, dan Task 2.

## Cara Memakai Repository Ini

Ikuti urutan berikut:

1. Baca [README utama](../README.md).
2. Selesaikan [Modul 00 — Persiapan Sebelum Kelas](../modules/00-persiapan-sebelum-kelas/README.md).
3. Baca [Modul 01 — Cara Kerja Website](../modules/01-cara-kerja-website/README.md).
4. Ikuti [Modul 02 — Git dan GitHub Basic](../modules/02-git-github-basic/README.md).
5. Kerjakan [Modul 03 — Basic JavaScript](../modules/03-basic-javascript/README.md).
6. Gunakan [Troubleshooting](../TROUBLESHOOTING.md) jika mengalami error.

## Alur Belajar yang Disarankan

```text
Pahami cara kerja website
-> siapkan Git, GitHub, Node.js, dan editor
-> fork repository
-> clone fork
-> buat branch submission
-> buat folder submission milikmu
-> kerjakan profil dan JavaScript
-> commit
-> push branch
-> buat Pull Request ke main
```

## Checklist Sebelum Mulai

Pastikan ini sudah siap:

- [ ] Akun GitHub sudah dibuat.
- [ ] Email GitHub sudah diverifikasi.
- [ ] Git sudah terinstal.
- [ ] `git --version` berhasil.
- [ ] Node.js LTS sudah terinstal.
- [ ] `node --version` dan `npm --version` berhasil.
- [ ] VS Code atau editor lain sudah siap.
- [ ] Git identity sudah diatur dengan `user.name` dan `user.email`.

## Workflow Git yang Dipakai

Repository utama adalah repository milik penyelenggara. Kamu tidak perlu akses write ke repository utama.

Kerjakan latihan dengan workflow ini:

```text
Fork repository workshop
-> clone repository hasil fork
-> buat branch submission/<username-github>
-> kerjakan tugas di submissions/<username-github>/
-> commit perubahan
-> push branch ke fork
-> buat Pull Request menuju main repository utama
```

Command ringkas:

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
git remote -v
git switch -c submission/<username-github>
git branch --show-current
git status
git add submissions/<username-github>/
git commit -m "feat: add submission for <username-github>"
git push -u origin submission/<username-github>
```

Output `git branch --show-current` harus `submission/<username-github>`, bukan `main`.

## Folder Hasil Belajarmu

Buat folder unik sesuai username GitHub:

```text
submissions/<username-github>/
├── profile.md
└── javascript/
    ├── task-01-profile.js
    └── task-02-cek-kelulusan.js
```

Jika mengerjakan bonus:

```text
submissions/<username-github>/javascript/bonus-anggota-metic.js
```

File di `modules/03-basic-javascript/tasks/` adalah template. Salin ke folder submission milikmu, lalu kerjakan salinannya.

## Cara Mengecek Diri Sendiri

Sebelum membuat Pull Request, cek:

- [ ] Branch aktif bukan `main`.
- [ ] `origin` mengarah ke fork milikmu.
- [ ] Kamu hanya mengubah folder `submissions/<username-github>/`.
- [ ] `profile.md` sudah terisi.
- [ ] File JavaScript sudah dijalankan dengan `node`.
- [ ] Tidak ada syntax error.
- [ ] `git status` sudah diperiksa sebelum commit.
- [ ] Commit message jelas.
- [ ] Branch sudah di-push ke fork.

Command yang berguna:

```bash
git branch --show-current
git remote -v
git status
git log --oneline -5
```

## Pull Request

Buat Pull Request dengan konfigurasi:

```text
base repository: <repository-workshop-utama>
base branch: main

head repository: <username-peserta>/<nama-repository>
compare branch: submission/<username-github>
```

Judul Pull Request:

```text
Submission: <Nama Peserta> (@<username-github>)
```

Kamu hanya perlu satu branch dan satu Pull Request. Jika menambah commit baru ke branch yang sama, Pull Request akan otomatis ikut diperbarui.

> Pull Request bukan salinan satu commit. Pull Request membandingkan branch sumber dengan branch tujuan.

## Jika Mengalami Error

Jangan panik. Error adalah bagian normal dari belajar coding.

Langkah aman:

1. Baca pesan error sampai selesai.
2. Cek folder saat ini.
3. Cek branch aktif.
4. Cek remote.
5. Buka [Troubleshooting](../TROUBLESHOOTING.md).

Format catatan error:

```text
Sistem operasi:
Command yang dijalankan:
Pesan error lengkap:
Folder saat ini:
Branch saat ini:
Langkah yang sudah dicoba:
```

## Target Akhir

Kamu selesai jika sudah punya:

- Folder `submissions/<username-github>/`.
- File `profile.md`.
- File `javascript/task-01-profile.js`.
- File `javascript/task-02-cek-kelulusan.js`.
- Branch `submission/<username-github>` di fork milikmu.
- Pull Request menuju `main` repository workshop utama.

Bonus selesai jika `bonus-anggota-metic.js` juga ada dan bisa dijalankan.

## Catatan untuk Penyelenggara

Jika repository ini dipakai untuk kelas, pastikan:

- Default branch repository utama adalah `main`.
- Peserta melakukan fork, bukan diberi akses write massal.
- Pull Request dari fork diperbolehkan.
- Branch `main` dilindungi jika pengaturan GitHub tersedia.
- Pull Request tidak di-merge sebelum tugas peserta diperiksa.
