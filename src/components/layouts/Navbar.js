import React from "react";
import { PageHeader, Button } from "antd";
import {
  HomeOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <PageHeader
      ghost={true}
      backIcon={true}
      onBack={() => window.history.back()}
      title='STIQ Al-Lathifiyyah Palembang'
      subTitle={`Kampus Islami, Kampus Qur'ani`}
      extra={[
        <Button
          key='3'
          icon={<WhatsAppOutlined />}
          onClick={() => window.open("https://wa.me/6285369697081")}
        >
          +62 853-6969-7081
        </Button>,
        <Button
          key='2'
          icon={<FacebookOutlined />}
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100013554857202"
            )
          }
        >
          stiqlathifiyyah
        </Button>,
        <Button
          key='1'
          type='primary'
          icon={<HomeOutlined />}
          onClick={() => window.open("https://www.stiqlathifiyyah.ac.id/")}
        >
          stiq al-lathifiyyah
        </Button>,
      ]}
      style={{ paddingLeft: 50, paddingRight: 50 }}
    ></PageHeader>
  );
};

export default Navbar;
