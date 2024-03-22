import React, { useState, useEffect } from "react";
import {
  Radio,
  Tabs,
  List,
  Row,
  Col,
  Badge,
  Table,
  Button,
  Descriptions,
  Modal,
  Card,
  Image,
} from "antd";
import api from "../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reset } from "../redux/feature/cartSlice";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import Meta from "antd/es/card/Meta";
import { convertToCurrency } from "../utils/currency";

const SanPham = ({ info, handleCheckout }) => {
  const [mode, setMode] = useState("top");
  const [categories, setCategories] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [products, setProducts] = useState({});
  const [currentProduct, setCurrentProduct] = useState();
  const [productDetails, setProductDetails] = useState([]);

  const [productColors, setProductColors] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(info);
  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setActiveKey(response.data[0].id); // Chọn danh mục đầu tiên mặc định
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (productId) => {
    setCurrentProduct(productId);
    setIsModalOpen(true);
  };

  const fetchProduct = async () => {
    const response = await api.get(
      `/productDetail-productId/${currentProduct}`
    );
    setProductDetails(response.data);
  };

  useEffect(() => {
    if (currentProduct) {
      fetchProduct();
    }
  }, [currentProduct]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };
  useEffect(() => {
    // Gọi API để lấy danh sách màu
    api
      .get("/productColors")
      .then((response) => {
        // Lọc những màu có deleted: false
        const filteredColors = response.data.filter((color) => !color.deleted);
        setProductColors(filteredColors);
      })
      .catch((error) => {
        console.error("Error fetching product colors:", error);
      });
  }, []);
  useEffect(() => {
    if (activeKey) {
      api
        .get(`/product/${activeKey}`)
        .then((response) => {
          setProducts({ ...products, [activeKey]: response.data });
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [activeKey]);

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  const handleSubmit = async () => {
    try {
      // Xây dựng dữ liệu sản phẩm từ giỏ hàng
      const quotationDetailDTOS = cart.map((product) => ({
        productDetailId: product.id, // ID của sản phẩm
        quantity: product.quantity, // Số lượng sản phẩm
        height: product.height,
        length: product.length,
        width: product.width,
        price: product.price * product.quantity, // Tổng giá của sản phẩm (số lượng * giá)
      }));

      console.log(quotationDetailDTOS);

      // Gửi dữ liệu xuống API "/quotation"
      const response = await api.post("/buy-available", {
        type: "PENDING",
        quotationDetailDTOS: quotationDetailDTOS,
      });

      dispatch(reset());

      handleCheckout && handleCheckout();

      console.log(response);
      // Xử lý response từ API ở đây (nếu cần)
    } catch (error) {
      console.error("Error submitting quotation:", error);
      // Xử lý lỗi ở đây (nếu cần)
    }
    toast.success("Successfully!");
  };

  function convertToVND(money) {
    const formattedAmount = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);

    return formattedAmount;
  }

  return (
    <>
      <Header />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Badge count={cart.length} style={{ marginTop: "10px" }}>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary "
            style={{
              width: "50px", // Đặt kích thước nút
              height: "50px", // Đặt kích thước nút
              borderRadius: "50%", // Đặt hình dạng hình tròn
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            <ShoppingCartOutlined />
          </label>
        </Badge>

        {info && (
          <Descriptions>
            <Descriptions.Item label="dienTich">
              {info?.dienTich}
            </Descriptions.Item>
            <Descriptions.Item label="budget">
              {convertToVND(info?.budget)}
            </Descriptions.Item>
            <Descriptions.Item label="description">
              {info?.description}
            </Descriptions.Item>
            <Descriptions.Item label="Total">
              {convertToVND(calculateTotalPrice())}
            </Descriptions.Item>
          </Descriptions>
        )}

        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        >
          {/* <Radio.Button value="top">Horizontal</Radio.Button> */}
        </Radio.Group>

        <Tabs
          defaultActiveKey={activeKey ? activeKey.toString() : ""}
          tabPosition={mode}
          type="card"
          style={{
            // height: 220,
            padding: 50,
          }}
          onChange={handleTabChange}
        >
          {categories.map((category) => (
            <Tabs.TabPane
              tab={category.name}
              key={category.id}
              style={{
                border: "3px solid #ccc",
                borderRadius: "15px",
                padding: "12px",
                zIndex: 100000000,
              }}
            >
              <Row gutter={[12, 12]}>
                {products[category.id]?.map(
                  (product) =>
                    product.productDetails &&
                    product.productDetails.length > 0 && (
                      <Col lg={8} sm={12} xs={24}>
                        <div
                          key={product.id}
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: 15,
                            overflow: "hidden",
                          }}
                        >
                          <figure>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                              src={
                                product.resources.length > 0
                                  ? product.resources[0].url
                                  : ""
                              }
                              alt={product.name}
                            />
                          </figure>
                          <div className="card-body">
                            <div>
                              <h2 className="card-title">{product.name}</h2>
                              <p>{product.price} VND</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                // justifyContent: "space-between",
                                // alignContent: "flex-end",
                                placeContent: "flex-end",
                              }}
                            >
                              <Button
                                type="primary"
                                onClick={() => {
                                  showModal(product.id);
                                }}
                              >
                                Chi tiết
                              </Button>
                              <Modal
                                title=""
                                visible={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                width={1000}
                              >
                                <Row gutter={12}>
                                  {productDetails.map((item) => {
                                    return (
                                      <Col span={8}>
                                        <Card
                                          hoverable
                                          style={{
                                            width: "100%",
                                          }}
                                          cover={
                                            <img
                                              style={{
                                                height: 150,
                                                objectFit: "cover",
                                              }}
                                              alt="example"
                                              src={
                                                item.resources &&
                                                item.resources[0]
                                                  ? item.resources[0].url
                                                  : "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                              }
                                            />
                                          }
                                        >
                                          <Meta
                                            title={
                                              item.name ? item.name : "No Name"
                                            }
                                            description={
                                              <>
                                                <div>
                                                  <span
                                                    style={{
                                                      width: 60,
                                                      display: "inline-block",
                                                    }}
                                                  >
                                                    Color:
                                                  </span>{" "}
                                                  {item.color.color}
                                                </div>
                                                <div>
                                                  <span
                                                    style={{
                                                      width: 60,
                                                      display: "inline-block",
                                                    }}
                                                  >
                                                    Material:
                                                  </span>{" "}
                                                  {item.material.size}
                                                </div>
                                                <div>
                                                  <span
                                                    style={{
                                                      width: 60,
                                                      display: "inline-block",
                                                    }}
                                                  >
                                                    Gia:{" "}
                                                  </span>
                                                  {convertToCurrency(
                                                    item.price
                                                  )}
                                                </div>
                                              </>
                                            }
                                          />
                                          <Row justify={"center"}>
                                            <Button
                                              type="primary"
                                              style={{
                                                marginTop: 20,
                                              }}
                                              onClick={() => {
                                                dispatch(add(item));
                                              }}
                                            >
                                              Add to cart
                                            </Button>
                                          </Row>
                                        </Card>
                                      </Col>
                                    );
                                  })}
                                </Row>
                              </Modal>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                )}
              </Row>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side absolute" style={{ zIndex: 9999 }}>
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
            style={{ height: "100%" }}
          >
            {cart.length > 0 ? (
              <>
                <Row gutter={[12, 12]}>
                  {cart.map((product) => {
                    return (
                      <>
                        <Col span={12}>
                          <Image
                            style={{
                              width: "100%",
                            }}
                            src={
                              product.resources && product.resources[0]
                                ? product.resources[0].url
                                : "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                          />
                        </Col>

                        <Col span={12}>
                          <h1
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            {product.name}
                          </h1>
                          <h1>Quantity: {product.quantity}</h1>
                          <h1>{convertToCurrency(product.price)}</h1>
                        </Col>
                        {/* <ul
                        style={{
                          border: "3px solid #ccc",
                          borderRadius: "10px",
                          marginBottom: "5px",
                          padding: 10,
                        }}
                      >
                        <li>So luong: {product.quantity}</li>
                        <li>{product.name}</li>
                        <li>{product.price}</li>

                        <li
                          style={{
                            justifyContent: "space-between",
                            alignContent: "flex-end",
                          }}
                        >
                          <Button
                            type="dashed"
                            onClick={() => {
                              dispatch(remove(product));
                            }}
                          >
                            Delete
                          </Button>
                        </li>
                      </ul> */}
                      </>
                    );
                  })}
                </Row>
                <div
                  style={{
                    margin: "20px 0",
                  }}
                >
                  Tổng chi phí:{" "}
                  <strong>{convertToVND(calculateTotalPrice())}</strong>
                </div>
                <Button onClick={handleSubmit}>Checkout</Button>
              </>
            ) : (
              <p>No product</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SanPham;
