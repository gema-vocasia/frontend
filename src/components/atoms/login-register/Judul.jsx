import logo from "../../../assets/logo.png";

function Judul() {
  return (
    <div className="flex items-center justify-center mb-10 space-x-4 mt-5">
      <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
      <div className="flex flex-col leading-tight">
        {" "}
        <h1 className="font-semibold text-[#5E84C5] tracking-wide text-2xl md:text-4xl">
          GEMA
          <br />
        </h1>
        <p className="text-md md:text-xl font-normal text-gray-400">
          Gerakan Empati dan Kebaikan
        </p>
      </div>
    </div>
  );
}

export default Judul;
