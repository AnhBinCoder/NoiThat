import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input } from "antd";
import api from "../../config/axios";

export const QuotationRequest = () => {
  const [quotations, setQuotations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      width: "20%",
    },
    {
      title: "Quantity",
      dataIndex: "quotationDetails",
      render: (quotationDetails) => {
        console.log(quotationDetails);
        return quotationDetails && quotationDetails.length > 0
          ? quotationDetails[0].quantity
          : "";
      },
    },
    {
      title: "Price",
      dataIndex: "quotationDetails",
      render: (quotationDetails) => {
        console.log(quotationDetails);
        return quotationDetails && quotationDetails.length > 0
          ? quotationDetails[0].price
          : "";
      },
      width: "20%",
    },
  ];

  const fetchQuotations = async () => {
    try {
      const response = await api.get("/quotation");
      setQuotations(response.data);
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };
  const fetchRequest = async () => {
    try {
      const response = await api.get("/quotation");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching request:", error);
    }
  };

  useEffect(() => {
    fetchQuotations();
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
      const response = await api.post("/quotation", {
        requestId: 0,
        type: "PENDING",
        quotationDetailDTOS: [
          {
            productDetailId: 0,
            quantity: 0,
            price: 0,
          },
        ],
      });
      console.log("Submitted:", response.data);
      // Reset form fields
      form.resetFields();
      // Close modal and update quotation list
      setIsModalOpen(false);
      fetchQuotations();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Table columns={columns} dataSource={quotations} />
    </div>
  );
};
