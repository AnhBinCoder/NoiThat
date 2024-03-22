import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const KichThuoc = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col w-[1440px] items-center px-[80px] pt-0 py-0 relative flex-[0_0_auto] mt-80">
        <div className="flex max-w-screen-xl w-[1280px] items-start px-[20px]  relative flex-[0_0_auto]">
          <div className="flex flex-col w-[738.8px] items-start pl-[26px] pr-0  pb-[19.5px] relative">
            <div className="relative self-stretch w-full h-[542.0px] bg-[url(https://c.animaapp.com/jsxmGnQm/img/image-2.png)] bg-cover bg-[50%_50%]" />
          </div>
          <div className="flex flex-col w-[501.2px] items-start pl-[26px] pr-0 py-0 relative">
            <div className="relative self-stretch w-full h-[587.86px]">
              <div className="flex w-[475px] items-start pl-0 pr-[299.57px] pt-0 pb-[14px] absolute top-[32px] left-0 border-b [border-bottom-style:solid] border-xaynhadeponlinecomalto">
                <div className="inline-flex flex-col items-start gap-[2.75px] relative self-stretch flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] font-xaynhadeponline-com-inter-semi-bold-13 font-[number:var(--xaynhadeponline-com-inter-semi-bold-13-font-weight)] text-xaynhadeponlinecommine-shaft text-[length:var(--xaynhadeponline-com-inter-semi-bold-13-font-size)] tracking-[var(--xaynhadeponline-com-inter-semi-bold-13-letter-spacing)] leading-[var(--xaynhadeponline-com-inter-semi-bold-13-line-height)] whitespace-nowrap [font-style:var(--xaynhadeponline-com-inter-semi-bold-13-font-style)]">
                    Mẫu Phòng Ngủ
                  </p>
                  <div className="flex items-center pl-0 pr-[69.35px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start pl-[13px] pr-[3.28px] py-[3.25px] relative flex-[0_0_auto] bg-xaynhadeponlinecommine-shaft-5 rounded-[2px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-xaynhadeponlinecommine-shaft text-[9.8px] tracking-[0] leading-[13px] whitespace-nowrap">
                        Phòng Ngủ Urbino
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[475px] h-[172px] top-[115px] left-0">
                <div className="flex-col w-[247px] pl-0 pr-[19px] pt-0 pb-[9.75px] absolute top-0 left-0 flex items-start">
                  <div class="border-info border-2 border-width-4px rounded-[10px]">
                    <div className="form-control ">
                      <label className="cursor-pointer label pr-4 ">
                        <span className="label-text pr-12 pl-6 ">
                          Diện tích: 10m2
                        </span>
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-info"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-[228px] pt-0 pb-[9.75px] px-0 top-0 left-[247px] flex flex-col items-start absolute">
                  <div class="border-info border-2 border-width-4px rounded-[10px]">
                    <div className="form-control ">
                      <label className="cursor-pointer label pr-4 ">
                        <span className="label-text pr-12 pl-6 ">
                          Diện tích: 12m2
                        </span>
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-info"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-[247px] pl-0 pr-[19px] pt-5 pb-[9.75px] top-[57px] left-0 flex flex-col items-start absolute">
                  <div class="border-info border-2 border-width-4px rounded-[10px]">
                    <div className="form-control ">
                      <label className="cursor-pointer label pr-4 ">
                        <span className="label-text pr-12 pl-6 ">
                          Diện tích: 15m2
                        </span>
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-info"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-[228px] pt-5 pb-[9.75px] px-0 top-[57px] left-[247px] flex flex-col items-start absolute">
                  <div class="border-info border-2 border-width-4px rounded-[10px]">
                    <div className="form-control ">
                      <label className="cursor-pointer label pr-4 ">
                        <span className="label-text pr-12 pl-6 ">
                          Diện tích: 17m2
                        </span>
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-info"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                className="flex w-[475px] items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px] absolute top-[312px] rounded-[3.25px] border border-black border-xaynhadeponlinecomamber"
                href="/ThietKe"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center pl-[152.46px] pr-[144.84px] py-0 relative flex-1 grow">
                  <a
                    className="relative w-fit mt-[-1.00px]  text-center  whitespace-nowrap overflow-hidden "
                    href="/ThietKe"
                    rel="noopener noreferrer"
                  >
                    Tùy Biến Nội Thất
                  </a>
                </div>
                <div className="relative self-stretch w-[21.91px] ml-[-6.51px] rotate-180" />
              </a> */}

              <a
                className="flex w-[475px] items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px] absolute top-[312px] ml-1 rounded-[15px]"
                href="/ThietKe"
              >
                <button className="btn btn-outline btn-info flex w-[475px] items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px]   rounded-[15px]">
                  Tùy Biến Nội Thất
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div className="absolute w-[713px] h-[27px] top-[162px] left-[126px] pt-20 ">
        <ul className="steps">
          <a className="step step-info" href="/">
            {" "}
            Chọn mẫu Phòng
          </a>
          <a className="step step-info" href="/KichThuoc">
            {" "}
            Tùy chỉnh kích thước
          </a>
          <a className="step step-" href="">
            {" "}
            Tùy chỉnh Nội Thất
          </a>
          <a className="step step-" href="">
            {" "}
            Hoàn thành
          </a>
        </ul>
      </div>
    </>
  );
};

export default KichThuoc;
