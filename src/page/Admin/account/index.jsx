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
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, Divider } from "antd";
import { message } from "antd";

export const ManageAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [form] = useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Mail",
      dataIndex: "email",

      onFilter: (value, record) => record.mail.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Phone",
      dataIndex: "phone",

      onFilter: (value, record) => record.phone.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Adress",
      dataIndex: "address",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Role",
      dataIndex: "role",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "10%",
    },

    {
      title: "Status",
      dataIndex: "status",

      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "Actions",
      render: (value, record) => (
        <Button type="dashed" onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  const onChange = () => {};
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

  const fetchAccounts = async () => {
    try {
      const response = await api.get("/authentication/account");
      const filteredAccounts = response.data.filter(
        (product) => !product.deleted
      );
      setAccounts(filteredAccounts);
    } catch (error) {
      console.error("Error fetching account:", error);
      message.error("Failed to fetch account");
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    const response = await api.post("/authentication/register-staff", values);
    console.log(response);
    toast.success("Successfully create new Account!");
    form.resetFields();
    handleCancel();
    fetchAccounts();
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/authentication/delete-account/${id}`);
      message.success("account deleted successfully");
      const response = await api.get(`/authentication/account`);
      if (response.data.deleted) {
        // Nếu sản phẩm đã được đánh dấu là đã xóa thì không hiển thị nó trên màn hình
        return;
      }
      fetchAccounts();
    } catch (error) {
      console.error("Error deleting account:", error);
      message.error("Failed to delete acount");
    }
  };

  /////////////////////////////
  return (
    <div>
      <Button onClick={showModal} type="primary" className="">
        Add
      </Button>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
      <Table
        className="p-2"
        columns={columns}
        dataSource={accounts}
        onChange={onChange}
      />
      <Modal
        title="Thêm tài khoản"
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
            name={"username"}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name={"password"}
            rules={[
              {
                required: true,
                message: "Please input password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name={"phone"}
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Adress"
            name={"address"}
            rules={[
              {
                required: true,
                message: "Please input your adress!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
