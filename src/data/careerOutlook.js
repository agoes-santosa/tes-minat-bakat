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
};
