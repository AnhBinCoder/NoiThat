import { useEffect, useState } from "react";
import api from "../config/axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

function PhongKhach() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/template");
        setData(response.data.templateSectionDTOS);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      {/* Hero section */}
      <div className="pt-10 pl-20 pr-20">
        <div
          className="hero min-h-screen rounded-[15px] "
          style={{
            backgroundImage:
              "url(https://donggia.vn/wp-content/uploads/2020/12/phong-khach-biet-thu-cao-cap.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">PHÒNG KHÁCH</h1>
              <p className="mb-5">Vẻ đẹp của tổ ấm</p>
              <p>
                Phòng khách là nơi thể hiện rõ cá tính và phong cách thẩm mỹ
                riêng của gia chủ. Phòng khách không chỉ đáp ứng đầy đủ công
                năng mà còn phải đẹp và phong cách
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mapping qua dữ liệu từ API để render các card */}
      <div className="flex flex-col w-full pt-5 pb-10">
        {data.map((section, index) => (
          <div key={index} className="flex w-full">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img src={section.img} alt={section.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{section.name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
            {/* Thêm phần divider giữa các card */}
            {index < data.length - 1 && (
              <div className="divider divider-horizontal"></div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default PhongKhach;
