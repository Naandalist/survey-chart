import React, { Fragment } from "react";
import { Chart, Axis, Tooltip, Coord, Legend, Interval } from "bizcharts";
import DataSet from "@antv/data-set";
import { Layout, Typography, Table, Tabs } from "antd";
const { Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { DataView } = DataSet;
function callback(key) {
  console.log(key);
}

function ChartLulusan() {
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
              Tracer Studi Lulusan STIQ Al-Lathifiyyah Tahun 2020
            </Title>

            <Paragraph>
              Tracer studi adalah studi pelacakan jejak lulusan/alumni yang
              dilakukan kepada alumni guna mengetahui outcome pendidikan berupa
              transisi dari fase perkuliahan menuju dunia kerja. Di sisi lain,
              institusi penddikan dapat mengevaluasi kontribusi dan memonitor
              adaptasi lulusan ketika berada di dunia kerja.
            </Paragraph>
            <Paragraph>
              Tracer studi lulusan terdiri dari beberapa instrumen pengukur
              diantaranya:
              <ol>
                <li>
                  <Text>
                    Kesesuaian Bidang Kerja dengan program studi atau profil
                    kelulusan
                  </Text>
                </li>
                <li>
                  <Text>
                    Kesesuaian jenjang pekerjaan (karir, misalnya staf, manajer,
                    pimpinan) dengan kualifikasi pendidikan yang didapat selama
                    kuliah
                  </Text>
                </li>
                <li>
                  <Text>
                    Pengalaman belajar selama kuliah memberikan kontribusi pada
                    dunia kerja
                  </Text>
                </li>
                <li>
                  <Text>
                    Kesanggupan berkompetisi dengan alumni/ lulusan dari
                    institusi lain
                  </Text>
                </li>
              </ol>
            </Paragraph>
            <Paragraph>
              Berikut adalah tracer studi yang diikuti oleh seluruh lulusan STIQ
              Al-Lathifiyyah.
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
    aspekYangDiukur:
      "Kesesuaian Bidang Kerja dengan program studi atau profil kelulusan",
    sangatBaik: 66.6,
    baik: 33.4,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "2",
    no: 2,
    aspekYangDiukur:
      "Kesesuaian jenjang pekerjaan (karir, misalnya staf, manajer, pimpinan) dengan kualifikasi pendidikan yang didapat selama kuliah",
    sangatBaik: 33.4,
    baik: 66.6,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "3",
    no: 3,
    aspekYangDiukur:
      "Pengalaman belajar selama kuliah memberikan kontribusi pada dunia kerja",
    sangatBaik: 33.4,
    baik: 66.6,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 4,
    no: 4,
    aspekYangDiukur:
      "Kesanggupan berkompetisi dengan alumni/ lulusan dari institusi lain",
    sangatBaik: 33.4,
    baik: 66.6,
    cukup: 0,
    kurang: 0,
  },
];

const data = [
  {
    type:
      "Kesesuaian Bidang Kerja dengan program studi\n atau profil kelulusan",
    "Sangat Baik": 66.6,
    Baik: 33.4,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Kesesuaian jenjang pekerjaan\n(karir, misalnya staf, manajer, pimpinan) dengan\nkualifikasi pendidikan yang didapat selama kuliah",
    "Sangat Baik": 33.4,
    Baik: 66.6,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Pengalaman belajar selama kuliah memberikan\nkontribusi pada dunia kerja",
    "Sangat Baik": 33.4,
    Baik: 66.6,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Kesanggupan berkompetisi dengan alumni/ lulusan\ndari institusi lain",
    "Sangat Baik": 33.4,
    Baik: 66.6,
    Cukup: 0,
    Kurang: 0,
  },
];
export default ChartLulusan;
