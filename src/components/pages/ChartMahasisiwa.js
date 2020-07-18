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
              Hasil Survey Kepuasan Mahasiswa Semester Genap 2019/2020
            </Title>

            <Paragraph>
              Dalam rangka memenuhi kelengkapan data dukung Akreditasi Sekolah
              Tinggi Ilmu Al-Qur'an, dan evaluasi perbaikan layanan bagi
              mahasiswa di , maka perlu mengukur pencapaian keberhasilan layanan
              berupa Evaluasi kepuasan mahasiswa sebagai pengguna jasa layanan
              di STIQ Al-Lathifiyyah. Salah satu upaya dalam meningkatkan mutu
              pelayanan mahasiswa, adalah melalui pengadaan Survei Kepuasan
              Mahasiswa yang akan digunakan sebagai tolak ukur mutu pelayanan.
            </Paragraph>
            <Paragraph>
              <Link href='https://forms.gle/2myVQKVGLpZwWvDg9' target='_blank'>
                Survei kepuasan mahasiswa{" "}
              </Link>
              terhadap layanan mahasiswa dilaksanakan pada setiap akhir semester
              berjalan yang terdiri dari beberapa aspek diantaranya:
              <ol>
                <li>
                  <Text>Reliability</Text>
                </li>
                <li>
                  <Text>Responsiveness</Text>
                </li>
                <li>
                  <Text>Assurance</Text>
                </li>
                <li>
                  <Text>Empathy</Text>
                </li>
                <li>
                  <Text>Tangible</Text>
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
                    title='Presentase Kepuasan Mahasiswa (%)'
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
    aspekYangDiukur: "Reliability",
    sangatBaik: 18,
    baik: 77,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "2",
    no: 2,
    aspekYangDiukur: "Responsiveness",
    sangatBaik: 27,
    baik: 73,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "3",
    no: 3,
    aspekYangDiukur: "Assurance",
    sangatBaik: 28,
    baik: 72,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 4,
    no: 4,
    aspekYangDiukur: "Empathy",
    sangatBaik: 30,
    baik: 70,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 5,
    no: 5,
    aspekYangDiukur: "Tangible",
    sangatBaik: 25,
    baik: 75,
    cukup: 0,
    kurang: 0,
  },
];

const data = [
  {
    type: "Reliability",
    "Sangat Baik": 18,
    Baik: 77,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Responsiveness",
    "Sangat Baik": 27,
    Baik: 73,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Assurance",
    "Sangat Baik": 28,
    Baik: 72,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Empathy",
    "Sangat Baik": 30,
    Baik: 70,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type: "Tangible",
    "Sangat Baik": 25,
    Baik: 75,
    Cukup: 0,
    Kurang: 0,
  },
];
export default ChartMahasiswa;
