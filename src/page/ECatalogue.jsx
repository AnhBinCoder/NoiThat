import Footer from "../components/Footer";
import Header from "../components/Header";

export const ECatalogue = () => {
  return (
    <>
      <Header />

      <div className="bg-white">
        {/* <div
          className="text text-4xl bold text-center pt-20 "
          style={{ backgroundColor: "white" }}
        >
          E Catalogue
        </div> */}
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://truongthang.vn/wp-content/uploads/2023/09/1000x1000-5.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">E-Catalogue</h1>
              <p className="py-6">
                Efurnitue đem đến cho bạn ECatalogue để bạn có thể tham khảo chi
                tiết những sản phẩm của chúng tôi.
              </p>
              <a href="http://localhost:8080/CATALOGUE_VMS_2018_1 (2).pdf">
                <button className="btn btn-primary">Xem Thêm</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ECatalogue;
