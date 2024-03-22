// import { useState } from "react";
// import api from "../config/axios";
// import { useNavigate } from "react-router-dom";
// import { Textarea } from "@material-tailwind/react";

function Profiles() {
  return (
    <div className=" mt-8  bg-gradient-to-r from-white via-blue-200 to-white ">
      <h1 className="text-3xl font-bold mb-4">Thông Tin</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="">
          <button
            className="border border-info rounded-[15px] py-1 px-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            {" "}
            Chỉnh sửa
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Cập Nhật Tài Khoản</h3>
              {/* <p className="py-4">
                Press ESC key or click the button below to close
              </p> */}
              <div>
                <text>Username: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2"
                />
              </div>
              <div>
                <text>Password: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2 ml-[10px]"
                />
              </div>
              <div>
                <text>Họ Tên: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2 ml-[25px]"
                />
              </div>
              <div>
                <text>Email: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2 ml-[36px]"
                />
              </div>
              <div>
                <text>SDT: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2 ml-[46px]"
                />
              </div>
              <div>
                <text>Địa Chỉ: </text>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs mx-2 my-2 ml-[24px]"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Lưu</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <div className="block mb-2 text-sm font-bold text-gray-600">
              Họ và tên
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </svg>
              <input type="text" className="grow" />
            </label>
          </div>
          <div>
            <div className="block mb-2 text-sm font-bold text-gray-600">
              Số điện thoại
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </svg>
              <input type="text" className="grow" />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-4">
          <div>
            <div className="block mb-2 text-sm font-bold text-gray-600">
              Email
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </svg>
              <input type="text" className="grow" />
            </label>
          </div>
          <div>
            <div className="block mb-2 text-sm font-bold text-gray-600">
              Địa chỉ
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </svg>
              <input type="text" className="grow" />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 mt-10 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-400 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ext-sm font-medium uppercase "
          style={{ backgroundColor: "blue" }}
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          Trang chủ
        </button>
      </div>
    </div>
  );
}

export default Profiles;
