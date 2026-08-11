# Panduan Kontribusi Workshop

Gunakan panduan ini untuk mengumpulkan hasil latihan melalui GitHub.

Workflow resmi workshop:

```text
Fork repository workshop
-> clone repository hasil fork
-> buat branch baru
-> kerjakan tugas pada branch tersebut
-> commit perubahan
-> push branch ke fork peserta
-> buat Pull Request menuju branch main repository workshop
```

## 1. Fork Repository

1. Buka repository workshop utama milik penyelenggara di GitHub.
2. Klik tombol **Fork**.
3. Pilih akun GitHub milikmu sebagai tujuan fork.
4. Tunggu sampai GitHub membuat salinan repository.

Repository utama adalah repository milik penyelenggara. Fork adalah salinan repository tersebut di akun GitHub peserta. Kamu bekerja melalui fork agar tidak membutuhkan akses tulis ke repository utama.

## 2. Clone Fork Peserta

Clone repository dari akun GitHub milikmu sendiri:

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
```

`git clone` menyalin fork ke laptop.
`cd` masuk ke folder repository hasil clone.

Periksa remote:

```bash
git remote -v
```

Pastikan `origin` mengarah ke:

```text
https://github.com/<username-github>/<nama-repository>.git
```

Jika `origin` mengarah ke repository penyelenggara, kamu kemungkinan meng-clone repository utama. Untuk push, `origin` harus mengarah ke fork milikmu.

## 3. Buat Branch Baru

`main` adalah branch utama yang perlu dijaga tetap stabil. Jangan mengerjakan tugas langsung di `main`.

Gunakan format branch:

```text
submission/<username-github>
```

Contoh:

```text
submission/elangsyadewa
```

Buat branch:

```bash
git switch -c submission/<username-github>
```

Jika Git versi lama belum mendukung `git switch`, gunakan:

```bash
git checkout -b submission/<username-github>
```

Periksa branch aktif:

```bash
git branch --show-current
```

Output-nya harus:

```text
submission/<username-github>
```

Output-nya tidak boleh `main`.

## 4. Buat Folder Submission Unik

Setiap peserta hanya mengubah folder miliknya sendiri:

```text
submissions/<username-github>/
├── profile.md
└── javascript/
    ├── task-01-profile.js
    └── task-02-cek-kelulusan.js
```

Contoh:

```text
submissions/elangsyadewa/
├── profile.md
└── javascript/
    ├── task-01-profile.js
    └── task-02-cek-kelulusan.js
```

Jika mengerjakan bonus, tambahkan:

```text
submissions/<username-github>/javascript/bonus-anggota-metic.js
```

File di `modules/03-basic-javascript/tasks/` adalah template. Jangan edit file template tersebut langsung. Salin isinya ke folder submission milikmu, lalu kerjakan salinannya.

Buat folder:

```bash
mkdir -p submissions/<username-github>/javascript
```

Di Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force submissions/<username-github>/javascript
```

## 5. Isi `profile.md`

Gunakan format:

```markdown
# Profil Peserta

Nama:
Kelas/Jurusan:
Username GitHub:
Minat teknologi:
Alasan mengikuti MokDev:
```

## 6. Kerjakan JavaScript

Salin template dari:

```text
modules/03-basic-javascript/tasks/task-01-profile.js
modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js
```

Ke:

```text
submissions/<username-github>/javascript/task-01-profile.js
submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Command Linux, macOS, atau Git Bash:

```bash
cp modules/03-basic-javascript/tasks/task-01-profile.js submissions/<username-github>/javascript/task-01-profile.js
cp modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Command Windows PowerShell:

```powershell
Copy-Item modules/03-basic-javascript/tasks/task-01-profile.js submissions/<username-github>/javascript/task-01-profile.js
Copy-Item modules/03-basic-javascript/tasks/task-02-cek-kelulusan.js submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Jalankan file milikmu:

```bash
node submissions/<username-github>/javascript/task-01-profile.js
node submissions/<username-github>/javascript/task-02-cek-kelulusan.js
```

Jika mengerjakan bonus, salin dan jalankan:

```bash
node submissions/<username-github>/javascript/bonus-anggota-metic.js
```

## 7. Periksa dan Commit

Periksa perubahan:

```bash
git status
```

Tambahkan folder submission milikmu:

```bash
git add submissions/<username-github>/
```

Periksa lagi:

```bash
git status
```

Commit:

```bash
git commit -m "feat: add submission for <username-github>"
```

`git add .` boleh dipakai jika sudah paham, tetapi jangan jadikan kebiasaan awal. Command itu memasukkan semua perubahan di folder saat ini, termasuk file yang mungkin tidak sengaja berubah.

## 8. Push Branch

Push branch ke fork milikmu:

```bash
git push -u origin submission/<username-github>
```

`-u` menghubungkan branch lokal dengan branch di GitHub. Setelah itu, push berikutnya cukup:

```bash
git push
```

Jangan push ke `main` repository utama.

## 9. Buat Pull Request ke `main`

Buka GitHub, lalu buat Pull Request dengan konfigurasi:

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

Isi Pull Request akan otomatis memakai template. Lengkapi data peserta dan checklist.

## 10. Satu Branch, Satu Pull Request

Untuk workshop ini, gunakan satu branch sepanjang sesi:

```text
submission/<username-github>
```

Alurnya:

1. Buat branch.
2. Kerjakan `profile.md`.
3. Commit dan push.
4. Buat Pull Request awal.
5. Kerjakan latihan JavaScript pada branch yang sama.
6. Commit dan push lagi.
7. Pull Request yang sama otomatis diperbarui.

Kamu tidak perlu membuat Pull Request baru setelah setiap commit.

Pull Request bukan salinan satu commit. Pull Request membandingkan branch sumber dengan branch tujuan, sehingga commit baru yang di-push ke branch yang sama akan otomatis masuk ke Pull Request tersebut.

## Aturan Aman

- Jangan mengerjakan tugas langsung di `main`.
- Jangan push ke `main` repository utama.
- Jangan mengedit file peserta lain.
- Jangan mengedit template di `modules/03-basic-javascript/tasks/` sebagai jawaban akhir.
- Jangan memasukkan password, token, atau data pribadi.
- Jangan memakai `git reset`, `git rebase`, `git stash`, atau command lanjutan tanpa arahan pemateri.
- Jika bingung, jalankan `git status`, `git branch --show-current`, dan `git remote -v`, lalu minta bantuan.
