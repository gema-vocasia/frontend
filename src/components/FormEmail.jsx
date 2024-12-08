function FormEmail() {
  return (
    <div>
      <label htmlFor="email">
        <span className="block font-medium text-gray-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mb-2">
          Email
        </span>
        <input
          type="email"
          placeholder="Masukkan email.."
          className="px-3 py-2 border shadow rounded w-full block text-md placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#5E84C5] focus:border-[#5E84C5] invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
        />
        <p className="text-sm0 text-pink-700 invisible peer-invalid:visible">
          Email Tidak Valid
        </p>
      </label>
    </div>
  );
}

export default FormEmail;
