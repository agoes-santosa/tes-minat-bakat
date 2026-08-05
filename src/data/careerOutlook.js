// Per-occupation career outlook: how promising the role looks going
// forward given automation/AI exposure and Indonesian market/macro
// trends, plus a practical tip for staying relevant. Keyed by the exact
// occupation strings used in occupationFieldMap.js.
//
// tier: 'cerah' (bright/growing), 'stabil' (steady, evolving),
// 'waspada' (significant automation/macro exposure - needs deliberate
// upskilling), 'menurun' (structural decline expected).
// This is directional judgment based on general labor-market and
// automation-exposure patterns, not a formal economic forecast.

export const OUTLOOK_TIERS = {
  cerah: { label: 'Cerah', order: 0 },
  stabil: { label: 'Stabil', order: 1 },
  waspada: { label: 'Perlu Adaptasi', order: 2 },
  menurun: { label: 'Berisiko Menurun', order: 3 },
};

export const careerOutlook = {
  Arsitek: {
    tier: 'cerah',
    summary:
      'Permintaan tetap tinggi seiring pertumbuhan properti dan infrastruktur di Indonesia (termasuk IKN); AI mempercepat proses desain (BIM, generative design) tapi belum menggantikan keputusan estetika dan regulasi yang membutuhkan penilaian manusia.',
    tip: 'Kuasai software BIM/AI-assisted design dan spesialisasi di desain berkelanjutan (green building) untuk tetap kompetitif.',
  },
  'Desainer Produk': {
    tier: 'stabil',
    summary:
      'Kebutuhan produk baru terus ada seiring pertumbuhan manufaktur dan e-commerce, tapi AI generative design mempercepat tahap ideasi sehingga peran bergeser ke riset pengguna dan pengambilan keputusan desain.',
    tip: 'Perdalam riset pengguna (UX research) dan validasi produk agar tidak sekadar menjadi operator alat desain.',
  },
  'Insinyur Desain': {
    tier: 'stabil',
    summary:
      'Sama seperti desain produk, kebutuhan tetap ada namun AI generative design mempercepat tahap draf awal sehingga nilai tambah bergeser ke analisis kelayakan dan pengambilan keputusan teknis.',
    tip: 'Kuasai simulasi dan analisis rekayasa berbasis AI agar bisa memvalidasi desain lebih cepat, bukan hanya menggambarnya.',
  },
  'Fotografer Teknis': {
    tier: 'waspada',
    summary:
      'Fotografi produk dasar makin terjangkau lewat smartphone dan AI image generation, meski permintaan konten visual untuk e-commerce terus tumbuh.',
    tip: 'Fokus pada niche teknis (produk industri, arsitektur, still-life kompleks) yang sulit ditiru AI generatif.',
  },
  'Perancang Set Film': {
    tier: 'stabil',
    summary: 'Industri konten streaming dan produksi lokal terus tumbuh, meski anggaran produksi menengah makin ketat.',
    tip: 'Bangun portofolio lintas media (iklan, film, konten digital) agar tidak bergantung pada satu jenis produksi.',
  },
  'Desainer Interior': {
    tier: 'cerah',
    summary:
      'Pertumbuhan sektor properti, perhotelan, dan renovasi rumah menjaga permintaan tetap tinggi; AI membantu visualisasi tapi keputusan estetika dan kebutuhan klien tetap perlu sentuhan manusia.',
    tip: 'Kuasai tools visualisasi 3D/AI dan bangun jaringan dengan kontraktor serta pengembang properti.',
  },
  'Animator 3D': {
    tier: 'cerah',
    summary:
      'Industri animasi dan gim Indonesia berkembang pesat termasuk untuk pasar ekspor; AI mempercepat produksi namun justru meningkatkan permintaan output kreatif, bukan menggantikannya.',
    tip: 'Kuasai pipeline produksi berbasis AI (motion capture, generative assets) agar bisa berkarya lebih cepat dan bersaing secara global.',
  },
  'Teknisi Efek Visual': {
    tier: 'waspada',
    summary:
      'Tugas VFX rutin seperti rotoscoping dan compositing dasar makin terotomasi oleh AI, meski permintaan konten visual berkualitas tinggi terus tumbuh.',
    tip: 'Naik level ke supervisi VFX atau spesialisasi efek kompleks (simulasi, look development) yang lebih sulit diotomasi.',
  },

  Perawat: {
    tier: 'cerah',
    summary:
      'Kebutuhan tenaga keperawatan terus meningkat seiring pertumbuhan populasi lansia dan perluasan akses kesehatan (termasuk peluang kerja di luar negeri); pekerjaan berbasis empati dan perawatan langsung sulit digantikan otomasi.',
    tip: 'Ambil sertifikasi spesialisasi (ICU, gawat darurat) dan kemampuan bahasa asing untuk membuka peluang kerja internasional.',
  },
  Fisioterapis: {
    tier: 'cerah',
    summary:
      'Meningkatnya kesadaran kesehatan dan populasi lansia mendorong permintaan terapi fisik terus naik; penilaian dan sentuhan manual pasien sulit diotomasi.',
    tip: 'Perdalam spesialisasi (olahraga, geriatri, pediatri) untuk membedakan diri di pasar yang makin ramai.',
  },
  Paramedis: {
    tier: 'stabil',
    summary:
      'Permintaan tenaga gawat darurat tetap stabil seiring perluasan layanan kesehatan darurat, meski kondisi kerja menuntut secara fisik dan mental.',
    tip: 'Ambil sertifikasi kegawatdaruratan lanjutan untuk membuka peluang di rumah sakit swasta atau layanan ambulans premium.',
  },
  'Ahli Gizi Lapangan': {
    tier: 'cerah',
    summary:
      'Perhatian pada gizi masyarakat, stunting, dan gaya hidup sehat terus meningkat, didorong program pemerintah dan kesadaran individu.',
    tip: 'Bangun keahlian komunikasi publik dan konten edukasi gizi untuk menjangkau audiens lebih luas secara digital.',
  },
  'Petugas Pemadam Kebakaran': {
    tier: 'stabil',
    summary: 'Kebutuhan tenaga darurat tetap konstan seiring urbanisasi, namun anggaran dan jumlah formasi terbatas.',
    tip: 'Ikuti pelatihan penyelamatan khusus (industri, kimia) untuk membuka peluang di sektor swasta bergaji lebih tinggi.',
  },
  'Teknisi Medis': {
    tier: 'stabil',
    summary:
      'Permintaan tenaga teknis kesehatan tumbuh seiring perluasan fasilitas kesehatan, meski beberapa pemeriksaan laboratorium dasar makin terotomasi oleh mesin analisa.',
    tip: 'Kuasai pengoperasian alat diagnostik generasi terbaru agar tetap relevan seiring modernisasi laboratorium.',
  },
  'Instruktur Keselamatan Kerja': {
    tier: 'cerah',
    summary: 'Regulasi K3 yang makin ketat di sektor industri dan konstruksi mendorong permintaan tenaga ahli keselamatan kerja terus meningkat.',
    tip: 'Ambil sertifikasi K3 nasional/internasional (AK3U, NEBOSH) untuk membuka peluang di perusahaan multinasional.',
  },
  'Dokter Hewan': {
    tier: 'cerah',
    summary: 'Pertumbuhan populasi hewan peliharaan dan industri peternakan menjaga permintaan tetap tinggi; pekerjaan klinis sulit diotomasi.',
    tip: 'Pertimbangkan spesialisasi (hewan eksotis, peternakan skala besar) untuk memperluas peluang praktik.',
  },

  'Insinyur Sipil': {
    tier: 'cerah',
    summary: 'Pembangunan infrastruktur besar-besaran (IKN, jalan tol, perumahan) menjaga permintaan tetap tinggi dalam jangka panjang.',
    tip: 'Kuasai software BIM dan manajemen proyek digital untuk bersaing di proyek skala besar.',
  },
  'Manajer Proyek Konstruksi': {
    tier: 'cerah',
    summary: 'Sejalan dengan pertumbuhan proyek infrastruktur nasional, kebutuhan manajer proyek berpengalaman terus meningkat.',
    tip: 'Ambil sertifikasi manajemen proyek (PMP) dan pahami teknologi konstruksi digital untuk memimpin proyek yang makin kompleks.',
  },
  'Pengusaha Bidang Teknologi': {
    tier: 'cerah',
    summary:
      'Ekosistem startup dan digitalisasi ekonomi Indonesia terus berkembang, meski persaingan pendanaan makin ketat pascakoreksi pasar modal ventura.',
    tip: 'Fokus pada model bisnis dengan jalur profitabilitas jelas, bukan sekadar pertumbuhan pengguna, mengikuti tren investor pascakoreksi.',
  },
  Kontraktor: {
    tier: 'cerah',
    summary: 'Sejalan dengan pertumbuhan sektor konstruksi nasional, permintaan jasa kontraktor tetap tinggi dalam jangka panjang.',
    tip: 'Bangun reputasi lewat portofolio proyek yang terdokumentasi baik untuk memenangkan tender lebih besar.',
  },
  'Konsultan Teknik': {
    tier: 'stabil',
    summary:
      'Permintaan konsultasi teknik tetap ada seiring proyek infrastruktur, meski persaingan harga dari alat analisis otomatis makin terasa untuk pekerjaan rutin.',
    tip: 'Spesialisasi pada proyek kompleks/bernilai tinggi yang membutuhkan penilaian teknis mendalam, bukan hanya perhitungan standar.',
  },
  'Manajer Operasional Pabrik': {
    tier: 'stabil',
    summary: 'Otomasi dan Industri 4.0 mengubah kebutuhan tenaga kerja pabrik, tapi peran koordinasi dan pengambilan keputusan manajerial tetap dibutuhkan.',
    tip: 'Pelajari sistem manufaktur berbasis data (MES, IoT) agar mampu mengelola pabrik yang makin otomatis.',
  },
  'Product Manager Hardware': {
    tier: 'stabil',
    summary: 'Permintaan produk hardware lokal (elektronik, IoT) tumbuh, meski bersaing dengan produk impor yang lebih murah.',
    tip: 'Bangun pemahaman rantai pasok global dan negosiasi manufaktur untuk bersaing dengan produk impor.',
  },
  'Pendiri Startup Teknologi': {
    tier: 'cerah',
    summary: 'Ekonomi digital Indonesia diproyeksikan terus tumbuh meski pendanaan startup lebih selektif pascakoreksi pasar 2022-2023.',
    tip: 'Prioritaskan efisiensi modal dan validasi pasar sejak awal, bukan pertumbuhan cepat tanpa profitabilitas.',
  },

  'Teknisi Laboratorium': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan riset dan industri, meski pemeriksaan rutin makin terotomasi oleh mesin analisa modern.',
    tip: 'Kuasai instrumen laboratorium otomatis terbaru agar tidak tergantikan oleh mesin yang dioperasikan tenaga lebih murah.',
  },
  'Analis Kendali Mutu (QC)': {
    tier: 'waspada',
    summary: 'Banyak proses QC rutin mulai digantikan sensor dan inspeksi otomatis berbasis AI visi komputer di pabrik modern.',
    tip: 'Kembangkan kemampuan analisis statistik proses (SPC) dan audit sistem mutu agar naik ke peran yang lebih strategis.',
  },
  'Teknisi Jaringan Komputer': {
    tier: 'stabil',
    summary: 'Kebutuhan infrastruktur jaringan terus ada seiring digitalisasi, meski konfigurasi dasar makin otomatis lewat cloud management tools.',
    tip: 'Pelajari keamanan siber dan cloud networking untuk naik level dari sekadar instalasi/perawatan dasar.',
  },
  Surveyor: {
    tier: 'stabil',
    summary: 'Permintaan tetap ada untuk proyek infrastruktur, meski drone dan pemetaan otomatis mengubah cara kerja survei konvensional.',
    tip: 'Kuasai teknologi survei berbasis drone dan LiDAR agar tetap kompetitif dibanding metode manual.',
  },
  'Juru Gambar Teknik (Drafter)': {
    tier: 'waspada',
    summary: 'Pekerjaan menggambar teknis dasar makin tergantikan software CAD otomatis dan AI generative design.',
    tip: 'Naik level ke desain teknik yang membutuhkan analisis dan pengambilan keputusan, bukan hanya menggambar ulang spesifikasi.',
  },
  'Teknisi Kalibrasi': {
    tier: 'stabil',
    summary: 'Kebutuhan kalibrasi alat tetap ada di industri manufaktur dan kesehatan yang diatur ketat, meski beberapa proses makin otomatis.',
    tip: 'Ambil sertifikasi kalibrasi sesuai standar internasional (ISO 17025) untuk membuka peluang di industri yang diatur ketat.',
  },
  'Operator Sistem Produksi': {
    tier: 'waspada',
    summary: 'Otomasi dan robotika pabrik terus menggantikan operator produksi rutin, terutama di industri manufaktur skala besar.',
    tip: 'Pelajari pengoperasian dan pemeliharaan sistem otomasi (PLC, robotika) agar bergeser dari operator manual ke pengawas sistem.',
  },
  'Auditor Teknis': {
    tier: 'stabil',
    summary: 'Permintaan audit kepatuhan teknis tetap ada seiring regulasi yang makin ketat, meski sebagian pemeriksaan rutin terbantu AI.',
    tip: 'Kembangkan keahlian audit berbasis data dan analitik agar lebih efisien dan bernilai tambah tinggi.',
  },

  'Guru Keterampilan/Prakarya': {
    tier: 'stabil',
    summary: 'Kurikulum pendidikan tetap membutuhkan pengajaran keterampilan praktis, meski jumlah formasi guru terbatas.',
    tip: 'Kembangkan konten pembelajaran digital/hybrid untuk menjangkau lebih banyak siswa di luar kelas fisik.',
  },
  'Instruktur Tari atau Olahraga': {
    tier: 'stabil',
    summary: 'Kesadaran gaya hidup sehat dan seni budaya terus mendorong permintaan, meski persaingan dari konten online (kelas virtual) makin ketat.',
    tip: 'Bangun kehadiran online (kelas virtual berbayar) sebagai pelengkap pengajaran tatap muka.',
  },
  'Terapis Okupasi': {
    tier: 'cerah',
    summary: 'Meningkatnya kesadaran akan disabilitas dan kebutuhan rehabilitasi mendorong permintaan terus tumbuh; interaksi personal sulit diotomasi.',
    tip: 'Perdalam spesialisasi (anak berkebutuhan khusus, geriatri) untuk membedakan diri di bidang yang masih jarang tenaga ahlinya di Indonesia.',
  },
  'Penata Rambut': {
    tier: 'stabil',
    summary: 'Industri kecantikan terus tumbuh seiring daya beli kelas menengah, meski persaingan dari salon skala besar dan tren DIY makin ketat.',
    tip: 'Bangun personal branding di media sosial untuk menarik pelanggan tetap dan naik kelas ke layanan premium.',
  },
  'Guru Seni': {
    tier: 'stabil',
    summary: 'Permintaan pengajaran seni tetap ada di sekolah dan lembaga kursus, meski formasi guru tetap terbatas.',
    tip: 'Kombinasikan pengajaran dengan praktik berkarya untuk membangun portofolio dan penghasilan tambahan.',
  },
  'Pelatih Kerajinan Tangan': {
    tier: 'stabil',
    summary: 'Tren produk buatan tangan (handmade) dan ekonomi kreatif lokal terus tumbuh, mendukung permintaan pelatihan.',
    tip: 'Manfaatkan platform e-commerce dan media sosial untuk memasarkan hasil pelatihan dan membangun komunitas.',
  },
  Florist: {
    tier: 'stabil',
    summary: 'Permintaan tetap ada untuk acara (pernikahan, korporat) meski dipengaruhi musim dan tren dekorasi.',
    tip: 'Kembangkan layanan dekorasi event untuk pendapatan yang lebih stabil dibanding penjualan bunga eceran saja.',
  },
  'Instruktur Yoga': {
    tier: 'cerah',
    summary: 'Kesadaran kesehatan mental dan gaya hidup wellness terus tumbuh, mendorong permintaan kelas yoga baik offline maupun online.',
    tip: 'Bangun kelas online berbayar untuk memperluas jangkauan di luar studio fisik.',
  },

  'Pengusaha Kerajinan/Kriya': {
    tier: 'stabil',
    summary: 'Ekonomi kreatif dan tren produk lokal/sustainable mendukung permintaan, meski bersaing dengan produk impor murah.',
    tip: 'Manfaatkan ekspor lewat platform e-commerce global untuk menembus pasar yang lebih besar.',
  },
  'Pemilik Studio Desain': {
    tier: 'stabil',
    summary: 'Permintaan jasa desain tetap ada, meski AI generative design menekan harga untuk pekerjaan desain dasar.',
    tip: 'Posisikan studio pada proyek strategis (branding, riset) yang membutuhkan pemikiran, bukan sekadar eksekusi visual.',
  },
  'Kontraktor Interior': {
    tier: 'cerah',
    summary: 'Sejalan dengan pertumbuhan sektor properti dan renovasi, permintaan jasa kontraktor interior tetap tinggi.',
    tip: 'Bangun jaringan dengan desainer interior dan pengembang properti untuk aliran proyek yang stabil.',
  },
  'Produser Film Independen': {
    tier: 'stabil',
    summary: 'Platform streaming membuka lebih banyak peluang distribusi konten lokal, meski pendanaan produksi independen tetap menantang.',
    tip: 'Manfaatkan platform streaming lokal dan global untuk distribusi tanpa bergantung pada bioskop konvensional.',
  },
  'Pengusaha Furnitur': {
    tier: 'stabil',
    summary: 'Pertumbuhan sektor properti mendukung permintaan furnitur, meski persaingan dari produk impor dan e-commerce makin ketat.',
    tip: 'Bangun kanal penjualan online dan ekspor untuk memperluas pasar di luar toko fisik.',
  },
  'Desainer Fesyen & Pebisnis': {
    tier: 'stabil',
    summary: 'Industri fesyen lokal terus tumbuh didukung tren bangga buatan Indonesia, meski bersaing dengan fast fashion impor.',
    tip: 'Bangun brand dengan cerita dan nilai keberlanjutan untuk bersaing dengan fast fashion berbiaya rendah.',
  },
  'Event Organizer Kreatif': {
    tier: 'cerah',
    summary: 'Ekonomi pengalaman (experience economy) terus tumbuh, mendorong permintaan event kreatif baik korporat maupun personal.',
    tip: 'Kuasai event hybrid (offline-online) yang makin diminati sejak pandemi untuk menjangkau audiens lebih luas.',
  },
  'Pengusaha Kuliner & Food Stylist': {
    tier: 'cerah',
    summary: 'Industri kuliner dan konten makanan di media sosial terus tumbuh seiring budaya food photography dan delivery online.',
    tip: 'Bangun kehadiran di media sosial dan platform delivery untuk memperluas jangkauan pasar.',
  },

  'Juru Gambar CAD': {
    tier: 'waspada',
    summary: 'Pekerjaan menggambar CAD dasar makin tergantikan software otomatis dan template desain siap pakai.',
    tip: 'Naik level ke desain dan analisis teknik yang membutuhkan pengambilan keputusan, bukan hanya menggambar ulang spesifikasi.',
  },
  'Teknisi Percetakan': {
    tier: 'menurun',
    summary: 'Industri percetakan konvensional terus menyusut seiring pergeseran ke media digital, meski percetakan khusus (kemasan, personalisasi) masih bertahan.',
    tip: 'Pindah ke percetakan digital/kemasan khusus yang masih tumbuh, alih-alih percetakan massal konvensional yang menyusut.',
  },
  'Pembuat Pola Jahit': {
    tier: 'stabil',
    summary: 'Industri fesyen lokal dan custom-made tetap membutuhkan keahlian pola manual, meski produksi massal makin otomatis.',
    tip: 'Spesialisasi pada busana custom/couture yang membutuhkan keahlian tangan, bukan produksi massal yang makin otomatis.',
  },
  'Teknisi Editing Video': {
    tier: 'waspada',
    summary: 'Permintaan konten video terus tumbuh, tapi AI editing tools (auto-cut, auto-caption) mengambil alih pekerjaan editing dasar.',
    tip: 'Kuasai storytelling dan color grading tingkat lanjut yang membutuhkan cita rasa, bukan hanya teknis pemotongan.',
  },
  'Penjilid Buku': {
    tier: 'menurun',
    summary: 'Permintaan buku fisik terus tergerus oleh buku digital dan audiobook, meski segmen buku premium/koleksi masih bertahan.',
    tip: 'Pertimbangkan spesialisasi penjilidan premium/artisanal untuk segmen kolektor yang masih bernilai tinggi.',
  },
  'Teknisi Pencetakan 3D': {
    tier: 'cerah',
    summary: 'Adopsi pencetakan 3D untuk prototyping dan manufaktur custom terus tumbuh di berbagai industri.',
    tip: 'Perluas keahlian ke material dan aplikasi industri (medis, otomotif) yang bernilai lebih tinggi dari sekadar prototipe.',
  },
  'Tata Letak Percetakan': {
    tier: 'menurun',
    summary: 'Kebutuhan tata letak cetak menyusut seiring pergeseran ke media digital, dan tugas dasar makin terotomasi software.',
    tip: 'Alihkan keahlian ke tata letak digital (web, aplikasi) yang permintaannya terus tumbuh.',
  },
  'Restorator Barang Antik': {
    tier: 'stabil',
    summary: 'Permintaan niche namun stabil dari kolektor dan lembaga budaya, dengan persaingan terbatas karena keahlian langka.',
    tip: 'Bangun reputasi lewat spesialisasi jenis barang tertentu (keramik, tekstil) untuk menjadi rujukan di bidang yang jarang ahlinya.',
  },

  'Pemilik Bengkel/Usaha Jasa': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan jumlah kendaraan, meski transisi ke kendaraan listrik mengubah kebutuhan keahlian jangka panjang.',
    tip: 'Mulai pelajari servis kendaraan listrik (EV) untuk mengantisipasi transisi dari kendaraan berbahan bakar fosil.',
  },
  'Manajer Lapangan/Operasional': {
    tier: 'stabil',
    summary: 'Peran koordinasi lapangan tetap dibutuhkan meski alat pemantauan digital makin banyak digunakan.',
    tip: 'Kuasai tools manajemen proyek digital untuk memantau operasional lebih efisien.',
  },
  'Pelatih sekaligus Pengelola Klub Olahraga': {
    tier: 'cerah',
    summary: 'Kesadaran gaya hidup aktif terus tumbuh, mendukung permintaan pelatih dan pengelola fasilitas olahraga.',
    tip: 'Kembangkan program keanggotaan digital dan kelas online untuk pendapatan tambahan di luar sesi tatap muka.',
  },
  'Kontraktor Bangunan': {
    tier: 'cerah',
    summary: 'Sejalan dengan pertumbuhan sektor konstruksi dan properti nasional, permintaan jasa kontraktor tetap tinggi.',
    tip: 'Bangun reputasi lewat portofolio proyek yang terdokumentasi baik untuk memenangkan tender lebih besar.',
  },
  'Pemandu Wisata Petualangan': {
    tier: 'cerah',
    summary: 'Sektor pariwisata petualangan (ecotourism, adventure travel) Indonesia terus tumbuh seiring tren wisata pengalaman.',
    tip: 'Bangun kehadiran digital (media sosial, platform booking) untuk menjangkau wisatawan mancanegara secara langsung.',
  },
  'Instruktur Mengemudi': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan jumlah kendaraan pribadi, meski jangka panjang perlu waspada terhadap tren kendaraan otonom.',
    tip: 'Pantau perkembangan teknologi mengemudi otonom dan pertimbangkan spesialisasi mengemudi defensif/profesional.',
  },
  'Manajer Restoran': {
    tier: 'cerah',
    summary: 'Industri kuliner dan F&B terus tumbuh seiring perubahan gaya hidup, meski margin bisnis makin ketat karena kenaikan biaya operasional.',
    tip: 'Kuasai sistem manajemen restoran digital (POS, analitik) untuk mengelola operasional secara lebih efisien.',
  },
  'Koordinator Lapangan Proyek': {
    tier: 'stabil',
    summary: 'Sejalan dengan pertumbuhan proyek infrastruktur nasional, kebutuhan koordinator lapangan tetap ada.',
    tip: 'Kuasai tools manajemen proyek digital untuk koordinasi lapangan yang lebih efisien.',
  },

  'Petugas Administrasi Rumah Sakit': {
    tier: 'waspada',
    summary: 'Digitalisasi rekam medis dan sistem administrasi rumah sakit mengurangi kebutuhan tenaga administrasi manual.',
    tip: 'Kuasai sistem informasi rumah sakit (SIMRS) digital agar tetap relevan seiring digitalisasi layanan kesehatan.',
  },
  'Asisten Apoteker': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan apotek dan layanan kesehatan, meski peracikan obat sederhana makin terbantu otomasi.',
    tip: 'Perdalam pengetahuan konsultasi obat dan layanan pelanggan untuk melengkapi peran yang makin terbantu otomasi peracikan.',
  },
  'Petugas Layanan Pelanggan Teknis': {
    tier: 'waspada',
    summary: 'Chatbot dan AI customer service makin banyak menangani pertanyaan rutin, menyisakan kasus kompleks untuk manusia.',
    tip: 'Fokus pada penanganan kasus kompleks/eskalasi yang membutuhkan empati dan pemecahan masalah, bukan pertanyaan rutin.',
  },
  'Resepsionis Klinik': {
    tier: 'waspada',
    summary: 'Sistem pendaftaran online dan chatbot makin banyak menggantikan tugas resepsionis rutin di klinik modern.',
    tip: 'Kembangkan keterampilan pelayanan pasien langsung dan penanganan situasi darurat yang tidak bisa digantikan sistem otomatis.',
  },
  'Petugas Perpustakaan': {
    tier: 'waspada',
    summary: 'Digitalisasi koleksi dan pencarian berbasis AI mengurangi kebutuhan tenaga perpustakaan untuk tugas administratif dasar.',
    tip: 'Kembangkan keahlian kurasi digital dan literasi informasi untuk bergeser dari penjaga koleksi fisik ke pengelola pengetahuan digital.',
  },
  'Teknisi Layanan Purna Jual': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan produk elektronik/otomotif, meski diagnosis dasar makin terbantu alat otomatis.',
    tip: 'Kuasai diagnosis berbasis software dan produk generasi terbaru agar tetap relevan seiring kompleksitas produk meningkat.',
  },
  'Petugas Logistik Kemanusiaan': {
    tier: 'cerah',
    summary: 'Frekuensi bencana dan kebutuhan respons kemanusiaan mendorong permintaan tenaga logistik terlatih di sektor ini.',
    tip: 'Ambil sertifikasi logistik kemanusiaan internasional (CILT, Humanitarian Logistics) untuk membuka peluang di organisasi global.',
  },
  'Staf Tata Usaha Sekolah': {
    tier: 'waspada',
    summary: 'Digitalisasi administrasi sekolah mengurangi kebutuhan staf tata usaha untuk tugas manual, meski peran koordinasi tetap dibutuhkan.',
    tip: 'Kuasai sistem informasi akademik digital untuk tetap relevan seiring digitalisasi administrasi pendidikan.',
  },

  'Pemilik Toko/Ritel': {
    tier: 'waspada',
    summary: 'Persaingan dari e-commerce terus menekan ritel fisik konvensional, meski toko dengan pengalaman unik masih bertahan.',
    tip: 'Integrasikan penjualan online (omnichannel) agar tidak hanya bergantung pada toko fisik.',
  },
  'Manajer Gudang': {
    tier: 'waspada',
    summary: 'Otomasi gudang (robotika, sistem manajemen inventaris otomatis) terus berkembang terutama di gudang skala besar e-commerce.',
    tip: 'Kuasai sistem manajemen gudang digital (WMS) dan otomasi agar bergeser dari operasional manual ke pengawasan sistem.',
  },
  'Pengusaha Ekspedisi/Logistik': {
    tier: 'cerah',
    summary: 'Pertumbuhan e-commerce terus mendorong permintaan jasa logistik dan pengiriman di Indonesia.',
    tip: 'Investasi pada teknologi pelacakan dan optimasi rute untuk bersaing dengan pemain logistik besar.',
  },
  'Manajer Produksi Pabrik': {
    tier: 'stabil',
    summary: 'Otomasi dan Industri 4.0 mengubah kebutuhan tenaga kerja pabrik, tapi peran koordinasi dan pengambilan keputusan manajerial tetap dibutuhkan.',
    tip: 'Pelajari sistem manufaktur berbasis data (MES, IoT) agar mampu mengelola pabrik yang makin otomatis.',
  },
  'Pemilik Bengkel dengan Sistem Manajemen': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan jumlah kendaraan, meski transisi ke kendaraan listrik mengubah kebutuhan keahlian jangka panjang.',
    tip: 'Mulai pelajari servis kendaraan listrik (EV) untuk mengantisipasi transisi dari kendaraan berbahan bakar fosil.',
  },
  'Kontraktor Proyek': {
    tier: 'cerah',
    summary: 'Sejalan dengan pertumbuhan sektor konstruksi nasional, permintaan jasa kontraktor tetap tinggi dalam jangka panjang.',
    tip: 'Bangun reputasi lewat portofolio proyek yang terdokumentasi baik untuk memenangkan tender lebih besar.',
  },
  'Manajer Rantai Pasok': {
    tier: 'cerah',
    summary: 'Kompleksitas rantai pasok global dan e-commerce terus meningkatkan kebutuhan tenaga ahli manajemen rantai pasok.',
    tip: 'Kuasai analitik rantai pasok berbasis data untuk mengoptimalkan keputusan di tengah ketidakpastian global.',
  },
  'Pengusaha Waralaba': {
    tier: 'stabil',
    summary: 'Model waralaba tetap diminati sebagai jalur bisnis dengan risiko lebih terukur, meski margin makin bersaing.',
    tip: 'Pilih waralaba dengan model bisnis yang sudah teruji tahan terhadap perubahan ekonomi, bukan sekadar tren sesaat.',
  },

  Psikolog: {
    tier: 'cerah',
    summary: 'Meningkatnya kesadaran kesehatan mental mendorong permintaan layanan psikologi terus tumbuh, baik klinis maupun industri/organisasi.',
    tip: 'Pertimbangkan layanan konseling online untuk menjangkau lebih banyak klien di luar praktik tatap muka.',
  },
  'Peneliti Pendidikan': {
    tier: 'stabil',
    summary: 'Kebutuhan riset untuk kebijakan pendidikan tetap ada, meski pendanaan riset di Indonesia relatif terbatas.',
    tip: 'Bangun kolaborasi dengan lembaga internasional untuk mengakses pendanaan riset yang lebih besar.',
  },
  Konselor: {
    tier: 'cerah',
    summary: 'Kesadaran akan pentingnya kesehatan mental dan bimbingan karier terus meningkat di sekolah maupun tempat kerja.',
    tip: 'Perluas layanan ke platform online untuk menjangkau lebih banyak siswa/klien.',
  },
  'Dosen/Pengajar': {
    tier: 'stabil',
    summary: 'Permintaan pendidikan tinggi tetap ada, meski persaingan dari kursus online (MOOC) mengubah cara mengajar.',
    tip: 'Integrasikan metode pembelajaran digital/hybrid untuk tetap relevan di tengah pertumbuhan platform belajar online.',
  },
  'Penulis Sains Populer': {
    tier: 'waspada',
    summary: 'AI generative text makin mampu menghasilkan tulisan dasar, meski analisis mendalam dan kredibilitas penulis manusia tetap bernilai.',
    tip: 'Bangun kredibilitas dan gaya khas sebagai penulis, karena keaslian suara manusia jadi pembeda dari konten AI.',
  },
  'Terapis Seni': {
    tier: 'cerah',
    summary: 'Meningkatnya kesadaran kesehatan mental mendukung permintaan terapi kreatif sebagai pelengkap terapi konvensional.',
    tip: 'Bangun kolaborasi dengan psikolog/psikiater untuk memperluas rujukan klien.',
  },
  'Jurnalis Sains': {
    tier: 'waspada',
    summary: 'Industri media cetak terus menyusut dan AI mulai menghasilkan berita dasar, meski jurnalisme investigatif/analisis mendalam tetap dibutuhkan.',
    tip: 'Fokus pada investigasi mendalam dan analisis yang membutuhkan keahlian, bukan sekadar melaporkan fakta dasar yang bisa dihasilkan AI.',
  },
  'Kurator Museum': {
    tier: 'stabil',
    summary: 'Permintaan niche namun stabil seiring pertumbuhan sektor pariwisata budaya, meski jumlah formasi terbatas.',
    tip: 'Kembangkan keahlian kuratorial digital (pameran virtual) untuk menjangkau audiens lebih luas.',
  },

  'Peneliti & Pengembang Produk (R&D)': {
    tier: 'cerah',
    summary: 'Investasi R&D terus tumbuh seiring persaingan industri berbasis inovasi, termasuk di sektor consumer goods dan farmasi.',
    tip: 'Kuasai metode pengembangan produk berbasis data dan iterasi cepat (agile R&D) untuk mempercepat inovasi.',
  },
  'Konsultan Inovasi': {
    tier: 'cerah',
    summary: 'Kebutuhan transformasi digital dan inovasi bisnis terus mendorong permintaan konsultan di berbagai industri.',
    tip: 'Bangun portofolio proyek nyata (bukan hanya teori) untuk membuktikan dampak inovasi yang dihasilkan.',
  },
  'Pendiri Startup Kreatif': {
    tier: 'stabil',
    summary: 'Ekonomi kreatif terus tumbuh, meski pendanaan startup lebih selektif dibanding masa boom sebelumnya.',
    tip: 'Fokus pada model bisnis yang profitable sejak awal, bukan hanya mengejar pendanaan eksternal.',
  },
  'Perancang Permainan (Game Designer)': {
    tier: 'cerah',
    summary: 'Industri gim Indonesia dan global terus tumbuh pesat, didukung meningkatnya jumlah pemain dan platform distribusi digital.',
    tip: 'Bangun portofolio gim indie dan manfaatkan platform distribusi global (Steam, mobile) untuk menjangkau pasar internasional.',
  },
  'Konsultan Branding': {
    tier: 'cerah',
    summary: 'Persaingan bisnis yang makin ketat membuat strategi merek makin penting; pekerjaan strategis seperti ini sulit diotomasi penuh.',
    tip: 'Bangun studi kasus terukur (dampak bisnis dari branding) untuk membuktikan nilai strategis, bukan hanya estetika.',
  },
  'Pengembang Aplikasi Kreatif': {
    tier: 'cerah',
    summary: 'Permintaan aplikasi terus tumbuh seiring digitalisasi, meski AI coding assistant mengubah cara kerja developer menjadi lebih cepat.',
    tip: 'Manfaatkan AI coding assistant untuk mempercepat pengembangan, dan fokus pada arsitektur produk serta pengalaman pengguna.',
  },
  'Inventor/Penemu': {
    tier: 'stabil',
    summary: 'Perlindungan kekayaan intelektual dan ekosistem inovasi terus berkembang, meski jalur komersialisasi penemuan di Indonesia masih menantang.',
    tip: 'Pelajari proses paten dan cari mitra industri sejak awal untuk mempercepat komersialisasi penemuan.',
  },
  'Produser Konten Digital': {
    tier: 'waspada',
    summary: 'Permintaan konten terus tumbuh tapi persaingan sangat ketat dan AI mempermudah siapa saja membuat konten dasar.',
    tip: 'Bangun identitas dan komunitas yang khas, karena keunikan personal sulit ditiru meski AI mempermudah produksi konten generik.',
  },

  'Analis Data Riset': {
    tier: 'cerah',
    summary: 'Permintaan analisis data terus tumbuh di semua industri seiring transformasi digital.',
    tip: 'Kuasai tools AI/machine learning untuk analisis data agar bisa menangani volume data yang makin besar.',
  },
  'Perancang Basis Data': {
    tier: 'stabil',
    summary: 'Kebutuhan tetap ada seiring pertumbuhan data, meski desain database dasar makin terbantu tools otomatis.',
    tip: 'Perdalam arsitektur data skala besar dan cloud database untuk menangani kebutuhan sistem modern.',
  },
  'Ilustrator Teknis': {
    tier: 'waspada',
    summary: 'AI image generation makin mampu menghasilkan ilustrasi teknis dasar, meski akurasi teknis untuk dokumen resmi tetap membutuhkan verifikasi ahli.',
    tip: 'Posisikan diri sebagai verifikator akurasi teknis, bukan sekadar penghasil gambar, agar tetap dibutuhkan seiring adopsi AI.',
  },
  Kartografer: {
    tier: 'stabil',
    summary: 'Permintaan tetap ada untuk pemetaan digital dan GIS, meski pemetaan dasar makin otomatis lewat citra satelit dan drone.',
    tip: 'Kuasai sistem informasi geografis (GIS) dan analitik spasial untuk melengkapi keahlian pemetaan konvensional.',
  },
  Arsiparis: {
    tier: 'waspada',
    summary: 'Digitalisasi arsip dan pencarian berbasis AI mengurangi kebutuhan tenaga arsip untuk tugas administratif dasar.',
    tip: 'Kembangkan keahlian kurasi dan preservasi digital untuk bergeser dari pengarsipan fisik ke pengelolaan arsip digital.',
  },
  'Editor Naskah Ilmiah': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring pertumbuhan publikasi ilmiah, meski AI membantu proofreading dasar.',
    tip: 'Fokus pada penyuntingan substansi dan metodologi, bukan hanya tata bahasa yang makin terbantu AI.',
  },
  'Analis Riset Pasar': {
    tier: 'cerah',
    summary: 'Kebutuhan riset pasar terus tumbuh seiring persaingan bisnis, didukung ketersediaan data yang makin besar.',
    tip: 'Kuasai analitik data besar dan tools riset berbasis AI untuk menghasilkan insight lebih cepat dan mendalam.',
  },
  'Pustakawan Digital': {
    tier: 'stabil',
    summary: 'Peran pengelolaan pengetahuan digital tumbuh seiring digitalisasi institusi, meski berbeda dari pustakawan konvensional.',
    tip: 'Kuasai manajemen basis data digital dan sistem kurasi informasi untuk institusi modern.',
  },

  Dokter: {
    tier: 'cerah',
    summary: 'Kebutuhan dokter di Indonesia masih jauh dari rasio ideal, menjaga permintaan tetap tinggi jangka panjang.',
    tip: 'Pertimbangkan spesialisasi di bidang yang masih kekurangan tenaga ahli di luar kota besar.',
  },
  'Konsultan Kesehatan Masyarakat': {
    tier: 'cerah',
    summary: 'Investasi pemerintah dan swasta pada program kesehatan masyarakat terus meningkat pascapandemi.',
    tip: 'Bangun keahlian di epidemiologi digital dan analitik kesehatan untuk merespons kebutuhan surveilans modern.',
  },
  'Pendiri Lembaga Riset/Sosial': {
    tier: 'stabil',
    summary: 'Kebutuhan riset kebijakan dan program sosial tetap ada, meski pendanaan filantropi terbatas dan kompetitif.',
    tip: 'Bangun jaringan dengan lembaga donor internasional untuk mengakses pendanaan yang lebih stabil.',
  },
  'Konsultan Manajemen': {
    tier: 'cerah',
    summary: 'Kebutuhan transformasi bisnis dan efisiensi operasional terus mendorong permintaan konsultan di berbagai sektor.',
    tip: 'Kuasai analitik data dan AI untuk memberikan rekomendasi berbasis bukti yang lebih kuat kepada klien.',
  },
  'Analis Kebijakan Publik': {
    tier: 'stabil',
    summary: 'Kebutuhan analisis kebijakan tetap ada seiring kompleksitas tata kelola pemerintahan, meski anggaran riset kebijakan terbatas.',
    tip: 'Kuasai analitik data untuk mendukung rekomendasi kebijakan berbasis bukti.',
  },
  Epidemiolog: {
    tier: 'cerah',
    summary: 'Pengalaman pandemi meningkatkan investasi jangka panjang pada surveilans dan kesiapsiagaan wabah.',
    tip: 'Kuasai pemodelan data kesehatan dan sistem peringatan dini untuk peran yang makin strategis.',
  },
  'Konsultan Pendidikan': {
    tier: 'stabil',
    summary: 'Permintaan tetap tinggi seiring persaingan masuk perguruan tinggi, meski bersaing dengan platform bimbingan belajar online.',
    tip: 'Integrasikan layanan online untuk menjangkau siswa di luar kota besar.',
  },
  'Pengusaha di Bidang Kesehatan': {
    tier: 'cerah',
    summary: 'Investasi pada sektor kesehatan digital (telemedicine, healthtech) terus tumbuh pascapandemi.',
    tip: 'Eksplorasi model bisnis kesehatan digital (telemedicine, apotek online) yang permintaannya terus meningkat.',
  },

  'Ahli Statistik Kesehatan': {
    tier: 'cerah',
    summary: 'Kebutuhan analisis data kesehatan terus tumbuh seiring digitalisasi sistem kesehatan dan riset epidemiologi.',
    tip: 'Kuasai tools analitik kesehatan modern dan pemodelan prediktif untuk mendukung kebijakan berbasis data.',
  },
  'Analis Data Sosial': {
    tier: 'cerah',
    summary: 'Kebutuhan analisis data untuk kebijakan dan riset sosial terus tumbuh seiring ketersediaan data yang makin besar.',
    tip: 'Kuasai tools analitik data besar dan visualisasi untuk menghasilkan insight yang mudah dipahami pengambil kebijakan.',
  },
  'Perencana Program Pendidikan': {
    tier: 'stabil',
    summary: 'Kebutuhan perencanaan program pendidikan tetap ada seiring perubahan kebijakan, meski anggaran terbatas.',
    tip: 'Kuasai evaluasi program berbasis data untuk membuktikan dampak program yang dirancang.',
  },
  'Petugas Rekam Medis': {
    tier: 'waspada',
    summary: 'Digitalisasi rekam medis dan sistem administrasi rumah sakit mengurangi kebutuhan tenaga administrasi manual.',
    tip: 'Kuasai sistem informasi rumah sakit (SIMRS) digital agar tetap relevan seiring digitalisasi layanan kesehatan.',
  },
  Aktuaris: {
    tier: 'cerah',
    summary:
      'Industri asuransi dan dana pensiun terus tumbuh seiring meningkatnya kesadaran proteksi finansial, sementara profesi ini memiliki barrier sertifikasi tinggi yang melindungi dari otomasi penuh.',
    tip: 'Selesaikan sertifikasi aktuaris (ASAI/FSAI) secepat mungkin karena jalur karier sangat bergantung pada gelar profesi ini.',
  },
  'Analis Kebijakan': {
    tier: 'stabil',
    summary: 'Kebutuhan analisis kebijakan tetap ada seiring kompleksitas tata kelola pemerintahan, meski anggaran riset kebijakan terbatas.',
    tip: 'Kuasai analitik data untuk mendukung rekomendasi kebijakan berbasis bukti.',
  },
  'Peneliti Pasar': {
    tier: 'cerah',
    summary: 'Kebutuhan riset pasar terus tumbuh seiring persaingan bisnis, didukung ketersediaan data yang makin besar.',
    tip: 'Kuasai analitik data besar dan tools riset berbasis AI untuk menghasilkan insight lebih cepat dan mendalam.',
  },
  'Konselor Akademik': {
    tier: 'cerah',
    summary: 'Kesadaran akan pentingnya bimbingan karier dan akademik terus meningkat di institusi pendidikan.',
    tip: 'Perluas layanan ke platform online untuk menjangkau lebih banyak siswa/mahasiswa.',
  },

  'Analis Keuangan': {
    tier: 'waspada',
    summary: 'AI dan algoritma makin mampu melakukan analisis keuangan dasar, meski pengambilan keputusan strategis tetap membutuhkan manusia.',
    tip: 'Kuasai analisis berbasis AI/machine learning agar bisa fokus pada interpretasi strategis, bukan perhitungan rutin.',
  },
  'Data Analyst/Data Scientist': {
    tier: 'cerah',
    summary: 'Permintaan tetap sangat tinggi seiring transformasi digital di semua industri, meski persaingan talenta makin ketat.',
    tip: 'Perdalam machine learning dan kemampuan menerjemahkan data menjadi keputusan bisnis, bukan hanya membuat dashboard.',
  },
  'Konsultan Bisnis': {
    tier: 'cerah',
    summary: 'Kebutuhan transformasi bisnis dan efisiensi operasional terus mendorong permintaan konsultan di berbagai sektor.',
    tip: 'Kuasai analitik data dan AI untuk memberikan rekomendasi berbasis bukti yang lebih kuat kepada klien.',
  },
  'Auditor Internal': {
    tier: 'stabil',
    summary: 'Regulasi tata kelola perusahaan yang makin ketat menjaga permintaan tetap ada, meski audit rutin makin terbantu otomasi.',
    tip: 'Kuasai audit berbasis data dan analitik forensik untuk melengkapi audit tradisional yang makin terotomasi.',
  },
  'Manajer Investasi': {
    tier: 'stabil',
    summary: 'Pertumbuhan kelas menengah dan literasi investasi mendukung permintaan, meski robo-advisor menggantikan sebagian pekerjaan manajemen portofolio dasar.',
    tip: 'Bangun keahlian di kelas aset alternatif dan hubungan klien bernilai tinggi yang sulit digantikan robo-advisor.',
  },
  'Aktuaris Asuransi': {
    tier: 'cerah',
    summary:
      'Industri asuransi terus tumbuh seiring meningkatnya kesadaran proteksi finansial, sementara profesi ini memiliki barrier sertifikasi tinggi yang melindungi dari otomasi penuh.',
    tip: 'Selesaikan sertifikasi aktuaris (ASAI/FSAI) secepat mungkin karena jalur karier sangat bergantung pada gelar profesi ini.',
  },
  'Perencana Keuangan': {
    tier: 'cerah',
    summary: 'Meningkatnya literasi keuangan dan kelas menengah mendorong permintaan perencana keuangan personal terus tumbuh.',
    tip: 'Bangun kepercayaan lewat sertifikasi resmi (CFP) karena kepercayaan personal adalah pembeda utama dari aplikasi finansial otomatis.',
  },

  'Event Organizer': {
    tier: 'cerah',
    summary: 'Ekonomi pengalaman (experience economy) terus tumbuh, mendorong permintaan event kreatif baik korporat maupun personal.',
    tip: 'Kuasai event hybrid (offline-online) yang makin diminati sejak pandemi untuk menjangkau audiens lebih luas.',
  },
  'Sutradara Pertunjukan': {
    tier: 'stabil',
    summary: 'Permintaan pertunjukan seni tetap ada seiring pertumbuhan industri hiburan, meski pendanaan seni pertunjukan terbatas.',
    tip: 'Eksplorasi format pertunjukan hybrid (streaming) untuk menjangkau penonton lebih luas di luar venue fisik.',
  },
  'Pengelola Sanggar Seni': {
    tier: 'stabil',
    summary: 'Minat masyarakat terhadap seni dan budaya lokal tetap ada, meski skala bisnis sanggar umumnya kecil dan bergantung pada komunitas.',
    tip: 'Manfaatkan media sosial dan kelas online untuk memperluas jangkauan murid di luar komunitas lokal.',
  },
  'Public Relations': {
    tier: 'cerah',
    summary: 'Kebutuhan manajemen reputasi makin penting di era media sosial dan krisis informasi yang cepat menyebar.',
    tip: 'Kuasai manajemen krisis di media sosial, karena kecepatan respons jadi keahlian yang makin dibutuhkan.',
  },
  'Content Creator': {
    tier: 'waspada',
    summary: 'Persaingan sangat ketat dan makin dibanjiri konten AI-generated, meski kreator dengan audiens loyal tetap punya nilai komersial tinggi.',
    tip: 'Bangun niche dan komunitas loyal, karena keaslian dan koneksi personal sulit ditiru konten yang dihasilkan AI massal.',
  },
  'Manajer Talenta/Artis': {
    tier: 'stabil',
    summary: 'Industri hiburan dan ekonomi kreator terus tumbuh, meski persaingan talenta baru makin ketat.',
    tip: 'Bangun jaringan lintas platform (media sosial, brand, media tradisional) untuk memaksimalkan nilai komersial talenta.',
  },
  'Pengajar Musik dengan Studio Sendiri': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring minat musik yang terus tumbuh, meski persaingan dari platform belajar online (tutorial video) makin ketat.',
    tip: 'Tawarkan kelas online sebagai pelengkap untuk menjangkau murid di luar wilayah studio fisik.',
  },
  'Wedding Planner': {
    tier: 'cerah',
    summary: 'Industri pernikahan Indonesia terus tumbuh dengan anggaran yang makin besar, mendukung permintaan jasa perencana profesional.',
    tip: 'Bangun kehadiran visual yang kuat di media sosial (Instagram, Pinterest) karena calon klien banyak mencari inspirasi dari sana.',
  },

  'Guru Seni Budaya': {
    tier: 'stabil',
    summary: 'Permintaan pengajaran seni budaya tetap ada di sekolah, meski formasi guru tetap terbatas.',
    tip: 'Kombinasikan pengajaran dengan praktik berkarya untuk membangun portofolio dan penghasilan tambahan.',
  },
  'Pustakawan Anak': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada di sekolah dan perpustakaan komunitas, meski jumlah formasi terbatas.',
    tip: 'Kembangkan program literasi kreatif (storytelling, digital) untuk menarik minat anak di era digital.',
  },
  'Terapis Musik': {
    tier: 'cerah',
    summary: 'Meningkatnya kesadaran kesehatan mental mendukung permintaan terapi kreatif termasuk musik sebagai pelengkap terapi konvensional.',
    tip: 'Bangun kolaborasi dengan rumah sakit dan sekolah untuk memperluas rujukan klien/siswa.',
  },
  'Desainer Kurikulum': {
    tier: 'stabil',
    summary: 'Kebutuhan pengembangan kurikulum tetap ada seiring perubahan kebijakan pendidikan, meski format kerja makin project-based.',
    tip: 'Kuasai desain kurikulum berbasis kompetensi digital untuk menyesuaikan kebutuhan pendidikan masa depan.',
  },
  'Editor Buku Anak': {
    tier: 'stabil',
    summary: 'Industri buku anak lokal terus tumbuh didukung kesadaran literasi dini, meski pasar buku fisik secara umum menyusut.',
    tip: 'Eksplorasi format buku anak digital/interaktif untuk mengikuti tren konsumsi konten anak masa kini.',
  },
  'Koordinator Program Seni Sekolah': {
    tier: 'stabil',
    summary: 'Permintaan pengelolaan program seni sekolah tetap ada, meski anggaran ekstrakurikuler seni umumnya terbatas.',
    tip: 'Bangun kemitraan dengan komunitas seni lokal untuk memperkaya program tanpa bergantung penuh pada anggaran sekolah.',
  },
  'Pengajar Les Privat Kreatif': {
    tier: 'stabil',
    summary: 'Permintaan tetap ada seiring minat orang tua pada kegiatan kreatif anak, meski persaingan dari platform belajar online makin ketat.',
    tip: 'Tawarkan kelas online sebagai pelengkap untuk menjangkau murid di luar wilayah sekitar.',
  },
  'Petugas Arsip Budaya': {
    tier: 'waspada',
    summary: 'Digitalisasi arsip budaya mengurangi kebutuhan tenaga arsip untuk tugas administratif dasar, meski keahlian kurasi tetap dibutuhkan.',
    tip: 'Kembangkan keahlian digitalisasi dan kurasi arsip budaya untuk institusi warisan budaya yang makin modern.',
  },

  'Pemilik Bisnis Fesyen': {
    tier: 'stabil',
    summary: 'Industri fesyen lokal terus tumbuh didukung tren bangga buatan Indonesia, meski bersaing dengan fast fashion impor.',
    tip: 'Bangun brand dengan cerita dan nilai keberlanjutan untuk bersaing dengan fast fashion berbiaya rendah.',
  },
  'Desainer Grafis Lepas (Freelance)': {
    tier: 'waspada',
    summary: 'AI image generation (Midjourney, dll.) berdampak langsung pada desain grafis dasar/template, meski strategi visual dan branding tetap butuh manusia.',
    tip: 'Geser fokus ke strategi brand dan konsep, bukan hanya eksekusi visual, karena eksekusi dasar makin terbantu AI.',
  },
  'Pengelola Toko Online Produk Kreatif': {
    tier: 'cerah',
    summary: 'Pertumbuhan e-commerce dan ekonomi kreatif terus mendukung permintaan produk lokal secara online.',
    tip: 'Manfaatkan pemasaran berbasis konten dan media sosial untuk membangun basis pelanggan setia.',
  },
  'Perencana Acara (Event Organizer)': {
    tier: 'cerah',
    summary: 'Ekonomi pengalaman (experience economy) terus tumbuh, mendorong permintaan event kreatif baik korporat maupun personal.',
    tip: 'Kuasai event hybrid (offline-online) yang makin diminati sejak pandemi untuk menjangkau audiens lebih luas.',
  },
  'Manajer Produksi Konten': {
    tier: 'waspada',
    summary: 'Permintaan konten terus tumbuh tapi AI tools mengubah cara kerja produksi menjadi lebih cepat dan efisien, mengurangi kebutuhan tim besar.',
    tip: 'Kuasai workflow produksi berbasis AI agar tim kecil bisa menghasilkan output yang dulu membutuhkan tim besar.',
  },
  'Pengusaha Percetakan/Merchandise': {
    tier: 'stabil',
    summary: 'Permintaan merchandise custom (event, brand) tetap tumbuh meski percetakan massal konvensional menyusut.',
    tip: 'Fokus pada percetakan custom/on-demand yang permintaannya tumbuh, bukan percetakan massal yang menyusut.',
  },
  'Pemilik Studio Fotografi': {
    tier: 'waspada',
    summary: 'Fotografi dasar makin terjangkau lewat smartphone dan AI, meski fotografi profesional untuk event/produk premium tetap dibutuhkan.',
    tip: 'Fokus pada segmen premium (pernikahan, korporat, produk high-end) yang menghargai kualitas dan pengalaman profesional.',
  },

  'Manajer Sumber Daya Manusia (HR)': {
    tier: 'cerah',
    summary: 'Peran HR makin strategis seiring perang talenta dan kebutuhan pengelolaan budaya kerja hybrid, meski tugas administratif makin terotomasi.',
    tip: 'Kuasai HR analytics dan employee experience untuk bergeser dari administrasi ke peran strategis.',
  },
  'Manajer Cabang Bank': {
    tier: 'waspada',
    summary: 'Digitalisasi perbankan (mobile banking) terus mengurangi kebutuhan transaksi di cabang fisik, meski peran penasihat keuangan tetap dibutuhkan.',
    tip: 'Kembangkan keahlian penasihat keuangan dan relationship banking untuk nasabah bernilai tinggi, karena transaksi rutin makin pindah ke digital.',
  },
  'Konsultan Pendidikan/Bimbingan Belajar': {
    tier: 'stabil',
    summary: 'Permintaan tetap tinggi seiring persaingan masuk perguruan tinggi, meski bersaing dengan platform bimbingan belajar online.',
    tip: 'Integrasikan layanan online untuk menjangkau siswa di luar kota besar.',
  },
  'Manajer Kantor': {
    tier: 'waspada',
    summary: 'Digitalisasi administrasi perkantoran mengurangi kebutuhan tugas administratif rutin, meski koordinasi tim tetap dibutuhkan.',
    tip: 'Kuasai tools manajemen kerja digital (project management, otomasi kantor) untuk tetap efisien dan relevan.',
  },
  'Perencana Acara Korporat': {
    tier: 'cerah',
    summary: 'Ekonomi pengalaman (experience economy) terus tumbuh, mendorong permintaan event korporat yang makin kompleks.',
    tip: 'Kuasai event hybrid (offline-online) yang makin diminati sejak pandemi untuk menjangkau audiens lebih luas.',
  },
  'Pengelola Lembaga Pelatihan': {
    tier: 'stabil',
    summary: 'Kebutuhan pelatihan dan pengembangan SDM tetap ada seiring perubahan kebutuhan skill di dunia kerja.',
    tip: 'Kembangkan kurikulum pelatihan yang relevan dengan skill masa depan (AI, data) untuk tetap diminati.',
  },
  'Manajer Layanan Pelanggan': {
    tier: 'waspada',
    summary: 'AI chatbot dan sistem layanan otomatis makin banyak menangani pertanyaan rutin, menyisakan kasus kompleks untuk tim manusia.',
    tip: 'Fokus membangun tim yang menangani kasus kompleks dan loyalitas pelanggan, bukan pertanyaan rutin yang sudah diambil alih chatbot.',
  },
  'Koordinator Program CSR': {
    tier: 'cerah',
    summary: 'Kesadaran keberlanjutan (ESG) makin menjadi prioritas perusahaan, mendorong permintaan tenaga ahli program CSR/keberlanjutan.',
    tip: 'Kuasai kerangka pelaporan ESG modern karena makin banyak perusahaan wajib melaporkannya ke investor dan regulator.',
  },
  'Insinyur Perkapalan': {
    tier: 'stabil',
    summary:
      'Indonesia sebagai negara kepulauan terus membutuhkan kapal niaga, kapal nelayan, dan kapal patroli, meski galangan lokal masih bersaing dengan produsen luar negeri.',
    tip: 'Kuasai software desain kapal berbasis simulasi dan pelajari regulasi maritim internasional (IMO) untuk membuka peluang proyek ekspor.',
  },
  'Arsitek Lanskap': {
    tier: 'cerah',
    summary:
      'Permintaan ruang hijau kota dan kawasan wisata terus tumbuh, dan pekerjaan ini menuntut penilaian ekologis serta estetika yang sulit diotomatisasi penuh.',
    tip: 'Pelajari perencanaan berbasis iklim tropis dan sertifikasi green building agar makin dicari proyek pemerintah maupun swasta.',
  },
  'Desainer Perhiasan': {
    tier: 'stabil',
    summary:
      'Pasar perhiasan custom/handmade tetap stabil karena nilai personal dan koleksi, meski desain massal makin dibantu software 3D.',
    tip: 'Gabungkan keterampilan tangan tradisional dengan software CAD perhiasan (misalnya RhinoGold) untuk mempercepat produksi tanpa kehilangan sentuhan personal.',
  },
  'Pembuat Alat Musik (Luthier)': {
    tier: 'stabil',
    summary:
      'Permintaan alat musik custom/high-end dari musisi dan kolektor relatif stabil, sebuah keahlian yang sangat bergantung pada pengalaman tangan langsung.',
    tip: 'Bangun reputasi lewat komunitas musisi dan dokumentasikan proses kerja di media sosial untuk menjangkau pasar niche yang lebih luas.',
  },
  'Perancang Pameran (Exhibition Designer)': {
    tier: 'stabil',
    summary:
      'Industri MICE dan museum terus butuh perancang ruang pameran yang mampu menerjemahkan konsep menjadi pengalaman fisik yang berkesan.',
    tip: 'Perluas portofolio ke pameran interaktif berbasis teknologi (AR/proyeksi) agar tetap relevan dengan tren experiential design.',
  },
  'Insinyur Robotika': {
    tier: 'cerah',
    summary:
      'Otomasi industri dan kebutuhan robot untuk manufaktur, logistik, dan pertanian terus meningkat, menjadikan keahlian ini makin dicari.',
    tip: 'Kuasai integrasi AI/machine learning dengan sistem robotik agar tidak hanya merakit tapi juga merancang perilaku cerdas robot.',
  },
  'Modeler 3D Percetakan (3D Print Specialist)': {
    tier: 'stabil',
    summary:
      'Prototyping cepat dan manufaktur skala kecil makin mengandalkan 3D printing, meski software makin otomatis dalam menghasilkan model dasar.',
    tip: 'Kuasai desain untuk manufaktur aditif (DfAM) agar bisa merancang produk yang benar-benar memanfaatkan kelebihan 3D printing, bukan sekadar meniru proses konvensional.',
  },
  Bidan: {
    tier: 'cerah',
    summary:
      'Kebutuhan tenaga kebidanan tetap tinggi di seluruh Indonesia, terutama di luar kota besar, dan pekerjaan ini membutuhkan kehadiran fisik serta empati yang tidak tergantikan mesin.',
    tip: 'Perdalam kompetensi kegawatdaruratan maternal dan ikuti pelatihan berkelanjutan agar bisa bertugas di fasilitas kesehatan dengan standar lebih tinggi.',
  },
  'Terapis Gigi (Dental Hygienist)': {
    tier: 'stabil',
    summary:
      'Kesadaran kesehatan gigi masyarakat meningkat, membuka peluang stabil di klinik gigi dan puskesmas, meski bersaing dengan makin banyaknya tenaga kesehatan gigi terlatih.',
    tip: 'Kuasai teknik pencegahan (preventive dentistry) dan edukasi pasien untuk membedakan diri di klinik modern.',
  },
  'Petugas SAR (Search and Rescue)': {
    tier: 'stabil',
    summary:
      'Kondisi geografis Indonesia yang rawan bencana membuat kebutuhan tim penyelamat tetap ada, dengan dukungan alat dan drone yang mempercepat proses pencarian.',
    tip: 'Kuasai penggunaan drone dan alat pemetaan bencana modern untuk mempercepat respons tanpa mengurangi peran pengambilan keputusan di lapangan.',
  },
  'Teknisi Radiologi': {
    tier: 'stabil',
    summary:
      'Permintaan pencitraan medis terus tumbuh seiring makin banyaknya fasilitas kesehatan, meski AI mulai membantu interpretasi awal citra.',
    tip: 'Pelajari cara bekerja berdampingan dengan sistem AI diagnostik agar bisa memvalidasi dan menjelaskan hasil, bukan sekadar mengoperasikan alat.',
  },
  'Terapis Wicara (Speech Therapist)': {
    tier: 'cerah',
    summary:
      'Kesadaran akan gangguan bicara dan tumbuh kembang anak meningkat, sementara terapi personal langsung sulit digantikan teknologi.',
    tip: 'Kembangkan spesialisasi pada kelompok usia atau gangguan tertentu (anak autis, pasca-stroke) untuk membangun praktik yang lebih dipercaya.',
  },
  'Petugas Penanggulangan Bencana': {
    tier: 'stabil',
    summary:
      'Frekuensi bencana alam di Indonesia membuat peran koordinasi tanggap darurat tetap dibutuhkan secara berkelanjutan oleh pemerintah dan NGO.',
    tip: 'Kuasai manajemen logistik kebencanaan dan sistem peringatan dini agar bisa mempercepat respons di lapangan.',
  },
  'Instruktur Penyelamatan Air (Lifeguard)': {
    tier: 'stabil',
    summary:
      'Pertumbuhan destinasi wisata pantai dan kolam renang publik menjaga kebutuhan tenaga penyelamat tetap stabil.',
    tip: 'Ambil sertifikasi penyelamatan internasional agar bisa bekerja di resor atau kapal pesiar dengan standar lebih tinggi.',
  },
  'Insinyur Pertambangan': {
    tier: 'stabil',
    summary:
      'Permintaan komoditas mineral (nikel untuk baterai EV, dsb.) mendorong kebutuhan insinyur tambang, meski sektor ini sensitif terhadap harga komoditas global.',
    tip: 'Perdalam praktik pertambangan berkelanjutan (ESG) karena makin menjadi syarat investor dan regulator internasional.',
  },
  'Insinyur Perminyakan': {
    tier: 'waspada',
    summary:
      'Eksplorasi migas konvensional melambat seiring transisi energi global, meski keahlian ini masih relevan untuk proyek yang sudah berjalan.',
    tip: 'Pertimbangkan transisi keahlian ke energi terbarukan (panas bumi, CCS) agar karier tetap relevan jangka panjang.',
  },
  'Pengusaha Agroindustri': {
    tier: 'cerah',
    summary:
      'Hilirisasi hasil pertanian menjadi produk olahan bernilai tambah terus didorong pemerintah dan permintaan pasar domestik yang besar.',
    tip: 'Investasi pada standar keamanan pangan (HACCP) dan branding produk agar bisa menembus pasar modern maupun ekspor.',
  },
  'Manajer Proyek Energi Terbarukan': {
    tier: 'cerah',
    summary:
      'Target transisi energi Indonesia mendorong investasi besar pada tenaga surya, angin, dan panas bumi dalam dekade mendatang.',
    tip: 'Kuasai regulasi energi terbarukan dan skema pembiayaan proyek hijau untuk memimpin proyek berskala besar.',
  },
  'Konsultan Teknik Lingkungan': {
    tier: 'cerah',
    summary:
      'Regulasi lingkungan yang makin ketat membuat perusahaan butuh konsultan untuk kepatuhan dan mitigasi dampak, sebuah tren yang terus menguat.',
    tip: 'Kuasai standar AMDAL terbaru dan sertifikasi lingkungan internasional untuk melayani klien korporasi besar.',
  },
  'Pendiri Pabrik Manufaktur': {
    tier: 'stabil',
    summary:
      'Program hilirisasi industri terus membuka peluang manufaktur baru, meski persaingan efisiensi biaya dengan negara lain tetap ketat.',
    tip: 'Investasi pada otomasi produksi sejak awal agar pabrik tetap kompetitif menghadapi tekanan biaya tenaga kerja regional.',
  },
  'Pengembang Properti (Real Estate Developer)': {
    tier: 'stabil',
    summary:
      'Kebutuhan hunian dan kawasan komersial terus ada seiring urbanisasi, meski sangat dipengaruhi siklus suku bunga dan daya beli.',
    tip: 'Diversifikasi ke segmen hunian terjangkau dan properti berkelanjutan untuk mengurangi risiko siklus pasar premium.',
  },
  'Ahli Geologi Eksplorasi': {
    tier: 'stabil',
    summary:
      'Eksplorasi mineral kritis (nikel, tembaga) untuk industri baterai terus berjalan, meski proyek migas konvensional melambat.',
    tip: 'Kuasai pemetaan geologi berbasis citra satelit dan software eksplorasi modern untuk mempercepat identifikasi cadangan.',
  },
  'Inspektur Bangunan': {
    tier: 'stabil',
    summary:
      'Standar keselamatan konstruksi yang makin ketat menjaga kebutuhan inspektur independen tetap ada, meski sebagian pemeriksaan awal mulai dibantu sensor/drone.',
    tip: 'Kuasai teknologi inspeksi berbasis drone dan sensor struktural agar bisa memeriksa lebih banyak proyek lebih cepat.',
  },
  'Teknisi Instrumentasi': {
    tier: 'stabil',
    summary:
      'Pabrik dan fasilitas industri terus membutuhkan teknisi untuk memasang dan merawat sensor/instrumen kendali proses.',
    tip: 'Pelajari integrasi instrumentasi dengan sistem IoT industri agar tetap relevan seiring pabrik makin terhubung digital.',
  },
  'Analis Sistem Mutu (ISO)': {
    tier: 'stabil',
    summary:
      'Sertifikasi mutu tetap menjadi syarat wajib bagi banyak perusahaan untuk bisa ekspor atau bermitra dengan korporasi besar.',
    tip: 'Kuasai beberapa standar sekaligus (ISO 9001, 14001, 45001) agar bisa menangani audit mutu, lingkungan, dan K3 secara terintegrasi.',
  },
  'Petugas Metrologi Legal': {
    tier: 'stabil',
    summary:
      'Kalibrasi alat ukur tetap menjadi kebutuhan hukum bagi banyak industri dan perdagangan, menjaga permintaan tetap stabil.',
    tip: 'Ikuti sertifikasi metrologi nasional/internasional agar bisa menangani kalibrasi alat dengan presisi lebih tinggi.',
  },
  'Analis Forensik Digital': {
    tier: 'cerah',
    summary:
      'Kejahatan siber yang terus meningkat mendorong permintaan besar terhadap ahli forensik digital untuk investigasi hukum maupun korporat.',
    tip: 'Kuasai sertifikasi forensik digital internasional (misalnya CHFI) dan ikuti perkembangan teknik anti-forensik agar tetap unggul dari pelaku kejahatan siber.',
  },
  'Analis Data Geospasial (GIS Analyst)': {
    tier: 'cerah',
    summary:
      'Kebutuhan pemetaan digital untuk perencanaan kota, logistik, dan lingkungan terus tumbuh seiring digitalisasi data spasial.',
    tip: 'Kuasai platform GIS modern dan integrasi data satelit/drone agar bisa menghasilkan analisis spasial yang lebih akurat dan cepat.',
  },
  'Perias Pengantin (Makeup Artist)': {
    tier: 'stabil',
    summary:
      'Industri pernikahan dan acara tetap menjadi pasar besar yang sulit digantikan otomatisasi karena sifatnya sangat personal.',
    tip: 'Bangun portofolio visual yang kuat di media sosial dan pelajari tren tata rias internasional untuk menjangkau klien kelas atas.',
  },
  'Guru Tata Busana': {
    tier: 'stabil',
    summary:
      'Sekolah vokasi dan kursus keterampilan tetap membutuhkan pengajar tata busana seiring industri fesyen lokal terus berkembang.',
    tip: 'Ikuti perkembangan teknik produksi busana berkelanjutan agar materi ajar tetap relevan dengan tren industri.',
  },
  'Instruktur Musik Anak': {
    tier: 'stabil',
    summary:
      'Minat orang tua pada pendidikan musik sejak dini tetap tinggi, terutama di kota-kota besar dengan daya beli menengah ke atas.',
    tip: 'Kembangkan metode pengajaran yang menyenangkan untuk anak dan pertimbangkan kelas online untuk menjangkau lebih banyak murid.',
  },
  'Terapis Pijat/Spa': {
    tier: 'stabil',
    summary:
      'Industri wellness dan spa terus tumbuh seiring meningkatnya kesadaran kesehatan mental dan fisik masyarakat urban.',
    tip: 'Ambil sertifikasi terapi berbasis bukti (evidence-based) agar bisa bekerja di spa atau klinik dengan standar internasional.',
  },
  'Pelatih Kerajinan Keramik (Pottery Instructor)': {
    tier: 'stabil',
    summary:
      'Minat masyarakat urban pada aktivitas kreatif langsung (pottery class) sebagai hiburan/terapi terus meningkat.',
    tip: 'Buka studio komunitas dengan sesi kelompok kecil untuk membangun basis pelanggan tetap sekaligus komunitas.',
  },
  'Guru Tari Tradisional': {
    tier: 'stabil',
    summary:
      'Pelestarian budaya lokal tetap didukung sekolah dan komunitas, menjaga kebutuhan pengajar tari tradisional tetap ada.',
    tip: 'Dokumentasikan dan bagikan repertoar tari daerah secara digital agar jangkauan pengajaran lebih luas dan warisannya terjaga.',
  },
  'Chef/Juru Masak Kreatif': {
    tier: 'stabil',
    summary:
      'Industri kuliner terus tumbuh seiring budaya makan di luar dan konten kuliner digital, meski persaingan antarpelaku usaha ketat.',
    tip: 'Bangun ciri khas rasa/konsep yang sulit ditiru dan manfaatkan media sosial untuk membangun personal brand sebagai chef.',
  },
  'Pengusaha Florist & Dekorasi': {
    tier: 'stabil',
    summary:
      'Kebutuhan dekorasi bunga untuk acara tetap ada, meski sangat bergantung pada musim pernikahan/acara dan tren gaya hidup.',
    tip: 'Bangun kemitraan dengan wedding organizer dan venue acara untuk mendapatkan proyek berkelanjutan sepanjang tahun.',
  },
  'Pemilik Bengkel Custom Motor': {
    tier: 'stabil',
    summary:
      'Komunitas modifikasi kendaraan di Indonesia tetap besar dan loyal, menjaga permintaan jasa custom tetap stabil.',
    tip: 'Bangun portofolio visual yang kuat di media sosial untuk menarik klien dari luar kota, bukan hanya pelanggan lokal.',
  },
  'Pengusaha Percetakan Custom': {
    tier: 'stabil',
    summary:
      'Permintaan merchandise dan cetakan custom (kaos, mug, dsb.) tetap tinggi seiring tren personalisasi produk.',
    tip: 'Investasi pada mesin cetak digital on-demand agar bisa melayani pesanan satuan tanpa minimum order besar.',
  },
  'Produser Musik Independen': {
    tier: 'stabil',
    summary:
      'Platform streaming memudahkan musisi independen merilis karya sendiri, meski persaingan untuk mendapat perhatian pendengar makin ketat.',
    tip: 'Kuasai produksi musik berbasis software dan bangun strategi rilis digital untuk memaksimalkan jangkauan tanpa label besar.',
  },
  'Pengusaha Skincare/Kosmetik Lokal': {
    tier: 'cerah',
    summary:
      'Industri kecantikan lokal Indonesia tumbuh pesat dengan basis konsumen muda yang besar dan loyal terhadap merek lokal.',
    tip: 'Prioritaskan sertifikasi BPOM dan kepatuhan regulasi sejak awal agar bisa berkembang tanpa hambatan legal.',
  },
  'Pemilik Galeri Seni': {
    tier: 'stabil',
    summary:
      'Pasar seni rupa Indonesia terus berkembang seiring meningkatnya kolektor dan platform pameran digital.',
    tip: 'Manfaatkan pameran daring dan platform NFT/seni digital untuk menjangkau kolektor di luar kota tempat galeri berada.',
  },
  'Pengusaha Konten Kreatif (Creator Business)': {
    tier: 'cerah',
    summary:
      'Ekonomi kreator terus tumbuh seiring makin banyak merek beralih ke pemasaran berbasis konten dan influencer.',
    tip: 'Diversifikasi sumber pendapatan (endorse, produk sendiri, kelas online) agar tidak bergantung pada satu platform saja.',
  },
  'Teknisi Sablon/Digital Printing': {
    tier: 'stabil',
    summary:
      'Permintaan cetak custom untuk merchandise dan kemasan tetap tinggi, meski mesin digital printing makin mengotomasi proses produksi.',
    tip: 'Kuasai berbagai teknik cetak (sablon manual, DTF, digital) agar bisa melayani jenis pesanan yang lebih beragam.',
  },
  'Juru Ukir/Pengrajin Detail': {
    tier: 'stabil',
    summary:
      'Produk kerajinan ukir bernilai seni tinggi tetap dicari kolektor dan pasar ekspor kerajinan tangan Indonesia.',
    tip: 'Bangun jaringan ke pasar ekspor kerajinan lewat platform e-commerce internasional untuk memperluas pasar.',
  },
  'Teknisi Bingkai/Framing': {
    tier: 'stabil',
    summary:
      'Kebutuhan pembingkaian untuk karya seni, foto, dan dekorasi rumah tetap stabil di kota-kota besar.',
    tip: 'Tawarkan layanan pembingkaian custom untuk galeri dan fotografer profesional guna membangun pelanggan tetap.',
  },
  'Operator Mesin Bordir': {
    tier: 'stabil',
    summary:
      'Industri konveksi dan fesyen custom tetap membutuhkan operator bordir terampil, meski mesin makin terkomputerisasi.',
    tip: 'Kuasai pemrograman desain bordir digital agar bisa mengerjakan motif yang lebih kompleks dengan presisi tinggi.',
  },
  'Teknisi Warna Cetak (Prepress/Color Grading)': {
    tier: 'stabil',
    summary:
      'Kualitas warna cetak tetap krusial bagi industri percetakan dan kemasan, membutuhkan mata terlatih yang sulit sepenuhnya diotomasi.',
    tip: 'Kuasai software manajemen warna profesional (color management) agar hasil cetak konsisten lintas mesin dan bahan.',
  },
  'Perakit Model/Diorama': {
    tier: 'stabil',
    summary:
      'Pasar hobi model kit dan diorama arsitektur/pameran tetap ada, didukung komunitas penggemar yang loyal.',
    tip: 'Bangun portofolio digital dan jual jasa via marketplace untuk menjangkau kolektor dan studio arsitektur yang butuh maket.',
  },
  'Teknisi Reproduksi Naskah Kuno': {
    tier: 'stabil',
    summary:
      'Lembaga arsip dan perpustakaan nasional terus butuh tenaga ahli untuk mendigitalkan dan melestarikan naskah kuno.',
    tip: 'Kuasai teknik digitalisasi resolusi tinggi dan restorasi digital agar bisa menangani material yang makin rapuh.',
  },
  'Pengusaha Jasa Katering': {
    tier: 'stabil',
    summary:
      'Kebutuhan katering untuk acara kantor, pernikahan, dan syukuran tetap stabil di berbagai kota.',
    tip: 'Bangun sistem pemesanan online dan standarisasi menu agar bisa melayani lebih banyak acara tanpa menurunkan kualitas.',
  },
  'Pemilik Gym/Studio Kebugaran': {
    tier: 'cerah',
    summary:
      'Kesadaran gaya hidup sehat terus meningkat di kalangan urban, mendorong pertumbuhan gym dan studio kebugaran butik.',
    tip: 'Bangun komunitas member yang kuat lewat kelas grup dan tantangan kebugaran untuk menjaga loyalitas pelanggan.',
  },
  'Pengelola Homestay/Vila': {
    tier: 'stabil',
    summary:
      'Sektor pariwisata domestik terus pulih dan tumbuh, mendorong permintaan akomodasi alternatif di destinasi wisata.',
    tip: 'Optimalkan listing di platform online (Airbnb, Traveloka) dan kelola ulasan tamu secara aktif untuk menjaga reputasi.',
  },
  'Instruktur Selam Wisata': {
    tier: 'stabil',
    summary:
      'Destinasi wisata bahari Indonesia yang kaya terus menarik wisatawan penyelam domestik maupun mancanegara.',
    tip: 'Ambil sertifikasi instruktur selam internasional (PADI/SSI) agar bisa melayani wisatawan asing dengan standar global.',
  },
  'Pengusaha Jasa Ekspedisi Outdoor (Tour Operator)': {
    tier: 'stabil',
    summary:
      'Tren wisata petualangan dan minat generasi muda pada aktivitas outdoor terus mendorong permintaan jasa ekspedisi.',
    tip: 'Bangun standar keselamatan yang ketat dan dokumentasikan setiap trip untuk pemasaran sekaligus membangun kepercayaan.',
  },
  'Manajer Operasional Tambang': {
    tier: 'stabil',
    summary:
      'Operasional tambang tetap membutuhkan manajer lapangan berpengalaman untuk mengelola produksi dan keselamatan kerja.',
    tip: 'Kuasai sistem manajemen tambang digital dan standar ESG yang makin menjadi syarat investor.',
  },
  'Pemilik Peternakan': {
    tier: 'stabil',
    summary:
      'Kebutuhan protein hewani domestik terus tumbuh seiring pertambahan penduduk, meski margin sangat dipengaruhi harga pakan.',
    tip: 'Terapkan teknologi peternakan presisi (pemantauan digital) untuk meningkatkan efisiensi produksi dan margin.',
  },
  'Petugas Rekam Medis Puskesmas': {
    tier: 'stabil',
    summary:
      'Digitalisasi rekam medis nasional (SATUSEHAT) terus membutuhkan petugas yang memahami sistem sekaligus melayani pasien.',
    tip: 'Kuasai sistem rekam medis elektronik nasional agar bisa mendukung transisi digitalisasi puskesmas dengan lancar.',
  },
  'Teknisi Alat Kesehatan': {
    tier: 'stabil',
    summary:
      'Fasilitas kesehatan terus bertambah dan membutuhkan teknisi untuk memasang dan merawat peralatan medis.',
    tip: 'Ikuti pelatihan resmi dari produsen alat kesehatan agar bisa menangani perangkat generasi terbaru.',
  },
  'Petugas Klaim Asuransi Kesehatan': {
    tier: 'waspada',
    summary:
      'Proses klaim rutin makin banyak diotomasi oleh sistem, meski verifikasi kasus kompleks masih membutuhkan penilaian manusia.',
    tip: 'Kembangkan keahlian menangani kasus klaim kompleks/sengketa agar tidak tergantikan otomasi proses rutin.',
  },
  'Operator Call Center Teknis': {
    tier: 'waspada',
    summary:
      'Chatbot dan AI makin menangani pertanyaan dasar pelanggan, sehingga peran manusia bergeser ke penanganan kasus yang lebih rumit.',
    tip: 'Kembangkan keahlian menyelesaikan masalah teknis kompleks yang tidak bisa dijawab chatbot untuk tetap relevan.',
  },
  'Petugas Gudang Farmasi': {
    tier: 'stabil',
    summary:
      'Distribusi obat dan alat kesehatan tetap membutuhkan pengelolaan gudang yang cermat sesuai regulasi farmasi.',
    tip: 'Pelajari sistem manajemen gudang farmasi digital agar bisa menjaga akurasi stok dan kepatuhan regulasi.',
  },
  'Asisten Laboratorium Sekolah': {
    tier: 'stabil',
    summary:
      'Sekolah dengan fasilitas sains tetap membutuhkan asisten laboratorium untuk mendukung praktikum siswa dengan aman.',
    tip: 'Kuasai protokol keselamatan laboratorium terbaru dan bantu guru merancang eksperimen yang menarik bagi siswa.',
  },
  'Petugas Bantuan Difabel (Disability Support Officer)': {
    tier: 'cerah',
    summary:
      'Kesadaran inklusi disabilitas meningkat di institusi pendidikan dan publik, membuka peran pendukung yang makin dibutuhkan.',
    tip: 'Pelajari teknologi bantu (assistive technology) terbaru agar bisa memberi dukungan yang lebih efektif.',
  },
  'Manajer Operasional Ritel': {
    tier: 'stabil',
    summary:
      'Industri ritel terus membutuhkan manajer operasional meski makin banyak toko yang mengintegrasikan sistem digital dan e-commerce.',
    tip: 'Kuasai integrasi omnichannel (toko fisik + online) agar bisa mengelola operasional ritel modern secara efisien.',
  },
  'Pengusaha SPBU': {
    tier: 'waspada',
    summary:
      'Transisi ke kendaraan listrik dalam jangka panjang bisa menekan permintaan bahan bakar konvensional, meski permintaan jangka menengah masih besar.',
    tip: 'Pertimbangkan diversifikasi ke stasiun pengisian kendaraan listrik (SPKLU) sebagai antisipasi transisi energi.',
  },
  'Manajer Fasilitas Gedung (Facility Manager)': {
    tier: 'stabil',
    summary:
      'Gedung komersial dan perkantoran terus membutuhkan pengelolaan fasilitas yang efisien untuk operasional maupun perawatan.',
    tip: 'Kuasai sistem building management berbasis IoT untuk memantau dan mengelola gedung secara lebih efisien.',
  },
  'Pengusaha Peternakan Skala Industri': {
    tier: 'stabil',
    summary:
      'Kebutuhan pasokan protein hewani skala besar terus tumbuh, mendorong permintaan peternakan yang lebih terstandardisasi.',
    tip: 'Terapkan sistem manajemen kesehatan ternak digital dan standar keamanan pangan untuk memasok ritel modern.',
  },
  'Manajer Distribusi Barang': {
    tier: 'stabil',
    summary:
      'Pertumbuhan e-commerce terus mendorong kebutuhan distribusi barang yang efisien ke seluruh wilayah Indonesia.',
    tip: 'Kuasai perangkat lunak manajemen rute dan armada berbasis data untuk mengoptimalkan biaya distribusi.',
  },
  'Kontraktor Mekanikal Elektrikal (ME)': {
    tier: 'stabil',
    summary:
      'Pembangunan gedung dan pabrik baru terus membutuhkan kontraktor spesialis instalasi mekanikal-elektrikal.',
    tip: 'Kuasai sistem bangunan pintar (smart building) agar bisa menangani proyek dengan spesifikasi lebih modern.',
  },
  'Pengusaha Bengkel Alat Berat': {
    tier: 'stabil',
    summary:
      'Sektor konstruksi, tambang, dan perkebunan terus membutuhkan perawatan alat berat secara rutin.',
    tip: 'Investasi pada diagnostik alat berat berbasis sensor untuk mempercepat deteksi kerusakan dan mengurangi downtime klien.',
  },
  Antropolog: {
    tier: 'stabil',
    summary:
      'Riset budaya dan kajian masyarakat tetap dibutuhkan lembaga akademik, pemerintah, dan organisasi pembangunan, meski pasar kerja relatif niche.',
    tip: 'Kembangkan kemampuan riset terapan (applied anthropology) agar bisa bekerja di sektor korporat/kebijakan, bukan hanya akademik.',
  },
  Sosiolog: {
    tier: 'stabil',
    summary:
      'Lembaga riset, NGO, dan pemerintah terus membutuhkan analisis fenomena sosial untuk mendukung kebijakan berbasis data.',
    tip: 'Kuasai metode riset campuran (kuantitatif + kualitatif) agar bisa bekerja lintas sektor termasuk korporat dan kebijakan publik.',
  },
  'Peneliti Kebudayaan': {
    tier: 'stabil',
    summary:
      'Pelestarian warisan budaya tetap didukung lembaga pemerintah dan swasta, terutama dengan meningkatnya minat wisata budaya.',
    tip: 'Bangun kemampuan dokumentasi digital budaya (foto, video, arsip) agar hasil riset lebih mudah diakses publik.',
  },
  'Penulis Buku Nonfiksi': {
    tier: 'stabil',
    summary:
      'Pasar buku nonfiksi (self-help, sains populer, memoar) tetap ada, meski persaingan dengan konten digital gratis makin ketat.',
    tip: 'Bangun platform pribadi (newsletter, media sosial) untuk membangun audiens sendiri sebelum atau selain menerbitkan buku.',
  },
  'Terapis Musik Klinis': {
    tier: 'cerah',
    summary:
      'Kesadaran akan manfaat terapi musik untuk kesehatan mental dan rehabilitasi terus meningkat di fasilitas kesehatan.',
    tip: 'Ambil sertifikasi terapi musik klinis agar bisa bekerja di rumah sakit atau pusat rehabilitasi dengan standar profesional.',
  },
  'Dokumentator Film Sosial': {
    tier: 'stabil',
    summary:
      'Platform streaming dan media sosial membuka lebih banyak ruang distribusi untuk film dokumenter bertema sosial.',
    tip: 'Bangun jaringan dengan NGO dan lembaga donor yang sering mendanai produksi dokumenter isu sosial.',
  },
  'Pustakawan Riset': {
    tier: 'stabil',
    summary:
      'Institusi akademik dan riset tetap membutuhkan pustakawan yang mampu mengelola dan mengkurasi sumber informasi ilmiah.',
    tip: 'Kuasai manajemen basis data referensi digital dan alat bantu riset berbasis AI untuk mendukung peneliti lebih efektif.',
  },
  'Pendiri Studio Animasi': {
    tier: 'cerah',
    summary:
      'Permintaan konten animasi untuk hiburan, iklan, dan edukasi terus tumbuh seiring berkembangnya platform streaming dan digital.',
    tip: 'Bangun spesialisasi gaya visual yang khas agar studio bisa bersaing dengan rumah produksi besar dari luar negeri.',
  },
  'Peneliti Bioteknologi': {
    tier: 'cerah',
    summary:
      'Riset bioteknologi (pangan, kesehatan, lingkungan) terus didanai seiring meningkatnya kebutuhan solusi berbasis bioscience.',
    tip: 'Kuasai teknik bioinformatika dan kolaborasi lintas disiplin agar riset bisa lebih cepat diterapkan ke produk nyata.',
  },
  'Perancang Pengalaman Pengguna (UX/UI Designer)': {
    tier: 'cerah',
    summary:
      'Hampir semua produk digital membutuhkan desainer yang memahami kebutuhan pengguna, menjadikan peran ini sangat dicari di industri teknologi.',
    tip: 'Kuasai riset pengguna berbasis data dan alat AI-assisted design agar bisa mempercepat proses tanpa mengorbankan kualitas keputusan desain.',
  },
  'Pendiri Perusahaan Teknologi Pangan (Food-Tech)': {
    tier: 'cerah',
    summary:
      'Inovasi pangan (protein alternatif, pengawetan, efisiensi rantai pasok) menjadi sektor yang makin menarik minat investor.',
    tip: 'Fokus pada masalah nyata rantai pasok pangan Indonesia agar solusi lebih mudah diadopsi pasar lokal.',
  },
  'Konsultan Riset & Pengembangan (R&D Consultant)': {
    tier: 'stabil',
    summary:
      'Perusahaan manufaktur dan consumer goods terus membutuhkan dukungan riset untuk inovasi produk baru.',
    tip: 'Bangun portofolio proyek lintas industri agar bisa menawarkan wawasan yang lebih luas ke klien.',
  },
  'Pengembang Game Independen (Indie Developer)': {
    tier: 'stabil',
    summary:
      'Platform distribusi digital memudahkan developer indie merilis game sendiri, meski persaingan mendapat perhatian pemain sangat ketat.',
    tip: 'Bangun komunitas pemain sejak tahap awal pengembangan (early access) untuk validasi ide sekaligus pemasaran.',
  },
  'Kreator Teknologi Wearable': {
    tier: 'cerah',
    summary:
      'Pasar perangkat wearable (kesehatan, kebugaran) terus tumbuh seiring meningkatnya kesadaran gaya hidup sehat berbasis data.',
    tip: 'Kuasai integrasi hardware dengan analitik data kesehatan agar produk memberi nilai lebih dari sekadar gadget.',
  },
  'Filolog/Peneliti Naskah Kuno': {
    tier: 'stabil',
    summary:
      'Lembaga arsip nasional dan universitas tetap membutuhkan ahli yang bisa membaca dan menerjemahkan naskah kuno untuk pelestarian budaya.',
    tip: 'Kuasai teknologi digitalisasi dan analisis teks berbantuan komputer untuk mempercepat riset naskah kuno.',
  },
  'Ilustrator Medis (Medical Illustrator)': {
    tier: 'stabil',
    summary:
      'Materi edukasi kesehatan dan jurnal medis tetap membutuhkan ilustrasi yang akurat secara anatomis, sebuah keahlian khusus yang jarang dimiliki.',
    tip: 'Pelajari dasar anatomi/fisiologi secara mendalam agar ilustrasi tetap akurat secara medis, bukan hanya estetis.',
  },
  'Penerjemah Teknis': {
    tier: 'waspada',
    summary:
      'Machine translation makin akurat untuk teks umum, sehingga nilai tambah manusia bergeser ke dokumen teknis/hukum yang butuh presisi tinggi.',
    tip: 'Spesialisasi pada domain teknis tertentu (hukum, medis, teknik) yang membutuhkan akurasi tinggi dan sulit diserahkan sepenuhnya ke mesin.',
  },
  'Analis Data Perpustakaan': {
    tier: 'stabil',
    summary:
      'Perpustakaan modern makin mengandalkan data penggunaan untuk mengelola koleksi dan layanan secara lebih efektif.',
    tip: 'Kuasai analitik data dan visualisasi agar bisa memberi rekomendasi berbasis data ke pengelola perpustakaan.',
  },
  'Kurator Data Digital (Data Curator)': {
    tier: 'cerah',
    summary:
      'Organisasi makin membutuhkan tenaga yang bisa mengelola kualitas dan keteraturan data seiring pertumbuhan volume data digital.',
    tip: 'Kuasai standar metadata dan tata kelola data (data governance) agar data organisasi tetap rapi dan bisa dipakai secara maksimal.',
  },
  'Peneliti Arsip Sejarah': {
    tier: 'stabil',
    summary:
      'Lembaga arsip nasional dan daerah tetap membutuhkan peneliti untuk mengelola dan menafsirkan dokumen sejarah.',
    tip: 'Kuasai teknik digitalisasi arsip agar dokumen sejarah lebih mudah diakses peneliti lain maupun publik.',
  },
  'Desainer Infografis': {
    tier: 'stabil',
    summary:
      'Kebutuhan menyederhanakan data kompleks menjadi visual yang mudah dipahami terus tinggi di media, korporat, dan pemerintahan.',
    tip: 'Kuasai storytelling data (data storytelling) agar infografis tidak sekadar indah tapi juga menyampaikan pesan secara efektif.',
  },
  'Dokter Gigi': {
    tier: 'cerah',
    summary:
      'Kesadaran kesehatan gigi masyarakat terus meningkat, dan praktik klinis membutuhkan kehadiran fisik yang tidak tergantikan otomasi.',
    tip: 'Pertimbangkan spesialisasi (ortodonti, bedah mulut) untuk membuka praktik dengan nilai tambah lebih tinggi.',
  },
  Diplomat: {
    tier: 'stabil',
    summary:
      'Peran diplomasi tetap krusial bagi hubungan luar negeri Indonesia, meski jalur masuknya sangat kompetitif melalui seleksi Kemlu.',
    tip: 'Kuasai beberapa bahasa asing dan isu geopolitik terkini agar kompetitif dalam seleksi dan penempatan tugas.',
  },
  'Pendiri Lembaga Swadaya Masyarakat (NGO)': {
    tier: 'stabil',
    summary:
      'Isu-isu sosial dan lingkungan terus membutuhkan organisasi advokasi, meski pendanaan NGO sangat bergantung donor.',
    tip: 'Kuasai penulisan proposal hibah (grant writing) dan pengelolaan dana donor agar organisasi punya keberlanjutan finansial.',
  },
  'Konsultan Kebijakan Lingkungan': {
    tier: 'cerah',
    summary:
      'Komitmen iklim dan regulasi lingkungan yang makin ketat mendorong permintaan konsultan kebijakan di sektor publik dan swasta.',
    tip: 'Kuasai kerangka kebijakan iklim internasional (Paris Agreement, ESG) agar bisa menjembatani regulasi global dan implementasi lokal.',
  },
  'Pengacara Advokasi Publik': {
    tier: 'stabil',
    summary:
      'Kebutuhan advokasi hukum untuk isu publik (lingkungan, hak asasi, konsumen) tetap ada, didukung makin banyak organisasi bantuan hukum.',
    tip: 'Bangun spesialisasi pada isu tertentu (lingkungan, hak digital) agar dikenal sebagai rujukan di bidang tersebut.',
  },
  'Pengusaha EdTech': {
    tier: 'cerah',
    summary:
      'Adopsi pembelajaran digital terus tumbuh di Indonesia, membuka peluang besar bagi solusi pendidikan berbasis teknologi.',
    tip: 'Fokus pada masalah akses pendidikan di luar kota besar, sebuah pasar yang masih kurang terlayani solusi EdTech saat ini.',
  },
  'Konsultan Kesehatan Digital (HealthTech)': {
    tier: 'cerah',
    summary:
      'Telemedisin dan rekam medis digital terus berkembang seiring dorongan pemerintah untuk transformasi digital kesehatan.',
    tip: 'Kuasai regulasi kesehatan digital dan interoperabilitas data (SATUSEHAT) agar solusi bisa terintegrasi dengan sistem nasional.',
  },
  'Petugas Informatika Kesehatan': {
    tier: 'cerah',
    summary:
      'Digitalisasi layanan kesehatan nasional terus membutuhkan tenaga yang memahami data kesehatan sekaligus sistem informasi.',
    tip: 'Kuasai standar interoperabilitas data kesehatan nasional agar bisa mendukung integrasi sistem antar fasilitas kesehatan.',
  },
  'Analis Sensus/Demografi': {
    tier: 'stabil',
    summary:
      'Lembaga statistik pemerintah dan riset pembangunan tetap membutuhkan analisis data kependudukan secara berkala.',
    tip: 'Kuasai metode sampling dan proyeksi demografi modern agar analisis lebih akurat untuk perencanaan kebijakan.',
  },
  'Penyuluh Kesehatan Masyarakat': {
    tier: 'stabil',
    summary:
      'Program promosi kesehatan pemerintah dan swasta tetap membutuhkan tenaga penyuluh yang bisa mendekati masyarakat langsung.',
    tip: 'Kuasai komunikasi kesehatan berbasis media sosial agar edukasi bisa menjangkau lebih banyak orang di luar penyuluhan tatap muka.',
  },
  'Petugas Riset Sosial BPS': {
    tier: 'stabil',
    summary:
      'Kebutuhan data sosial-ekonomi untuk perencanaan pembangunan tetap tinggi dan dilakukan secara rutin oleh lembaga statistik.',
    tip: 'Kuasai metodologi survei modern dan pengolahan data berbasis perangkat lunak statistik untuk hasil riset yang lebih cepat dan akurat.',
  },
  'Perencana Kebijakan Publik': {
    tier: 'stabil',
    summary:
      'Pemerintah pusat dan daerah terus membutuhkan analis untuk merumuskan kebijakan berbasis data dan evaluasi program.',
    tip: 'Kuasai evaluasi kebijakan berbasis bukti (evidence-based policy) agar rekomendasi lebih kuat dan mudah diadvokasikan.',
  },
  'Auditor Kepatuhan (Compliance Auditor)': {
    tier: 'stabil',
    summary:
      'Regulasi keuangan dan tata kelola yang makin ketat menjaga kebutuhan auditor kepatuhan tetap tinggi di sektor jasa keuangan.',
    tip: 'Kuasai regulasi anti pencucian uang dan tata kelola risiko terbaru agar tetap relevan dengan perubahan aturan.',
  },
  'Analis Jaminan Sosial (BPJS)': {
    tier: 'stabil',
    summary:
      'Skema jaminan sosial nasional yang terus berkembang membutuhkan analis untuk menjaga keberlanjutan program.',
    tip: 'Kuasai pemodelan aktuaria untuk program jaminan sosial skala besar, bukan hanya asuransi komersial.',
  },
  Ekonom: {
    tier: 'stabil',
    summary:
      'Lembaga pemerintah, bank, dan riset tetap membutuhkan analisis ekonomi untuk pengambilan keputusan kebijakan dan bisnis.',
    tip: 'Kuasai pemodelan ekonomi berbasis data besar (big data) agar analisis makin akurat dan cepat merespons perubahan pasar.',
  },
  'Analis Kredit Perbankan': {
    tier: 'waspada',
    summary:
      'Penilaian kredit dasar makin dibantu credit scoring otomatis, sehingga peran manusia bergeser ke kasus kompleks dan pengambilan keputusan akhir.',
    tip: 'Kembangkan keahlian menilai risiko kredit untuk kasus non-standar/UMKM yang sulit dinilai model otomatis semata.',
  },
  'Manajer Portofolio': {
    tier: 'stabil',
    summary:
      'Pertumbuhan kelas menengah dan literasi investasi mendorong permintaan pengelola portofolio profesional, meski robo-advisor mulai menggantikan sebagian layanan dasar.',
    tip: 'Fokus pada strategi investasi kompleks dan hubungan klien bernilai tinggi yang membutuhkan kepercayaan personal.',
  },
  'Konsultan Pajak': {
    tier: 'stabil',
    summary:
      'Kompleksitas regulasi perpajakan yang terus berubah menjaga kebutuhan konsultan pajak tetap tinggi bagi bisnis dan individu.',
    tip: 'Ikuti update regulasi pajak digital dan e-commerce yang terus berkembang untuk melayani klien bisnis modern.',
  },
  'Analis Ekuitas (Equity Research Analyst)': {
    tier: 'stabil',
    summary:
      'Pasar modal Indonesia terus tumbuh, mendorong permintaan riset saham dari investor institusi maupun ritel.',
    tip: 'Kuasai analisis fundamental dan storytelling data agar riset lebih mudah dipahami dan dipercaya klien.',
  },
  'Manajer Risiko (Risk Manager)': {
    tier: 'cerah',
    summary:
      'Regulasi manajemen risiko yang makin ketat di sektor keuangan dan korporasi mendorong permintaan profesional risiko yang lebih tinggi.',
    tip: 'Kuasai pemodelan risiko berbasis data dan skenario stres (stress testing) untuk memenuhi standar regulator terbaru.',
  },
  'Bankir Investasi (Investment Banker)': {
    tier: 'stabil',
    summary:
      'Aktivitas merger, akuisisi, dan penggalangan dana korporasi tetap membutuhkan penasihat keuangan spesialis, meski analisis dasar makin dibantu software.',
    tip: 'Bangun jaringan relasi bisnis yang kuat karena kepercayaan personal tetap jadi faktor penentu utama di bidang ini.',
  },
  'Kreator Konten/Influencer': {
    tier: 'cerah',
    summary:
      'Ekonomi kreator terus tumbuh seiring makin banyak merek mengalihkan anggaran pemasaran ke media sosial dan konten personal.',
    tip: 'Bangun identitas konten yang khas dan diversifikasi sumber pendapatan agar tidak bergantung pada satu platform saja.',
  },
  'Pembawa Acara (MC/Host)': {
    tier: 'stabil',
    summary:
      'Acara korporat, pernikahan, dan siaran tetap membutuhkan pembawa acara yang mampu membangun suasana secara langsung.',
    tip: 'Kuasai berbagai gaya acara (formal, hiburan, siaran langsung) agar bisa menjangkau lebih banyak jenis klien.',
  },
  'Sutradara Iklan': {
    tier: 'stabil',
    summary:
      'Industri periklanan terus membutuhkan konten visual berkualitas, meski anggaran produksi makin diarahkan ke konten digital yang lebih murah.',
    tip: 'Kuasai produksi konten iklan berbiaya efisien untuk platform digital, tidak hanya iklan televisi tradisional.',
  },
  Koreografer: {
    tier: 'stabil',
    summary:
      'Industri hiburan, konser, dan konten digital terus membutuhkan koreografer untuk pertunjukan maupun konten viral.',
    tip: 'Bangun kehadiran di media sosial dengan konten koreografi pendek untuk menjangkau klien dari industri hiburan digital.',
  },
  'Pengelola Komunitas Kreatif (Community Manager)': {
    tier: 'stabil',
    summary:
      'Merek dan platform digital terus membutuhkan pengelola komunitas untuk menjaga keterlibatan dan loyalitas audiens.',
    tip: 'Kuasai analitik keterlibatan komunitas (engagement analytics) untuk menunjukkan dampak nyata kerja komunitas ke bisnis.',
  },
  'Vokalis/Penyanyi Profesional': {
    tier: 'stabil',
    summary:
      'Industri musik dan hiburan langsung (event, konser) tetap membutuhkan penampil vokal, meski persaingan sangat ketat.',
    tip: 'Bangun jaringan lintas genre dan platform (live event, digital release) agar sumber pendapatan lebih beragam.',
  },
  'Pengusaha Salon Kecantikan': {
    tier: 'stabil',
    summary:
      'Permintaan layanan kecantikan tetap stabil di berbagai segmen kota, didukung tren perawatan diri yang terus meningkat.',
    tip: 'Bangun sistem membership dan promosi digital untuk menjaga pelanggan tetap datang secara rutin.',
  },
  'Guru PAUD': {
    tier: 'cerah',
    summary:
      'Kesadaran pentingnya pendidikan usia dini terus meningkat, mendorong pertumbuhan lembaga PAUD di berbagai daerah.',
    tip: 'Kuasai metode belajar sambil bermain berbasis riset perkembangan anak agar makin dipercaya orang tua.',
  },
  'Guru Bahasa Asing': {
    tier: 'stabil',
    summary:
      'Permintaan penguasaan bahasa asing untuk pendidikan dan karier tetap tinggi, meski aplikasi belajar bahasa berbasis AI makin populer.',
    tip: 'Fokus pada kelas percakapan dan konteks budaya yang sulit digantikan aplikasi belajar bahasa otomatis.',
  },
  'Ilustrator Buku Anak': {
    tier: 'stabil',
    summary:
      'Industri penerbitan buku anak lokal tetap tumbuh, didukung meningkatnya kesadaran literasi sejak dini.',
    tip: 'Bangun gaya visual yang khas dan konsisten agar dikenali penerbit maupun pembaca sebagai identitas personal.',
  },
  'Pengelola Taman Baca Masyarakat': {
    tier: 'stabil',
    summary:
      'Gerakan literasi komunitas terus didukung pemerintah dan filantropi untuk meningkatkan minat baca di berbagai daerah.',
    tip: 'Bangun program literasi kreatif (storytelling, klub baca) agar taman baca lebih aktif dan menarik minat anak-anak.',
  },
  'Terapis Bermain Anak (Play Therapist)': {
    tier: 'cerah',
    summary:
      'Kesadaran kesehatan mental anak meningkat, membuka permintaan terapi bermain sebagai pendekatan yang tidak tergantikan teknologi.',
    tip: 'Ambil sertifikasi terapi bermain berbasis bukti agar bisa bekerja di klinik psikologi anak maupun sekolah inklusi.',
  },
  'Penulis Konten Edukasi': {
    tier: 'stabil',
    summary:
      'Kebutuhan materi ajar digital yang menarik terus tumbuh seiring adopsi pembelajaran daring di sekolah dan platform edukasi.',
    tip: 'Kuasai prinsip desain instruksional (instructional design) agar konten edukasi lebih efektif, bukan sekadar menarik.',
  },
  'Pembimbing Ekstrakurikuler Seni': {
    tier: 'stabil',
    summary:
      'Sekolah tetap membutuhkan pembimbing untuk kegiatan seni ekstrakurikuler sebagai bagian pengembangan bakat siswa.',
    tip: 'Bangun portofolio pencapaian siswa (lomba, pameran) untuk menunjukkan dampak nyata program ekstrakurikuler.',
  },
  'Pengusaha Aksesoris Handmade': {
    tier: 'stabil',
    summary:
      'Pasar aksesoris handmade tetap punya basis penggemar loyal yang menghargai produk personal dan bernilai cerita.',
    tip: 'Manfaatkan marketplace kreatif dan media sosial untuk membangun cerita di balik produk sebagai nilai jual utama.',
  },
  'Pemilik Brand Skincare': {
    tier: 'cerah',
    summary:
      'Industri kecantikan lokal terus tumbuh pesat dengan basis konsumen muda yang besar dan terbuka pada merek baru.',
    tip: 'Prioritaskan sertifikasi BPOM dan transparansi bahan sejak awal untuk membangun kepercayaan konsumen jangka panjang.',
  },
  'Direktur Kreatif Agensi Iklan': {
    tier: 'stabil',
    summary:
      'Agensi kreatif tetap dibutuhkan untuk kampanye merek, meski AI generative makin membantu tahap awal ideasi visual.',
    tip: 'Fokus pada strategi besar dan storytelling merek yang membutuhkan penilaian manusia, bukan hanya eksekusi visual.',
  },
  'Pengusaha Kue/Bakery': {
    tier: 'stabil',
    summary:
      'Permintaan produk bakery untuk konsumsi harian maupun acara khusus tetap stabil di berbagai segmen pasar.',
    tip: 'Bangun identitas rasa/kemasan yang khas dan manfaatkan pre-order online untuk mengelola produksi lebih efisien.',
  },
  'Pengelola Toko Buku Independen': {
    tier: 'waspada',
    summary:
      'Toko buku independen menghadapi tekanan dari e-commerce dan buku digital, namun tetap punya ceruk pembaca yang menghargai pengalaman fisik.',
    tip: 'Bangun toko sebagai ruang komunitas (diskusi buku, event penulis) agar nilai tambahnya lebih dari sekadar tempat membeli buku.',
  },
  'Desainer Kemasan Produk (Packaging Designer)': {
    tier: 'cerah',
    summary:
      'Pertumbuhan UMKM dan e-commerce terus mendorong kebutuhan desain kemasan yang menarik dan fungsional.',
    tip: 'Pelajari prinsip kemasan berkelanjutan (sustainable packaging) yang makin menjadi nilai jual bagi merek modern.',
  },
  'Pengusaha Jasa Cetak Foto/Album': {
    tier: 'stabil',
    summary:
      'Permintaan cetak foto fisik (album pernikahan, cetak custom) tetap ada meski sebagian besar foto kini disimpan digital.',
    tip: 'Tawarkan produk cetak premium (album kulit, kanvas) yang sulit digantikan penyimpanan digital biasa.',
  },
  'Manajer Rekrutmen (Talent Acquisition)': {
    tier: 'stabil',
    summary:
      'Perusahaan terus membutuhkan tenaga rekrutmen meski alat AI makin membantu penyaringan awal kandidat.',
    tip: 'Fokus pada penilaian kecocokan budaya dan wawancara mendalam, area yang masih sulit sepenuhnya diotomasi.',
  },
  Notaris: {
    tier: 'stabil',
    summary:
      'Transaksi properti, bisnis, dan hukum keluarga tetap membutuhkan notaris yang punya kewenangan legal resmi.',
    tip: 'Kuasai transaksi digital dan properti agar bisa melayani klien dengan kebutuhan legal yang makin modern.',
  },
  'Manajer Operasional Sekolah': {
    tier: 'stabil',
    summary:
      'Sekolah tetap membutuhkan pengelolaan operasional yang rapi, dari administrasi hingga fasilitas.',
    tip: 'Kuasai sistem manajemen sekolah digital agar operasional lebih efisien dan mudah dipantau.',
  },
  'Pengelola Panti Asuhan/Yayasan': {
    tier: 'stabil',
    summary:
      'Organisasi filantropi dan yayasan sosial tetap membutuhkan pengelola yang mampu menjalankan program secara akuntabel.',
    tip: 'Kuasai pelaporan keuangan yang transparan untuk membangun kepercayaan donor dan keberlanjutan organisasi.',
  },
  'Manajer Hubungan Nasabah (Relationship Manager)': {
    tier: 'stabil',
    summary:
      'Layanan keuangan premium tetap mengandalkan hubungan personal dengan nasabah meski layanan dasar makin terdigitalisasi.',
    tip: 'Fokus pada nasabah bernilai tinggi yang membutuhkan layanan personal, bukan transaksi rutin yang makin diotomasi aplikasi.',
  },
  'Koordinator Relawan (Volunteer Coordinator)': {
    tier: 'stabil',
    summary:
      'Organisasi sosial dan kemanusiaan tetap membutuhkan koordinasi relawan untuk menjalankan program secara efektif.',
    tip: 'Kuasai platform manajemen relawan digital agar bisa mengelola lebih banyak relawan dengan efisien.',
  },
  'Manajer Administrasi Kepegawaian': {
    tier: 'stabil',
    summary:
      'Perusahaan tetap membutuhkan pengelolaan administrasi kepegawaian yang rapi, meski sebagian proses makin terotomasi sistem HRIS.',
    tip: 'Kuasai sistem HRIS modern agar bisa fokus pada isu kepegawaian yang lebih strategis, bukan hanya administratif.',
  },
  'Konsultan Branding & Kemasan': {
    tier: 'stabil',
    summary:
      'Branding dan desain kemasan tetap krusial bagi UMKM dan produk konsumen yang bersaing di rak toko maupun marketplace, meski AI generative mulai membantu tahap mockup awal.',
    tip: 'Kuasai riset tren kemasan berkelanjutan dan regulasi label produk agar bisa menawarkan nilai lebih dari sekadar visual.',
  },
  'Analis Riset Pasar Kuantitatif': {
    tier: 'stabil',
    summary:
      'Perusahaan tetap membutuhkan riset pasar berbasis data kuantitatif untuk keputusan bisnis dan investasi, meski pengumpulan data dasar makin terotomasi.',
    tip: 'Kuasai statistik lanjutan dan tools riset berbasis AI agar bisa fokus pada interpretasi strategis, bukan sekadar pengumpulan data.',
  },
};
