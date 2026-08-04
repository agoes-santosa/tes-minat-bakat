// Keyed by the alphabetically-sorted top-3 RIASEC letters (see
// getHollandCode().key in scoring.js), so lookup is independent of score
// ordering. All 20 unordered combinations of the 6 RIASEC types (C(6,3))
// are covered. `title` lists the three types in canonical RIASEC reading
// order for display, separate from the alphabetical lookup key.

export const hollandResultsLookup = {
  AIR: {
    title: 'Realistis - Investigatif - Artistik',
    description_id:
      'Anda menyukai pekerjaan yang menggabungkan keterampilan teknis, ketelitian analitis, dan sentuhan kreatif — suka membangun atau merancang sesuatu yang nyata sekaligus orisinal.',
    occupations: [
      'Arsitek',
      'Desainer Produk',
      'Insinyur Desain',
      'Fotografer Teknis',
      'Perancang Set Film',
      'Desainer Interior',
      'Animator 3D',
      'Teknisi Efek Visual',
    ],
  },
  IRS: {
    title: 'Realistis - Investigatif - Sosial',
    description_id:
      'Anda menikmati pekerjaan praktis dan berbasis sains yang juga melibatkan membantu orang lain secara langsung.',
    occupations: [
      'Perawat',
      'Fisioterapis',
      'Paramedis',
      'Ahli Gizi Lapangan',
      'Petugas Pemadam Kebakaran',
      'Teknisi Medis',
      'Instruktur Keselamatan Kerja',
      'Dokter Hewan',
    ],
  },
  EIR: {
    title: 'Realistis - Investigatif - Wirausaha',
    description_id:
      'Anda tertarik memecahkan masalah teknis sekaligus memiliki jiwa bisnis — cocok memimpin proyek berbasis teknologi atau produk.',
    occupations: [
      'Insinyur Sipil',
      'Manajer Proyek Konstruksi',
      'Pengusaha Bidang Teknologi',
      'Kontraktor',
      'Konsultan Teknik',
      'Manajer Operasional Pabrik',
      'Product Manager Hardware',
      'Pendiri Startup Teknologi',
    ],
  },
  CIR: {
    title: 'Realistis - Investigatif - Konvensional',
    description_id:
      'Anda menyukai pekerjaan teknis yang terstruktur, teliti, dan berbasis data — suka bekerja dengan sistem dan prosedur yang jelas.',
    occupations: [
      'Teknisi Laboratorium',
      'Analis Kendali Mutu (QC)',
      'Teknisi Jaringan Komputer',
      'Surveyor',
      'Juru Gambar Teknik (Drafter)',
      'Teknisi Kalibrasi',
      'Operator Sistem Produksi',
      'Auditor Teknis',
    ],
  },
  ARS: {
    title: 'Realistis - Artistik - Sosial',
    description_id:
      'Anda menikmati kegiatan tangan yang kreatif sekaligus senang berinteraksi dan membantu orang lain.',
    occupations: [
      'Guru Keterampilan/Prakarya',
      'Instruktur Tari atau Olahraga',
      'Terapis Okupasi',
      'Penata Rambut',
      'Guru Seni',
      'Pelatih Kerajinan Tangan',
      'Florist',
      'Instruktur Yoga',
    ],
  },
  AER: {
    title: 'Realistis - Artistik - Wirausaha',
    description_id:
      'Anda suka menciptakan produk atau karya nyata dan memiliki dorongan untuk memasarkan serta mengembangkan usaha darinya.',
    occupations: [
      'Pengusaha Kerajinan/Kriya',
      'Pemilik Studio Desain',
      'Kontraktor Interior',
      'Produser Film Independen',
      'Pengusaha Furnitur',
      'Desainer Fesyen & Pebisnis',
      'Event Organizer Kreatif',
      'Pengusaha Kuliner & Food Stylist',
    ],
  },
  ACR: {
    title: 'Realistis - Artistik - Konvensional',
    description_id:
      'Anda menikmati pekerjaan teknis yang membutuhkan ketelitian sekaligus cita rasa visual dan estetika.',
    occupations: [
      'Juru Gambar CAD',
      'Teknisi Percetakan',
      'Pembuat Pola Jahit',
      'Teknisi Editing Video',
      'Penjilid Buku',
      'Teknisi Pencetakan 3D',
      'Tata Letak Percetakan',
      'Restorator Barang Antik',
    ],
  },
  ERS: {
    title: 'Realistis - Sosial - Wirausaha',
    description_id:
      'Anda senang bekerja langsung di lapangan sambil memimpin tim dan berinteraksi dengan banyak orang.',
    occupations: [
      'Pemilik Bengkel/Usaha Jasa',
      'Manajer Lapangan/Operasional',
      'Pelatih sekaligus Pengelola Klub Olahraga',
      'Kontraktor Bangunan',
      'Pemandu Wisata Petualangan',
      'Instruktur Mengemudi',
      'Manajer Restoran',
      'Koordinator Lapangan Proyek',
    ],
  },
  CRS: {
    title: 'Realistis - Sosial - Konvensional',
    description_id:
      'Anda menyukai pekerjaan yang terstruktur dan praktis, sambil tetap berhubungan langsung dengan orang lain untuk membantu mereka.',
    occupations: [
      'Petugas Administrasi Rumah Sakit',
      'Asisten Apoteker',
      'Petugas Layanan Pelanggan Teknis',
      'Resepsionis Klinik',
      'Petugas Perpustakaan',
      'Teknisi Layanan Purna Jual',
      'Petugas Logistik Kemanusiaan',
      'Staf Tata Usaha Sekolah',
    ],
  },
  CER: {
    title: 'Realistis - Wirausaha - Konvensional',
    description_id:
      'Anda menikmati pekerjaan praktis yang terorganisir rapi, sekaligus senang mengelola dan menjalankan usaha.',
    occupations: [
      'Pemilik Toko/Ritel',
      'Manajer Gudang',
      'Pengusaha Ekspedisi/Logistik',
      'Manajer Produksi Pabrik',
      'Pemilik Bengkel dengan Sistem Manajemen',
      'Kontraktor Proyek',
      'Manajer Rantai Pasok',
      'Pengusaha Waralaba',
    ],
  },
  AIS: {
    title: 'Investigatif - Artistik - Sosial',
    description_id:
      'Anda suka meneliti dan memahami sesuatu secara mendalam, mengekspresikannya secara kreatif, dan berbagi dengan orang lain.',
    occupations: [
      'Psikolog',
      'Peneliti Pendidikan',
      'Konselor',
      'Dosen/Pengajar',
      'Penulis Sains Populer',
      'Terapis Seni',
      'Jurnalis Sains',
      'Kurator Museum',
    ],
  },
  AEI: {
    title: 'Investigatif - Artistik - Wirausaha',
    description_id:
      'Anda senang menganalisis dan menciptakan ide baru, serta memiliki dorongan untuk mewujudkannya menjadi usaha atau produk.',
    occupations: [
      'Peneliti & Pengembang Produk (R&D)',
      'Konsultan Inovasi',
      'Pendiri Startup Kreatif',
      'Perancang Permainan (Game Designer)',
      'Konsultan Branding',
      'Pengembang Aplikasi Kreatif',
      'Inventor/Penemu',
      'Produser Konten Digital',
    ],
  },
  ACI: {
    title: 'Investigatif - Artistik - Konvensional',
    description_id:
      'Anda menyukai riset yang mendalam dan sistematis, namun tetap ingin menuangkannya dengan cara yang rapi dan terstruktur.',
    occupations: [
      'Analis Data Riset',
      'Perancang Basis Data',
      'Ilustrator Teknis',
      'Kartografer',
      'Arsiparis',
      'Editor Naskah Ilmiah',
      'Analis Riset Pasar',
      'Pustakawan Digital',
    ],
  },
  EIS: {
    title: 'Investigatif - Sosial - Wirausaha',
    description_id:
      'Anda suka meneliti dan memecahkan masalah, sekaligus senang membantu orang dan memimpin inisiatif baru.',
    occupations: [
      'Dokter',
      'Konsultan Kesehatan Masyarakat',
      'Pendiri Lembaga Riset/Sosial',
      'Konsultan Manajemen',
      'Analis Kebijakan Publik',
      'Epidemiolog',
      'Konsultan Pendidikan',
      'Pengusaha di Bidang Kesehatan',
    ],
  },
  CIS: {
    title: 'Investigatif - Sosial - Konvensional',
    description_id:
      'Anda menyukai analisis data dan riset yang teliti, sambil tetap ingin membantu dan melayani orang lain.',
    occupations: [
      'Ahli Statistik Kesehatan',
      'Analis Data Sosial',
      'Perencana Program Pendidikan',
      'Petugas Rekam Medis',
      'Aktuaris',
      'Analis Kebijakan',
      'Peneliti Pasar',
      'Konselor Akademik',
    ],
  },
  CEI: {
    title: 'Investigatif - Wirausaha - Konvensional',
    description_id:
      'Anda suka menganalisis data secara sistematis dan menggunakannya untuk mengambil keputusan bisnis yang terukur.',
    occupations: [
      'Analis Keuangan',
      'Data Analyst/Data Scientist',
      'Konsultan Bisnis',
      'Auditor Internal',
      'Manajer Investasi',
      'Analis Riset Pasar',
      'Aktuaris Asuransi',
      'Perencana Keuangan',
    ],
  },
  AES: {
    title: 'Artistik - Sosial - Wirausaha',
    description_id:
      'Anda kreatif dan senang tampil, membantu orang lain, serta memiliki jiwa memimpin dan memasarkan ide.',
    occupations: [
      'Event Organizer',
      'Sutradara Pertunjukan',
      'Pengelola Sanggar Seni',
      'Public Relations',
      'Content Creator',
      'Manajer Talenta/Artis',
      'Pengajar Musik dengan Studio Sendiri',
      'Wedding Planner',
    ],
  },
  ACS: {
    title: 'Artistik - Sosial - Konvensional',
    description_id:
      'Anda menikmati kegiatan kreatif dan membantu orang lain, namun tetap suka bekerja dengan cara yang terorganisir.',
    occupations: [
      'Guru Seni Budaya',
      'Pustakawan Anak',
      'Terapis Musik',
      'Desainer Kurikulum',
      'Editor Buku Anak',
      'Koordinator Program Seni Sekolah',
      'Pengajar Les Privat Kreatif',
      'Petugas Arsip Budaya',
    ],
  },
  ACE: {
    title: 'Artistik - Wirausaha - Konvensional',
    description_id:
      'Anda kreatif dan berjiwa bisnis, sekaligus mampu mengelola detail dan administrasi usaha kreatif Anda dengan rapi.',
    occupations: [
      'Pemilik Bisnis Fesyen',
      'Desainer Grafis Lepas (Freelance)',
      'Pengelola Toko Online Produk Kreatif',
      'Perencana Acara (Event Organizer)',
      'Manajer Produksi Konten',
      'Pengusaha Percetakan/Merchandise',
      'Konsultan Branding',
      'Pemilik Studio Fotografi',
    ],
  },
  CES: {
    title: 'Sosial - Wirausaha - Konvensional',
    description_id:
      'Anda senang membantu dan bekerja sama dengan orang lain, memiliki jiwa memimpin, serta menyukai pekerjaan yang terorganisir rapi.',
    occupations: [
      'Manajer Sumber Daya Manusia (HR)',
      'Manajer Cabang Bank',
      'Konsultan Pendidikan/Bimbingan Belajar',
      'Manajer Kantor',
      'Perencana Acara Korporat',
      'Pengelola Lembaga Pelatihan',
      'Manajer Layanan Pelanggan',
      'Koordinator Program CSR',
    ],
  },
};
