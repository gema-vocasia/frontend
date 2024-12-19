import React, { useState, useEffect } from "react";
import { axiosInstance as api } from "../../config/axiosInstance.js";
import Swal from "sweetalert2";

const BANK_LIST = [
  {
    code: "BCA",
    name: "Bank Central Asia (BCA)",
    minLength: 10,
    startingDigit: ["1", "2"],
  },
  {
    code: "MANDIRI",
    name: "Bank Mandiri",
    minLength: 10,
    startingDigit: ["1", "2"],
  },
  {
    code: "BNI",
    name: "Bank Negara Indonesia (BNI)",
    minLength: 10,
    startingDigit: ["1", "3"],
  },
  {
    code: "BRI",
    name: "Bank Rakyat Indonesia (BRI)",
    minLength: 10,
    startingDigit: ["0", "1"],
  },
];

const WithdrawForm = ({ campaignId }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [statusTransfer, setStatusTransfer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        // Memanggil API untuk mendapatkan data campaign
        const response = await api.get(`/campaign/${campaignId}`);
        setStatusTransfer(response.data.statusTransfer);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    };

    fetchCampaignData();
  }, [campaignId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validasi Input
    if (!selectedBank) {
      setError("Silakan pilih bank.");
      return;
    }

    if (!accountNumber.trim()) {
      setError("Nomor rekening tidak boleh kosong.");
      return;
    }

    const selectedBankData = BANK_LIST.find(
      (bank) => bank.code === selectedBank
    );
    if (!selectedBankData) {
      setError("Bank yang dipilih tidak valid.");
      return;
    }

    if (accountNumber.length < selectedBankData.minLength) {
      setError(
        `Nomor rekening harus memiliki panjang minimal ${selectedBankData.minLength} digit.`
      );
      return;
    }

    if (
      !selectedBankData.startingDigit.some((digit) =>
        accountNumber.startsWith(digit)
      )
    ) {
      setError(
        `Nomor rekening harus dimulai dengan salah satu digit berikut: ${selectedBankData.startingDigit.join(
          ", "
        )}.`
      );
      return;
    }

    if (!/^\d+$/.test(accountNumber)) {
      setError("Nomor rekening hanya boleh berisi angka.");
      return;
    }

    const bankName = selectedBankData.name;
    console.log("Data yang dikirim:", { accountNumber, bankName });

    try {
      // Ambil total donasi kampanye
      const campaignResponse = await api.get(`/campaign/${campaignId}`);
      const { totalDonation } = campaignResponse.data;

      // Update status transfer dan nomor rekening
      await api.patch(`/campaign/${campaignId}/transfer/On%20Progress`, {
        accountNumber,
        bankName,
      });

      await Swal.fire({
        title: "Berhasil!",
        text: `Data bank berhasil diperbarui dan dana kampanye sebesar Rp ${totalDonation.toLocaleString()} siap ditransfer.`,
        icon: "success",
        confirmButtonText: "Tutup",
      });

      setSelectedBank("");
      setAccountNumber("");
      window.location.reload();
    } catch (error) {
      console.error("Gagal memproses penarikan dana:", error);
      setError(
        error.response?.data?.message ||
          "Gagal memproses permintaan penarikan dana."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#5E84C5]">
        Penarikan Dana
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dropdown Bank */}
        <div>
          <label
            htmlFor="bank"
            className="block text-sm font-medium text-gray-700"
          >
            Pilih Bank
          </label>
          <select
            id="bank"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5E84C5] focus:ring focus:ring-[#5E84C5] focus:ring-opacity-50"
            required
            disabled={
              statusTransfer === "On Progress" || statusTransfer === "Success"
            }
          >
            <option value="">Pilih Bank</option>
            {BANK_LIST.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input Nomor Rekening */}
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Nomor Rekening
          </label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder={accountNumber || "Masukkan nomor rekening"}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5E84C5] focus:ring focus:ring-[#5E84C5] focus:ring-opacity-50"
            required
            pattern="\d*"
            title="Hanya angka diperbolehkan"
            disabled={
              statusTransfer === "On Progress" || statusTransfer === "Success"
            }
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md transition-colors font-semibold ${
              statusTransfer === "On Progress"
                ? "bg-gray-400 cursor-not-allowed"
                : statusTransfer === "Success"
                ? "bg-green-500  cursor-not-allowed"
                : "bg-[#5E84C5] text-white hover:bg-blue-600"
            }`}
            disabled={
              statusTransfer === "On Progress" || statusTransfer === "Success"
            }
          >
            {statusTransfer === "On Progress"
              ? "On Progress"
              : statusTransfer === "Success"
              ? "Success"
              : "Tarik Dana"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawForm;
