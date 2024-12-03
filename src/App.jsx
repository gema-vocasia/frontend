// import { useState } from "react";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Membuat Halaman Login</h1> */}
      <main className="flex items-center justify-center min-h-screen">
        <card className=" w-full max-w-md p-7 rounded-lg shadow-md">
          <section>
            <div
              className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-5"
              aria-label="Profile Picture"
            ></div>
            <form className="space-y-3">
              <div className="text-left">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  No Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="No Telepon"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:opacity-90"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center">
                Already Have An Account ?
                <a href="#" className="text-blue-500">
                  Login
                </a>
              </p>
            </form>
          </section>
        </card>
      </main>
    </>
  );
}

export default App;
