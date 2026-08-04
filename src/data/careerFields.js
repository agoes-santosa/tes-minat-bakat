// Shared "field of study" content, reused across many occupations (e.g.
// several finance-related roles all point to 'akuntansi'). Universities
// are listed best-to-worst by general reputation for that field in
// Indonesia (accreditation/national standing), not an official ranking.

export const careerFields = {
  arsitektur: {
    name: 'Arsitektur',
    description_id:
      'Mempelajari perancangan bangunan dan ruang, memadukan aspek fungsi, estetika, struktur, dan lingkungan.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Universitas Katolik Parahyangan (Unpar)'],
  },
  'desain-produk': {
    name: 'Desain Produk',
    description_id:
      'Belajar merancang produk fisik yang fungsional, estetis, dan layak diproduksi massal, mulai dari riset kebutuhan pengguna hingga prototipe.',
    universities: ['Institut Teknologi Bandung (ITB)', 'ISI Yogyakarta', 'Universitas Trisakti', 'Universitas Pelita Harapan (UPH)', 'Universitas Bina Nusantara (Binus)'],
  },
  fotografi: {
    name: 'Fotografi',
    description_id: 'Mempelajari teknik, komposisi, dan bahasa visual fotografi untuk keperluan seni, jurnalistik, maupun komersial.',
    universities: ['Institut Kesenian Jakarta (IKJ)', 'Universitas Multimedia Nusantara (UMN)', 'ISI Yogyakarta', 'Universitas Trisakti', 'Universitas Bina Nusantara (Binus)'],
  },
  'film-televisi': {
    name: 'Film dan Televisi',
    description_id:
      'Mempelajari produksi audiovisual, mulai dari penulisan skenario, penyutradaraan, sinematografi, hingga penyuntingan.',
    universities: ['Institut Kesenian Jakarta (IKJ)', 'Institut Seni Budaya Indonesia (ISBI) Bandung', 'Universitas Multimedia Nusantara (UMN)', 'ISI Yogyakarta', 'LSPR Institute of Communication & Business'],
  },
  'desain-interior': {
    name: 'Desain Interior',
    description_id: 'Mempelajari perancangan tata ruang dalam bangunan agar fungsional, nyaman, dan estetis.',
    universities: ['Institut Teknologi Bandung (ITB)', 'ISI Yogyakarta', 'Universitas Trisakti', 'Universitas Pelita Harapan (UPH)', 'Universitas Kristen Petra'],
  },
  'animasi-multimedia': {
    name: 'Animasi dan Teknologi Multimedia/Game',
    description_id:
      'Mempelajari pembuatan animasi, efek visual, dan pengembangan game, memadukan seni visual dengan teknologi komputer.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Bina Nusantara (Binus)', 'Universitas Multimedia Nusantara (UMN)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Dian Nuswantoro (Udinus)'],
  },
  keperawatan: {
    name: 'Ilmu Keperawatan',
    description_id: 'Mempelajari asuhan keperawatan pasien, mulai dari promosi kesehatan hingga rehabilitasi.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Padjadjaran (Unpad)', 'Universitas Hasanuddin (Unhas)'],
  },
  fisioterapi: {
    name: 'Fisioterapi',
    description_id: 'Mempelajari pemulihan dan peningkatan fungsi gerak tubuh pasien melalui terapi fisik.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Udayana', 'Universitas Esa Unggul', 'Universitas Gadjah Mada (UGM)', 'Poltekkes Kemenkes Surakarta'],
  },
  gizi: {
    name: 'Ilmu Gizi',
    description_id: 'Mempelajari hubungan antara makanan, nutrisi, dan kesehatan tubuh manusia.',
    universities: ['IPB University', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Diponegoro (Undip)'],
  },
  k3: {
    name: 'Kesehatan dan Keselamatan Kerja (K3)',
    description_id:
      'Mempelajari cara mengidentifikasi, mencegah, dan mengelola risiko kecelakaan serta penyakit akibat kerja.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Sebelas Maret (UNS)', 'Universitas Airlangga (Unair)', 'Universitas Diponegoro (Undip)', 'Universitas Binawan'],
  },
  'teknologi-laboratorium-medis': {
    name: 'Teknologi Laboratorium Medis',
    description_id: 'Mempelajari pemeriksaan sampel biologis (darah, jaringan, dll.) untuk mendukung diagnosis medis.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Airlangga (Unair)', 'Universitas Gadjah Mada (UGM)', 'Poltekkes Kemenkes Jakarta III', 'Universitas Muhammadiyah Semarang'],
  },
  'kedokteran-hewan': {
    name: 'Kedokteran Hewan',
    description_id: 'Mempelajari kesehatan, penyakit, dan perawatan medis pada hewan.',
    universities: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Udayana', 'Universitas Syiah Kuala'],
  },
  'teknik-sipil': {
    name: 'Teknik Sipil',
    description_id: 'Mempelajari perancangan, pembangunan, dan pemeliharaan infrastruktur seperti gedung, jalan, dan jembatan.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Universitas Diponegoro (Undip)'],
  },
  manajemen: {
    name: 'Manajemen',
    description_id: 'Mempelajari pengelolaan organisasi dan bisnis, mencakup pemasaran, sumber daya manusia, operasi, dan strategi.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Institut Teknologi Bandung (Sekolah Bisnis dan Manajemen ITB)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)'],
  },
  'teknik-industri': {
    name: 'Teknik Industri',
    description_id: 'Mempelajari optimasi sistem produksi, kualitas, dan proses bisnis secara efisien.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Telkom University'],
  },
  'teknik-elektro': {
    name: 'Teknik Elektro',
    description_id: 'Mempelajari sistem kelistrikan, elektronika, telekomunikasi, dan kendali.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Universitas Diponegoro (Undip)'],
  },
  informatika: {
    name: 'Ilmu Komputer/Informatika',
    description_id: 'Mempelajari perancangan perangkat lunak, algoritma, dan sistem komputer.',
    universities: ['Universitas Indonesia (UI)', 'Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'IPB University'],
  },
  'teknik-geodesi': {
    name: 'Teknik Geodesi/Geomatika',
    description_id: 'Mempelajari pengukuran, pemetaan, dan analisis data spasial permukaan bumi.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Diponegoro (Undip)', 'Universitas Pakuan'],
  },
  'pendidikan-guru': {
    name: 'Pendidikan (Keguruan)',
    description_id: 'Mempelajari ilmu pedagogi dan metode pengajaran untuk mendidik di berbagai jenjang.',
    universities: ['Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Yogyakarta (UNY)', 'Universitas Negeri Malang (UM)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Surabaya (Unesa)'],
  },
  'terapi-okupasi': {
    name: 'Terapi Okupasi',
    description_id: 'Mempelajari pemulihan kemampuan seseorang melakukan aktivitas sehari-hari melalui terapi fungsional.',
    universities: ['Universitas Indonesia (UI, Vokasi)', 'Poltekkes Kemenkes Surakarta', 'Poltekkes Kemenkes Jakarta III', 'Universitas Esa Unggul', 'Poltekkes Kemenkes Malang'],
  },
  'tata-kecantikan': {
    name: 'Tata Kecantikan/Tata Rias',
    description_id: 'Mempelajari perawatan kulit, rambut, dan tata rias profesional.',
    universities: ['Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Yogyakarta (UNY)', 'Universitas Negeri Malang (UM)', 'Universitas Negeri Semarang (Unnes)', 'Politeknik Kesehatan (Poltekkes) setempat'],
  },
  'pendidikan-seni': {
    name: 'Pendidikan Seni',
    description_id: 'Mempelajari cara mengajarkan seni rupa, musik, atau tari kepada siswa di sekolah.',
    universities: ['Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Yogyakarta (UNY)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Semarang (Unnes)', 'Universitas Negeri Malang (UM)'],
  },
  'seni-rupa-kriya': {
    name: 'Seni Rupa dan Kriya',
    description_id: 'Mempelajari penciptaan karya seni rupa dan kerajinan, baik untuk ekspresi maupun nilai komersial.',
    universities: ['ISI Yogyakarta', 'Institut Teknologi Bandung (FSRD ITB)', 'ISI Surakarta', 'ISI Denpasar', 'Institut Kesenian Jakarta (IKJ)'],
  },
  'agroteknologi-hortikultura': {
    name: 'Agroteknologi/Hortikultura',
    description_id: 'Mempelajari budidaya tanaman, termasuk tanaman hias dan bunga, secara ilmiah.',
    universities: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Brawijaya', 'Universitas Andalas'],
  },
  'ilmu-keolahragaan': {
    name: 'Ilmu Keolahragaan/Kepelatihan',
    description_id: 'Mempelajari ilmu olahraga, pelatihan fisik, dan pendidikan jasmani.',
    universities: ['Universitas Negeri Yogyakarta (UNY)', 'Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Surabaya (Unesa)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Sebelas Maret (UNS)'],
  },
  'desain-komunikasi-visual': {
    name: 'Desain Komunikasi Visual (DKV)',
    description_id: 'Mempelajari komunikasi melalui elemen visual seperti tipografi, ilustrasi, dan branding.',
    universities: ['Institut Teknologi Bandung (ITB)', 'ISI Yogyakarta', 'Universitas Multimedia Nusantara (UMN)', 'Universitas Trisakti', 'Universitas Bina Nusantara (Binus)'],
  },
  'tata-busana': {
    name: 'Tata Busana/Fashion Design',
    description_id: 'Mempelajari perancangan, pembuatan pola, dan produksi busana.',
    universities: ['ESMOD Jakarta', 'Universitas Pendidikan Indonesia (UPI)', 'LaSalle College Jakarta', 'Universitas Ciputra', 'Universitas Trisakti'],
  },
  'manajemen-event': {
    name: 'Manajemen Event/MICE',
    description_id: 'Mempelajari perencanaan dan pengelolaan acara, mulai dari konsep hingga eksekusi.',
    universities: ['Universitas Indonesia (UI, Vokasi)', 'Universitas Bina Nusantara (Binus)', 'Universitas Sahid', 'Politeknik Negeri Jakarta', 'Universitas Podomoro'],
  },
  'tata-boga': {
    name: 'Tata Boga/Ilmu Kuliner',
    description_id: 'Mempelajari seni dan ilmu memasak, pengolahan pangan, serta manajemen kuliner.',
    universities: ['Universitas Pendidikan Indonesia (UPI)', 'Sekolah Tinggi Pariwisata Trisakti', 'Universitas Ciputra', 'Universitas Bina Nusantara (Binus)', 'Politeknik Pariwisata NHI Bandung'],
  },
  'teknik-grafika-percetakan': {
    name: 'Teknik Grafika dan Penerbitan',
    description_id: 'Mempelajari proses produksi cetak, dari pracetak hingga finishing.',
    universities: ['Politeknik Negeri Media Kreatif (Polimedia) Jakarta', 'Politeknik Negeri Semarang (Polines)', 'Institut Teknologi Bandung (Vokasi)', 'Universitas Pancasila', 'Politeknik Negeri Jakarta'],
  },
  'teknik-otomotif': {
    name: 'Teknik Otomotif',
    description_id: 'Mempelajari perancangan, perawatan, dan perbaikan kendaraan bermotor.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Negeri Yogyakarta (UNY)', 'Politeknik Manufaktur Bandung', 'Universitas Negeri Malang (UM)', 'Politeknik Negeri Jakarta'],
  },
  pariwisata: {
    name: 'Perhotelan dan Pariwisata',
    description_id: 'Mempelajari pengelolaan industri perhotelan, restoran, dan destinasi wisata.',
    universities: ['Politeknik Pariwisata NHI Bandung', 'Universitas Udayana', 'Sekolah Tinggi Pariwisata Trisakti', 'Universitas Sahid', 'Politeknik Pariwisata Bali'],
  },
  'manajemen-informasi-kesehatan': {
    name: 'Manajemen Informasi Kesehatan/Rekam Medis',
    description_id: 'Mempelajari pengelolaan data dan administrasi rekam medis pasien.',
    universities: ['Universitas Indonesia (UI, Vokasi)', 'Universitas Esa Unggul', 'Universitas Dian Nuswantoro (Udinus)', 'Poltekkes Kemenkes Jakarta II', 'Universitas Jenderal Achmad Yani'],
  },
  farmasi: {
    name: 'Farmasi',
    description_id: 'Mempelajari pembuatan, formulasi, dan penggunaan obat-obatan secara aman dan efektif.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Indonesia (UI)', 'Universitas Padjadjaran (Unpad)'],
  },
  'administrasi-bisnis': {
    name: 'Administrasi Bisnis/Niaga',
    description_id: 'Mempelajari pengelolaan operasional dan administrasi organisasi bisnis.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Padjadjaran (Unpad)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Brawijaya'],
  },
  'ilmu-perpustakaan': {
    name: 'Ilmu Perpustakaan dan Kearsipan',
    description_id: 'Mempelajari pengelolaan, klasifikasi, dan pelestarian informasi serta arsip.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Diponegoro (Undip)', 'UIN Syarif Hidayatullah Jakarta'],
  },
  'manajemen-logistik': {
    name: 'Manajemen Logistik dan Rantai Pasok',
    description_id: 'Mempelajari perencanaan dan pengendalian arus barang, dari produksi hingga distribusi.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI, Vokasi)', 'Universitas Bina Nusantara (Binus)', 'Politeknik APP Jakarta', 'President University'],
  },
  psikologi: {
    name: 'Psikologi',
    description_id: 'Mempelajari perilaku dan proses mental manusia, termasuk penerapannya dalam konseling dan organisasi.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)', 'Universitas Diponegoro (Undip)'],
  },
  'bimbingan-konseling': {
    name: 'Bimbingan dan Konseling',
    description_id: 'Mempelajari cara membantu individu mengatasi masalah pribadi, sosial, dan akademik.',
    universities: ['Universitas Negeri Yogyakarta (UNY)', 'Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Surabaya (Unesa)', 'Universitas Negeri Semarang (Unnes)'],
  },
  jurnalistik: {
    name: 'Jurnalistik',
    description_id: 'Mempelajari peliputan, penulisan, dan penyampaian berita secara akurat dan etis.',
    universities: ['Universitas Padjadjaran (Unpad)', 'Universitas Indonesia (UI)', 'LSPR Institute of Communication & Business', 'Universitas Gadjah Mada (UGM)', 'Universitas Multimedia Nusantara (UMN)'],
  },
  'sejarah-arkeologi': {
    name: 'Ilmu Sejarah/Arkeologi',
    description_id: 'Mempelajari peristiwa masa lalu dan peninggalan budaya melalui sumber sejarah dan artefak.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)', 'Universitas Diponegoro (Undip)'],
  },
  'teknik-kimia': {
    name: 'Teknik Kimia',
    description_id: 'Mempelajari proses pengolahan bahan mentah menjadi produk melalui reaksi kimia dan fisika.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Universitas Diponegoro (Undip)'],
  },
  'sistem-informasi': {
    name: 'Sistem Informasi',
    description_id: 'Mempelajari perancangan sistem teknologi informasi untuk mendukung proses bisnis organisasi.',
    universities: ['Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Telkom University', 'Universitas Bina Nusantara (Binus)', 'Universitas Gadjah Mada (UGM)'],
  },
  'sastra-bahasa': {
    name: 'Sastra/Bahasa Indonesia',
    description_id: 'Mempelajari kajian bahasa, sastra, dan keterampilan menulis secara mendalam.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)', 'Universitas Sebelas Maret (UNS)'],
  },
  kedokteran: {
    name: 'Kedokteran',
    description_id: 'Mempelajari ilmu diagnosis, pengobatan, dan pencegahan penyakit pada manusia.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Padjadjaran (Unpad)', 'Universitas Diponegoro (Undip)'],
  },
  'kesehatan-masyarakat': {
    name: 'Kesehatan Masyarakat',
    description_id: 'Mempelajari pencegahan penyakit dan promosi kesehatan pada tingkat populasi.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Hasanuddin (Unhas)', 'Universitas Diponegoro (Undip)'],
  },
  'administrasi-publik': {
    name: 'Ilmu Administrasi Publik/Negara',
    description_id: 'Mempelajari perumusan dan implementasi kebijakan serta pengelolaan organisasi pemerintahan.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)', 'Universitas Brawijaya'],
  },
  statistika: {
    name: 'Statistika',
    description_id: 'Mempelajari pengumpulan, analisis, dan interpretasi data untuk pengambilan keputusan.',
    universities: ['IPB University', 'Institut Teknologi Sepuluh Nopember (ITS)', 'Universitas Gadjah Mada (UGM)', 'Universitas Indonesia (UI)', 'Universitas Padjadjaran (Unpad)'],
  },
  aktuaria: {
    name: 'Aktuaria',
    description_id:
      'Mempelajari penerapan matematika, statistika, dan analisis risiko keuangan, khususnya di industri asuransi dan dana pensiun.',
    universities: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'IPB University'],
  },
  akuntansi: {
    name: 'Akuntansi',
    description_id: 'Mempelajari pencatatan, pelaporan, dan analisis keuangan organisasi.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (Unpad)', 'Universitas Airlangga (Unair)', 'Universitas Diponegoro (Undip)'],
  },
  'ilmu-komunikasi': {
    name: 'Ilmu Komunikasi',
    description_id: 'Mempelajari proses komunikasi manusia, termasuk media, hubungan masyarakat, dan komunikasi bisnis.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Padjadjaran (Unpad)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (Unair)', 'Universitas Multimedia Nusantara (UMN)'],
  },
  'seni-teater-pertunjukan': {
    name: 'Seni Teater/Pertunjukan',
    description_id: 'Mempelajari seni akting, penyutradaraan, dan produksi pertunjukan panggung.',
    universities: ['ISI Yogyakarta', 'Institut Kesenian Jakarta (IKJ)', 'ISI Surakarta', 'ISI Denpasar', 'Universitas Negeri Jakarta (UNJ)'],
  },
  'seni-musik': {
    name: 'Seni Musik',
    description_id: 'Mempelajari teori musik, komposisi, dan keterampilan bermain atau mengajar musik.',
    universities: ['ISI Yogyakarta', 'Universitas Pelita Harapan (Konservatori Musik)', 'ISI Surakarta', 'Institut Kesenian Jakarta (IKJ)', 'Universitas Negeri Yogyakarta (UNY)'],
  },
  'kesejahteraan-sosial': {
    name: 'Ilmu Kesejahteraan Sosial',
    description_id: 'Mempelajari isu-isu sosial dan cara merancang program pemberdayaan masyarakat.',
    universities: ['Universitas Indonesia (UI)', 'Universitas Padjadjaran (Unpad)', 'Universitas Gadjah Mada (UGM)', 'Universitas Sumatera Utara (USU)', 'UIN Syarif Hidayatullah Jakarta'],
  },
};
