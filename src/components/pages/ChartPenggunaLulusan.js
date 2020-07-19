import React, { Fragment } from "react";
import { Chart, Axis, Tooltip, Coord, Legend, Interval } from "bizcharts";
import DataSet from "@antv/data-set";
import { Layout, Typography, Table, Tabs } from "antd";
const { Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;
const { Title, Paragraph, Text, Link } = Typography;
const { TabPane } = Tabs;
const { DataView } = DataSet;

function callback(key) {
  console.log(key);
}

function ChartMahasiswa() {
  const dv = new DataView();
  dv.source(data)
    .transform({
      type: "map",

      callback(row) {
        return row;
      },
    })
    .transform({
      type: "fold",
      fields: ["Kurang", "Cukup", "Baik", "Sangat Baik"],
      key: "opinion",
      value: "value",
      retains: ["group", "type"],
    });

  const colorMap = {
    "Sangat Baik": "#3561A7",
    Baik: "#80B2D3",
    Cukup: "#f6dada",
    Kurang: "#CB2920",
  };
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
              Hasil Survey Kepuasan Pengguna Lulusan (User)
            </Title>

            {/* <Paragraph>
              Survey kepuasan pengguna lulusan adalah survey yang dilakukan oleh
              Sekolah Tinggi Ilmu Al-Qur'an terhadap pengguna lulusan. Survey
              ini bertujuan untuk mengukur mutu lulusan dari sudut pandang
              pengguna, apakah mutu lulusan yang dihasilkan sudah mampu memenuhi
              harapan pengguna. Hasil kepuasan yang bagus dari pengguna lulusan
              merupakan salah satu indikator keberhasilan proses pendidikan STIQ
              Al-Lathifiyyah.
            </Paragraph> */}
            <Paragraph>
              <Link href='https://forms.gle/ZskmkHGk6GHYaa6M8' target='_blank'>
                Survei kepuasan pengguna lulusan{" "}
              </Link>
              Pelaksanaan survey kepuasan pengguna lulusan STIQ Al-Lathifiyah
              tahun 2020 ini dilakukan secara online dengan dari beberapa aspek
              diantaranya:
              <ol>
                <li>
                  <Text>Etika</Text>
                </li>
                <li>
                  <Text>Keahlian pada Bidang Ilmu</Text>
                </li>
                <li>
                  <Text>Kemampuan Berbahasa Asing</Text>
                </li>
                <li>
                  <Text>Penggunaan Teknologi Informasi</Text>
                </li>
                <li>
                  <Text>Kemampuan Berkomunikasi</Text>
                </li>
                <li>
                  <Text>Kerjasama</Text>
                </li>
                <li>
                  <Text>Pengembangan Diri</Text>
                </li>
              </ol>
            </Paragraph>
            <Paragraph>
              Berikut adalah hasil survei kepuasan pengguna lulusan STIQ
              Al-Lathifiyyah tahun 2020.
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
                    title='Presentase Kepuasan Pengguna Lulusan (%)'
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
                <Chart height={400} padding='auto' data={dv} autoFit>
                  <Axis name='type' title={null} labelOffset={10} />
                  <Axis
                    name='value'
                    label={{
                      formatter: (val) => {
                        console.log(val);
                        return val + "%";
                      },
                    }}
                    tickLine={null}
                    position='right'
                  />
                  <Coord transpose />
                  <Tooltip shared />
                  <Legend />
                  <Interval
                    position='type*value'
                    color={[
                      "opinion",
                      function (opinion) {
                        return colorMap[opinion];
                      },
                    ]}
                    shape='smooth'
                    opacity={0.8}
                  />
                </Chart>
              </TabPane>
            </Tabs>

            {/* END TABLE  */}
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

const dataTable = [
  {
    key: "1",
    no: 1,
    aspekYangDiukur: "Etika",
    sangatBaik: 67,
    baik: 33,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "2",
    no: 2,
    aspekYangDiukur: "Keahlian pada Bidang Ilmu",
    sangatBaik: 0,
    baik: 100,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "3",
    no: 3,
    aspekYangDiukur: "Kemampuan Berbahasa Asing",
    sangatBaik: 67,
    baik: 0,
    cukup: 33,
    kurang: 0,
  },
  {
    key: 4,
    no: 4,
    aspekYangDiukur: "Penggunaan Teknologi Informasi",
    sangatBaik: 0,
    baik: 67,
    cukup: 33,
    kurang: 0,
  },
  {
    key: 5,
    no: 5,
    aspekYangDiukur: "Kemampuan Berkomunikasi",
    sangatBaik: 67,
    baik: 33,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 6,
    no: 6,
    aspekYangDiukur: "Kerjasama",
    sangatBaik: 100,
    baik: 0,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 7,
    no: 7,
    aspekYangDiukur: "Pengembangan Diri",
    sangatBaik: 33,
    baik: 67,
    cukup: 0,
    kurang: 0,
  },
];

const data = [
  {
    type: "Etika",
    "Sangat Baik": 67,
    Baik: 33,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Keahlian pada Bidang Ilmu",
    "Sangat Baik": 0,
    Baik: 100,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Kemampuan Berbahasa Asing",
    "Sangat Baik": 67,
    Baik: 0,
    Cukup: 33,
    Kurang: 0,
  },
  {
    type: "Penggunaan Teknologi Informasi",
    "Sangat Baik": 0,
    Baik: 67,
    Cukup: 33,
    Kurang: 0,
  },
  {
    type: "Kemampuan Berkomunikasi",
    "Sangat Baik": 67,
    Baik: 33,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Kerjasama",
    "Sangat Baik": 100,
    Baik: 0,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Pengembangan Diri",
    "Sangat Baik": 33,
    Baik: 67,
    Cukup: 0,
    Kurang: 0,
  },
];
export default ChartMahasiswa;
