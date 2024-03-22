//  import { useEffect, useState } from "react";
//  import reactLogo from "/src/assets/react.svg";
//  import viteLogo from "/vite.svg";
//  import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/feature/counterSlide";
import LoginPage from "./LoginPage";
import axios from "axios";
import api from "../config/axios";
import { login, logout } from "../redux/feature/authenSlice";
//  import { store } from "../redux/store";

export const App = () => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    setAccount(JSON.parse(localStorage.getItem("account")));
  }, [localStorage]);
  const counter = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  const LoginHanler = async () => {
    const response = await api.post("/authentication/login", {
      username: "phong",
      password: "123",
    });
    console.log(response);
    dispatch(login(response.data));
  };
  const LogoutHanler = async () => {
    dispatch(logout());
  };

  return (
    <>
      <Header />
      <div className="bg-white flex flex-row justify-center w-full ">
        <div className="flex flex-col w-[1440px] h-[4000px]  gap-[40px] mt-5 top-[190px] left-0">
          <div className="flex flex-col h-[4000px] items-center pt-0 pb-[50px] px-[320px] relative self-stretch w-full">
            <div className="relative max-w-[1200px] w-[1200px] h-[3977px] mb-[-27.00px] ml-[-200.00px] mr-[-200.00px]">
              <div className="flex flex-col w-[1170px] items-start top-0 left-[15px] bg-vinmuscomalabaster">
                <div className="flex flex-wrap items-center gap-[0px_0px]  self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[585px] items-start ">
                    <div className="flex flex-col  gap-[20px] p-[30px]  self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start pt-0 pb-[20px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="pl-0 pr-[285px] py-0 flex flex-col  relative  w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-vinmuscommine-shaft text-[25px] leading-[33px] ">
                            PHÒNG NGỦ URBINO
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col max-h-[88px] items-start pl-0 pr-[6px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px]">
                          Urbino là tên gọi của một thành phố đáng yêu thơ mộng
                          ở miền trung nước Ý, lấy
                          <br />
                          cảm hứng từ những chất liệu mộc mạc, nguyên bản nhất
                          của xứ sở quê hương mình
                          <br />
                          nhà thiết kế người Ý Carmen Volonnino đã phác họa nên
                          bộ sưu tập phòng ngủ
                          <br />
                          mang vẻ trang nhã, thanh lịch. Những đường cong bo
                          tròn của thiết kế ...
                        </p>
                      </div>
                      <div className="flex flex-col items-start pl-0 pr-[416px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                        <a
                          className="inline-flex items-start px-[19px] py-[12px] relative flex-[0_0_auto] mr-[-2.00px] border border-solid border-[#37667e] rounded-[5px] mt-5"
                          href="/KichThuoc"
                        >
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                            TÙY CHỈNH
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[585px] items-start relative">
                    <div className="relative self-stretch w-full h-[390px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/585-crop-v1-jpg-1.png)] bg-cover bg-[50%_50%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[1170px] items-start absolute top-[1065px] left-[15px]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px]">
                  Urbino là tên gọi của một thành phố đáng yêu thơ mộng ở miền
                  trung nước Ý, lấy cảm hứng từ những chất liệu mộc mạc, nguyên
                  bản nhất của xứ sở quê hương mình nhà thiết kế người Ý<br />
                  Carmen Volonnino đã phác họa nên bộ sưu tập phòng ngủ mang vẻ
                  trang nhã, thanh lịch.
                </p>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative max-w-[1170px] w-[1170px] h-[750px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/v10-jpg-2.png)] bg-cover bg-[50%_50%]" />
                  <div className="flex flex-col items-start pl-[10px] pr-[983px] py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-vinmuscomwild-sand">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal italic text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                      Bộ sưu tập phòng ngủ Urbino
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start pl-0 pr-[3px] py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px]">
                    Những đường cong bo tròn của thiết kế tủ đầu giường và chất
                    liệu sản phẩm được  tạo nên từ hình tường chiếc mũ của công
                    tước Urbino một trong những bức tranh nổi tiếng nhất thời
                    Phục
                    <br />
                    hừng từ họa sỹ Pier della Francesca. Hài hòa trong tổng thể,
                    sáng tạo trong thiết kế, Urbino thật sự đưa chúng ta chìm
                    trong không gian của giấc mộng Ý nên thơ.
                  </p>
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="relative max-w-[1170px] w-[1170px] h-[585px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/v10-jpg-1.png)] bg-cover bg-[50%_50%]" />
                  <div className="flex flex-col items-start pl-[10px] pr-[983px] py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-vinmuscomwild-sand">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal italic text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                      Bộ sưu tập phòng ngủ Urbino
                    </p>
                  </div>
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="relative max-w-[1170px] w-[1170px] h-[750px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/v9-jpg.png)] bg-cover bg-[50%_50%]" />
                  <div className="flex flex-col items-start pl-[10px] pr-[983px] py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-vinmuscomwild-sand">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal italic text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                      Bộ sưu tập phòng ngủ Urbino
                    </p>
                  </div>
                </div>
                <div className="relative self-stretch w-full h-[32px]" />
              </div>
              <div className="flex flex-col w-[1170px] items-start absolute top-[3426px] left-[15px] bg-vinmuscomalabaster">
                <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[585px] items-start relative">
                    <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch max-w-[585px] w-full h-[390px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/585-crop-v1-jpg-1.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                  <div className="flex flex-col w-[585px] items-start relative">
                    <div className="flex flex-col items-start gap-[15px] px-[70px] py-[25px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="pl-0 pr-[205px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-vinmuscommine-shaft text-[25px] tracking-[0] leading-[33px] whitespace-nowrap">
                          PHÒNG NGỦ URBINO
                        </div>
                      </div>
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="gap-[83px] bg-vinmuscomnero flex items-start px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Vật liệu
                          </div>
                          <div className="w-[285px] pl-0 pr-[221px] py-0 flex flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                              Gỗ Sồi, Da
                            </div>
                          </div>
                        </div>
                        <div className="gap-[76px] flex items-start px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Màu sắc
                          </div>
                          <div className="w-[285px] pl-0 pr-[196px] py-0 flex flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                              Nâu, cam, đen
                            </div>
                          </div>
                        </div>
                        <div className="gap-[71px] bg-vinmuscomnero flex items-start px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Bảo hành
                          </div>
                          <div className="w-[285px] pl-0 pr-[246px] py-0 flex flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                              2 năm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[1170px] items-center gap-[15px] absolute top-[3866px] left-[15px]">
                <a
                  className="inline-flex max-w-[530px] items-start justify-center pl-[37.36px] pr-[36.64px] py-[16px] relative flex-[0_0_auto] bg-x-0baf-4d"
                  href="http://vinmus.com/vn/bo-suu-tap/booking.html/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a
                    href="http://vinmus.com/vn/bo-suu-tap/booking.html/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-vinmuscomnero text-[24px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                      ĐĂNG KÝ NHẬN BÁO GIÁ &amp; E-CATALOGUE
                    </p>
                  </a>
                </a>
                <div className="relative self-stretch w-full h-[32px]">
                  <div className="absolute h-[20px] top-[9px] left-[390px] [font-family:'Roboto',Helvetica] font-bold text-vinmuscommine-shaft text-[12px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                    LIÊN HỆ TƯ VẤN:
                  </div>
                  <div className="absolute h-[32px] -top-px left-[505px] [font-family:'Roboto',Helvetica] font-bold text-vinmuscomalizarin-crimson text-[24px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                    012345678
                  </div>
                </div>
              </div>

              <a
                className="inline-flex items-start absolute top-[435px] left-[12px]"
                href="http://vinmus.com/vn/phong-ngu-urbino.html/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative max-w-[1170px] w-[1170px] h-[585px] bg-[url(https://c.animaapp.com/KkHkuxoG/img/v10-jpg-1.png)] bg-cover bg-[50%_50%]" />
              </a>
            </div>
          </div>
          <Footer />
        </div>

        {/* <div className="absolute w-[713px] h-[27px] top-[162px] left-[126px]">


          <ul className="steps">
            <a className="step step-info" href="/"> Chọn mẫu Phòng</a>
            <a className="step step-" href="/KichThuoc"> Tùy chỉnh kích thước</a>
            <a className="step step-" href="/ThietKe"> Tùy chỉnh Nội Thất</a>
            <a className="step step-" href="/HoanThanh"> Hoàn thành</a>
          </ul>


         

        </div> */}
      </div>
    </>
  );
};

export default App;
