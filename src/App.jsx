import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <card className=" w-full max-w-md p-7 rounded-lg shadow-md">
        <PictureProfile />
        <Form />
      </card>
    </main>
  );
}

function PictureProfile() {
  return (
    <div
      className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-5"
      aria-label="Profile Picture"
    ></div>
  );
}

function Form() {
  return (
    <form className="space-y-3">
      <div className="text-left">
        <FormEmail />
        <FormPassword />
      </div>
      <Button />
    </form>
  );
}

function FormEmail() {
  return (
    <>
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
        className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md text-sm"
      />
    </>
  );
}

function FormPassword() {
  return (
    <>
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
        className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md text-sm "
      />
    </>
  );
}

function Button() {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:opacity-90"
      >
        login
      </button>
    </div>
  );
}

export default App;
