const Lightbox = ({ image, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <img src={image.src} alt="Selected" className="max-w-3xl max-h-3xl" />
    </div>
  );
  
  export default Lightbox;
  