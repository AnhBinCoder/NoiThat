import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Space,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import api from "../../../config/axios";
import { formatDistance } from "date-fns";

export const ManageBlog = () => {
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const initValue = [{ name: "", resourceDTO: [{ url: "", type: "IMG" }] }];
  const [sections, setSections] = useState(initValue);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const response = await api.get("/blog");
    setBlogs(response.data);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleCancel = () => setPreviewOpen(false);
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
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
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

  const onFinish = async (values) => {
    values.blogSectionRequestDTOS = sections;

    const url = await uploadFile(values.thumbnail.file.originFileObj);
    values.thumbnail = url;
    const response = await api.post("/blog", values);
    console.log(response);
    setSections(initValue);
    form.resetFields();
    setShowModal(false);
    fetchBlog();
  };

  const handleSectionNameChange = (index, value) => {
    const newSections = [...sections];
    newSections[index].name = value;
    setSections(newSections);
  };

  const handleResourceUrlChange = (
    sectionIndex,
    resourceIndex,
    value,
    type
  ) => {
    const newSections = [...sections];
    console.log(value);
    console.log(newSections);
    newSections[sectionIndex].resourceDTO[resourceIndex] = {
      ...newSections[sectionIndex].resourceDTO[resourceIndex],
      url: value,
      type: type,
    };
    setSections(newSections);
  };

  const addSection = () => {
    setSections([
      ...sections,
      { name: "", resourceDTO: [{ url: "", type: "IMG" }] },
    ]);
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const columns = [
    {
      title: "Blog name",
      dataIndex: "blogName",
      key: "blogName",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (value) => <Image src={value} width={100} />,
    },
    {
      title: "Create At",
      dataIndex: "datePost",
      key: "datePost",
      render: (value) =>
        formatDistance(new Date(value), new Date(), { addSuffix: true }),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setShowModal(true)}
        style={{
          marginBottom: 20,
        }}
      >
        Add new blog
      </Button>
      <Table dataSource={blogs} columns={columns} />
      <Modal
        width={1000}
        title="Add new blog"
        open={showModal}
        onOk={() => form.submit()}
        onCancel={() => setShowModal(false)}
      >
        <Form
          form={form}
          name="dynamic_form"
          onFinish={onFinish}
          labelCol={{
            span: 24,
          }}
        >
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                label="Blog Name"
                name="blogName"
                rules={[
                  {
                    required: true,
                    message: "Enter blog name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Thumbnail" name={"thumbnail"}>
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  maxCount={1}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          {sections.map((section, index) => (
            <>
              <div className="blog-section">
                <Form.Item
                  name={["blogSectionRequestDTOS", index, "name"]}
                  label={`Section Name ${index + 1}`}
                  rules={[
                    { required: true, message: "Please enter section name" },
                  ]}
                >
                  <Row align={"middle"} gutter={12}>
                    <Col span={22}>
                      <Input
                        value={section.name}
                        onChange={(e) =>
                          handleSectionNameChange(index, e.target.value)
                        }
                      />
                    </Col>
                    <Col span={2}>
                      <MinusCircleOutlined
                        onClick={() => removeSection(index)}
                      />
                    </Col>
                  </Row>
                </Form.Item>

                <Form.List
                  name={["blogSectionRequestDTOS", index, "resourceDTO"]}
                >
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, resourceIndex) => (
                        <>
                          <Form.Item
                            {...field}
                            name={[field.name, "url"]}
                            fieldKey={[field.fieldKey, "url"]}
                            rules={[
                              {
                                required: true,
                                message: "Please enter resource URL",
                              },
                            ]}
                          >
                            <Row align={"middle"} gutter={12}>
                              <Col>
                                <Upload
                                  style={{
                                    width: "100%",
                                  }}
                                  // accept="image/*"
                                  maxCount={1}
                                  beforeUpload={() => false}
                                  onChange={async (info) => {
                                    console.log(info);
                                    let type = "VIDEO";
                                    if (info.file.type.includes("image"))
                                      type = "IMG";
                                    const url = await uploadFile(info.file);
                                    console.log(url);
                                    handleResourceUrlChange(
                                      index,
                                      resourceIndex,
                                      url,
                                      type
                                    );
                                  }}
                                >
                                  <Button icon={<UploadOutlined />}>
                                    Upload Image
                                  </Button>
                                </Upload>
                              </Col>

                              <Col>
                                <MinusCircleOutlined
                                  onClick={() => remove(field.name)}
                                />
                              </Col>
                            </Row>
                          </Form.Item>
                        </>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                        >
                          Add Resource
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={addSection} icon={<PlusOutlined />}>
              Add Section
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};
