import Footer from "../components/Footer";
import Header from "../components/Header";

export const PhongNgu = () => {
  return (
    <>
      <Header />
      <div className="pt-10 pl-20 pr-20">
        <div
          className="hero min-h-screen rounded-[15px] "
          style={{
            backgroundImage:
              "url(https://noithatlacgia.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-nha-pho-hien-dai-anh-binh-24.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">PHÒNG NGỦ</h1>
              <p className="mb-5">
                Sáng tạo, trẻ trung và đa dạng trong từng thiết kế.
                <p>
                  Một thiết kế phòng ngủ nhỏ đẹp sẽ giúp tạo nên một không gian
                  nghỉ ngơi thư giãn, thoải mái, vì vậy, biết cách thiết kế sao
                  cho đảm bảo công năng thẩm mỹ là rất quan trọng.
                </p>
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10">
          {/* Content 1 & 2*/}
          <div className="flex w-full pt">
            <div
              className="card lg:card-side bg-base-100 shadow-xl"
              style={{
                width: "700px", // Điều chỉnh kích thước của thẻ card theo nhu cầu
                marginRight: "20px", // Khoảng cách giữa các thẻ card
              }}
            >
              <figure>
                <img
                  src="https://noithatsanvuon.com/images/2020/12/22/Mang-den-ve-dep-vuot-thoi-gian-1.jpg"
                  alt="Album"
                  style={{ height: 270, width: 450 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Phòng Ngủ Châu Âu</h2>
                <p>Nội thất Châu Âu hiện đại, sang trọng</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Chi Tiết</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="divider divider-horizontal"></div>
            {/*  */}
            <div
              className="card lg:card-side bg-base-100 shadow-xl "
              style={{
                width: "700px", // Điều chỉnh kích thước của thẻ card theo nhu cầu
                marginRight: "20px", // Khoảng cách giữa các thẻ card
              }}
            >
              <figure>
                <img
                  src="https://furaka.vn/wp-content/uploads/2022/05/Decor-phong-ngu.png"
                  alt="Album"
                  style={{ height: 270, width: 450 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Phòng Ngủ Vintage</h2>
                <p>
                  Phòng ngủ Vintage với nội thất vintage
                  <p> nhẹ nhàng, ấm áp.</p>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Chi Tiết</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          {/* Content 3 & 4 */}
          <div className="flex w-full">
            <div
              className="card lg:card-side bg-base-100 shadow-xl"
              style={{
                width: "700px", // Điều chỉnh kích thước của thẻ card theo nhu cầu
                marginRight: "20px", // Khoảng cách giữa các thẻ card
              }}
            >
              <figure>
                <img
                  src="https://storage.googleapis.com/digital-platform/hinh_anh_10_y_tuong_trang_tri_phong_ngu_kieu_han_quoc_dep_hien_dai_so_1_83e992d9b5/hinh_anh_10_y_tuong_trang_tri_phong_ngu_kieu_han_quoc_dep_hien_dai_so_1_83e992d9b5.jpg"
                  alt="Album"
                  style={{ height: 270, width: 450 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Phòng Ngủ Hàn Quốc</h2>
                <p>
                  Phòng ngủ Hàn Quốc,{" "}
                  <p>nội thất cơ bản đến từ xứ sở Kim Chi.</p>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Chi Tiết</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="divider divider-horizontal"></div>
            {/*  */}
            <div
              className="card lg:card-side bg-base-100 shadow-xl "
              style={{
                width: "700px", // Điều chỉnh kích thước của thẻ card theo nhu cầu
                marginRight: "20px", // Khoảng cách giữa các thẻ card
              }}
            >
              <figure style={{ height: 270, width: 450 }}>
                <img
                  src="https://storage.googleapis.com/digital-platform/hinh_anh_goi_y_cach_trang_tri_phong_ngu_kieu_nhat_toi_gian_sang_trong_so_11_b16adb523d/hinh_anh_goi_y_cach_trang_tri_phong_ngu_kieu_nhat_toi_gian_sang_trong_so_11_b16adb523d.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Phòng ngủ Nhật Bản</h2>
                <p>
                  Mẫu phòng đến từ <p>xứ sở Hoa Anh Đào</p>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Chi Tiết</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          {/* Content 5 & 6 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhongNgu;
