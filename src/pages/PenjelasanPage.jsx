import { Link } from 'react-router-dom';
import { TESTS } from '../data/tests';

export default function PenjelasanPage() {
  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 720 }}>
        <Link to="/" className="btn btn-secondary" style={{ marginBottom: 20 }}>
          ← Kembali ke Beranda
        </Link>

        <div className="card">
          <h1 style={{ marginTop: 0 }}>Apa Itu Minat dan Bakat?</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Sebelum mengambil tes, ada baiknya memahami dua istilah yang sering tertukar ini — dan mengapa
            keduanya penting untuk membuat keputusan karier atau jurusan yang tepat.
          </p>

          <h2 className="category-heading" style={{ marginTop: 28 }}>
            Minat vs. Bakat
          </h2>
          <p>
            <strong>Minat</strong> adalah ketertarikan atau kesenangan Anda terhadap suatu aktivitas — misalnya
            senang menggambar, senang berhitung, atau senang berbicara di depan umum. Minat menjawab pertanyaan
            "apa yang ingin saya lakukan?"
          </p>
          <p>
            <strong>Bakat</strong> adalah kemampuan alami atau potensi seseorang untuk menguasai suatu
            keterampilan lebih cepat dibanding orang lain. Bakat menjawab pertanyaan "apa yang bisa saya kuasai
            dengan baik?"
          </p>
          <p>
            Keduanya tidak selalu sejalan — seseorang bisa berminat pada musik tanpa punya bakat musikal yang
            kuat, atau punya bakat menghitung tanpa merasa tertarik menekuninya. Namun, karier yang paling
            memuaskan biasanya berada di titik temu antara keduanya: sesuatu yang Anda sukai <em>dan</em> Anda
            kuasai.
          </p>

          <h2 className="category-heading">Mengapa Ini Penting untuk Karier</h2>
          <p>
            Psikolog karier John Holland mengembangkan teori bahwa orang bekerja paling baik dan paling puas
            ketika kepribadian mereka <strong>cocok (congruent)</strong> dengan lingkungan kerjanya. Seseorang
            yang menyukai interaksi sosial namun bekerja sendirian sepanjang hari di balik data cenderung merasa
            tidak puas, meski kemampuan teknisnya baik. Sebaliknya, kecocokan antara minat dan lingkungan kerja
            terbukti berkaitan dengan kepuasan kerja yang lebih tinggi, performa yang lebih baik, dan
            kecenderungan untuk bertahan lebih lama di bidang tersebut.
          </p>
          <p>
            Inilah alasan tes minat dan bakat berguna: bukan untuk membatasi pilihan Anda, tetapi untuk membantu
            Anda mengenali pola ketertarikan dan kekuatan alami Anda, sehingga pilihan jurusan atau karier bisa
            didasarkan pada pemahaman diri yang lebih jelas — bukan sekadar ikut tren atau tekanan orang lain.
          </p>

          <h2 className="category-heading">Model RIASEC (Kode Holland)</h2>
          <p>
            Tes pertama di platform ini — <strong>Tes SDS Holland</strong> — didasarkan pada model RIASEC yang
            dikembangkan Holland, yang mengelompokkan minat kerja ke dalam enam tipe:
          </p>
          <ul style={{ paddingLeft: 20, color: 'var(--color-text-muted)' }}>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Realistis (R)</strong> — praktis, suka bekerja
              dengan tangan, alat, atau mesin
            </li>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Investigatif (I)</strong> — analitis, suka meneliti
              dan memecahkan masalah
            </li>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Artistik (A)</strong> — kreatif, ekspresif, menyukai
              orisinalitas
            </li>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Sosial (S)</strong> — suka membantu, mengajar, dan
              berinteraksi dengan orang lain
            </li>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Wirausaha (E)</strong> — suka memimpin, menegosiasi,
              dan mengambil risiko bisnis
            </li>
            <li>
              <strong style={{ color: 'var(--color-text)' }}>Konvensional (C)</strong> — terstruktur, teliti,
              menyukai sistem dan prosedur yang jelas
            </li>
          </ul>
          <p>
            Hampir tidak ada orang yang murni satu tipe — kebanyakan orang adalah kombinasi dari tiga tipe yang
            paling menonjol. Kombinasi tiga huruf inilah yang disebut <strong>Kode Holland</strong> Anda, dan
            menjadi dasar rekomendasi peran serta jurusan yang Anda lihat setelah menyelesaikan tes.
          </p>

          <h2 className="category-heading">Tes yang Tersedia di Platform Ini</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Saat ini tersedia satu tes berbasis model di atas, dengan tes lain yang akan ditambahkan seiring
            waktu untuk melengkapi gambaran minat dan bakat Anda dari sudut pandang yang berbeda.
          </p>
          <ul style={{ paddingLeft: 20 }}>
            {TESTS.map((test) => (
              <li key={test.id} style={{ marginBottom: 8 }}>
                <strong>{test.title}</strong>
                {!test.active && <span className="badge" style={{ marginLeft: 8 }}>Segera hadir</span>}
                <br />
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{test.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="actions-row">
          <Link to="/" className="btn btn-primary">
            Mulai Tes
          </Link>
        </div>
      </div>
    </div>
  );
}
