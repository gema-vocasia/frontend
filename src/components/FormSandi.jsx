function FormSandi() {
  return (
    <div>
      <label htmlFor="password">
        <span className="block font-medium text-gray-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mb-2">
          Kata Sandi
        </span>
        <input
          type="password"
          id="password"
          placeholder="Masukkan Kata Sandi"
          className="px-3 py-2 border shadow rounded w-full block text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
        />
      </label>
    </div>
  );
}

export default FormSandi;
