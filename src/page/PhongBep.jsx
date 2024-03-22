import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const PhongBep = () => {
  return (
    <>
      <Header />
      <div className="pt-10 pl-20 pr-20">
        <div
          className="hero min-h-screen rounded-[15px] "
          style={{
            backgroundImage:
              "url(https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-07-25/6-bo-cuc-phong-bep-pho-bien-nhat-kem-ban-ve-minh-hoa-64bfaea78f7873324f1de014.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">PHÒNG BẾP</h1>
              <p className="mb-5">
                Sáng tạo, trẻ trung và đa dạng trong từng thiết kế
                <p>
                  Xu hướng thiết kế nội thất phòng bếp hiện nay rất đa dạng Gia
                  chủ có thể chọn kiểu bếp không gian mở liền phòng khách, bố
                  trí phòng bếp có bàn đảo, các mẫu tủ bếp đẹp thông minh
                </p>
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10">
          {/* Content 1 & 2*/}
          <div className="flex w-full pt">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="divider divider-horizontal"></div>
            {/*  */}
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          {/* Content 3 & 4 */}
          <div className="flex w-full">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="divider divider-horizontal"></div>
            {/*  */}
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          {/* Content 5 & 6 */}
          <div className="flex w-full">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="divider divider-horizontal"></div>
            {/*  */}
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhongBep;
