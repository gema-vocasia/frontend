// Left.js
import gambar from "../../../assets/gambar1.png";

function Left() {
  return (
    <div className="hidden md:flex flex-1">
      <div className="w-full h-screen">
        <img
          src={gambar}
          alt="Sketsa"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Left;
