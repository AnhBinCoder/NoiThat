import { useState } from "react";
import api from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/authenSlice";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    // promise
    // doi toi khi api tra ve
    try {
      const response = await api.post("/authentication/login", {
        username: username,
        password: password,
      });

      console.log(response);
      dispatch(login(response.data));

      localStorage.setItem("account", JSON.stringify(response.data));
      navigate("/trangchu");
      // setSuccessMessage("Đăng ký thành công!");
      toast.success("Đăng Nhập thành công!");
      localStorage.setItem("token", JSON.stringify(response.data.token));
      if (response.data.role === "ADMIN") {
        navigate("/dashboard/admin");
      } else if (response.data.role === "STAFF") {
        navigate("/dashboard/staff");
      } else {
        navigate("/");
      }
    } catch (e) {
      toast.error("Đăng Nhập Thất Bại");
    }
  };

  const handleLoginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    console.log(response);
    const token = await response.user.getIdToken();

    const res = await api.post(`/authentication/login-gg`, {
      token: token,
    });

    dispatch(login(res.data));

    localStorage.setItem("account", JSON.stringify(res.data));
    navigate("/trangchu");
    // setSuccessMessage("Đăng ký thành công!");
    toast.success("Đăng Nhập thành công!");
    localStorage.setItem("token", JSON.stringify(res.data.token));
    if (res.data.role === "ADMIN") {
      navigate("/dashboard/admin");
    } else if (res.data.role === "STAFF") {
      navigate("/dashboard/staff");
    } else {
      navigate("/");
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
            <h1 className=" text-2xl font-bold">Đăng Nhập</h1>
            <h1 className="italic text-1xl mb-5">
              Chào Mừng Đến Với Chúng Tôi
            </h1>
            <form onSubmit={handleLogin}>
              {/* Email input */}
              <div className="relative mb-6 " data-te-input-wrapper-init="">
                Tên Tài Khoản
                <input
                  onInput={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-600"
                  id="exampleFormControlInput3"
                  placeholder="text"
                />
              </div>
              {/* Password input */}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                Mật Khẩu
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-gray-800 rounded-xl focus:border-blue-600"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    defaultValue=""
                    id="exampleCheck3"
                    defaultChecked=""
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Ghi nhớ tài khoản
                  </label>
                </div>
                {/* Forgot password link */}
                <a
                  href="ForgotPasswordPage"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 "
                >
                  Quên mật khẩu?
                </a>
              </div>
              {/* Submit button */}
              <button
                //onClick={LoginHanler}
                type="submit"
                className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ext-sm font-medium uppercase "
                style={{ backgroundColor: "blue" }}
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                Đăng Nhập
              </button>
              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 ">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200"></p>
              </div>
              {/* dang ky */}
              <a
                className="flex items-center justify-center gap-3 bg-green-500 bg-opacity-20 backdrop-blur-md w-full py-3 rounded-xl hover:bg-green-700 cursor-pointer border border-gray-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3), 0 4px 18px 0 rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.3), 0 4px 18px 0 rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0 8px 9px -4px rgba(59,113,202,0.3), 0 4px 18px 0 rgba(59,113,202,0.2)] dark:shadow-[0 4px 9px -4px rgba(59,113,202,0.5)] dark:hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.2), 0 4px 18px 0 rgba(59,113,202,0.1)] dark:focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.2), 0 4px 18px 0 rgba(59,113,202,0.1)] dark:active:shadow-[0 8px 9px -4px rgba(59,113,202,0.2), 0 4px 18px 0 rgba(59,113,202,0.1)] leading-normal text-white shadow-[0 4px 9px -4px #3b71ca] ext-sm font-medium uppercase"
                style={{ backgroundColor: "green" }}
                href="SignUpPage"
                role="button"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                Đăng Ký
              </a>
              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Hoặc
                </p>
              </div>

              <a
                className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-500"
                tabIndex={0}
                style={{ transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <p className="text-xl  " onClick={handleLoginGoogle}>
                  Đăng nhập với Google
                </p>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
