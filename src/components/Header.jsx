import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../redux/feature/authenSlice";
import { DownOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import "animate.css";

export const Header = () => {
  const user = useSelector((store) => store.authen);
  const dispatch = useDispatch();
  const items = [
    {
      label: (
        <div className="text-center bg-green-500 p-1 rounded-3xl">
          <Link to={"/profile"}>Setting</Link>
        </div>
      ),
    },
    {
      label: (
        <div className="text-center bg-green-500 p-1 rounded-3xl">
          <Link to={"/quotationrequest"}>Quotation</Link>
        </div>
      ),
    },
    {
      type: "divider",
    },

    {
      label: (
        <div
          className="text-center bg-red-500 p-1 rounded-3xl"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </div>
      ),
    },
  ];
  const downLine = [
    {
      label: <a href="/phongngu">Phòng Ngủ</a>,
    },
    {
      type: "divider",
    },
    {
      label: <a href="/phongbep">Phòng Bếp</a>,
    },
    {
      type: "divider",
    },
    {
      label: <a href="/phongkhach">Phòng Khách</a>,
    },
  ];
  return (
    <>
      <header
        className=" top-0 sticky z-50  "
        style={{
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        <div
          className="  bg-gradient-to-r from-gray-200 via-blue-200 to-white  "
          style={{
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          <div class=" pt-5  pr-20 pb-5 ">
            <div className=" flex flex-row justify-end w-full  ">
              <nav className="flex items-center ">
                <ul className="flex mr-8 ">
                  <div>
                    <Dropdown
                      menu={{ items: downLine }}
                      trigger={["click"]}
                      placement="bottomLeft"
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <a
                            className="px-3 py-11  capitalize text-sm font-medium transition duration-500 text-black"
                            href="#"
                          >
                            <span>
                              Bộ Sưu Tập
                              <DownOutlined className="text-xs mt-[-3px] align-middle pl-1" />
                            </span>
                          </a>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href="/sanpham"
                    >
                      <span>Sản Phẩm</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href="/duan"
                    >
                      <span>Mẫu Thiết Kế</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href="/tintuc"
                    >
                      <span>Blogs</span>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href="/ecatalogue"
                    >
                      <span>E-Catalogue</span>
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href=""
                    >
                      <span>Tin Tức</span>
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                      href=""
                    >
                      <span>Công Trình</span>
                    </a>
                  </li> */}
                </ul>

                {user ? (
                  <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                    placement="bottom"
                  >
                    <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-yellow-500  to-orange-500 border transition-all duration-500 rounded-full text-white uppercaser">
                      <UserOutlined />
                      <span className="p-1  ">{user.username}</span>
                      <DownOutlined className="text-xs " />
                    </button>
                  </Dropdown>
                ) : (
                  <a href="/login">
                    <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-yellow-500  to-orange-500 border transition-all duration-500 rounded-full text-white uppercaser">
                      <UserOutlined />
                      <span className="p-1  ">Đăng Nhập</span>
                    </button>
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
