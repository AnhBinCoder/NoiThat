import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import uploadFile from "../../utils/upload";
import api from "../../config/axios";

import { toast } from "react-toastify";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Request = () => {
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
  const [form] = Form.useForm();
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const handleSubmit = async (values) => {
    values.type = "QUOTATION_REQUEST";
    const urls = [];
    if (values.resourceDTOS.fileList) {
      await Promise.all(
        values.resourceDTOS.fileList.map(async (file) => {
          const url = await uploadFile(file.originFileObj);
          urls.push({
            url: url,
            type: "IMG",
          });
        })
      );
    }
    values.resourceDTOS = urls;
    try {
      const response = await api.post("/request", values);

      toast.success("Gửi yêu cầu thành công");
      console.log(response);
      form.resetFields();
    } catch (error) {
      console.error("Lỗi khi gửi request:", error);

      toast.error("Đã xảy ra lỗi khi gửi request");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <div class="grid grid-cols-5 gap-4 bg-white">
          <div></div>
          <div className="mt-[50px]">
            <a href="/q">
              <img
                src="public/F/F1.png"
                style={{ height: "70%", width: "60%" }}
              />
            </a>
            <div className="text">
              <div>
                <span style={{ fontWeight: "bold" }}>Số điện thoại:</span>{" "}
                <span>0123456789</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                <span>efurniture@fpt.vn</span>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="pt-[50px]">
              <span style={{ fontWeight: "bold" }}>Ngày soạn báo giá:</span>{" "}
              <span>{formattedDate}</span>
            </div>
          </div>
          <div></div>
        </div>
        <div
          style={{ padding: 100 }}
          className="bg-gradient-to-r from-blue-300 to-blue-50 rounded-[15px]"
        >
          <div
            style={{
              padding: 50,
              border: "3px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "white",
              borderColor: "#4299e1",
            }}
          >
            <div>
              <Form form={form} onFinish={handleSubmit}>
                <Form.Item label="Mô tả" name={"description"}>
                  <TextArea />
                </Form.Item>

                <Form.Item label="Diện tích" name={"dienTich"}>
                  <TextArea />
                </Form.Item>
                <Form.Item label="Mức giá mong muốn" name={"budget"}>
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name={"resourceDTOS"}
                  label="Tải lên hình ảnh"
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
                <Form.Item
                  style={{
                    display: "flex",
                    placeContent: "flex-end",
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={() => setPreviewOpen(false)}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
{
  /* <img
        className="relative self-stretch w-full h-[357px] object-cover"
        alt="Footer"
        src="https://c.animaapp.com/jFT1CjYZ/img/footer.svg"
      /> */
}
