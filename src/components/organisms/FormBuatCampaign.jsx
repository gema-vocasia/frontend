import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormField from "../molecules/FormField";
import FileUploadField from "../molecules/FileUploadField";
import DateField from "../molecules/DateField";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

const FormBuatCampaign = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setThumbnail(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-black mb-6">
          Isi Data Dibawah Ini
        </h1>
        <form className="space-y-6">
          <FormField label="Judul Kampanye" type="text" placeholder="Masukan Judul Campaign" />
          <div>
            <Label>Kategori</Label>
            <Select
              options={[
                { label: "Pilih Kategori", value: "" },
                { label: "Sosial", value: "sosial" },
                { label: "Kesehatan", value: "kesehatan" },
                { label: "Bencana Alam", value: "bencana-alam" },
                { label: "Pendidikan", value: "pendidikan" },
                { label: "Lingkungan", value: "lingkungan" },
              ]}
            />
          </div>
          <FormField label="Target Donasi" type="text" placeholder="Masukkan Target Donasi" />
          <DateField label="Tanggal Mulai" />
          <DateField label="Tanggal Berakhir" />
          <div>
            <Label>Deskripsi</Label>
            <ReactQuill
              className="bg-white rounded-lg text-black border-2 border-[#5E84C5]"
            />
          </div>
          <FileUploadField label="Unggah Gambar" onChange={handleThumbnailChange} thumbnail={thumbnail} />
          <div className="flex justify-center">
            <Button type="submit">Kirim</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBuatCampaign;
