// Sumber: O*NET Interest Profiler Short Form (v1), dikembangkan oleh
// National Center for O*NET Development, disponsori oleh U.S. Department
// of Labor, Employment & Training Administration. Materi ini adalah
// domain publik (bukan materi berbayar SDS/PAR) dan diterjemahkan ke
// Bahasa Indonesia. 60 aktivitas kerja, 10 per tipe RIASEC.
//
// R = Realistic (Realistis)
// I = Investigative (Investigatif)
// A = Artistic (Artistik)
// S = Social (Sosial)
// E = Enterprising (Wirausaha)
// C = Conventional (Konvensional)

export const CATEGORY_LABELS = {
  R: 'Realistis',
  I: 'Investigatif',
  A: 'Artistik',
  S: 'Sosial',
  E: 'Wirausaha',
  C: 'Konvensional',
};

export const CATEGORY_ORDER = ['R', 'I', 'A', 'S', 'E', 'C'];

export const sdsHollandQuestions = [
  // Realistic
  { id: 'R1', category: 'R', text_id: 'Membuat lemari dapur' },
  { id: 'R2', category: 'R', text_id: 'Memasang bata atau ubin' },
  { id: 'R3', category: 'R', text_id: 'Memperbaiki peralatan rumah tangga' },
  { id: 'R4', category: 'R', text_id: 'Membudidayakan ikan di tempat pembenihan ikan' },
  { id: 'R5', category: 'R', text_id: 'Merakit komponen elektronik' },
  { id: 'R6', category: 'R', text_id: 'Mengemudikan truk untuk mengantar paket ke kantor dan rumah' },
  { id: 'R7', category: 'R', text_id: 'Menguji kualitas komponen sebelum dikirim' },
  { id: 'R8', category: 'R', text_id: 'Memperbaiki dan memasang kunci' },
  { id: 'R9', category: 'R', text_id: 'Mengatur dan mengoperasikan mesin untuk membuat produk' },
  { id: 'R10', category: 'R', text_id: 'Memadamkan kebakaran hutan' },

  // Investigative
  { id: 'I1', category: 'I', text_id: 'Mengembangkan obat baru' },
  { id: 'I2', category: 'I', text_id: 'Meneliti cara mengurangi pencemaran air' },
  { id: 'I3', category: 'I', text_id: 'Melakukan eksperimen kimia' },
  { id: 'I4', category: 'I', text_id: 'Mempelajari pergerakan planet' },
  { id: 'I5', category: 'I', text_id: 'Memeriksa sampel darah menggunakan mikroskop' },
  { id: 'I6', category: 'I', text_id: 'Menyelidiki penyebab kebakaran' },
  { id: 'I7', category: 'I', text_id: 'Mengembangkan cara untuk memprediksi cuaca dengan lebih baik' },
  { id: 'I8', category: 'I', text_id: 'Bekerja di laboratorium biologi' },
  { id: 'I9', category: 'I', text_id: 'Menciptakan pengganti gula' },
  { id: 'I10', category: 'I', text_id: 'Melakukan tes laboratorium untuk mengidentifikasi penyakit' },

  // Artistic
  { id: 'A1', category: 'A', text_id: 'Menulis buku atau naskah drama' },
  { id: 'A2', category: 'A', text_id: 'Memainkan alat musik' },
  { id: 'A3', category: 'A', text_id: 'Menggubah atau mengaransemen musik' },
  { id: 'A4', category: 'A', text_id: 'Menggambar' },
  { id: 'A5', category: 'A', text_id: 'Membuat efek khusus untuk film' },
  { id: 'A6', category: 'A', text_id: 'Melukis latar panggung untuk pertunjukan drama' },
  { id: 'A7', category: 'A', text_id: 'Menulis naskah untuk film atau acara televisi' },
  { id: 'A8', category: 'A', text_id: 'Menampilkan tari jazz atau tap' },
  { id: 'A9', category: 'A', text_id: 'Bernyanyi dalam sebuah band' },
  { id: 'A10', category: 'A', text_id: 'Menyunting (mengedit) film' },

  // Social
  { id: 'S1', category: 'S', text_id: 'Mengajari seseorang rutinitas olahraga' },
  { id: 'S2', category: 'S', text_id: 'Membantu orang dengan masalah pribadi atau emosional' },
  { id: 'S3', category: 'S', text_id: 'Memberikan bimbingan karier kepada orang lain' },
  { id: 'S4', category: 'S', text_id: 'Melakukan terapi rehabilitasi' },
  { id: 'S5', category: 'S', text_id: 'Menjadi relawan di organisasi nirlaba' },
  { id: 'S6', category: 'S', text_id: 'Mengajari anak-anak bermain olahraga' },
  { id: 'S7', category: 'S', text_id: 'Mengajarkan bahasa isyarat kepada penyandang tuli atau kurang pendengaran' },
  { id: 'S8', category: 'S', text_id: 'Membantu memandu sesi terapi kelompok' },
  { id: 'S9', category: 'S', text_id: 'Merawat anak-anak di tempat penitipan anak' },
  { id: 'S10', category: 'S', text_id: 'Mengajar kelas di sekolah menengah atas' },

  // Enterprising
  { id: 'E1', category: 'E', text_id: 'Membeli dan menjual saham serta obligasi' },
  { id: 'E2', category: 'E', text_id: 'Mengelola toko ritel' },
  { id: 'E3', category: 'E', text_id: 'Mengelola salon kecantikan atau barbershop' },
  { id: 'E4', category: 'E', text_id: 'Mengelola sebuah departemen di perusahaan besar' },
  { id: 'E5', category: 'E', text_id: 'Memulai bisnis sendiri' },
  { id: 'E6', category: 'E', text_id: 'Menegosiasikan kontrak bisnis' },
  { id: 'E7', category: 'E', text_id: 'Mewakili klien dalam sebuah tuntutan hukum' },
  { id: 'E8', category: 'E', text_id: 'Memasarkan lini pakaian baru' },
  { id: 'E9', category: 'E', text_id: 'Menjual barang dagangan di toserba' },
  { id: 'E10', category: 'E', text_id: 'Mengelola toko pakaian' },

  // Conventional
  { id: 'C1', category: 'C', text_id: 'Membuat spreadsheet menggunakan perangkat lunak komputer' },
  { id: 'C2', category: 'C', text_id: 'Memeriksa (proofread) catatan atau formulir' },
  { id: 'C3', category: 'C', text_id: 'Menginstal perangkat lunak di komputer-komputer dalam jaringan besar' },
  { id: 'C4', category: 'C', text_id: 'Mengoperasikan kalkulator' },
  { id: 'C5', category: 'C', text_id: 'Mencatat pengiriman dan penerimaan barang' },
  { id: 'C6', category: 'C', text_id: 'Menghitung gaji karyawan' },
  { id: 'C7', category: 'C', text_id: 'Mendata persediaan menggunakan komputer genggam' },
  { id: 'C8', category: 'C', text_id: 'Mencatat pembayaran sewa' },
  { id: 'C9', category: 'C', text_id: 'Menyimpan catatan inventaris' },
  { id: 'C10', category: 'C', text_id: 'Mencap, menyortir, dan mendistribusikan surat untuk sebuah organisasi' },
];
