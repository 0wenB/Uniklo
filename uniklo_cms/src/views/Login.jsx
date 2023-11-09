const Login = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1633380246874-e25cd8c2cc9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          opacity: "0.8",
        }}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg mx-4 sm:mx-auto"
          style={{ maxWidth: "24rem" }}
        >
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-[#ED462F] hover:bg-[#F469] text-white font-bold py-2 rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
