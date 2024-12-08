import sketsa from "../assets/gambar1.png";

function Left() {
  return (
    <div className="flex-1 bg-[#5E84C5] hidden lg:flex justify-center items-center">
      <div className="flex items-center justify-center">
        <img
          src={sketsa}
          alt="Sketsa"
          className="h-2/3 w-2/3 items-center justify-center"
        />
      </div>
    </div>
  );
}

export default Left;
