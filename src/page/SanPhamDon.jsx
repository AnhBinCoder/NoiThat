import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Divider, Typography } from "antd";
import { FloatButton } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
const blockContent = ``;

const SanPhamDon = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen pt-20 pl-20 pr-20 bg-white">
        <Typography>
          <Title level={1} className="text-center ">
            Sản Phẩm
            <span
              level
              style={{
                display: "block",
                fontSize: "smaller",
                fontFamily: "cursive",
              }}
            >
              - Your Home, Your Design -
            </span>
          </Title>

          <Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>

          <Paragraph>
            After massive project practice and summaries, Ant Design, a design
            language for background applications, is refined by Ant UED Team,
            which aims to{" "}
            <Text strong>
              uniform the user interface specs for internal background projects,
              lower the unnecessary cost of design differences and
              implementation and liberate the resources of design and front-end
              development
            </Text>
            .
          </Paragraph>
        </Typography>

        <div className="flex flex-col w-full pt-5 pb-10"></div>
      </div>
      <FloatButton.BackTop />
      <Footer />
    </>
  );
};

export default SanPhamDon;
