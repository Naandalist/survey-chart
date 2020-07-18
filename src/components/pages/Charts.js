import React, { Fragment } from "react";
import { Layout, PageHeader, Button, Typography } from "antd";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function Charts() {
  return (
    <Fragment>
      <Layout>
        <PageHeader
          ghost={false}
          backIcon={false}
          onBack={() => window.history.back()}
          title='STIQ Al-Lathifiyyah Palembang'
          subTitle={`Kampus Islami, Kampus Qur'ani`}
          extra={[
            <Button key='3'>Operation</Button>,
            <Button key='2'>Operation</Button>,
            <Button key='1' type='primary'>
              Primary
            </Button>,
          ]}
        ></PageHeader>

        <Content
          className='site-layout'
          style={{ padding: "0 50px", marginTop: 40 }}
        >
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 380 }}
          >
            <Title level={2}>Diagram Hasil Survey</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and
              high quality design resources (<Text code>Sketch</Text> and{" "}
              <Text code>Axure</Text>), to help people create their product
              prototypes beautifully and efficiently.
            </Paragraph>
            {/* Chart BEGIN */}

            {/* Chart END */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Fragment>
  );
}
export default Charts;
