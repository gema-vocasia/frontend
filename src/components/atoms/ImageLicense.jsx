const ImageLicense = ({ image, onClick }) => (
    <div 
      className="relative overflow-hidden transition-all duration-300 ease-in-out transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 hover:bg-indigo-50"
      onClick={() => onClick(image)}
    >
      <img 
        src={image.src} 
        alt="Image" 
        className="object-cover w-full h-40 transition-all duration-300 rounded-t-2xl" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 text-sm text-white bg-black bg-opacity-50">
        <p><span className="font-medium">Pemilik:</span> {image.owner}</p>
      </div>
    </div>
  );
  
  export default ImageLicense;
  