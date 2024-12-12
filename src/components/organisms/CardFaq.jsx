import { useState } from "react";

const CardFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu Website GEMA?",
      answer:
        "GEMA (Gerakan Empati dan Kebaikan) adalah sebuah website yang menghubungkan para donator dengan individu, organisasi, atau komunitas yang membutuhkan bantuan. Kami mendukung berbagai jenis donasi seperti bantuan kemanusiaan, pendidikan, kesehatan, lingkungan, dan proyek sosial lainnya.",
    },
    {
      question: "Bagaimana cara berdonasi di Website GEMA?",
      answer: `• Pilih program atau kampanye yang ingin anda dukung
        <br>• klik tombol 'donasi sekarang'.
        <br>• masukkan jumlah donasi dan pilih metode pembayaran
        <br>• ikuti instruksi pembayaran hingga selesai
        <br>• anda akan menerima konfirmasi donasi melalui.....`,
    },
    {
      question: "Apakah saya bisa berdonasi secara anonim?",
      answer:
        "Ya, kami menyediakan opsi untuk berdonasi secara anonim jika anda tidak ingin nama anda ditampilkan.",
    },
    {
      question: "Saya lupa password. Apa yang harus saya lakukan?",
      answer: "???",
    },
    {
      question: "Apakah saya bisa berdonasi tanpa membuat akun?",
      answer: "???",
    },
    {
      question:
        "Apakah kita bisa melakukan donasi di akun orang lain atas nama sendiri (ataupun sebaliknya)?",
      answer:
        "Ya, anda bisa melakukan donasi dengan menggunakan akun orang lain.",
    },
    {
      question: "Bagaimana saya tahu bahwa donasi saya sudah diterima?",
      answer:
        "Setelah donasi berhasil, anda akan menerima email konfirmasi atau notifikasi di dashboard akun anda. Jika anda tidak menerima konfirmasi, hubungi tim layanan pelanggan kami.",
    },
    {
      question: "Apakah ada batasan jumlah donasi?",
      answer:
        "Tidak ada batasan minimum atau maksimum untuk donasi, kecuali dinyatakan dalam kampanye.",
    },
    {
      question: "Apa saja metode pembayaran yang tersedia?",
      answer: "???",
    },
    {
      question: "Apakah donasi saya dapat dikembalikan?",
      answer:
        "Donasi yang sudah diproses tidak dapat dikembalikan, kecuali dalam keadaan tertentu sesuai kebijakan kami.",
    },
    {
      question: "Apa itu kampanye donasi?",
      answer:
        "Kampanye donasi adalah inisiatif yang dibuat untuk menggalang dana guna mendukung tujuan tertentu, seperti bantuan bencana, pengobatan, pendidikan, atau program sosial lainnya.",
    },
    {
      question: "Apa syarat untuk membuat kampanye donasi?",
      answer:
        "Anda perlu mendaftar, melengkapi dokumen pendukung (seperti identitas dan proposal), serta memenuhi kebijakan dan panduan platform kami.",
    },
    {
      question: "Apakah ada biaya administrasi untuk donasi?",
      answer:
        "Sebagian kecil dari donasi mungkin digunakan untuk biaya operasional platform, tergantung pada kebijakan masing-masing kampanye.",
    },
    {
      question:
        "Bagaimana saya bisa mendapatkan bantuan jika mengalami masalah saat berdonasi?",
      answer: `Anda dapat menghubungi tim dukungan kami melalui: 
          <br>• Email: support@[namawebsite].com 
          <br>• Live Chat di website 
          <br>• Telepon: +62 xxx-xxxx-xxxx`,
    },
    {
      question:
        "Apakah donasi saya benar-benar sampai kepada penerima manfaat?",
      answer:
        "Tergantung pada jenis kampanye. Beberapa donasi akan langsung disalurkan, sementara yang lain mungkin membutuhkan waktu untuk memenuhi target tertentu sebelum penyaluran dilakukan.",
    },
    {
      question:
        "Bagaimana cara meminta pengembalian donasi jika terjadi kesalahan?",
      answer:
        "Pengembalian donasi hanya dapat dilakukan dalam situasi tertentu. Silakan hubungi tim layanan pelanggan kami untuk informasi lebih lanjut.",
    },
    {
      question:
        "Apakah ada fitur untuk melihat semua donasi yang pernah saya lakukan?",
      answer:
        "Ya, anda dapat melihat riwayat donasi anda di dashboard akun anda.",
    },
    {
      question: "Bagaimana cara menghubungi penerima manfaat secara langsung?",
      answer:
        "Untuk menjaga privasi, komunikasi langsung biasanya tidak diperbolehkan. Namun, Anda dapat mengirim pesan melalui platform jika diizinkan oleh kampanye.",
    },
    {
      question:
        "Apakah saya bisa memberikan donasi dalam bentuk barang atau jasa?",
      answer:
        "Beberapa kampanye mungkin menerima donasi non-tunai. Informasi ini akan dicantumkan di deskripsi kampanye.",
    },
  ];

  return (
    <main className="mt-[100px] relative container mx-auto px-4 py-8">
      <section className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-700">{faq.question}</p>
              <button
                className="text-blue-500 text-2xl focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                &gt;
              </button>
            </div>
            {openIndex === index && (
              <p
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default CardFaq;
