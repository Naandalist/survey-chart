import React, { Fragment } from "react";
import DataSet from "@antv/data-set";
import { Chart, Tooltip, Interval } from "bizcharts";
import { Layout, Typography, Table, Tabs } from "antd";
const { Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Demo() {
  // 计算每个柱子的占比
  const ds = new DataSet();
  const dv = ds
    .createView()
    .source(data)
    .transform({
      type: "percent",
      field: "value",
      dimension: "keterangan",
      groupBy: ["aspek"],
      as: "percent",
    });
  return (
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
            <Title level={2}>
              Hasil Survey Kepuasan Dosen dan Tenaga Kependidikan Terhadap
              Pengelolaan SDM
            </Title>

            <Paragraph>
              Survey ini pada dasarnya merupakan metode untuk menilai sistem
              pengelolaan dosen dan tenaga kependidikan baik dalam hal
              pengembangan kompetensi maupun pengembangan karir. Dalam hal ini
              pengelolaan SDM dilaksanakan oleh Wakil Ketua yang dilanjutkan
              dengan koordinasi dengan Unit Penjamin Mutu (UPM).
            </Paragraph>
            <Paragraph>
              Survei kepuasan mahasiswa terhadap layanan mahasiswa dilaksanakan
              pada setiap akhir semester berjalan yang terdiri dari beberapa
              aspek diantaranya: Responden survey terdiri dari dosen dosen dan
              tenaga kependidikan STIQ Al-Lathifiyyah sebanyak 61 orang. Adapun
              instrumen angket yang digunakan meliputi beberapa aspek yang
              diantaranya adalah sebagai berikut:
              <ol>
                <li>
                  <Text>Rekrutmen</Text>
                </li>
                <li>
                  <Text>Kesejahteraan</Text>
                </li>
                <li>
                  <Text>Kinerja</Text>
                </li>
                <li>
                  <Text>Fasilitas</Text>
                </li>
                <li>
                  <Text>Pembinaan</Text>
                </li>
                <li>
                  <Text>Pengembangan kompetensi</Text>
                </li>
              </ol>
            </Paragraph>
            <Paragraph>
              Berikut adalah hasil survei kepuasan mahasiswa untuk periode
              Semester Genap 2019/2020.
            </Paragraph>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Tabel Hasil' key='1'>
                {/* START TABLE */}
                <Table
                  dataSource={dataTable}
                  bordered
                  pagination={{ defaultPageSize: 10, hideOnSinglePage: true }}
                  style={{ marginBottom: 90 }}
                >
                  <Column
                    title='No.'
                    dataIndex='no'
                    key='no'
                    responsive={["lg"]}
                  />
                  <Column
                    title='Aspek yang Diukur'
                    dataIndex='aspekYangDiukur'
                    key='aspekYangDiukur'
                  />
                  <ColumnGroup
                    title='Tingkat Kepuasan Mahasiswa (%)'
                    responsive={["lg"]}
                  >
                    <Column
                      title='Sangat Baik'
                      dataIndex='sangatBaik'
                      key='sangatBaik'
                      responsive={["lg"]}
                    />
                    <Column
                      title='Baik'
                      dataIndex='baik'
                      key='baik'
                      responsive={["lg"]}
                    />
                    <Column
                      title='Cukup'
                      dataIndex='cukup'
                      key='cukup'
                      responsive={["lg"]}
                    />
                    <Column
                      title='Kurang'
                      dataIndex='kurang'
                      key='kurang'
                      responsive={["lg"]}
                    />
                  </ColumnGroup>
                </Table>
              </TabPane>
              <TabPane tab='Diagram Hasil' key='2'>
                <Chart
                  height={400}
                  padding='auto'
                  scale={{
                    percent: {
                      min: 0,
                      formatter(val) {
                        return (val * 100).toFixed(0) + "%";
                      },
                    },
                  }}
                  data={dv.rows}
                  autoFit
                >
                  <Interval
                    adjust='stack'
                    color='keterangan'
                    position='aspek*percent'
                  />
                  <Tooltip shared />
                </Chart>
              </TabPane>
            </Tabs>

            {/* END TABLE  */}
          </div>
        </Content>
        S
        <Footer style={{ textAlign: "center" }}>
          STIQ Al-Lathifiyyah Palembang - 2020
        </Footer>
      </Layout>
    </Fragment>
  );
}

const dataTable = [
  {
    key: "1",
    no: 1,
    aspekYangDiukur: "Rekrutmen",
    sangatBaik: 30,
    baik: 70,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "2",
    no: 2,
    aspekYangDiukur: "Kesejahteraan",
    sangatBaik: 62,
    baik: 38,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "3",
    no: 3,
    aspekYangDiukur: "Kinerja",
    sangatBaik: 72,
    baik: 28,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 4,
    no: 4,
    aspekYangDiukur: "Fasilitas",
    sangatBaik: 60,
    baik: 40,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 5,
    no: 5,
    aspekYangDiukur: "Pembinaan",
    sangatBaik: 60,
    baik: 40,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 6,
    no: 6,
    aspekYangDiukur: "Pengembangan Kompetensi",
    sangatBaik: 48,
    baik: 52,
    cukup: 0,
    kurang: 0,
  },
];

const data = [
  { keterangan: "Sangat Baik", aspek: "Rekrutmen", value: 30 },
  { keterangan: "Sangat Baik", aspek: "Kesejahteraan", value: 62 },
  { keterangan: "Sangat Baik", aspek: "Kinerja", value: 72 },
  { keterangan: "Sangat Baik", aspek: "Fasilitas", value: 60 },
  { keterangan: "Sangat Baik", aspek: "Pembinaan", value: 60 },
  { keterangan: "Sangat Baik", aspek: "Pengembangan kompetensi", value: 48 },
  { keterangan: "Baik", aspek: "Rekrutmen", value: 70 },
  { keterangan: "Baik", aspek: "Kesejahteraan", value: 38 },
  { keterangan: "Baik", aspek: "Kinerja", value: 28 },
  { keterangan: "Baik", aspek: "Fasilitas", value: 40 },
  { keterangan: "Baik", aspek: "Pembinaan", value: 40 },
  { keterangan: "Baik", aspek: "Pengembangan kompetensi", value: 52 },
  { keterangan: "Cukup", aspek: "Rekrutmen", value: 0 },
  { keterangan: "Cukup", aspek: "Kesejahteraan", value: 0 },
  { keterangan: "Cukup", aspek: "Kinerja", value: 0 },
  { keterangan: "Cukup", aspek: "Fasilitas", value: 0 },
  { keterangan: "Cukup", aspek: "Pembinaan", value: 0 },
  { keterangan: "Cukup", aspek: "Pengembangan kompetensi", value: 0 },
  { keterangan: "Kurang", aspek: "Rekrutmen", value: 0 },
  { keterangan: "Kurang", aspek: "Kesejahteraan", value: 0 },
  { keterangan: "Kurang", aspek: "Kinerja", value: 0 },
  { keterangan: "Kurang", aspek: "Fasilitas", value: 0 },
  { keterangan: "Kurang", aspek: "Pembinaan", value: 0 },
  { keterangan: "Kurang", aspek: "Pengembangan kompetensi", value: 0 },
];
export default Demo;
