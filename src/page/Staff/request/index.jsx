import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input, Tag, Space, Row } from "antd";
import api, { baseUrl } from "../../../config/axios";
import SanPham from "../../Test";
import { useDispatch } from "react-redux";
import { reset } from "../../../redux/feature/cartSlice";
import { toast } from "react-toastify";
import { Quotation } from "../../quotation";
import { formatDistance } from "date-fns";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import Header from "../../../components/Header";

export const ManageRequest = ({ isCustomer }) => {
  const [request, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Images",
      dataIndex: "resources",
      render: (resource) => (
        <img src={resource[0]?.url} alt="resources" style={{ width: 100 }} />
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "20%",
      render: (value) => {
        return <Tag color="green">{value}</Tag>;
      },
    },
    {
      title: "Name",
      dataIndex: "account",
      width: "20%",
      render: (value) => value.username,
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
    // {
    //   title: "Dien Tich",
    //   dataIndex: "dienTich",
    //   width: "20%",
    // },
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
      const response = await api.get(
        isCustomer ? "/request-customer" : "/request"
      );
      setCategories(
        response.data.map((item) => {
          return {
            ...item,
            key: item.id,
          };
        })
      );
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

  const handleCheckout = () => {
    dispatch(reset());
    setIsModalOpen(false);
    toast.success("Successfully!");
  };

  return (
    <>
      {/* <Button onClick={showModal} type="primary">
        Add
      </Button> */}
      <Table
        expandable={{
          expandedRowRender: (record, index) => {
            console.log(record);
            return (
              <QuotationDetail
                isCustomer={isCustomer}
                key={index}
                requestId={record.id}
              />
            );
          },
        }}
        columns={columns}
        dataSource={request}
      />
      <Modal
        open={isModalOpen}
        width={1300}
        onCancel={() => {
          dispatch(reset());
          setIsModalOpen(false);
          setCurrentRequest(null);
        }}
      >
        <SanPham info={currentRequest} handleCheckout={handleCheckout} />
      </Modal>
    </>
  );
};

const QuotationDetail = ({ requestId, isCustomer }) => {
  const [quotationId, setQuotationId] = useState(null);
  const [quotations, setQuotations] = useState([]);
  const [rejectQuotationId, setRejectQuotationId] = useState();
  const [form] = useForm();
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => {
        if (text === "PENDING") return <Tag color="warning">PENDING</Tag>;
        if (text === "ACCEPTED") return <Tag color="#87d068">ACCEPTED</Tag>;
        if (text === "REJECTED") return <Tag color="#cd201f">REJECTED</Tag>;
      },
    },
    {
      title: "Created at",
      dataIndex: "created",
      key: "created",
      render: (text) => (
        <a>{formatDistance(new Date(text), new Date(), { addSuffix: true })}</a>
      ),
    },
    {
      title: "Reject reason",
      dataIndex: "reasonReject",
      key: "reasonReject",
    },
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (value, record) => (
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          {record.type === "PENDING" && (
            <>
              <Button
                type="primary"
                onClick={async () => {
                  await api.patch(`/accept-quotation`, {
                    quotationId: value,
                  });
                  fetchQuatations();
                }}
              >
                Accept
              </Button>

              <Button
                type="primary"
                onClick={async () => {
                  // await api.patch(`/accept-quotation`, {
                  //   quotationId: value,
                  // });
                  // fetchQuatations();
                  setRejectQuotationId(value);
                }}
              >
                Reject
              </Button>
            </>
          )}

          {record.type === "ACCEPTED" && (
            <Button
              type="primary"
              onClick={async () => {
                // const blob = await api.get(`/export-quotation/${value}`);
                // const url = window.URL.createObjectURL(blob);
                // const a = document.createElement("a");
                // a.style.display = "none";
                // a.href = url;
                // a.download = "data.xlsx"; // Filename of the downloaded file
                // document.body.appendChild(a);
                // a.click();
                // window.URL.revokeObjectURL(url);
                window.open(`${baseUrl}/export-quotation/${value}`, "_blank");
              }}
            >
              Export
            </Button>
          )}
          <Button
            type="primary"
            onClick={() => {
              setQuotationId(value);
            }}
          >
            Show Detail
          </Button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const fetchQuatations = async () => {
    const response = await api.get(`/quotation-request/${requestId}`);
    setQuotations(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchQuatations();
  }, [requestId]);

  const handlePostQuatation = () => {
    setQuotationId(null);
    fetchQuatations();
  };

  const onSubmit = async (values) => {
    await api.patch(`/reject-quotation`, {
      quotationId: rejectQuotationId,
      reasonReject: values.reason,
    });
    fetchQuatations();
    form.resetFields();
    setRejectQuotationId(null);
  };

  return (
    <>
      {!isCustomer && (
        <Row
          justify={"end"}
          style={{
            marginBottom: 20,
          }}
        >
          <Button type="primary" onClick={() => setQuotationId(0)}>
            Add new Quotation
          </Button>
        </Row>
      )}
      <Table columns={columns} dataSource={quotations} />

      <Modal
        title="Quotation Detail"
        open={quotationId !== null}
        onCancel={() => {
          setQuotationId(null);
        }}
        width={1000}
      >
        <Quotation
          edit={quotationId === 0}
          quotationId={quotationId}
          fetchQuatationsList={handlePostQuatation}
          requestId={requestId}
          isCustomer={isCustomer}
        />
      </Modal>

      <Modal
        open={rejectQuotationId}
        title="Reject quotation"
        onCancel={() => setRejectQuotationId(null)}
        onOk={() => {
          form.submit();
        }}
      >
        <Form
          onFinish={onSubmit}
          form={form}
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item
            label="Reject Reason"
            name="reason"
            rules={[
              {
                required: true,
                message: "Reject reason",
              },
            ]}
          >
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
