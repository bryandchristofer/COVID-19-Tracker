# COVID-19 Tracker

COVID-19 Tracker adalah aplikasi berbasis React.js yang menampilkan data COVID-19 secara global. Aplikasi ini menggunakan **disease.sh API** untuk mendapatkan informasi terkini mengenai kasus COVID-19 di berbagai negara. Aplikasi ini juga memungkinkan pengguna untuk menambahkan catatan pada negara tertentu dan menyimpan data tersebut ke local storage.

---

## 📌 Fitur

1. **Halaman Utama (Home Page)**:
   - Menampilkan data COVID-19 global dalam bentuk tabel.
   - Dapat memfilter negara berdasarkan nama.
   - Dapat mengurutkan data berdasarkan nama negara (A-Z/Z-A), jumlah kasus (ascending/descending), dan jumlah kematian (ascending/descending).
   - Tombol untuk melihat detail negara.
   - Tombol untuk menambahkan negara ke halaman catatan dengan catatan tambahan.

2. **Halaman Catatan (Notes Page)**:
   - Menampilkan daftar negara yang telah ditambahkan ke catatan.
   - Menyediakan tombol untuk:
     - Melihat detail negara beserta catatan.
     - Mengedit catatan tambahan.
     - Menghapus negara dari catatan dengan konfirmasi.

3. **Detail Negara**:
   - Menampilkan informasi rinci mengenai data COVID-19, termasuk:
     - Total kasus.
     - Total kematian.
     - Total pasien sembuh.
     - Kasus aktif.
     - Kasus kritis.
     - Kasus baru hari ini.
     - Kematian baru hari ini.
     - Total tes.
     - Populasi.

4. **Penyimpanan Data**:
   - Data negara yang ditambahkan ke catatan disimpan di local storage.
   - Data akan tetap tersedia meskipun aplikasi direfresh.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API**: [disease.sh API](https://disease.sh/v3/covid-19/countries)
- **Penyimpanan Lokal**: Local Storage

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/username/covid19-tracker.git
cd covid19-tracker
