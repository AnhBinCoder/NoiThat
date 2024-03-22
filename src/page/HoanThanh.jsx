import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const HoanThanh = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 ">
        <div className="bg-white p-6  md:mx-auto mt-40">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Gửi Bản Thiết Kế Thành Công!
            </h3>
            <p className="text-gray-600 my-2">
              Cảm ơn vì đã liên hệ chúng tôi, chúng tôi sẽ trả lời yêu cầu của
              bạn trong thời gian sớm nhất
            </p>
            <p> Chúc quý khách một ngày tốt lành!</p>
            <div className="py-10 text-center">
              <a
                href="/"
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-3xl"
              >
                Quay trở lại Trang chủ
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HoanThanh;
