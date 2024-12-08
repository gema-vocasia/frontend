import Judul from "./Judul.jsx";
import FormEmail from "./FormEmail.jsx";
import FormName from "./FormName.jsx";
import FormSandi from "./FormSandi.jsx";
import FormTelephone from "./FormTelephone.jsx";
import Tombol from "./Tombol.jsx";
import LinkDaftarMasuk from "./LinkDaftarMasuk.jsx";

function SectionRegister() {
  return (
    <div className="flex-1 flex justify-center items-center bg-white">
      <div className="w-full max-w-md p-8 space-y-4">
        <Judul />
        <form className="space-y-4">
          <FormName />
          <FormEmail />
          <FormTelephone />
          <FormSandi />
          <Tombol />
        </form>
        <LinkDaftarMasuk />
      </div>
    </div>
  );
}

export default SectionRegister;
