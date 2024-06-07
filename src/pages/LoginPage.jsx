import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portfolio-server-theta-liart.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        // console.log(data.token);
        navigate("/admin"); // Redirect to dashboard or any other page
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg transition duration-300">
          <div className="form-container w-80 bg-[#393737] p-8 rounded-xl text-gray-200">
            <p className="title text-center text-xl font-bold">Login</p>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form className="form mt-6" onSubmit={handleSubmit}>
              <div className="input-group mt-1 text-sm">
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-md border border-gray-700 p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Email ..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="w-full rounded-md border border-gray-700 p-3 text-gray-200 focus:border-violet-400"
                  placeholder="Enter Password ..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="sign w-full p-3 mt-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-t from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
