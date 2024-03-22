import { useState } from "react";
import api from "../config/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPassword) {
      alert("Mật khẩu và mật khẩu nhập lại không khớp");
      return;
    }

    // Kiểm tra các trường nhập liệu khác ở đây (ví dụ: email, số điện thoại, ...)

    try {
      const response = await api.post("/authentication/register", {
        username,
        password,
        email,
        phone,
        address,
      });

      localStorage.setItem("account", JSON.stringify(response.data));
      navigate("/login");
      // setSuccessMessage("Đăng ký thành công!");
      toast.success("Đăng ký thành công!");
    } catch (error) {
      // Xử lý lỗi từ server nếu cần
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <div
        className="hero min-h-screen bg-base-200 relative"
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/OIP.hgo-g05JwPdwODy1WDeFvgHaEu?w=1920&h=1224&rs=1&pid=ImgDetMain)",
        }}
      >
        {/* {successMessage && (
          <div className="bg-green-500 text-white p-3">{successMessage}</div>
        )} */}
        <div className="hero-overlay bg-opacity-60 inset-0"></div>
        <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
          <div className="text-center lg:text-left">
            <p className="py-6">
              Chúng tôi rất vui được chào đón bạn tại đây. Hãy nhập thông tin
              đăng nhập của bạn để trải nghiệm dịch vụ và nhận được báo giá
              chính xác cho nội thất mà bạn mong muốn.
            </p>
          </div>
          <div
            className="md:w-8/12 lg:ml-6 lg:w-5/12 border border-black px-5 py-5 rounded-[15px] shadow-xl "
            style={{ backgroundColor: "#5CDB95" }}
          >
            <h1 className=" text-2xl font-bold">Đăng Ký</h1>
            <h1 className="italic text-1xl mb-5">
              Hãy tạo cho bạn một tài khoản
            </h1>
            <form onSubmit={handleSignUp}>
              {/* Username input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Tên đăng nhập
                <input
                  onInput={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupUsername"
                  placeholder="Tên đăng nhập"
                />
              </div>
              {/* Password input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Mật khẩu
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupPassword"
                  placeholder="Mật khẩu"
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {/* Confirm Password input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Nhập lại mật khẩu
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupConfirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  onInput={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              {/* Birthdate input */}

              {/* Email input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Email
                <input
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupEmail"
                  placeholder="Email"
                />
              </div>
              {/* Phone number input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Số điện thoại
                <input
                  onInput={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="tel"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupPhoneNumber"
                  placeholder="Số điện thoại"
                />
              </div>
              {/* Address input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Địa chỉ
                <input
                  onInput={(e) => {
                    setAddress(e.target.value);
                  }}
                  type="text"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-6"
                  id="signupAddress"
                  placeholder="Địa chỉ"
                />
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-400 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ext-sm font-medium uppercase"
                style={{ backgroundColor: "#0000FF" }}
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
