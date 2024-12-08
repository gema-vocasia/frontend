import Judul from "./Judul.jsx";
import FormEmail from "./FormEmail.jsx";
import FormSandi from "./FormSandi.jsx";
import Tombol from "./Tombol.jsx";
import LinkDaftarMasuk from "./LinkDaftarMasuk.jsx";

function SectionLogin() {
  return (
    <div className="flex-1 flex justify-center items-center bg-white">
      <div className="w-full max-w-md p-8 space-y-4">
        <Judul />
        <form className="space-y-4">
          <FormEmail />
          <FormSandi />
          <Tombol />
        </form>
        <LinkDaftarMasuk />
      </div>
    </div>
  );
}

export default SectionLogin;
