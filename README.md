# METIC Probation Workshop 2.0 — MokletDev

Selamat datang di materi workshop dasar MokDev untuk peserta METIC Probation 2.0.

Repository ini dibuat untuk membantu peserta pemula memahami hubungan antara cara kerja website, Git/GitHub, dan JavaScript. Kamu tidak perlu sudah mahir coding untuk mengikuti workshop ini. Yang penting adalah berani mencoba, membaca error dengan tenang, dan bertanya saat buntu.

## Target Peserta

Materi ini ditujukan untuk peserta Probation METIC, terutama yang baru mulai belajar pengembangan website dan version control.

## Tujuan Pembelajaran

Setelah mengikuti workshop, peserta diharapkan mampu:

- Menjelaskan alur sederhana saat sebuah website dibuka.
- Memahami peran HTML, CSS, dan JavaScript pada website.
- Membedakan Git dan GitHub.
- Menjelaskan bahwa `main` adalah branch utama yang perlu dijaga stabil.
- Membuat branch kerja sendiri dengan format `submission/<username-github>`.
- Melakukan workflow dasar: fork, clone, branch, edit file, staging, commit, push branch, dan Pull Request.
- Menulis serta menjalankan JavaScript dasar menggunakan Node.js.
- Menghubungkan latihan coding dengan proses pengumpulan hasil melalui GitHub.

## Urutan Modul

| Urutan | Modul | Estimasi | Fokus |
| ---: | --- | ---: | --- |
| 00 | [Persiapan Sebelum Kelas](modules/00-persiapan-sebelum-kelas/README.md) | 20-40 menit sebelum kelas | Akun, instalasi, Git, Node.js, dan folder kerja |
| 01 | [Cara Kerja Website](modules/01-cara-kerja-website/README.md) | 5-10 menit | Browser, server, HTML, CSS, JavaScript |
| 02 | [Git dan GitHub Basic](modules/02-git-github-basic/README.md) | 35-40 menit | Fork, branch, commit, push branch, Pull Request |
| 03 | [Basic JavaScript](modules/03-basic-javascript/README.md) | 35-40 menit | Output, variabel, tipe data, conditional, function, array, object |

Workshop ditargetkan sekitar 1 jam 30 menit. Jika waktu mulai mepet, bagian bonus JavaScript dapat dijadikan latihan mandiri.

## Prasyarat

Sebelum kelas dimulai, pastikan kamu:

- Memiliki akun GitHub dan emailnya sudah diverifikasi.
- Sudah menginstal Git.
- Sudah menginstal Node.js versi LTS.
- Sudah menginstal Visual Studio Code atau editor lain.
- Bisa membuka terminal atau PowerShell.

Panduan lengkap ada di [Modul 00](modules/00-persiapan-sebelum-kelas/README.md).

## Software yang Diperlukan

- Browser modern seperti Chrome, Edge, atau Firefox.
- Git.
- Node.js versi LTS dan npm.
- Visual Studio Code atau editor kode lain.
- Koneksi internet.

## Output Peserta

Di akhir workshop, peserta diharapkan memiliki folder unik:

```text
submissions/<username-github>/
├── profile.md
└── javascript/
    ├── task-01-profile.js
    └── task-02-cek-kelulusan.js
```

Jika mengerjakan bonus, tambahkan:

```text
submissions/<username-github>/javascript/bonus-anggota-metic.js
```

Peserta juga diharapkan memiliki:

- Branch `submission/<username-github>` pada fork masing-masing.
- Commit dengan pesan yang jelas.
- Push branch ke fork peserta.
- Pull Request menuju branch `main` repository workshop utama.

## Workflow Resmi

```text
Fork repository workshop
-> clone repository hasil fork
-> buat branch baru
-> kerjakan tugas pada branch tersebut
-> commit perubahan
-> push branch ke fork peserta
-> buat Pull Request menuju branch main repository workshop
```

Peserta tidak perlu akses write ke repository utama. Semua pekerjaan dilakukan melalui fork dan branch masing-masing.

## Mulai Belajar

1. Selesaikan [Persiapan Sebelum Kelas](modules/00-persiapan-sebelum-kelas/README.md).
2. Baca pembuka [Cara Kerja Website](modules/01-cara-kerja-website/README.md).
3. Ikuti praktik [Git dan GitHub Basic](modules/02-git-github-basic/README.md).
4. Lanjutkan ke [Basic JavaScript](modules/03-basic-javascript/README.md).
5. Gunakan [Troubleshooting](TROUBLESHOOTING.md) saat mengalami error.

## Meminta Bantuan

Saat mengalami error, jangan hanya mengirim “tidak bisa”. Kirim informasi berikut agar pemateri bisa membantu lebih cepat:

```text
Sistem operasi:
Command yang dijalankan:
Pesan error lengkap:
Folder saat ini:
Langkah yang sudah dicoba:
```

Jangan pernah membagikan password, token, recovery code, atau data pribadi ke repository maupun ruang diskusi.
