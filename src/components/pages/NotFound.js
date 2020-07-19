import React, { Fragment } from "react";
import { Layout, Typography } from "antd";

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function NotFound() {
  return (
    <Fragment>
      <Layout>
        <Content
          className='site-layout'
          style={{ padding: "0 50px", marginTop: 40 }}
        >
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 500 }}
          >
            <Title level={2}>Tidak ditemukan apa-apa</Title>
            <Paragraph>
              Maaf, kita tidak mendapatkan apa-apa pada halaman ini
            </Paragraph>
            {/* Chart BEGIN */}

            {/* Chart END */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Sekolah Tinggi Ilmu Al-Qur'an (STIQ) Al-Lathifiyyah Palembang 2016 -
          2020
        </Footer>
      </Layout>
    </Fragment>
  );
}

export default NotFound;
