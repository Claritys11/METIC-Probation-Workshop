# Teaching Guide — METIC Probation Workshop 2.0

Dokumen ini hanya berisi panduan mengajar workshop. Jangan menambahkan informasi internal yang tidak diperlukan peserta.

## Target Durasi

Workshop ditargetkan 1 jam 30 menit. Karena workflow fork dan branch perlu dipraktikkan langsung, ringkas teori Git dan prioritaskan praktik.

## Tujuan Setiap Segmen

| Segmen | Tujuan |
| --- | --- |
| Cara kerja website | Memberi mental model browser, server, HTML, CSS, JavaScript |
| Pengecekan kesiapan | Memastikan Git, Node.js, editor, akun GitHub, dan fork siap |
| Git/GitHub | Peserta paham `main`, fork, branch submission, commit, push branch, dan Pull Request |
| Praktik Git | Peserta membuat folder submission unik pada branch sendiri |
| JavaScript | Peserta menjalankan logika dasar dengan Node.js |
| Task JavaScript | Peserta menyalin starter ke folder submission, mengerjakan, lalu push ke branch yang sama |
| Closing | Recap hubungan website, Git/GitHub, JavaScript, dan review melalui Pull Request |

## Rundown 1 Jam 30 Menit

| Waktu | Agenda |
| ---: | --- |
| 00-07 | Cara kerja website |
| 07-12 | Tujuan kelas dan pengecekan kesiapan |
| 12-20 | Konsep Git, GitHub, fork, `main`, dan branch |
| 20-32 | Demo workflow fork, clone fork, branch, commit, push, Pull Request |
| 32-45 | Praktik profil peserta dan Pull Request awal |
| 45-50 | Review cepat dan troubleshooting |
| 50-57 | Peran JavaScript dalam website dan Node.js |
| 57-68 | Variabel, tipe data, operator, dan output |
| 68-78 | Conditional dan function |
| 78-84 | Task cek kelulusan |
| 84-88 | Commit dan push hasil JavaScript ke branch yang sama |
| 88-90 | Recap dan closing |

Array, object, dan bonus dapat dibahas singkat atau dijadikan latihan mandiri jika waktu tidak cukup.

## Bagian Wajib

- Fork repository workshop utama.
- Clone fork peserta.
- Periksa remote dengan `git remote -v`.
- Buat branch `submission/<username-github>`.
- Periksa branch aktif dengan `git branch --show-current`.
- Kerjakan hanya di `submissions/<username-github>/`.
- `git status`, `git add submissions/<username-github>/`, `git commit -m`, `git push -u origin submission/<username-github>`.
- Pull Request menuju `main` repository workshop utama.
- Task 1 dan Task 2 JavaScript.
- Push commit kedua ke branch yang sama agar Pull Request otomatis diperbarui.

## Bagian Opsional

- `git add .` sebagai tambahan setelah peserta paham risikonya.
- Array dan object lebih dalam.
- Bonus `filter()` dan `map()`.
- Review detail branch protection jika peserta bertanya.

## Titik Stop Jika Waktu Hampir Habis

- Setelah peserta berhasil membuat Pull Request profil, langsung masuk JavaScript.
- Jika JavaScript terlambat, jalankan contoh output, variabel, conditional, dan function saja.
- Jika Task 2 memakan waktu, jadikan bonus array/object sebagai bacaan mandiri.
- Sisakan minimal 5 menit untuk commit, push branch, dan recap.

## Demo Pemateri

Demo wajib menunjukkan:

1. Fork repository.
2. Clone fork.
3. Memeriksa remote dengan `git remote -v`.
4. Membuat branch `submission/demo-pemateri`.
5. Memeriksa branch aktif dengan `git branch --show-current`.
6. Membuat file pada folder submission unik.
7. Menjalankan `git status`.
8. Melakukan staging dan commit.
9. Push branch dengan `git push -u origin submission/demo-pemateri`.
10. Membuat Pull Request ke `main`.
11. Menambahkan commit kedua ke branch yang sama.
12. Menunjukkan bahwa Pull Request otomatis ikut diperbarui.

Tekankan kalimat:

> Pull Request bukan salinan satu commit. Pull Request membandingkan branch sumber dengan branch tujuan, sehingga commit baru yang di-push ke branch yang sama akan otomatis masuk ke Pull Request tersebut.

Jangan merge Pull Request sebelum seluruh tugas peserta selesai dan sudah diperiksa.

## Checklist Maintainer Repository

Pengaturan ini dilakukan manual di GitHub oleh maintainer. Jangan dilakukan dari materi peserta.

- [ ] Pastikan default branch adalah `main`.
- [ ] Aktifkan perlindungan branch `main` jika tersedia.
- [ ] Nonaktifkan force push ke `main`.
- [ ] Nonaktifkan penghapusan branch `main`.
- [ ] Wajibkan perubahan masuk melalui Pull Request jika pengaturan repository mendukungnya.
- [ ] Jangan memberikan akses write kepada seluruh peserta hanya agar mereka dapat membuat branch.
- [ ] Pastikan Pull Request dari fork diperbolehkan.
- [ ] Tentukan apakah Pull Request akan di-merge, diberi review saja, atau ditutup setelah penilaian.

## Error yang Kemungkinan Sering Terjadi

- Git atau Node.js belum terinstal.
- Terminal berada di folder yang salah.
- Peserta clone repository utama, bukan fork.
- Peserta masih berada di branch `main`.
- Branch `submission/<username-github>` sudah ada.
- Git identity belum diatur.
- Peserta mengedit template di `modules/03-basic-javascript/tasks/`.
- Peserta mengubah folder submission milik peserta lain.
- Authentication atau permission saat push branch.
- Pull Request dibuat tetapi belum ada perubahan karena commit belum di-push.
- Pull Request memakai base/head yang keliru.
- Syntax error karena tanda kurung atau kutip hilang.

## Cara Mendampingi Praktik

- Minta peserta membaca command sebelum menekan Enter.
- Biasakan peserta menjalankan `git branch --show-current`, `git remote -v`, dan `git status`.
- Saat membantu error, tanya command terakhir, folder saat ini, branch aktif, dan remote.
- Hindari mengambil alih keyboard terlalu lama.
- Jelaskan satu penyebab paling mungkin, lalu minta peserta mencoba.
- Untuk Git, utamakan menyelamatkan pekerjaan peserta sebelum menjalankan command lanjutan.
- Jangan gunakan `reset --hard` untuk workshop pemula.

## Checklist Sebelum Workshop

- [ ] Repository peserta sudah bersih dan link relatif sudah dicek.
- [ ] URL repository utama yang akan di-fork peserta sudah siap.
- [ ] Pull Request template tersedia di `.github/pull_request_template.md`.
- [ ] Contoh Pull Request dari fork sudah siap didemokan.
- [ ] Git dan Node.js di laptop pemateri sudah siap.
- [ ] Koneksi internet tersedia.
- [ ] Peserta sudah menerima Modul 00.
- [ ] Mekanisme bantuan saat error sudah disepakati.

## Checklist Setelah Workshop

- [ ] Semua Pull Request peserta sudah terdata.
- [ ] Peserta yang terkendala sudah dicatat.
- [ ] Error umum dicatat untuk perbaikan materi.
- [ ] Tidak ada file peserta yang saling menimpa.
- [ ] Repository tetap bersih dari data pribadi dan file tidak perlu.
- [ ] Pull Request belum di-merge sebelum seluruh tugas diperiksa.

## Output Peserta yang Perlu Diperiksa

- Branch peserta bernama `submission/<username-github>`.
- Folder `submissions/<username-github>/` ada dan unik.
- `profile.md` terisi.
- Task JavaScript berada di `submissions/<username-github>/javascript/`.
- Task JavaScript dapat dijalankan tanpa syntax error.
- Commit message cukup jelas.
- Pull Request menampilkan branch peserta dibandingkan dengan `main`.
- Peserta tidak mengedit file peserta lain atau template task.
