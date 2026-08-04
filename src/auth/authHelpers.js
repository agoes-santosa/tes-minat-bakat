// Firebase Auth has no native "username + PIN" credential type, so we
// simulate one on top of email/password: the username becomes a synthetic
// local email address, and the PIN is padded to satisfy Firebase's 6-char
// password minimum. Real Firebase Auth (hashing, abuse protection) still
// sits underneath - the UI just never shows "email" or "password".
const EMAIL_DOMAIN = 'tesminatbakat.local';
const PIN_PREFIX = 'tmb_';

export function usernameToEmail(username) {
  return `${username.trim().toLowerCase()}@${EMAIL_DOMAIN}`;
}

export function pinToPassword(pin) {
  return `${PIN_PREFIX}${pin}`;
}

export function isValidUsername(username) {
  return /^[a-z0-9_]{3,20}$/i.test(username.trim());
}

export function isValidPin(pin) {
  return /^\d{4}$/.test(pin);
}

export const GOAL_OPTIONS = [
  { value: 'ipa_ips_bahasa', label: 'Pemilihan Jurusan IPA/IPS/Bahasa' },
  { value: 'jurusan_kuliah', label: 'Pemilihan Jurusan Kuliah' },
  { value: 'pengembangan_pribadi', label: 'Pengembangan Pribadi' },
  { value: 'lainnya', label: 'Lainnya' },
];

export function isValidGoal(goal, goalOther) {
  const option = GOAL_OPTIONS.find((item) => item.value === goal);
  if (!option) return false;
  if (goal === 'lainnya') return goalOther.trim().length > 0;
  return true;
}

export function mapAuthErrorToMessage(error, mode) {
  const code = error?.code ?? '';
  if (mode === 'register') {
    if (code === 'auth/email-already-in-use') return 'Username sudah digunakan, silakan pilih username lain.';
    if (code === 'auth/invalid-email') return 'Username mengandung karakter yang tidak diizinkan.';
  }
  if (mode === 'login') {
    if (
      code === 'auth/invalid-credential' ||
      code === 'auth/wrong-password' ||
      code === 'auth/user-not-found' ||
      code === 'auth/invalid-email'
    ) {
      return 'Username atau PIN salah.';
    }
    if (code === 'auth/too-many-requests') {
      return 'Terlalu banyak percobaan gagal. Silakan coba lagi beberapa saat lagi.';
    }
  }
  if (
    code === 'app/not-configured' ||
    code === 'auth/invalid-api-key' ||
    code === 'auth/api-key-not-valid.-please-pass-a-valid-api-key.'
  ) {
    return 'Konfigurasi Firebase belum diisi. Lihat README untuk pengaturan.';
  }
  if (code === 'auth/network-request-failed') {
    return 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
  }
  if (code === 'auth/configuration-not-found' || code === 'auth/operation-not-allowed') {
    return 'Firebase Authentication belum diaktifkan. Aktifkan provider Email/Password di Firebase Console.';
  }
  return 'Terjadi kesalahan. Silakan coba lagi.';
}
