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

function ChartVisiMisi() {
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
      fields: ["Sangat Baik", "Baik", "Cukup", "Kurang"],
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
              Hasil Survey Pemahaman Visi dan Misi Civitas Akademik dan Tenaga
              Kependidikan
            </Title>

            <Paragraph>
              Survey ini pada dasarnya merupakan metode untuk menilai sistem
              pengelolaan dosen dan tenaga kependidikan baik dalam hal
              pengembangan kompetensi maupun pengembangan karir. Dalam hal ini
              pengelolaan SDM dilaksanakan oleh Wakil Ketua yang dilanjutkan
              dengan koordinasi dengan Unit Penjamin Mutu (UPM).
            </Paragraph>
            <Paragraph>
              <Link href='https://forms.gle/FFYuwnbzUb8EQze89' target='_blank'>
                Survei Pemahaman Visi dan Misi Civitas Akademik dan Tenaga
                Kependidikan{" "}
              </Link>
              dilaksanakan pada setiap akhir semester berjalan yang terdiri dari
              beberapa aspek diantaranya: Responden survey terdiri dari dosen
              dosen dan tenaga kependidikan STIQ Al-Lathifiyyah sebanyak 61
              orang. Adapun instrumen angket yang digunakan meliputi beberapa
              aspek yang diantaranya adalah sebagai berikut:
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
                    title='Presentase Kepemahaman Visi dan Misi Civitas Akademik Tenaga Kependidikan (%)'
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
      "Seberapa mudah bapak/ibu mendapat informasi tentang visi dan misi STIQ Al-Lathifiyyah",
    sangatBaik: 83,
    baik: 17,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "2",
    no: 2,
    aspekYangDiukur:
      "Bapak/Ibu merasa visi dan misi yang ada sudah realistis dan mudah dipahami",
    sangatBaik: 77,
    baik: 23,
    cukup: 0,
    kurang: 0,
  },
  {
    key: "3",
    no: 3,
    aspekYangDiukur:
      "Seberapa besar Bapak/Ibu mengetahui program-programkerja yang harus dilaksanakan untuk mencapai visi dan misi",
    sangatBaik: 64,
    baik: 36,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 4,
    no: 4,
    aspekYangDiukur:
      "Seberapa besar pemahamanBapak/Ibu Terkait hubunganvisi dan misi STIQ Al-Lathifiyyah dengan pekerjaan",
    sangatBaik: 67,
    baik: 33,
    cukup: 0,
    kurang: 0,
  },
  {
    key: 5,
    no: 5,
    aspekYangDiukur:
      "Seberapa besar Bapak/Ibumemahami makna visi dan misiSTIQ Al-Lathifiyyah",
    sangatBaik: 64,
    baik: 36,
    cukup: 0,
    kurang: 0,
  },
];
const data = [
  {
    type:
      "Seberapa mudah bapak/ibu mendapat informasi\n tentangvisi dan misi STIQ Al-Lathifiyyah",
    "Sangat Baik": 83,
    Baik: 17,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Bapak/Ibu merasa visi dan misi yang ada\n sudah realistis dan mudah dipahami",
    "Sangat Baik": 77,
    Baik: 23,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Seberapa besar Bapak/Ibu mengetahui program-program\n kerja yang harus dilaksanakan untuk\n mencapai visi dan misi",
    "Sangat Baik": 64,
    Baik: 36,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Seberapa besar pemahaman Bapak/Ibu Terkait hubungan visi\n dan misi STIQ Al-Lathifiyyah dengan pekerjaan",
    "Sangat Baik": 67,
    Baik: 33,
    Cukup: 0,
    Kurang: 0,
  },
  {
    type:
      "Seberapa besar Bapak/Ibu memahami\nmakna visi dan misi STIQ Al-Lathifiyyah",
    "Sangat Baik": 64,
    Baik: 36,
    Cukup: 0,
    Kurang: 0,
  },
];
export default ChartVisiMisi;
