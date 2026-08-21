git 

# Git dan GitHub Cheatsheet

Ringkasan command workflow workshop.

## Clone Fork

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
```

Clone repository dari fork milikmu, bukan repository utama penyelenggara.

## Cek Remote

```bash
git remote -v
```

`origin` harus mengarah ke fork peserta:

```text
https://github.com/<username-github>/<nama-repository>.git
```

## Buat Branch Submission

```bash
git switch -c submission/<username-github>
```

Alternatif untuk Git versi lama:

```bash
git checkout -b submission/<username-github>
```

## Cek Branch Aktif

```bash
git branch --show-current
```

Output harus `submission/<username-github>`, bukan `main`.

## Cek Perubahan

```bash
git status
```

Melihat file yang berubah, file yang sudah masuk staging, dan petunjuk langkah berikutnya.

## Tambahkan Folder Submission

```bash
git add submissions/<username-github>/
```

Memilih folder submission milikmu untuk masuk commit.

## Tambahkan Semua Perubahan

```bash
git add .
```

Gunakan hanya jika sudah yakin tidak ada file lain yang tidak sengaja berubah.

## Commit

```bash
git commit -m "feat: add submission for <username-github>"
```

Menyimpan perubahan yang sudah masuk staging.

## Push Branch Pertama Kali

```bash
git push -u origin submission/<username-github>
```

`-u` menghubungkan branch lokal dengan branch di GitHub.

## Push Berikutnya

```bash
git push
```

Bisa digunakan setelah branch lokal sudah terhubung dengan branch di GitHub.

## Pull Request

Gunakan konfigurasi:

```text
base repository: <repository-workshop-utama>
base branch: main

head repository: <username-peserta>/<nama-repository>
compare branch: submission/<username-github>
```

Judul:

```text
Submission: <Nama Peserta> (@<username-github>)
```

## Alur Singkat

```bash
git clone https://github.com/<username-github>/<nama-repository>.git
cd <nama-repository>
git remote -v
git switch -c submission/<username-github>
git branch --show-current
git status
git add submissions/<username-github>/
git status
git commit -m "feat: add submission for <username-github>"
git push -u origin submission/<username-github>
```

Setelah push, buat Pull Request menuju `main` repository workshop utama.
