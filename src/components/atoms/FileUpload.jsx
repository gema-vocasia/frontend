import PropTypes from 'prop-types';

const FileUpload = ({ onChange, thumbnail }) => (
  <div className="w-64 h-64 p-4 border-2 border-[#5E84C5] rounded-lg flex flex-col justify-center items-center relative">
    {!thumbnail && (
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-gray-500 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5v-9m0 9-3.75-3.75m3.75 3.75 3.75-3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-gray-500">Upload Photo</p>
        <p className="text-xs text-gray-400">Drag and drop here</p>
      </div>
    )}
    {thumbnail && (
      <img
        src={thumbnail}
        alt="Thumbnail Preview"
        className="absolute inset-0 w-full h-full object-cover p-2"
      />
    )}
    <input
      id="thumbnailInput"
      type="file"
      onChange={onChange}
      className="absolute inset-0 opacity-0 cursor-pointer"
    />
  </div>
);

FileUpload.propTypes = {
  onChange: PropTypes.func.isRequired, 
  thumbnail: PropTypes.string,    
};

export default FileUpload;