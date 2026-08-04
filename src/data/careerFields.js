// Shared "field of study" content, reused across many occupations (e.g.
// several finance-related roles all point to 'akuntansi'). Universities
// are listed best-to-worst by general reputation for that field in
// Indonesia (accreditation/national standing), not an official ranking.
// `faculty` is an array because some universities offer a program split
// across more than one faculty/school, or the exact home faculty has
// changed over time as universities reorganize - list what's most
// current/likely, but treat it as indicative rather than authoritative.

export const careerFields = {
  arsitektur: {
    name: 'Arsitektur',
    description_id:
      'Mempelajari perancangan bangunan dan ruang, memadukan aspek fungsi, estetika, struktur, dan lingkungan.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Arsitektur, Perencanaan, dan Pengembangan Kebijakan (SAPPK)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknik Sipil, Perencanaan, dan Kebumian (FTSPK)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Katolik Parahyangan (Unpar)', faculty: ['Fakultas Teknik'] },
    ],
  },
  'desain-produk': {
    name: 'Desain Produk',
    description_id:
      'Belajar merancang produk fisik yang fungsional, estetis, dan layak diproduksi massal, mulai dari riset kebutuhan pengguna hingga prototipe.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Seni Rupa dan Desain (FSRD)'] },
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Rupa'] },
      { name: 'Universitas Trisakti', faculty: ['Fakultas Teknik Sipil dan Perencanaan'] },
      { name: 'Universitas Pelita Harapan (UPH)', faculty: ['Fakultas Desain'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Design'] },
    ],
  },
  fotografi: {
    name: 'Fotografi',
    description_id: 'Mempelajari teknik, komposisi, dan bahasa visual fotografi untuk keperluan seni, jurnalistik, maupun komersial.',
    universities: [
      { name: 'Institut Kesenian Jakarta (IKJ)', faculty: ['Fakultas Seni Rupa'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Seni dan Desain'] },
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Media Rekam'] },
      { name: 'Universitas Trisakti', faculty: ['Fakultas Seni Rupa dan Desain'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Design'] },
    ],
  },
  'film-televisi': {
    name: 'Film dan Televisi',
    description_id:
      'Mempelajari produksi audiovisual, mulai dari penulisan skenario, penyutradaraan, sinematografi, hingga penyuntingan.',
    universities: [
      { name: 'Institut Kesenian Jakarta (IKJ)', faculty: ['Fakultas Film dan Televisi'] },
      { name: 'Institut Seni Budaya Indonesia (ISBI) Bandung', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Seni dan Desain'] },
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Media Rekam'] },
      { name: 'LSPR Institute of Communication & Business', faculty: ['Faculty of Communication'] },
    ],
  },
  'desain-interior': {
    name: 'Desain Interior',
    description_id: 'Mempelajari perancangan tata ruang dalam bangunan agar fungsional, nyaman, dan estetis.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Seni Rupa dan Desain (FSRD)'] },
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Rupa'] },
      { name: 'Universitas Trisakti', faculty: ['Fakultas Teknik Sipil dan Perencanaan'] },
      { name: 'Universitas Pelita Harapan (UPH)', faculty: ['Fakultas Desain'] },
      { name: 'Universitas Kristen Petra', faculty: ['Fakultas Seni dan Desain'] },
    ],
  },
  'animasi-multimedia': {
    name: 'Animasi dan Teknologi Multimedia/Game',
    description_id:
      'Mempelajari pembuatan animasi, efek visual, dan pengembangan game, memadukan seni visual dengan teknologi komputer.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Seni Rupa dan Desain (FSRD)', 'Sekolah Teknik Elektro dan Informatika (STEI)'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Design', 'School of Computer Science'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Seni dan Desain'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Elektro dan Informatika Cerdas'] },
      { name: 'Universitas Dian Nuswantoro (Udinus)', faculty: ['Fakultas Ilmu Komputer'] },
    ],
  },
  keperawatan: {
    name: 'Ilmu Keperawatan',
    description_id: 'Mempelajari asuhan keperawatan pasien, mulai dari promosi kesehatan hingga rehabilitasi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Keperawatan'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Keperawatan'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Keperawatan'] },
      { name: 'Universitas Hasanuddin (Unhas)', faculty: ['Fakultas Keperawatan'] },
    ],
  },
  fisioterapi: {
    name: 'Fisioterapi',
    description_id: 'Mempelajari pemulihan dan peningkatan fungsi gerak tubuh pasien melalui terapi fisik.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Udayana', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Esa Unggul', faculty: ['Fakultas Fisioterapi'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Sekolah Vokasi'] },
      { name: 'Poltekkes Kemenkes Surakarta', faculty: ['Jurusan Fisioterapi'] },
    ],
  },
  gizi: {
    name: 'Ilmu Gizi',
    description_id: 'Mempelajari hubungan antara makanan, nutrisi, dan kesehatan tubuh manusia.',
    universities: [
      { name: 'IPB University', faculty: ['Fakultas Ekologi Manusia'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Kedokteran'] },
    ],
  },
  k3: {
    name: 'Kesehatan dan Keselamatan Kerja (K3)',
    description_id:
      'Mempelajari cara mengidentifikasi, mencegah, dan mengelola risiko kecelakaan serta penyakit akibat kerja.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Sebelas Maret (UNS)', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Binawan', faculty: ['Fakultas Ilmu Kesehatan'] },
    ],
  },
  'teknologi-laboratorium-medis': {
    name: 'Teknologi Laboratorium Medis',
    description_id: 'Mempelajari pemeriksaan sampel biologis (darah, jaringan, dll.) untuk mendukung diagnosis medis.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kedokteran (Vokasi)'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Vokasi'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Sekolah Vokasi'] },
      { name: 'Poltekkes Kemenkes Jakarta III', faculty: ['Jurusan Teknologi Laboratorium Medis'] },
      { name: 'Universitas Muhammadiyah Semarang', faculty: ['Fakultas Ilmu Keperawatan dan Kesehatan'] },
    ],
  },
  'kedokteran-hewan': {
    name: 'Kedokteran Hewan',
    description_id: 'Mempelajari kesehatan, penyakit, dan perawatan medis pada hewan.',
    universities: [
      { name: 'IPB University', faculty: ['Fakultas Kedokteran Hewan'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Kedokteran Hewan'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Kedokteran Hewan'] },
      { name: 'Universitas Udayana', faculty: ['Fakultas Kedokteran Hewan'] },
      { name: 'Universitas Syiah Kuala', faculty: ['Fakultas Kedokteran Hewan'] },
    ],
  },
  'teknik-sipil': {
    name: 'Teknik Sipil',
    description_id: 'Mempelajari perancangan, pembangunan, dan pemeliharaan infrastruktur seperti gedung, jalan, dan jembatan.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Teknik Sipil dan Lingkungan (FTSL)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknik Sipil, Perencanaan, dan Kebumian (FTSPK)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Teknik'] },
    ],
  },
  manajemen: {
    name: 'Manajemen',
    description_id: 'Mempelajari pengelolaan organisasi dan bisnis, mencakup pemasaran, sumber daya manusia, operasi, dan strategi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ekonomika dan Bisnis'] },
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Bisnis dan Manajemen (SBM)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
    ],
  },
  'teknik-industri': {
    name: 'Teknik Industri',
    description_id: 'Mempelajari optimasi sistem produksi, kualitas, dan proses bisnis secara efisien.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Teknologi Industri (FTI)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Industri dan Rekayasa Sistem'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Telkom University', faculty: ['Fakultas Rekayasa Industri'] },
    ],
  },
  'teknik-elektro': {
    name: 'Teknik Elektro',
    description_id: 'Mempelajari sistem kelistrikan, elektronika, telekomunikasi, dan kendali.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Teknik Elektro dan Informatika (STEI)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Elektro dan Informatika Cerdas'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Teknik'] },
    ],
  },
  informatika: {
    name: 'Ilmu Komputer/Informatika',
    description_id: 'Mempelajari perancangan perangkat lunak, algoritma, dan sistem komputer.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Komputer (Fasilkom)'] },
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Teknik Elektro dan Informatika (STEI)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)', 'Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Elektro dan Informatika Cerdas'] },
      { name: 'IPB University', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
    ],
  },
  'teknik-geodesi': {
    name: 'Teknik Geodesi/Geomatika',
    description_id: 'Mempelajari pengukuran, pemetaan, dan analisis data spasial permukaan bumi.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Teknik Sipil dan Lingkungan (FTSL)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknik Sipil, Perencanaan, dan Kebumian (FTSPK)'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Pakuan', faculty: ['Fakultas Teknik'] },
    ],
  },
  'pendidikan-guru': {
    name: 'Pendidikan (Keguruan)',
    description_id: 'Mempelajari ilmu pedagogi dan metode pengajaran untuk mendidik di berbagai jenjang.',
    universities: [
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Ilmu Pendidikan dan Keguruan'] },
      { name: 'Universitas Negeri Malang (UM)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Surabaya (Unesa)', faculty: ['Fakultas Ilmu Pendidikan'] },
    ],
  },
  'terapi-okupasi': {
    name: 'Terapi Okupasi',
    description_id: 'Mempelajari pemulihan kemampuan seseorang melakukan aktivitas sehari-hari melalui terapi fungsional.',
    universities: [
      { name: 'Universitas Indonesia (UI, Vokasi)', faculty: ['Fakultas Kedokteran (Vokasi)'] },
      { name: 'Poltekkes Kemenkes Surakarta', faculty: ['Jurusan Okupasi Terapi'] },
      { name: 'Poltekkes Kemenkes Jakarta III', faculty: ['Jurusan Okupasi Terapi'] },
      { name: 'Universitas Esa Unggul', faculty: ['Fakultas Ilmu Kesehatan'] },
      { name: 'Poltekkes Kemenkes Malang', faculty: ['Jurusan Okupasi Terapi'] },
    ],
  },
  'tata-kecantikan': {
    name: 'Tata Kecantikan/Tata Rias',
    description_id: 'Mempelajari perawatan kulit, rambut, dan tata rias profesional.',
    universities: [
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Negeri Malang (UM)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Negeri Semarang (Unnes)', faculty: ['Fakultas Teknik'] },
      { name: 'Politeknik Kesehatan (Poltekkes) setempat', faculty: ['Jurusan Kecantikan/Kesehatan'] },
    ],
  },
  'pendidikan-seni': {
    name: 'Pendidikan Seni',
    description_id: 'Mempelajari cara mengajarkan seni rupa, musik, atau tari kepada siswa di sekolah.',
    universities: [
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Pendidikan Seni dan Desain'] },
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Bahasa, Seni, dan Budaya'] },
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Bahasa dan Seni'] },
      { name: 'Universitas Negeri Semarang (Unnes)', faculty: ['Fakultas Bahasa dan Seni'] },
      { name: 'Universitas Negeri Malang (UM)', faculty: ['Fakultas Sastra'] },
    ],
  },
  'seni-rupa-kriya': {
    name: 'Seni Rupa dan Kriya',
    description_id: 'Mempelajari penciptaan karya seni rupa dan kerajinan, baik untuk ekspresi maupun nilai komersial.',
    universities: [
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Rupa'] },
      { name: 'Institut Teknologi Bandung (FSRD ITB)', faculty: ['Fakultas Seni Rupa dan Desain (FSRD)'] },
      { name: 'ISI Surakarta', faculty: ['Fakultas Seni Rupa dan Desain'] },
      { name: 'ISI Denpasar', faculty: ['Fakultas Seni Rupa dan Desain'] },
      { name: 'Institut Kesenian Jakarta (IKJ)', faculty: ['Fakultas Seni Rupa'] },
    ],
  },
  'agroteknologi-hortikultura': {
    name: 'Agroteknologi/Hortikultura',
    description_id: 'Mempelajari budidaya tanaman, termasuk tanaman hias dan bunga, secara ilmiah.',
    universities: [
      { name: 'IPB University', faculty: ['Fakultas Pertanian'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Pertanian'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Pertanian'] },
      { name: 'Universitas Brawijaya', faculty: ['Fakultas Pertanian'] },
      { name: 'Universitas Andalas', faculty: ['Fakultas Pertanian'] },
    ],
  },
  'ilmu-keolahragaan': {
    name: 'Ilmu Keolahragaan/Kepelatihan',
    description_id: 'Mempelajari ilmu olahraga, pelatihan fisik, dan pendidikan jasmani.',
    universities: [
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Ilmu Keolahragaan dan Kesehatan'] },
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Pendidikan Olahraga dan Kesehatan'] },
      { name: 'Universitas Negeri Surabaya (Unesa)', faculty: ['Fakultas Ilmu Olahraga'] },
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Ilmu Olahraga'] },
      { name: 'Universitas Sebelas Maret (UNS)', faculty: ['Fakultas Keguruan dan Ilmu Pendidikan'] },
    ],
  },
  'desain-komunikasi-visual': {
    name: 'Desain Komunikasi Visual (DKV)',
    description_id: 'Mempelajari komunikasi melalui elemen visual seperti tipografi, ilustrasi, dan branding.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Seni Rupa dan Desain (FSRD)'] },
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Rupa'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Seni dan Desain'] },
      { name: 'Universitas Trisakti', faculty: ['Fakultas Seni Rupa dan Desain'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Design'] },
    ],
  },
  'tata-busana': {
    name: 'Tata Busana/Fashion Design',
    description_id: 'Mempelajari perancangan, pembuatan pola, dan produksi busana.',
    universities: [
      { name: 'ESMOD Jakarta', faculty: ['Program Fashion Design'] },
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Pendidikan Teknologi dan Kejuruan'] },
      { name: 'LaSalle College Jakarta', faculty: ['School of Fashion'] },
      { name: 'Universitas Ciputra', faculty: ['Faculty of Business (Fashion Product Design and Business)'] },
      { name: 'Universitas Trisakti', faculty: ['Fakultas Seni Rupa dan Desain'] },
    ],
  },
  'manajemen-event': {
    name: 'Manajemen Event/MICE',
    description_id: 'Mempelajari perencanaan dan pengelolaan acara, mulai dari konsep hingga eksekusi.',
    universities: [
      { name: 'Universitas Indonesia (UI, Vokasi)', faculty: ['Sekolah Vokasi (Program Studi MICE)'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Hospitality and Tourism'] },
      { name: 'Universitas Sahid', faculty: ['Fakultas Pariwisata'] },
      { name: 'Politeknik Negeri Jakarta', faculty: ['Jurusan Administrasi Niaga'] },
      { name: 'Universitas Podomoro', faculty: ['Faculty of Communication'] },
    ],
  },
  'tata-boga': {
    name: 'Tata Boga/Ilmu Kuliner',
    description_id: 'Mempelajari seni dan ilmu memasak, pengolahan pangan, serta manajemen kuliner.',
    universities: [
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Pendidikan Teknologi dan Kejuruan'] },
      { name: 'Sekolah Tinggi Pariwisata Trisakti', faculty: ['Program Studi Tata Boga'] },
      { name: 'Universitas Ciputra', faculty: ['Faculty of Business (Culinary Business)'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Hospitality and Tourism'] },
      { name: 'Politeknik Pariwisata NHI Bandung', faculty: ['Jurusan Hospitaliti (Tata Boga)'] },
    ],
  },
  'teknik-grafika-percetakan': {
    name: 'Teknik Grafika dan Penerbitan',
    description_id: 'Mempelajari proses produksi cetak, dari pracetak hingga finishing.',
    universities: [
      { name: 'Politeknik Negeri Media Kreatif (Polimedia) Jakarta', faculty: ['Jurusan Teknik Grafika dan Penerbitan'] },
      { name: 'Politeknik Negeri Semarang (Polines)', faculty: ['Jurusan Teknik'] },
      { name: 'Institut Teknologi Bandung (Vokasi)', faculty: ['Sekolah Vokasi'] },
      { name: 'Universitas Pancasila', faculty: ['Fakultas Teknik'] },
      { name: 'Politeknik Negeri Jakarta', faculty: ['Jurusan Teknik Grafika dan Penerbitan'] },
    ],
  },
  'teknik-otomotif': {
    name: 'Teknik Otomotif',
    description_id: 'Mempelajari perancangan, perawatan, dan perbaikan kendaraan bermotor.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Teknik Mesin dan Dirgantara (FTMD)'] },
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Teknik'] },
      { name: 'Politeknik Manufaktur Bandung', faculty: ['Jurusan Teknik Mesin'] },
      { name: 'Universitas Negeri Malang (UM)', faculty: ['Fakultas Teknik'] },
      { name: 'Politeknik Negeri Jakarta', faculty: ['Jurusan Teknik Mesin'] },
    ],
  },
  pariwisata: {
    name: 'Perhotelan dan Pariwisata',
    description_id: 'Mempelajari pengelolaan industri perhotelan, restoran, dan destinasi wisata.',
    universities: [
      { name: 'Politeknik Pariwisata NHI Bandung', faculty: ['Jurusan Hospitaliti/Pariwisata'] },
      { name: 'Universitas Udayana', faculty: ['Fakultas Pariwisata'] },
      { name: 'Sekolah Tinggi Pariwisata Trisakti', faculty: ['Program Studi Pariwisata'] },
      { name: 'Universitas Sahid', faculty: ['Fakultas Pariwisata'] },
      { name: 'Politeknik Pariwisata Bali', faculty: ['Jurusan Pariwisata'] },
    ],
  },
  'manajemen-informasi-kesehatan': {
    name: 'Manajemen Informasi Kesehatan/Rekam Medis',
    description_id: 'Mempelajari pengelolaan data dan administrasi rekam medis pasien.',
    universities: [
      { name: 'Universitas Indonesia (UI, Vokasi)', faculty: ['Sekolah Vokasi (Program Studi Rekam Medis)'] },
      { name: 'Universitas Esa Unggul', faculty: ['Fakultas Ilmu Kesehatan'] },
      { name: 'Universitas Dian Nuswantoro (Udinus)', faculty: ['Fakultas Kesehatan'] },
      { name: 'Poltekkes Kemenkes Jakarta II', faculty: ['Jurusan Rekam Medis dan Informasi Kesehatan'] },
      { name: 'Universitas Jenderal Achmad Yani', faculty: ['Fakultas Kesehatan'] },
    ],
  },
  farmasi: {
    name: 'Farmasi',
    description_id: 'Mempelajari pembuatan, formulasi, dan penggunaan obat-obatan secara aman dan efektif.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Farmasi (SF)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Farmasi'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Farmasi'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Farmasi'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Farmasi'] },
    ],
  },
  'administrasi-bisnis': {
    name: 'Administrasi Bisnis/Niaga',
    description_id: 'Mempelajari pengelolaan operasional dan administrasi organisasi bisnis.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisipol)'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Brawijaya', faculty: ['Fakultas Ilmu Administrasi'] },
    ],
  },
  'ilmu-perpustakaan': {
    name: 'Ilmu Perpustakaan dan Kearsipan',
    description_id: 'Mempelajari pengelolaan, klasifikasi, dan pelestarian informasi serta arsip.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Pengetahuan Budaya (FIB)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Sekolah Vokasi'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Komunikasi'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'UIN Syarif Hidayatullah Jakarta', faculty: ['Fakultas Adab dan Humaniora'] },
    ],
  },
  'manajemen-logistik': {
    name: 'Manajemen Logistik dan Rantai Pasok',
    description_id: 'Mempelajari perencanaan dan pengendalian arus barang, dari produksi hingga distribusi.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Sekolah Vokasi (Rekayasa Industri)'] },
      { name: 'Universitas Indonesia (UI, Vokasi)', faculty: ['Sekolah Vokasi (Program Studi Administrasi Logistik dan Bisnis)'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Business', 'School of Industrial Engineering'] },
      { name: 'Politeknik APP Jakarta', faculty: ['Jurusan Manajemen Logistik'] },
      { name: 'President University', faculty: ['Faculty of Business'] },
    ],
  },
  psikologi: {
    name: 'Psikologi',
    description_id: 'Mempelajari perilaku dan proses mental manusia, termasuk penerapannya dalam konseling dan organisasi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Psikologi'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Psikologi'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Psikologi'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Psikologi'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Psikologi'] },
    ],
  },
  'bimbingan-konseling': {
    name: 'Bimbingan dan Konseling',
    description_id: 'Mempelajari cara membantu individu mengatasi masalah pribadi, sosial, dan akademik.',
    universities: [
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Pendidikan Indonesia (UPI)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Surabaya (Unesa)', faculty: ['Fakultas Ilmu Pendidikan'] },
      { name: 'Universitas Negeri Semarang (Unnes)', faculty: ['Fakultas Ilmu Pendidikan'] },
    ],
  },
  jurnalistik: {
    name: 'Jurnalistik',
    description_id: 'Mempelajari peliputan, penulisan, dan penyampaian berita secara akurat dan etis.',
    universities: [
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Komunikasi'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'LSPR Institute of Communication & Business', faculty: ['Faculty of Communication'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisipol)'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Ilmu Komunikasi'] },
    ],
  },
  'sejarah-arkeologi': {
    name: 'Ilmu Sejarah/Arkeologi',
    description_id: 'Mempelajari peristiwa masa lalu dan peninggalan budaya melalui sumber sejarah dan artefak.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Pengetahuan Budaya (FIB)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Ilmu Budaya'] },
    ],
  },
  'teknik-kimia': {
    name: 'Teknik Kimia',
    description_id: 'Mempelajari proses pengolahan bahan mentah menjadi produk melalui reaksi kimia dan fisika.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Teknologi Industri (FTI)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Teknik'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Industri dan Rekayasa Sistem'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Teknik'] },
    ],
  },
  'sistem-informasi': {
    name: 'Sistem Informasi',
    description_id: 'Mempelajari perancangan sistem teknologi informasi untuk mendukung proses bisnis organisasi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Komputer (Fasilkom)'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Teknologi Elektro dan Informatika Cerdas'] },
      { name: 'Telkom University', faculty: ['Fakultas Rekayasa Industri'] },
      { name: 'Universitas Bina Nusantara (Binus)', faculty: ['School of Information Systems'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Teknik'] },
    ],
  },
  'sastra-bahasa': {
    name: 'Sastra/Bahasa Indonesia',
    description_id: 'Mempelajari kajian bahasa, sastra, dan keterampilan menulis secara mendalam.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Pengetahuan Budaya (FIB)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ilmu Budaya'] },
      { name: 'Universitas Sebelas Maret (UNS)', faculty: ['Fakultas Ilmu Budaya'] },
    ],
  },
  kedokteran: {
    name: 'Kedokteran',
    description_id: 'Mempelajari ilmu diagnosis, pengobatan, dan pencegahan penyakit pada manusia.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Kedokteran'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Kedokteran'] },
    ],
  },
  'kesehatan-masyarakat': {
    name: 'Kesehatan Masyarakat',
    description_id: 'Mempelajari pencegahan penyakit dan promosi kesehatan pada tingkat populasi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Hasanuddin (Unhas)', faculty: ['Fakultas Kesehatan Masyarakat'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Kesehatan Masyarakat'] },
    ],
  },
  'administrasi-publik': {
    name: 'Ilmu Administrasi Publik/Negara',
    description_id: 'Mempelajari perumusan dan implementasi kebijakan serta pengelolaan organisasi pemerintahan.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisipol)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Brawijaya', faculty: ['Fakultas Ilmu Administrasi'] },
    ],
  },
  statistika: {
    name: 'Statistika',
    description_id: 'Mempelajari pengumpulan, analisis, dan interpretasi data untuk pengambilan keputusan.',
    universities: [
      { name: 'IPB University', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Institut Teknologi Sepuluh Nopember (ITS)', faculty: ['Fakultas Sains dan Analitika Data'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
    ],
  },
  aktuaria: {
    name: 'Aktuaria',
    description_id:
      'Mempelajari penerapan matematika, statistika, dan analisis risiko keuangan, khususnya di industri asuransi dan dana pensiun.',
    universities: [
      { name: 'Institut Teknologi Bandung (ITB)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
      { name: 'IPB University', faculty: ['Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)'] },
    ],
  },
  akuntansi: {
    name: 'Akuntansi',
    description_id: 'Mempelajari pencatatan, pelaporan, dan analisis keuangan organisasi.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ekonomika dan Bisnis'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ekonomi dan Bisnis'] },
      { name: 'Universitas Diponegoro (Undip)', faculty: ['Fakultas Ekonomika dan Bisnis'] },
    ],
  },
  'ilmu-komunikasi': {
    name: 'Ilmu Komunikasi',
    description_id: 'Mempelajari proses komunikasi manusia, termasuk media, hubungan masyarakat, dan komunikasi bisnis.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Komunikasi'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisipol)'] },
      { name: 'Universitas Airlangga (Unair)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Multimedia Nusantara (UMN)', faculty: ['Fakultas Ilmu Komunikasi'] },
    ],
  },
  'seni-teater-pertunjukan': {
    name: 'Seni Teater/Pertunjukan',
    description_id: 'Mempelajari seni akting, penyutradaraan, dan produksi pertunjukan panggung.',
    universities: [
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Institut Kesenian Jakarta (IKJ)', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'ISI Surakarta', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'ISI Denpasar', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Universitas Negeri Jakarta (UNJ)', faculty: ['Fakultas Bahasa dan Seni'] },
    ],
  },
  'seni-musik': {
    name: 'Seni Musik',
    description_id: 'Mempelajari teori musik, komposisi, dan keterampilan bermain atau mengajar musik.',
    universities: [
      { name: 'ISI Yogyakarta', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Universitas Pelita Harapan (Konservatori Musik)', faculty: ['School of Music'] },
      { name: 'ISI Surakarta', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Institut Kesenian Jakarta (IKJ)', faculty: ['Fakultas Seni Pertunjukan'] },
      { name: 'Universitas Negeri Yogyakarta (UNY)', faculty: ['Fakultas Bahasa, Seni, dan Budaya'] },
    ],
  },
  'kesejahteraan-sosial': {
    name: 'Ilmu Kesejahteraan Sosial',
    description_id: 'Mempelajari isu-isu sosial dan cara merancang program pemberdayaan masyarakat.',
    universities: [
      { name: 'Universitas Indonesia (UI)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Padjadjaran (Unpad)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'Universitas Gadjah Mada (UGM)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisipol)'] },
      { name: 'Universitas Sumatera Utara (USU)', faculty: ['Fakultas Ilmu Sosial dan Ilmu Politik (Fisip)'] },
      { name: 'UIN Syarif Hidayatullah Jakarta', faculty: ['Fakultas Ilmu Dakwah dan Ilmu Komunikasi'] },
    ],
  },
};
