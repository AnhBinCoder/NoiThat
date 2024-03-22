import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import reactLogo from "/src/assets/react.svg";
// import viteLogo from "/vite.svg";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import { Col, Row } from "antd";

export const News = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <>
      <div className=" pb-62 pl-20 pr-20">
        <Header></Header>

        <h1 className="px-5 py-5 text-7xl font-normal  border-black  rounded-[15px] shadow-xl">
          Tin Tức
          <div className="italic ml-20 mb-5 text-2xl ">
            Sáng tạo, trẻ trung và đa dạng trong từng thiết kế.
          </div>
        </h1>

        <div className="ml-30 mt-20 border border-black px-5 py-5 rounded-[15px] shadow-xl bg-gradient-to-r from-white via-blue-200 to-white ">
          <Row>
            <Col span={12}>
              <div className="border border-gray-300 overflow-hidden rounded-[15px]">
                <a href="/xemtintuc">
                  <img
                    src="https://cdn.shopify.com/s/files/1/2313/3837/products/ifdc-sectional-colwood-grey-tufted-fabric-reversible-sectional-sofa-28555769708606_950x700.jpg?v=1628000188"
                    style={{
                      borderRadius: "15px",
                      width: "700px",
                      height: "300px",
                      transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.5s",
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  />
                </a>
              </div>
            </Col>
            <Col span={12}>
              <div className=" ml-10 mt-10">
                <p>24/2/2024</p>
              </div>
              <a
                href="/xemtintuc"
                className="ml-20  font-medium hover:text-blue-500"
              >
                LỰA CHỌN CHẤT LIỆU SOFA NHƯ THẾ NÀO LÀ PHÙ HỢP?
              </a>

              <p className="mt-5 ml-20 mr-20">
                Bạn vẫn chưa biết nên chọn chất liệu sofa như thế nào cho phù
                hợp với nhu cầu nhà mình? Cùng tham khảo một số đặc trưng của
                các chất liệu sofa để tìm ra sự lựa chọn tốt nhất cho mình nhé!
              </p>

              <button className="ml-40 mt-10 text-lg font-medium hover:text-blue-500 ">
                <a href="/xemtintuc">[Xem Thêm]</a>
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className=" ml-10 mt-10">
                <p>24/2/2024</p>
              </div>
              <button className="ml-20 mt-10 font-medium hover:text-blue-500  ">
                VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
              </button>
              <p className="mt-5 ml-20 mr-20">
                Ngày nay gian bếp không chỉ là nơi để các chị em trổ tài đảm
                đang nấu nướng mà đây còn là một phần thẩm mỹ không thể tách rời
                của toàn thể nội thất ngôi nhà. Nó thể hiện phong cách sống, sự
                tinh tế và “gu” riêng của mỗi gia chủ.
              </p>
              <button className="ml-40 mt-10 text-lg font-medium hover:text-blue-500">
                [Xem Thêm]
              </button>
            </Col>
            <Col span={12}>
              <div className="border border-gray-300 overflow-hidden rounded-[15px] ">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className="border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://th.bing.com/th/id/R.1703bcb44404ab9a6681c0631004f9fa?rik=%2fmZvR%2fChdTLA2A&riu=http%3a%2f%2fnhasang.net%2fupload%2fmisc%2fthiet-ke-noi-that-go-huong-phong-khach1_1535601160.jpg&ehk=1%2bY6PLgwTYAKmJxyHWctMVXZiGRPozMwnArAewu8Jik%3d&risl=&pid=ImgRaw&r=0"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered3 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className=" ml-10 mt-10">
                <p>24/2/2024</p>
              </div>
              <button className="ml-20 mt-10 font-medium hover:text-blue-500 ]">
                KHÔNG GIAN NỘI THẤT BIỆT THỰ VỚI GỖ TỰ NHIÊN CAO CẤP
              </button>
              <p className="mt-5 ml-20 mr-20">
                Với những đặc điểm ưu việt như vẻ đẹp sang trọng và độ bền bỉ
                với thời gian, chất liệu gỗ tự nhiên luôn được ưu ái sử dụng cho
                nội thất các công trình biệt thự đẳng cấp. Cùng tham quan không
                gian nội thất với 100% chất liệu gỗ đỏ của công trình biệt thự
                sầm uất.
              </p>
              <button className="ml-40 mt-10 text-lg font-medium hover:text-blue-500">
                [Xem Thêm]
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className=" ml-10 mt-10">
                <p>24/2/2024</p>
              </div>
              <button className="ml-20 mt-10 font-medium hover:text-blue-500  ">
                PHONG CÁCH SCANDINAVIAN - NÉT ĐẸP TỪ SỰ GIẢN ĐƠN
              </button>
              <p className="mt-5 ml-20 mr-20">
                Scandinavian là một phong cách thiết kế khởi nguồn vùng Bắc Âu,
                nơi đặc trưng bởi thiên nhiên khắc nghiệt, cái lạnh băng giá của
                những cánh rừng tuyết và nét hoang sơ và mộc mạc. Những đặc
                trưng này là nguồn cảm hứng tạo nên phong cách nội thất
                Scandinavian mà trong đó giá trị cốt lõi chính là sự cân bằng
                giữa chức năng và tính thẩm mỹ. Quản lý thiết kế nội thất và
                Truyền thông của Ikea, Craig Ritchie chia sẻ: “Phong cách
                Scandinavian gồm 3 thành phần chính – chức năng, đơn giản và
                đẹp.
              </p>
              <button className="ml-40 mt-10 text-lg font-medium hover:text-blue-500">
                [Xem Thêm]
              </button>
            </Col>
            <Col span={12}>
              <div className="border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://th.bing.com/th/id/OIP._09474VFW_6QOj87qdVCwwHaFs?w=1920&h=1476&rs=1&pid=ImgDetMain"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered4 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-10 mb-20">
          <ul className="flex justify-center">
            <li className="mx-1">
              <a
                href="#"
                className="block border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
            </li>
            <li className="mx-1">
              <a
                href="#"
                className="block border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
            </li>
            <li className="mx-1">
              <a
                href="#"
                className="block border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
