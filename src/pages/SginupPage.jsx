const SginupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg transition duration-300">
          <div className="form-container w-80 bg-[#393737] p-8 rounded-xl text-gray-200">
            <p className="title text-center text-xl font-bold">Register</p>
            <form className="form mt-6">
              <div className="input-group mt-1 text-sm">
                <label htmlFor="username" className="block text-gray-400 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full rounded-md border border-gray-700 p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Username ..."
                />
              </div>
              <div className="input-group mt-1 text-sm">
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full rounded-md border border-gray-700 p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Email ..."
                />
              </div>
              <div className="input-group mt-4 text-sm">
                <label htmlFor="password" className="block text-gray-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full rounded-md border border-gray-700  p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Password ..."
                />
              </div>
              <div className="input-group mt-4 text-sm">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-400 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  className="w-full rounded-md border border-gray-700  p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Confirm Password ..."
                />
              </div>
              <button className="sign w-full p-3 mt-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-t from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SginupPage;
