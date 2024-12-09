function InputKtp() {
  return (
    <div>
      <label>
        <span className="block font-medium text-gray-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mb-2">
          Unggah Foto KTP
        </span>
        <input
          type="file"
          id="file-upload"
          accept=".pdf, .png, .jpg, .jpeg"
          className="px-3 py-2 border shadow rounded w-full block text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              if (file.size > 1024 * 1024) {
                alert("Ukuran file maksimal 1 MB!");
                e.target.value = null; // Reset file input
              } else {
                console.log("File diterima:", file.name);
              }
            }
          }}
        />
      </label>
    </div>
  );
}

export default InputKtp;
