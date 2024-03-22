import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
function Footer() {
  const borderTopStyle = {
    borderTop: "3px", // Thiết lập border top
  };

  const [webInfoOpen, setWebInfoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const showWebInfoDrawer = () => {
    setWebInfoOpen(true);
  };

  const showContactDrawer = () => {
    setContactOpen(true);
  };

  const onClose = () => {
    setWebInfoOpen(false);
    setContactOpen(false);
  };

  return (
    <>
      <div
        className="  bg-gradient-to-r from-gray-200  via-blue-200 to-gray-200  p-8 "
        style={borderTopStyle}
      >
        <footer className="footer text-base-content ">
          <aside>
            <div className="flex w-full ">
              <div className="wpb_wrapper">
                <div className="wpb_map_wraper ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.656224107062!2d106.8007234!3d10.8751238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbiBUUC5IQ00!5e0!3m2!1svi!2s!4v1708582469681!5m2!1svi!2s"
                    width={250}
                    height={150}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </aside>

          <nav className="text-black text-sm font-medium">
            <h6 className="mb-2 font-bold uppercase border-b-2  border-orange-500">
              Sản Phẩm
            </h6>
            <a
              href="/phongngu"
              target="_blank"
              className="link link-hover opacity-80 "
            >
              Phòng Ngủ
            </a>
            <a
              href="/phongbep"
              target="_blank"
              className="link link-hover opacity-80"
            >
              Phòng Bếp
            </a>
            <a
              href="/phongkhach"
              target="_blank"
              className="link link-hover opacity-80"
            >
              Phòng Khách
            </a>
          </nav>
          {/* Thông Tin Về Web */}

          <nav className="text-black text-sm font-medium">
            <h6 className="mb-2 font-bold uppercase border-b-2 border-orange-500">
              Liên Lạc
            </h6>
            <a
              className="link link-hover opacity-80"
              onClick={showWebInfoDrawer}
              style={{ cursor: "pointer" }}
            >
              Thông Tin về Web
            </a>
            <Drawer
              title="Thông Tin về Web "
              onClose={onClose}
              visible={webInfoOpen}
            >
              <p className="text-center">
                Tại trang web của chúng tôi, bạn sẽ khám phá một bộ sưu tập đa
                dạng các sản phẩm nội thất, từ phòng ngủ đến phòng khách, từ
                phòng bếp đến phòng làm việc. Chỉ cần một vài bước đơn giản, bạn
                có thể nhận được báo giá chi tiết về các sản phẩm mong muốn,
                giúp bạn dễ dàng lựa chọn và quyết định mua sắm. Hãy đồng hành
                cùng chúng tôi trên hành trình tìm kiếm nội thất hoàn hảo để tạo
                nên không gian sống lý tưởng của bạn. Cảm ơn bạn đã ghé thăm
                trang web của chúng tôi!
              </p>
              <p className="text-center pt-2">
                Với sự kết hợp hoàn hảo giữa thiết kế hiện đại và chất lượng
                đáng tin cậy, mỗi sản phẩm trên trang web đều được lựa chọn kỹ
                lưỡng để đáp ứng nhu cầu và sở thích của mọi khách hàng. Bên
                cạnh đó, trang web của chúng tôi còn cung cấp dịch vụ báo giá
                nhanh chóng và chính xác.
              </p>
              <p>
                <p className="text-center pt-2">
                  Trang Web được phát triển bởi :
                </p>
                <div className="text-center pt-2 link link-hover opacity-80 text-blue-500">
                  <div>
                    <a
                      href="https://www.facebook.com/hoang.thanh.que"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Vũ Đậu Thành Hoàng
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/bi.vinh.505"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Nguyễn Thành Vinh
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/khuong.tung.3"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Thái Tùng Khương
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/trannhoangg.phongg"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Trần Hoàng Phong
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/ngocduong53"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Vũ Ngọc Dương
                    </a>
                  </div>
                </div>
              </p>
            </Drawer>
            {/* Liên Lạc */}
            <a
              className="link link-hover opacity-80 "
              onClick={showContactDrawer}
              style={{ cursor: "pointer" }}
            >
              Liên Lạc
            </a>
            <Drawer title="Liên Lạc" onClose={onClose} visible={contactOpen}>
              <div>
                <p className="p-1">
                  <MailOutlined />
                  <span className="p-2">
                    Gmail: hoangvdtse160556@fpt.edu.vn
                  </span>
                </p>
                <p className="p-1">
                  <MailOutlined />
                  <span className="p-2">Gmail: hoangvdt.dev@gmail.com</span>
                </p>
                <p className="p-1">
                  <PhoneOutlined />
                  <span className="p-2"> Phone: 0979446188</span>
                </p>
                <p className="p-1 ">
                  <PhoneOutlined />
                  <span className="p-2"> Phone: 0979446188</span>
                </p>
              </div>
            </Drawer>
          </nav>
          {/* thông tin thêm */}

          <nav className="text-black text-sm font-medium">
            <h6 className=" mb-2 font-bold uppercase border-b-2 border-orange-500 ">
              Thông Tin Thêm
            </h6>
            <a className="link link-hover opacity-80">Tin Tức</a>
            <a className="link link-hover opacity-80">Mẫu Thiết Kế Sẵn</a>
            <a
              href="/sanPhamDon"
              target="_blank"
              className="link link-hover opacity-80"
            >
              Sản Phẩm Đơn
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
export default Footer;
