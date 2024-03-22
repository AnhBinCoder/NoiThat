import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./index.scss";
import ThietKe from "./page/ThietKe";
import KichThuoc from "./page/KichThuoc";
import Test from "./page/Test";
import LoginPage from "./page/LoginPage";
import HoanThanh from "./page/HoanThanh";
import PhongNgu from "./page/PhongNgu";
import Home from "./page/Home";
import PhongKhach from "./page/PhongKhach";
import PhongBep from "./page/PhongBep";
import Profiles from "./page/Profiles";
import SignUpPage from "./page/SignUpPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
import Dashboard from "./components/dashboard";
import { ManageProduct } from "./page/Staff/product";
import News from "./page/News";
import { DetailedNews } from "./page/DetailedNews";
import Project from "./page/Project";
import DetailedProject from "./page/DetailedProject";
//  import { ToastContainer } from "react-toastify";
// import { ManageCategory } from "./page/Staff/category";
import { Request } from "./page/Customer";
import { ManageRequest } from "./page/Staff/request";
import SanPham from "./page/SanPham";
import { ManageQuotation } from "./page/Staff/quotation";
import { QuotationRequest } from "./page/Customer/QuotationRequest";
import { Quotation } from "./page/quotation";
import { ManageCategory } from "./page/Staff/category";
import { ManageBlog } from "./page/Staff/blog";
import { ManageAccount } from "./page/Admin/account";
import { App } from "./page/App";
import ECatalogue from "./page/ECatalogue";

function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quotation" element={<Quotation />}></Route>
        <Route path="/thietke" element={<ThietKe />}></Route>
        <Route path="/kichthuoc" element={<KichThuoc />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/hoanthanh" element={<HoanThanh />}></Route>
        <Route path="/phongngu" element={<PhongNgu />}></Route>
        <Route path="/trangchu" element={<Home />}></Route>
        <Route path="/phongkhach" element={<PhongKhach />}></Route>
        <Route path="/phongbep" element={<PhongBep />}></Route>
        <Route path="/profile" element={<Profiles />}></Route>
        <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/sanpham" element={<SanPham />}></Route>
        <Route path="/app" element={<App />}></Route>
        <Route path="/ecatalogue" element={<ECatalogue />}></Route>
        <Route
          path="/quotationrequest"
          element={<ManageRequest isCustomer />}
        ></Route>
        <Route path="/xemtintuc" element={<DetailedNews />}></Route>
        <Route path="/duan" element={<Project />}></Route>
        <Route path="/duan/:id" element={<DetailedProject />}></Route>
        <Route path="/tintuc" element={<News />}></Route>
        <Route
          path="/ForgotPasswordPage"
          element={<ForgotPasswordPage />}
        ></Route>

        <Route path="/dashboard">
          <Route path="staff" element={<Dashboard role={"STAFF"} />}>
            <Route path="product" element={<ManageProduct />}></Route>
            <Route path="category" element={<ManageCategory />}></Route>
            <Route path="request" element={<ManageRequest />}></Route>
            <Route path="quotation" element={<ManageQuotation />}></Route>
            <Route path="blog" element={<ManageBlog />}></Route>
          </Route>
          <Route path="admin" element={<Dashboard role={"ADMIN"} />}>
            <Route path="account" element={<ManageAccount />}></Route>
            <Route path="product" element={<ManageProduct />}></Route>
            <Route path="category" element={<ManageCategory />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
