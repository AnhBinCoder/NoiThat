import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, Divider } from "antd";
import { message } from "antd";
import { convertToCurrency } from "../../../utils/currency";
import { UploadOutlined } from "@ant-design/icons";

export const ManageProduct = () => {
  const [options, setOptions] = useState([]);
  const [products, setProducts] = useState([]);
  const [form] = useForm();
  const columns = [
    {
      title: "Images",

      dataIndex: "resources",
      render: (value) => {
        return (
          <Image
            width={200}
            src={value[0]?.url}
            style={{ borderRadius: "10px" }}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "pricePerUnit",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },

    {
      title: "Actions",
      render: (value, record) => (
        <Button type="dashed" onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // setIsModalOpen(false);
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const fetchCategories = async () => {
    const response = await api.get("/categories");
    console.log(response.data);
    setOptions(
      response.data.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      })
    );
  };

  // const fetchProducts = async () => {
  //   const response = await api.get("/product");
  //   console.log(response.data);
  //   setProducts(response.data);
  // };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product");
      const filteredProducts = response.data.filter(
        (product) => !product.deleted
      );
      setProducts(
        filteredProducts.map((item) => {
          return {
            ...item,
            key: item.id,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancelImage = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeImage = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const onSubmit = async (values) => {
    console.log(values);
    const file = values.resource.fileList[0].originFileObj;

    const url = await uploadFile(file);

    const response = await api.post("product", {
      name: values.name,
      categoriesId: values.categoriesId,
      pricePerUnit: values.pricePerUnit,
      unit: values.unit,
      length: values.length,
      width: values.width,
      height: values.height,
      resourceDTOS: [
        {
          url: url,
          type: "IMG",
        },
      ],
    });
    console.log(response);
    toast.success("Successfully create new product!");
    form.resetFields();
    handleCancel();
    fetchProducts();
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/product/${id}`);

  //     message.success("Product deleted successfully");
  //     fetchProducts();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     message.error("Failed to delete product");
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/product/${id}`);

      message.success("Product deleted successfully");
      const response = await api.get(`/product/${id}`);
      if (response.data.deleted) {
        // Nếu sản phẩm đã được đánh dấu là đã xóa thì không hiển thị nó trên màn hình
        return;
      }
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product");
    }
  };

  /////////////////////////////
  return (
    <div>
      <Button onClick={showModal} type="primary">
        Add
      </Button>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
      <Table
        columns={columns}
        dataSource={products}
        onChange={onChange}
        expandable={{
          expandedRowRender: (record) => {
            return <ProductDetail data={record} />;
          },
        }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          onFinish={onSubmit}
          labelCol={{
            span: 24,
          }}
          form={form}
        >
          <Form.Item
            label="Name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please input product's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Categories"
            name={"categoriesId"}
            rules={[
              {
                required: true,
                message: "Please input product's category!",
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item
                label="Price per unit"
                name={"pricePerUnit"}
                rules={[
                  {
                    required: true,
                    message: "Please input product's price!",
                  },
                ]}
              >
                <InputNumber
                  addonAfter={"VND"}
                  style={{
                    width: 200,
                  }}
                  defaultValue={1000}
                  p
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={onChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Unit" name="unit">
                <Select
                  options={[
                    { value: "ITEM", label: "ITEM" },
                    { value: "METER", label: "METER" },
                    { value: "SQUARE_METER", label: "SQUARE_METER" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={8}>
              <Form.Item label="Length" name="length">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Width" name="width">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Height" name="height">
                <Input type="number'" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="resource"
            label="Hình ảnh"
            className="post-form-item"
          >
            <Upload
              action={() => {
                console.log(123);
              }}
              beforeUpload={false}
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
            >
              {uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancelImage}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>

      <Button></Button>
    </div>
  );
};

const ProductDetail = ({ data }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [form] = useForm();
  const [showModalColor, setShowModalColor] = useState(false);
  const [showModalMaterial, setShowModalMaterial] = useState(false);
  const [formColor] = useForm();
  const [formMaterial] = useForm();

  const fetchProductDetails = async (id) => {
    const response = await api.get(`/productDetail-productId/${id}`);
    setProductDetails(response.data);
  };

  const fetchProductColor = async (id) => {
    const response = await api.get(`/productColors-productId/${id}`);
    setColors(response.data);
  };

  const fetchProductMaterial = async (id) => {
    const response = await api.get(`/productMaterial-productId/${id}`);
    setMaterials(response.data);
  };

  useEffect(() => {
    fetchProductDetails(data.id);
    fetchProductColor(data.id);
    fetchProductMaterial(data.id);
  }, [data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "resources",
      key: "resources",
      render: (value) => {
        return (
          <Image
            width={100}
            src={
              value[0]
                ? value[0].url
                : "https://clipground.com/images/no-image-png-5.jpg"
            }
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (value) => {
        return convertToCurrency(value);
      },
    },
  ];

  const onFinish = async (values) => {
    if (values.resourceDTOS && values.resourceDTOS[0]) {
      const file = values.resourceDTOS[0].url.file.originFileObj;
      const url = await uploadFile(file);
      values.resourceDTOS[0].url = url;
      values.resourceDTOS[0].type = "IMG";
    }

    console.log(values);
    await api.post("/product-detail", {
      ...values,
      productId: data.id,
    });
    fetchProductDetails(data.id);
    form.resetFields();
    setShowModal(false);
  };

  return (
    <>
      <Row
        justify={"end"}
        style={{
          marginBottom: 20,
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add new product Detail
        </Button>
      </Row>
      <Table dataSource={productDetails} columns={columns} />
      <Modal
        open={showModal}
        onCancel={() => {
          setShowModal(false);
        }}
        onOk={() => {
          form.submit();
        }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  { required: true, message: "Please input product price!" },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Length"
                name="length"
                rules={[
                  { required: true, message: "Please input product length!" },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Width"
                name="width"
                rules={[
                  { required: true, message: "Please input product width!" },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Weight"
                name="weight"
                rules={[
                  { required: true, message: "Please input product weight!" },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Height"
                name="height"
                rules={[
                  { required: true, message: "Please input product height!" },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Row gutter={12} align={"middle"}>
                <Col span={18}>
                  <Form.Item
                    label="Color"
                    name="colorId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product color!",
                      },
                    ]}
                  >
                    <Select>
                      {colors.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.color}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Button
                    onClick={() => setShowModalColor(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={12} align={"middle"}>
                <Col span={22}>
                  <Form.Item
                    label="Material"
                    name="materialId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product material!",
                      },
                    ]}
                  >
                    <Select>
                      {materials.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.size}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Button
                    onClick={() => setShowModalMaterial(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Unit"
                name="unit"
                rules={[
                  { required: true, message: "Please input product material!" },
                ]}
              >
                <Select>
                  {materials.map((item) => {
                    return (
                      <Select.Option value={item.id}>{item.size}</Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Image" name={["resourceDTOS", 0, "url"]}>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showModalColor}
        onCancel={() => {
          setShowModalColor(false);
        }}
        onOk={() => {
          formColor.submit();
        }}
      >
        <Form
          form={formColor}
          onFinish={async (values) => {
            console.log(data.id);
            await api.post(`/productColor/${data.id}`, values);
            fetchProductColor(data.id);
            formColor.resetFields();
            setShowModalColor(false);
          }}
        >
          <Form.Item label="Color" name="color">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showModalMaterial}
        onCancel={() => {
          setShowModalMaterial(false);
        }}
        onOk={() => {
          formMaterial.submit();
        }}
      >
        <Form
          form={formMaterial}
          onFinish={async (values) => {
            console.log(data.id);
            await api.post(`/productMaterial/${data.id}`, values);
            fetchProductMaterial(data.id);
            formMaterial.resetFields();
            setShowModalMaterial(false);
          }}
        >
          <Form.Item label="Material" name="size">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
