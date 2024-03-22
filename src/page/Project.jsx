import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import api from "../config/axios";
import { Link } from "react-router-dom";

export const Project = () => {
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const response = await api.get("/blog");
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // Tạo state cho việc hover trên từng hình ảnh
  const [hoveredItems, setHoveredItems] = useState([]);

  // Hàm xử lý khi hover vào hình ảnh
  const handleMouseEnter = (index) => {
    setHoveredItems((prev) => {
      const newHoveredItems = [...prev];
      newHoveredItems[index] = true;
      return newHoveredItems;
    });
  };

  // Hàm xử lý khi rời chuột ra khỏi hình ảnh
  const handleMouseLeave = (index) => {
    setHoveredItems((prev) => {
      const newHoveredItems = [...prev];
      newHoveredItems[index] = false;
      return newHoveredItems;
    });
  };

  return (
    <>
      <Header />

      <div className="pt-64 pb-64 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white">
        <img src="https://www.lanha.vn/wp-content/uploads/2023/11/headline-web-2-3x-8-1300x243.png.webp" />
        <div className="mr-10">
          <Row>
            {blog.map((item, index) => (
              <Col key={item.id} span={8}>
                <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                  <Link to={`/duan/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      style={{
                        borderRadius: "15px",
                        width: "700px",
                        height: "300px",
                        transform: hoveredItems[index]
                          ? "scale(1.2)"
                          : "scale(1)",
                        transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                        filter: hoveredItems[index]
                          ? "brightness(40%)"
                          : "brightness(100%)", // Thêm filter để làm mờ ảnh
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    />
                  </Link>
                </div>
                <a href="/duanchitiet">
                  <p className="text-sm font-bold ml-20 mt-5">
                    {item.blogName}
                  </p>
                </a>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-10 mb-20">
          <ul className="flex justify-center">
            <button className="block border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50">
              Xem Thêm
            </button>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
