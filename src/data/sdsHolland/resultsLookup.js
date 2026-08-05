// Keyed by the alphabetically-sorted top-3 RIASEC letters (see
// getHollandCode().key in scoring.js), so lookup is independent of score
// ordering. All 20 unordered combinations of the 6 RIASEC types (C(6,3))
// are covered. `title` lists the three types in canonical RIASEC reading
// order for display, separate from the alphabetical lookup key.

export const hollandResultsLookup = {
  AIR: {
    title: 'Realistis - Investigatif - Artistik',
    description_id:
      'Anda memiliki kombinasi unik antara ketertarikan pada hal-hal praktis, rasa ingin tahu intelektual, dan kepekaan estetika. Anda cenderung senang bereksperimen dan memahami cara kerja sesuatu secara mendalam, namun tidak puas hanya dengan penjelasan teoretis — Anda ingin mewujudkannya menjadi sesuatu yang nyata dan indah dipandang. Anda menghargai orisinalitas namun tetap berpijak pada logika dan fungsi, sehingga sering menjadi orang yang bisa menjembatani ide kreatif dengan solusi teknis yang benar-benar bisa dibangun.',
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
      'Anda adalah tipe pemecah masalah yang senang bekerja dengan tangan sekaligus pikiran, namun motivasi terbesar Anda datang dari keinginan membantu orang lain secara langsung. Anda menikmati proses memahami cara kerja tubuh, alat, atau sistem secara mendalam, lalu menerapkan pengetahuan itu untuk meringankan beban atau menyelamatkan orang lain. Anda cenderung tenang di bawah tekanan, teliti dalam bertindak, dan lebih memilih dampak nyata dibanding sekadar teori.',
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
      'Anda memadukan ketertarikan pada hal teknis dengan naluri bisnis dan kepemimpinan yang kuat. Anda senang memahami akar masalah secara mendalam sebelum bertindak, namun begitu Anda memiliki solusi, Anda terdorong untuk mewujudkannya menjadi sesuatu yang berdampak besar — baik dalam bentuk proyek, produk, maupun usaha sendiri. Anda nyaman mengambil risiko yang telah diperhitungkan dan senang memimpin orang lain menuju hasil yang konkret.',
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
      'Anda adalah pribadi yang teliti, sistematis, dan menyukai pekerjaan yang melibatkan analisis mendalam sekaligus penerapan praktis. Anda merasa nyaman bekerja dengan data, prosedur, dan standar yang jelas, serta senang memastikan segala sesuatu berjalan akurat dan sesuai aturan. Kombinasi ini membuat Anda unggul dalam pekerjaan yang membutuhkan ketepatan teknis dan konsistensi tinggi, tanpa banyak ambiguitas.',
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
      'Anda senang bekerja menggunakan tangan dan kreativitas sekaligus terhubung dengan orang lain secara personal. Anda tidak hanya ingin menciptakan sesuatu yang indah atau bermanfaat, tetapi juga ingin berbagi keterampilan itu dan melihat orang lain berkembang karenanya. Anda cenderung hangat, ekspresif, dan lebih menyukai aktivitas langsung dan interaktif dibanding duduk di belakang meja.',
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
      'Anda memiliki jiwa pencipta sekaligus pengusaha — senang membuat sesuatu yang nyata dan orisinal, lalu terdorong untuk membawanya ke pasar yang lebih luas. Anda menikmati proses kreatif dari awal hingga akhir, termasuk bagian membangun dan menjual hasil karya Anda sendiri. Anda cenderung mandiri, percaya diri dengan visi Anda, dan tidak takut mengambil risiko demi mewujudkan ide menjadi usaha nyata.',
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
      'Anda memadukan ketelitian teknis dengan kepekaan visual — senang mengerjakan sesuatu yang membutuhkan presisi tinggi namun tetap memperhatikan detail estetika. Anda nyaman mengikuti standar dan prosedur kerja yang jelas, namun tetap ingin hasil akhirnya terlihat rapi dan menarik secara visual. Anda cocok dengan pekerjaan yang menuntut kesabaran, keterampilan tangan, dan mata yang jeli.',
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
      'Anda adalah pribadi yang aktif secara fisik, senang berada di lapangan, dan sekaligus punya kemampuan memimpin serta membangun relasi dengan banyak orang. Anda menikmati pekerjaan yang menggabungkan aksi nyata dengan interaksi sosial, dan sering menjadi sosok yang menggerakkan tim untuk mencapai tujuan bersama. Anda cenderung praktis dalam pengambilan keputusan namun tetap peduli pada orang-orang di sekitar Anda.',
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
      'Anda menyukai pekerjaan yang terstruktur dan dapat diprediksi, namun tetap ingin merasa berguna bagi orang lain dalam prosesnya. Anda teliti, dapat diandalkan, dan senang menjalankan tugas dengan cara yang efisien dan sesuai prosedur, sambil tetap memberikan pelayanan yang ramah dan membantu. Anda cocok dalam peran yang membutuhkan kombinasi keterampilan praktis, ketertiban administratif, dan kepedulian terhadap sesama.',
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
      'Anda memiliki kombinasi antara keterampilan praktis, jiwa bisnis, dan kecenderungan untuk bekerja secara terorganisir. Anda senang mengelola sesuatu yang nyata — baik itu operasional, produk, atau usaha — dengan sistem dan perencanaan yang rapi. Anda cenderung pragmatis, berorientasi hasil, dan nyaman mengambil tanggung jawab dalam mengelola sumber daya secara efisien.',
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
      'Anda memiliki rasa ingin tahu intelektual yang kuat, kepekaan kreatif, dan kepedulian mendalam terhadap orang lain. Anda senang menggali pemahaman tentang manusia dan dunia di sekitar Anda, lalu mengekspresikan atau membagikan pemahaman itu dengan cara yang bermakna bagi orang lain. Anda cenderung reflektif, empatik, dan tertarik pada makna di balik sesuatu, bukan sekadar fakta permukaan.',
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
      'Anda adalah pemikir kreatif yang senang menganalisis masalah dari berbagai sudut sebelum menciptakan solusi orisinal. Anda tidak puas hanya menghasilkan ide — Anda terdorong untuk mewujudkannya menjadi sesuatu yang nyata dan bernilai, bahkan menjadikannya usaha atau inovasi baru. Anda cenderung visioner, mandiri dalam berpikir, dan senang tantangan intelektual yang membuka peluang baru.',
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
      'Anda menyukai riset dan analisis mendalam, namun juga memiliki sisi kreatif yang ingin menuangkan hasil pemikiran itu dengan cara yang rapi dan terstruktur. Anda teliti dalam bekerja dengan informasi dan detail, sekaligus menghargai bentuk penyajian yang jelas dan estetis. Kombinasi ini membuat Anda cocok dengan pekerjaan yang membutuhkan ketelitian intelektual sekaligus kerapian dalam menyampaikan hasilnya.',
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
      'Anda memadukan rasa ingin tahu intelektual dengan kepedulian terhadap orang lain dan dorongan untuk memimpin perubahan. Anda senang memahami akar suatu masalah secara mendalam, terutama yang berdampak pada kehidupan orang banyak, lalu mengambil inisiatif untuk menyelesaikannya. Anda cenderung persuasif, berorientasi solusi, dan nyaman berperan sebagai penggerak dalam isu-isu yang Anda pedulikan.',
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
      'Anda adalah pribadi yang teliti dan analitis, namun motivasi Anda datang dari keinginan untuk membantu dan melayani orang lain melalui data dan sistem yang rapi. Anda menikmati pekerjaan yang membutuhkan ketepatan dan konsistensi, sekaligus memberi manfaat nyata bagi orang-orang yang bergantung pada layanan tersebut. Anda cenderung dapat diandalkan, sabar, dan berorientasi pada detail yang akurat.',
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
      'Anda menyukai analisis data yang mendalam dan sistematis, namun juga memiliki naluri bisnis untuk mengubah temuan itu menjadi keputusan strategis. Anda nyaman bekerja dengan angka, tren, dan pola, serta senang ketika hasil analisis Anda benar-benar dipakai untuk mengambil langkah nyata. Anda cenderung rasional, terorganisir, dan berorientasi pada hasil yang terukur.',
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
      'Anda adalah pribadi yang ekspresif, senang tampil atau berkarya, sekaligus punya kemampuan alami dalam membangun hubungan dan memengaruhi orang lain. Anda menikmati momen berbagi ide atau karya kreatif Anda ke publik, dan sering menjadi sosok yang menginspirasi atau memimpin dalam lingkungan kreatif. Anda cenderung percaya diri, hangat, dan senang berada di pusat perhatian secara positif.',
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
      'Anda memiliki sisi kreatif yang ingin diekspresikan, sekaligus kepedulian untuk membantu dan mendidik orang lain, namun tetap menghargai keteraturan dalam bekerja. Anda menikmati kegiatan seni atau kreatif yang dilakukan dengan cara yang terorganisir dan bermanfaat bagi orang lain, seperti mengajar atau membimbing. Anda cenderung sabar, terstruktur, namun tetap punya sisi imajinatif yang kuat.',
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
      'Anda memadukan kreativitas dengan naluri bisnis dan kemampuan mengelola detail secara rapi. Anda senang menciptakan sesuatu yang orisinal, namun juga menikmati proses mengelola dan menjual karya tersebut secara profesional dan terorganisir. Anda cenderung mandiri, teliti dalam hal administratif, dan mampu menyeimbangkan sisi artistik dengan tuntutan praktis dalam berbisnis.',
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
      'Anda adalah pribadi yang senang membantu dan bekerja sama dengan orang lain, sekaligus memiliki jiwa memimpin dan kemampuan mengelola secara terorganisir. Anda menikmati peran yang melibatkan interaksi manusia dalam konteks yang terstruktur, seperti mengelola tim atau program, dan merasa puas ketika bisa memberikan dampak positif melalui sistem yang rapi. Anda cenderung dapat dipercaya, komunikatif, dan berorientasi pada hasil yang bermanfaat bagi banyak orang.',
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
