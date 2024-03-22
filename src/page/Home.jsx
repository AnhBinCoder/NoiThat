import { useState } from "react";
//  import reactLogo from "/src/assets/react.svg";
// import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VideoHoverPlay from "../components/VideoHoverPlay";
import React from "react";
import "daisyui/dist/full.css";
import { FloatButton, Typography } from "antd";

import ImageHover from "../components/ImageHover";
import "./CSS/Swiper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;
function nextSlide() {
  const items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

function prevSlide() {
  const items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}
export const Home = () => {
  return (
    <>
      <Header />
      <div className=" ">
        <div className="flex rounded-[15px]  ">
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage:
                "url(https://thegioidogo.com/wp-content/uploads/2022/12/noi-that-go-tu-nhien-12.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 bg-white"></div>
            <div className="hero-content lg:flex text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold ">Efurniture</h1>
                <p className="mb-5">
                  <p>Efurniture chuyên cung cấp các sản phẩm nội thất</p>
                  <p> hiện đại đẹp mắt và chất lượng cao</p>
                  Efurniture luôn cam kết mang đến cho bạn những sản phẩm nội
                  thất tốt nhất với giá cả hợp lý và dịch vụ chăm sóc khách hàng
                  tận tình.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-blue-300 to-blue-50 w-200 h-200"> */}
        <div
          style={{
            // backgroundImage:
            //   "linear-gradient(to right, rgb(135, 206, 250), rgb(224, 255, 255))",
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingBottom: "20px",
          }}
        >
          <div class="grid grid-cols-3 gap-4 py-2 px-2 pt-5">
            <div className="pt-10 py-5 px-5  ">
              <div className="text-3xl font-serif font-bold  ">
                Những sản phẩm nổi bật
              </div>
              <div className="text-2xl font-serif mt-5 font-bold pl-20">
                Được thực hiện bởi chúng tôi
              </div>

              <div className="stats stats-vertical mt-40 ml-10">
                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Mẫu nội thất
                  </div>
                  <div className="stat-value">1000+</div>
                </div>

                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Khách hàng hài lòng
                  </div>
                  <div className="stat-value">4,200+</div>
                </div>

                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Nhân viên giàu kinh nghiệm
                  </div>
                  <div className="stat-value">120</div>
                </div>
              </div>
            </div>

            <div>
              <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p21s.webm" />
                  </div>
                </div>

                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p22s.webm" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p23s.webm" />
                  </div>
                </div>

                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p24s.webm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              // width: "100vw",
              height: "100vh",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <video
              autoPlay
              controls
              loop
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source
                src="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/panoramas.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/*dự án đã thực hiện */}
          <div
            className="text-center py-10 text-5xl "
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Dự Án Đã Thực Hiện
          </div>

          <div class="grid grid-cols-4 gap-4 justify-center items-center ml-10">
            {/* Artboard 1 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 2 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="https://design-community-us-s3.coohom.com/design/img/perm/MM65N2IKTIZYYAABAAAAABQ8.png?x-oss-process=image/resize,w_1080/format,webp"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 3 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 4 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 5 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 6 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 7 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
            {/* Artboard 8 */}
            <div>
              <div>
                <ImageHover
                  imageUrl="public/c7a093b45714834ada0514.jpg"
                  hoverText="Xem Thêm"
                />
              </div>
            </div>
          </div>

          <a style={{ fontFamily: "Playfair Display, serif" }} href="/request">
            <div className="text-center py-10 text-5xl">
              Một Số Hình Ảnh Được Thực Hiện
            </div>
          </a>

          {/* ////////swiper */}
          {/* <div className="swiper-wrapper "> */}
          <div className="container ">
            <div className="slide">
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Khách
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng khách Châu Âu với thiết kế hiện đại nhưng đơn giản,
                    hài hòa
                  </div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Khách
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng khách mang phong cách Vintage nhẹ nhàng tình cảm
                  </div>

                  <button>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Khách
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng khách mang phong cách Vintage với tông màu trắng sáng
                  </div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Ngủ
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng ngủ tươi sáng tạo cảm giác sạch sẽ, thoáng mát cho gia
                    chủ
                  </div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Ngủ
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng ngủ với màu trầm tạo cảm giác ấm áp, gần gũi
                  </div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="content">
                  <div
                    className="name"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Bếp
                  </div>
                  <div
                    className="des"
                    style={{
                      textShadow:
                        "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    }}
                  >
                    Phòng Bếp, nơi dành cho gia đình quây quần trong những bữa
                    tối cùng nhau
                  </div>
                  <button>See More</button>
                </div>
              </div>
            </div>

            <div className="button1">
              <button className="prev" onClick={prevSlide}>
                {/* <i className="fas fa-arrow-left"></i> */}
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
          {/* /////swiper */}
          <a
            style={{ fontFamily: "Playfair Display, serif" }}
            href="/request"
            target="_blank"
          >
            <div className="text-center py-10 text-5xl">
              Gửi Yêu Cầu Thiết Kế
            </div>
          </a>
        </div>
      </div>
      <FloatButton.BackTop />

      <Footer />
    </>
  );
};

export default Home;
