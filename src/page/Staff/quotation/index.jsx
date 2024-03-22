import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input } from "antd";
import api from "../../../config/axios";

export const ManageQuotation = () => {
  const [request, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "30%",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      width: "20%",
    },
    {
      title: "Dien Tich",
      dataIndex: "dienTich",
      width: "20%",
    },
    {
      title: "Images",
      dataIndex: "resources",
      render: (resource) => (
        <img src={resource[0]?.url} alt="resources" style={{ width: 100 }} />
      ),
    },
    // {
    //   title: "Images",

    //   dataIndex: "resourceDTOS",
    //   render: (value) => {
    //     return (
    //       <Image
    //         width={200}
    //         src={value[0].url}
    //         style={{ borderRadius: "10px" }}
    //       />
    //     );
    //   },
    // },
  ];

  const fetchRequest = async () => {
    try {
      const response = await api.get("/request");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching request:", error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      // Submit form data to API
      const response = await api.post("/request", values);
      console.log("Submitted:", response.data);
      // Reset form fields
      form.resetFields();
      // Close modal and update request list
      setIsModalOpen(false);
      fetchRequest();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">
        Add
      </Button>
      <Table columns={columns} dataSource={request} />
      <Modal
        title="Add Request"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please enter type" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="budget"
            label="Budget"
            rules={[{ required: true, message: "Please enter budget" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dienTich"
            label="Dien Tich"
            rules={[{ required: true, message: "Please enter dienTich" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="resource"
            label="Image URL"
            rules={[{ required: true, message: "Please enter image URL" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
