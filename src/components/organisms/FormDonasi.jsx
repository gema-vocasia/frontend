import { useState } from 'react';
import FormField from '../molecules/FormField';
import CheckboxField from '../molecules/CheckboxField';
import Button from '../atoms/Button';

const FormDonasi = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    jumlahDonasi: '',
    pesan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsAnonymous((prev) => !prev);
    setFormData((prev) => ({
      ...prev,
      nama: !isAnonymous ? 'Anonymous' : '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form berhasil disubmit!');
  };

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-black mb-8">
          Isi Data Diri
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Nama Lengkap"
            type="text"
            name="nama"
            value={formData.nama}
            placeholder="Masukkan Nama Lengkap"
            onChange={handleChange}
            disabled={isAnonymous}
          />
          <CheckboxField
            id="anonymous"
            checked={isAnonymous}
            onChange={handleCheckboxChange}
            label="Sembunyikan nama saya (Anonymous)"
          />
          <FormField
            label="Jumlah Donasi"
            type="text"
            name="jumlahDonasi"
            value={formData.jumlahDonasi}
            placeholder="Masukkan Jumlah Donasi Anda"
            onChange={handleChange}
          />
          <FormField
            label="Pesan untuk Campaign (Opsional)"
            type="text"
            name="pesan"
            value={formData.pesan}
            placeholder="Tuliskan pesan singkat untuk campaign ini"
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <Button type="submit">Donasi Sekarang</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDonasi;
