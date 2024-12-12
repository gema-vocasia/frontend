import banjirmedan from "../../assets/BanjirMedan.png";
import RumahBaca from "../../assets/BantuRumahBaca.png";
import kesehatan from "../../assets/KesehatanDua.png";
import kebakaran from "../../assets/Kebakaran.jpg";
import sekolahrubuh from "../../assets/SekolahRubuh.jpg";
import angintopan from "../../assets/AnginTopan.jpg";

const CardRiwayat = () => {
  const donasi = [
    {
      id: 1,
      kampanye: "Bantuan Pendidikan Anak",
      tanggal: "2024-12-01",
      jam: "10:30",
      jumlah: "Rp 500.000",
      metode: "Transfer Bank",
      nama: "John Doe",
      status: "Sukses",
      pesan: "Semoga bermanfaat untuk pendidikan anak-anak.",
      gambar: RumahBaca,
    },
    {
      id: 2,
      kampanye: "Bantu Kesehatan",
      tanggal: "2024-11-20",
      jam: "14:00",
      jumlah: "Rp 1.000.000",
      metode: "E-Wallet",
      nama: "Jane Smith",
      status: "Gagal",
      pesan: "Semoga amal ini menjadi berkah.",
      gambar: kesehatan,
    },
    {
      id: 3,
      kampanye: "Penggalangan Dana Bencana Alam",
      tanggal: "2024-11-15",
      jam: "16:45",
      jumlah: "Rp 750.000",
      metode: "Transfer Bank",
      nama: "Michael Lee",
      status: "Pending",
      pesan: "Doa terbaik untuk korban bencana.",
      gambar: banjirmedan,
    },
    {
      id: 4,
      kampanye: "Penggalangan Dana Korban Kebakaran",
      tanggal: "2020-01-15",
      jam: "23:44",
      jumlah: "Rp 750.000",
      metode: "Go-Pay",
      nama: "Luna",
      status: "Sukses",
      pesan: "Semoga korban diberi ketabahan dan kesabaran.",
      gambar: kebakaran,
    },
    {
      id: 5,
      kampanye: "Bantu Sekolah Rubuh",
      tanggal: "2024-01-09",
      jam: "20:45",
      jumlah: "Rp 7.550.000",
      metode: "Transfer Bank",
      nama: "Henry",
      status: "Gagal",
      pesan: "Semoga anak anak bisa segera belajar dalam kondisi nyaman.",
      gambar: sekolahrubuh,
    },
    {
      id: 3,
      kampanye: "Penggalangan Dana Bencana Alam",
      tanggal: "2024-06-06",
      jam: "01:25",
      jumlah: "Rp 2.000.000",
      metode: "Transfer Bank",
      nama: "Michael Lee",
      status: "Pending",
      pesan: "Semoga keadaan segera pulih ",
      gambar: angintopan,
    },
  ];

  return (
    <main className="pt-10 pb-10 px-4">
      <div className="max-w-full overflow-x-auto">
        <div className="flex gap-10 sm:flex-wrap sm:justify-center">
          {donasi.map((item) => {
            // atur background
            let statusBgColor =
              item.status === "Sukses"
                ? "bg-green-500"
                : item.status === "Gagal"
                ? "bg-red-500"
                : "bg-yellow-500";

            return (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-96 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl hover:bg-[#f0f4ff] transition-all duration-300"
                style={{ margin: "0 16px 16px 0" }}
              >
                {/* Kampanye */}
                <div className="absolute top-0 left-0 w-full bg-[#5E84C5] text-white text-xl text-center py-2 rounded-t-lg font-bold">
                  {item.kampanye}
                </div>

                {/* Gambar */}
                <div className="w-full mt-12 h-80 overflow-hidden rounded-md">
                  <img
                    src={item.gambar}
                    alt={item.kampanye}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Detail Donasi */}
                <div className="space-y-2 mb-12">
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Tanggal:</span> {item.tanggal}{" "}
                    <span className="font-bold">Pukul</span> {item.jam} WIB
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Metode Pembayaran:</span>{" "}
                    {item.metode}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Nama:</span> {item.nama}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Jumlah Donasi:</span>{" "}
                    {item.jumlah}
                  </p>
                  <div className="text-center bg-gray-100 border border-gray-300 p-2 rounded">
                    <p className="text-lg font-medium text-gray-800 italic">
                      {" "}
                      <span className="font-medium">Pesan :</span> {item.pesan}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div
                  className={`absolute bottom-0 left-0 w-full ${statusBgColor} text-white text-center py-2 rounded-b-lg font-bold`}
                >
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default CardRiwayat;
