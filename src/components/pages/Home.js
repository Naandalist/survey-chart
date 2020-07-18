import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Card, Tag } from "antd";

const { Content, Footer } = Layout;
const { Title } = Typography;

const Home = () => (
  <Fragment>
    <Layout>
      <Content
        className='site-layout'
        style={{ padding: "0 50px", marginTop: 40 }}
      >
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          <Title level={2}>Survey Kepuasan Pengguna</Title>

          <div className='site-card-wrapper'>
            <Card
              type='inner'
              title='1. Survey Kepuasan Mahasiswa'
              extra={<Link to='/mahasiswa'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Responsiveness</Tag>
              <Tag color='blue'>Reliability</Tag>
              <Tag color='blue'>Assurance</Tag>
              <Tag color='blue'>Empathy</Tag>
              <Tag color='blue'>tangible</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='2. Survey Kepuasan Dosen dan Tenaga Kependidikan'
              extra={
                <Link to='/dosen-dan-tenaga-kependidikan'>Lebih Detail</Link>
              }
            >
              <Tag color='blue'>Rekrutmen</Tag>
              <Tag color='blue'>Kesejahteraan</Tag>
              <Tag color='blue'>Kinerja</Tag>
              <Tag color='blue'>Fasilitas</Tag>
              <Tag color='blue'>Pembinaan</Tag>
              <Tag color='blue'>Pengembangan Kompetensi</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='3. Survey Kepuasan Pengguna Lulusan (User)'
              extra={<Link to='/pengguna-lulusan'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Etika</Tag>
              <Tag color='blue'>Keahlian pada Bidang Ilmu</Tag>
              <Tag color='blue'>Kemampuan Berbahasa Asing</Tag>
              <Tag color='blue'>Penggunaan Teknologi Informasi</Tag>
              <Tag color='blue'>Kemampuan Berkomunikasi</Tag>
              <Tag color='blue'>Kerjasama</Tag>
              <Tag color='blue'>Pengembangan Diri</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='4.Survey Pemahaman Visi dan Misi Civitas Akademik STIQ Al-Lathifiyyah'
              extra={<Link to='/pemahaman-visi-misi'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Kemudahan Memperoleh Informasi</Tag>
              <Tag color='blue'>Realistis</Tag>
              <Tag color='blue'>Pengetahuan program kerja</Tag>
              <Tag color='blue'>Relevansi visi dan misi dengan pekerjaan</Tag>
              <Tag color='blue'>Memaknai visi dan misi</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='5.Tracer Studi Lulusan STIQ Al-Lathifiyyah Palembang'
              extra={<Link to='/tracer-studi-lulusan'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Kemudahan Memperoleh Informasi</Tag>
              <Tag color='blue'>Realistis</Tag>
              <Tag color='blue'>Pengetahuan program kerja</Tag>
              <Tag color='blue'>Relevansi visi dan misi dengan pekerjaan</Tag>
              <Tag color='blue'>Memaknai visi dan misi</Tag>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Fragment>
);

export default Home;
