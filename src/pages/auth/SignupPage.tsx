import { useForm } from "react-hook-form";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import carImage from "../../assets/loginimg/car-img.png";

type SignupData = {
  username: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const { register, handleSubmit } = useForm<SignupData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: SignupData) => {
    console.log("Signup Data:", data);
  };

  return (
    <>
      {/* Inline keyframes for one-time slide */}
      <style>
        {`
          @keyframes slideLeftToRightOnce {
            0% { transform: translateX(0); }
            100% { transform: translateX(150px); }
          }
        `}
      </style>

      <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Car Service Text */}
        <div className="absolute top-16 left-20 z-10">
          <h1 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
            Car Service
          </h1>
        </div>

        {/* Left Image */}
        <div className="hidden md:block md:w-2/3 h-full relative">
          <div className="bg-[#9b111e] me-32 relative h-full">
            <img
              src={carImage}
              alt="Sign up illustration"
              className="w-full h-full object-cover rounded-l-xl relative"
              style={{
                left: "135px",
                top: "120px",
                animation: "slideLeftToRightOnce 1.5s ease forwards",
              }}
            />
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/4 bg-white rounded-xl shadow-lg h-full p-12 md:p-12 space-y-6 mt-32"
        >
          <h2 className="text-3xl font-bold text-[#9b111e] text-center">
            Create an Account
          </h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#9b111e]">
              Username
            </label>
            <input
              {...register("username")}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-[#E6A895] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e] placeholder-[#c18383]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#9b111e]">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#E6A895] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e] placeholder-[#c18383]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#9b111e]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-[#E6A895] rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-[#9b111e] placeholder-[#c18383]"
              />
              <span
                className="absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-2 rounded-full transition duration-300 hover:brightness-110"
            style={{
              backgroundImage:
                "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
            }}
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-[#9b111e] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
