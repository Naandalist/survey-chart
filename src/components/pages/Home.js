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
              <Tag color='blue'>Kompetensi</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='3. Survey Kepuasan Pengguna Lulusan (User)'
              extra={<Link to='/pengguna-lulusan'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Etika</Tag>
              <Tag color='blue'>Keahlian Bidang Ilmu</Tag>
              <Tag color='blue'>Kemampuan Bahasa Asing</Tag>
              <Tag color='blue'>Penggunaan IT</Tag>
              <Tag color='blue'>Komunikasi</Tag>
              <Tag color='blue'>Kerjasama</Tag>
              <Tag color='blue'>Pengembangan Diri</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='4.Survey Pemahaman Visi dan Misi Civitas Akademik STIQ Al-Lathifiyyah'
              extra={<Link to='/pemahaman-visi-misi'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Kemudahan Informasi</Tag>
              <Tag color='blue'>Realistis</Tag>
              <Tag color='blue'>Pengetahuan proker</Tag>
              <Tag color='blue'>Relevansi pekerjaan</Tag>
              <Tag color='blue'>Pemaknaan visi dan misi</Tag>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='5.Tracer Studi Lulusan STIQ Al-Lathifiyyah Palembang'
              extra={<Link to='/tracer-studi-lulusan'>Lebih Detail</Link>}
            >
              <Tag color='blue'>Kesesuaian Bidang Kerja</Tag>
              <Tag color='blue'>Kesesuaian Jenjang Kerja</Tag>
              <Tag color='blue'>Pengalaman Kuliah</Tag>
              <Tag color='blue'>Kesanggupan Berkompetisi</Tag>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Sekolah Tinggi Ilmu Al-Qur'an (STIQ) Al-Lathifiyyah Palembang 2016 -
        2020
      </Footer>
    </Layout>
  </Fragment>
);

export default Home;
