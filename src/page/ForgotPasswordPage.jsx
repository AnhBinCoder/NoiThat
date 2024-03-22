import { useState } from "react";
import api from "../config/axios";
import { useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu nhập lại
    if (Password !== confirmPassword) {
      alert("Mật khẩu và mật khẩu nhập lại không khớp");
      return;
    }

    // Kiểm tra các trường nhập liệu khác ở đây (ví dụ: email, số điện thoại, ...)

    const response = await api.post("/authentication/signup", {
      Password,

      email,
    });

    localStorage.setItem("account", JSON.stringify(response.data));
    navigate("/");
  };

  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://thuoctam.vn/wp-content/uploads/2020/09/mau-noi-that-nha-pho-hien-dai-cover.jpg"
                className="w-full"
                alt="Signup"
              />
            </div>
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSignUp}>
                {/* Email input */}
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  Email
                  <input
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="peer block min-h-[auto] w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border border-gray-200 rounded-xl"
                    id="signupEmail"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="signupEmail"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  ></label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-400 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ext-sm font-medium uppercase"
                  style={{ backgroundColor: "#0000FF" }}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Xác Minh
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPasswordPage;
