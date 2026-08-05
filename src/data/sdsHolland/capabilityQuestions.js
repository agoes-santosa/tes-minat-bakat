// Self-estimate ("competency") questions - the second half of the real
// SDS methodology alongside the Activities/interest section in
// questions.js. Two per RIASEC category, rated on a 1-5 confidence
// scale, so we can compare interest vs. self-rated capability per type
// without doubling the whole 60-item test.

export const capabilityQuestions = [
  { id: 'RC1', category: 'R', text_id: 'Memperbaiki atau merakit alat, mesin, atau peralatan teknis' },
  { id: 'RC2', category: 'R', text_id: 'Melakukan pekerjaan fisik/manual dengan tangan secara terampil' },

  { id: 'IC1', category: 'I', text_id: 'Menganalisis data atau memecahkan masalah ilmiah secara sistematis' },
  { id: 'IC2', category: 'I', text_id: 'Menggunakan logika dan matematika untuk memahami sesuatu secara mendalam' },

  { id: 'AC1', category: 'A', text_id: 'Menciptakan karya visual (menggambar, melukis, atau desain)' },
  { id: 'AC2', category: 'A', text_id: 'Menulis secara kreatif atau bermain/mengarang musik' },

  { id: 'SC1', category: 'S', text_id: 'Mengajar atau menjelaskan sesuatu dengan jelas kepada orang lain' },
  { id: 'SC2', category: 'S', text_id: 'Memahami dan membantu masalah pribadi/emosional orang lain' },

  { id: 'EC1', category: 'E', text_id: 'Memimpin dan mengorganisir orang lain menuju suatu tujuan' },
  { id: 'EC2', category: 'E', text_id: 'Menjual, menegosiasikan, atau meyakinkan orang lain' },

  { id: 'CC1', category: 'C', text_id: 'Mengelola data, angka, atau catatan secara rapi dan akurat' },
  { id: 'CC2', category: 'C', text_id: 'Mengikuti prosedur serta menyelesaikan tugas administratif secara teliti' },
];

export const CAPABILITY_SCALE = [
  { value: 1, label: 'Sangat Rendah' },
  { value: 2, label: 'Rendah' },
  { value: 3, label: 'Sedang' },
  { value: 4, label: 'Tinggi' },
  { value: 5, label: 'Sangat Tinggi' },
];
