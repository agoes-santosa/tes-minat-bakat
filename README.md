# Tes Minat Bakat

Website tes minat dan bakat online. Tes pertama yang tersedia: **Tes SDS Holland (RIASEC)**, menghasilkan kode Holland 3 huruf beserta rekomendasi peran/karier.

Dibangun dengan React + Vite, di-host gratis di GitHub Pages, dengan akun pengguna (username + PIN 4 angka) disimpan lewat Firebase Authentication + Firestore (paket gratis Spark).

## Sumber konten tes

Pertanyaan tes menggunakan **O\*NET Interest Profiler Short Form** (v1) — instrumen domain publik yang dikembangkan oleh National Center for O\*NET Development, disponsori oleh U.S. Department of Labor. Ini *bukan* materi SDS/PAR berbayar; mekanismenya sama (60 aktivitas kerja, 10 per tipe RIASEC, dijawab Ya/Tidak, 3 skor tertinggi = kode Holland).

## Catatan keamanan

Login hanya menggunakan username + PIN 4 angka (10.000 kombinasi). Ini secara sengaja sederhana untuk aplikasi skala kecil/non-sensitif — bukan untuk data yang butuh keamanan tinggi. Firebase Auth tetap menangani hashing password dan pembatasan percobaan gagal di baliknya, tapi tidak ada mekanisme "lupa PIN".

## Setup lokal

```bash
npm install
```

### 1. Buat proyek Firebase gratis

1. Buka [Firebase Console](https://console.firebase.google.com), buat proyek baru (paket Spark/gratis sudah cukup).
2. Buka **Build → Authentication → Get started**, aktifkan provider **Email/Password**.
3. Buka **Build → Firestore Database → Create database**, mulai dalam mode produksi (aturan akan diisi di langkah berikut).
4. Di **Firestore → Rules**, tempel isi file [`firestore.rules`](firestore.rules) dari repo ini, lalu publish.
5. Buka **Project settings → General**, scroll ke "Your apps", tambahkan Web app, salin nilai config (`apiKey`, `authDomain`, dst).

### 2. Isi environment variables

Salin `.env.example` menjadi `.env.local`, isi dengan nilai dari langkah di atas:

```bash
cp .env.example .env.local
```

### 3. Jalankan dev server

```bash
npm run dev
```

## Deploy ke GitHub Pages

1. Push repo ini ke GitHub.
2. Di **Settings → Pages**, set **Source** ke **GitHub Actions**.
3. Di **Settings → Secrets and variables → Actions**, tambahkan 6 secret berikut dengan nilai yang sama seperti `.env.local`:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
4. Jika repo ini bukan `<username>.github.io` (yaitu di-deploy sebagai project page biasa), ubah `base` di [`vite.config.js`](vite.config.js) menjadi `'/<nama-repo>/'`.
5. Push ke branch `main` — workflow di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) akan build dan deploy otomatis.

Situs menggunakan `HashRouter` (URL berbentuk `#/...`) secara sengaja, supaya navigasi/refresh langsung ke halaman tertentu tidak 404 di GitHub Pages yang tidak punya server-side routing.

## Struktur data Firestore

```
users/{uid}
  username, goal, goalOther, createdAt
users/{uid}/results/{resultId}
  testId, scores, hollandCodeOrdered, hollandCodeKey, createdAt
```

Aturan keamanan (`firestore.rules`) membatasi setiap pengguna hanya bisa membaca/menulis dokumennya sendiri.

## Menambah tes baru

1. Tambahkan folder data baru di `src/data/<nama-tes>/` (questions, scoring, resultsLookup, mengikuti pola `sdsHolland`).
2. Daftarkan di `src/testEngines/index.js`.
3. Tambahkan entri baru di `src/data/tests.js` dengan `active: true`.

`TestRunnerPage` dan `ResultsPage` bersifat generik terhadap `testEngines`, jadi tidak perlu route atau halaman baru.
