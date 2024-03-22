import { Col, Row } from "antd";
import Header from "../components/Header";
import { useState } from "react";
import { Divider } from "antd";
import Footer from "../components/Footer";
export const DetailedNews = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <>
      <Header />
      <div className="pt-64 pb-64 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white">
        <Row>
          <Col span={6} push={18}>
            <div className=" ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                />
              </div>
              <div className="px-5 py-3 ">
                <button className="   ml-5 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
            <div className=" ml-5 mt-10 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://th.bing.com/th/id/R.1703bcb44404ab9a6681c0631004f9fa?rik=%2fmZvR%2fChdTLA2A&riu=http%3a%2f%2fnhasang.net%2fupload%2fmisc%2fthiet-ke-noi-that-go-huong-phong-khach1_1535601160.jpg&ehk=1%2bY6PLgwTYAKmJxyHWctMVXZiGRPozMwnArAewu8Jik%3d&risl=&pid=ImgRaw&r=0"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                />
              </div>
              <div className="px-5 py-3 ">
                <button className="   ml-5 font-medium hover:text-blue-500">
                  KHÔNG GIAN NỘI THẤT BIỆT THỰ VỚI GỖ TỰ NHIÊN CAO CẤP
                </button>
              </div>
            </div>
          </Col>

          <Col span={18} pull={6}>
            <div className="ml-20 mb-5 ">
              <h1 className=" mb-5 text-5xl font-normal">
                LỰA CHỌN CHẤT LIỆU SOFA NHƯ THẾ NÀO LÀ PHÙ HỢP?
              </h1>

              <Divider />
              <p>
                Ngôi nhà mơ ước cho gia đình bạn vừa hoàn thành và bạn đang rất
                háo hức sắm sửa nội thất cho gia đình mình. Trong số đó lựa chọn
                một bộ sofa ưng ý cho phòng khách hẳn là một trong những điều
                rất được chú ý quan tâm. Thế nhưng bạn vẫn chưa biết nên chọn
                chất liệu sofa như thế nào cho phù hợp với nhu cầu nhà mình?
                Cùng tham khảo một số đặc trưng của các chất liệu sofa để tìm ra
                sự lựa chọn tốt nhất cho mình nhé!
              </p>
              <img
                src="https://cdn.shopify.com/s/files/1/2313/3837/products/ifdc-sectional-colwood-grey-tufted-fabric-reversible-sectional-sofa-28555769708606_950x700.jpg?v=1628000188"
                className="  mt-5 mb-5 rounded-[15px]  "
              />
              <p className="italic mb-5 text-2xl "> Sofa vải</p>
              <p>
                Đối với những ai yêu thích phong cách trẻ trung, hiện đại và đa
                dạng kiểu dáng thì sofa vải hẳn là một lựa chọn đáng xem xét.
                Sofa vải thường mang đến cảm giác ấm áp, mềm mại và đa dạng màu
                sắc, kiểu dáng bạn có thể tha hồ lựa chọn để sáng tạo nên phòng
                khách mang phong cách riêng của chính mình. Riêng về loại vải
                cũng có nhiều để bạn lựa chọn như vải bố, vải nhung, vải nỉ với
                nhiều kiểu dệt như đơn sắc, kẻ sọc, hoa văn thậm chí là in ảnh
                lên. Tuy theo loại vải mà giá thành có thể dao động, tuy nhiên
                sofa vải vẫn nằm trong nhóm sofa có mức giá tương đối kinh tế và
                phù hợp với túi tiền của nhiều người. Mặc dù vậy, phải thừa nhận
                một số nhược điểm của sofa vải mà bạn cần phải cân nhắc trước
                khi chọn mua. Vì chất liệu vải dễ bám bụi, lại rất khó vệ sinh
                nên nếu nhà bạn có trẻ con hoặc nuôi thú cưng thì sử dụng sofa
                vải có vẻ không phải là một lựa chọn lý tưởng. Ngoài ra, chất
                liệu vải sẽ bị mòn và dễ bạt màu trong quá trình sử dụng vì lẽ
                đó sofa vải có tuổi thọ ngắn hơn thường là khoảng 3 - 5 năm bạn
                nên thay mới.
              </p>
              <img
                src="https://th.bing.com/th/id/R.0a6d543c9d72a7ed142361a9b3960614?rik=Q8Yrk5U63nFCIg&riu=http%3a%2f%2fhawk-haven.com%2fwp-content%2fuploads%2fimgp%2feuropean-leather-sectional-sofas-2-5832.jpg&ehk=qnY3H%2fuTTiRIur7MNTtIosVCigfNHrYvpV%2flPtpiuQM%3d&risl=&pid=ImgRaw&r=0"
                className="  mt-5 mb-5 rounded-[15px]  "
              />
              <img
                src="https://noithattana.vn/wp-content/uploads/2020/07/sofa-vai-nhap-khau-TA-2053.jpg"
                className="  mt-5 mb-5 rounded-[15px]  "
              />
              <p className="italic mt-5 mb-5 text-2xl "> Sofa da</p>
              <p>
                Sofa da rất sang trọng, thoáng mát, độ bền cao, sử dụng càng
                nhiều da càng bóng đẹp. Bất cứ mẫu sofa nào khi sử dụng chất
                liệu da thật đều đẹp. Bề mặt da dễ dàng làm sạch khi có vết bẩn
                dính vào như café, trà, dầu ăn, nước xốt… Đây là ưu điểm vượt
                trội so với các chất liệu khác như vải nỉ. Chỉ có điều giá thành
                khá cao. Bạn nên tìm hiểu cách vệ sinh và bảo quản sofa da để
                đảm bảo độ bền cho sofa da. Do da thật vừa đem lại cảm giác sang
                trọng lẫn cảm giác mềm mại, nên có thể sử dụng được cho nhiều
                loại sofa như dùng để tiếp khách hay để sinh hoạt gia đình hoặc
                để ngồi thư giãn với nhiều kiểu dáng đa dạng. Những bộ sofa có
                kích thước lớn, nhiều chỗ ngồi hoặc bố cục kiểu nhiều ghế quy tụ
                hay đối mặt quanh bàn trà sẽ rất thích hợp và là nơi để chất
                liệu da thể hiện những ưu điểm của mình.
              </p>
              <p className="italic mt-5 mb-5 text-2xl "> Sofa giả da</p>
              <p>
                Một lựa chọn nữa cho khách hàng yêu thích vẻ đẹp và sự tiện lợi
                của sofa da nhưng lại có một ngân sách khiêm tốn đó là sofa giả
                da. Sofa giả da được làm bằng chất liệu da công nghiệp (thường
                là PU), có những đặc tính không khác nhiều so với da thật lại có
                giá khá “mềm”. Tuy nhiên, xét về độ bền sofa giả da không thể
                nào sánh với da thật. Thông thường khi dùng khoảng 5 – 7 năm
                sofa giả da sẽ xuất hiện vết nứt, bong tróc rất mất thẩm mỹ và
                bạn không có cách nào khắc phụ ngoài việc bỏ đi.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};
