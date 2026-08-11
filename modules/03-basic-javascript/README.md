# Modul 03 — Basic JavaScript

JavaScript memberi logika pada website. Di browser, JavaScript bisa membuat halaman menjadi interaktif. Pada workshop ini, kita menjalankan JavaScript dengan Node.js agar fokus dulu pada dasar logika program.

## Cara Menjalankan File

Dari folder utama repository, gunakan:

```bash
node modules/03-basic-javascript/examples/01-output-and-variables.js
```

`node` menjalankan file JavaScript. Path setelahnya adalah lokasi file yang ingin dijalankan.

## Urutan Belajar

1. `console.log()`
2. Variabel `const` dan `let`
3. Tipe data dasar
4. Operator perbandingan dan logika
5. `if`, `else if`, dan `else`
6. Function
7. Array dan object

## Contoh yang Bisa Dijalankan

Jalankan dari folder utama repository:

```bash
node modules/03-basic-javascript/examples/01-output-and-variables.js
node modules/03-basic-javascript/examples/02-data-types-and-operators.js
node modules/03-basic-javascript/examples/03-conditionals.js
node modules/03-basic-javascript/examples/04-functions.js
node modules/03-basic-javascript/examples/05-arrays-and-objects.js
```

## Catatan Gaya Kode

- Gunakan `const` sebagai default.
- Gunakan `let` hanya ketika nilai variabel memang berubah.
- Gunakan nama variabel yang jelas.
- Jalankan file setelah mengubah kode.
- Baca error dari baris paling atas yang relevan.

## Task Starter

File berikut adalah template latihan:

1. [Task 1 — Profil sederhana](tasks/task-01-profile.js)
2. [Task 2 — Cek kelulusan](tasks/task-02-cek-kelulusan.js)
3. [Bonus — Data anggota METIC](tasks/bonus-anggota-metic.js)

Jangan edit file template di folder `tasks/` sebagai jawaban akhir. Salin file yang dikerjakan ke folder submission milikmu:

```text
submissions/<username-github>/javascript/
```

Task 1 melatih variabel dan tipe data.
Task 2 melatih function dan conditional.
Bonus melatih array dan object.

## Menyiapkan File Jawaban

Buat struktur:

```text
submissions/<username-github>/
├── profile.md
└── javascript/
    ├── task-01-profile.js
    └── task-02-cek-kelulusan.js
```

Salin template:

```bash
mkdir -p submissions/<username-github>/javascript
cp modules/03-basic-javascript/tasks/task-01-profile.js submissions/<username-github>/javascript/task-01-profile.js
cp modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Di Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force submissions/<username-github>/javascript
Copy-Item modules/03-basic-javascript/tasks/task-01-profile.js submissions/<username-github>/javascript/task-01-profile.js
Copy-Item modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Jika mengerjakan bonus, salin juga:

```bash
cp modules/03-basic-javascript/tasks/bonus-anggota-metic.js submissions/<username-github>/javascript/bonus-anggota-metic.js
```

Di Windows PowerShell:

```powershell
Copy-Item modules/03-basic-javascript/tasks/bonus-anggota-metic.js submissions/<username-github>/javascript/bonus-anggota-metic.js
```

## Integrasi dengan Git

Setelah latihan selesai:

1. Jalankan file dengan Node.js.
2. Pastikan tidak ada error.
3. Cek perubahan:

```bash
git branch --show-current
git status
```

Pastikan branch aktif adalah `submission/<username-github>`, bukan `main`.

4. Tambahkan folder submission milikmu:

```bash
git add submissions/<username-github>/
```

5. Commit:

```bash
git commit -m "feat: add submission for <username-github>"
```

6. Push:

```bash
git push
```

7. Periksa Pull Request yang sama di GitHub. Kamu tidak perlu membuat Pull Request baru jika sebelumnya sudah membuat Pull Request dari branch `submission/<username-github>`.
