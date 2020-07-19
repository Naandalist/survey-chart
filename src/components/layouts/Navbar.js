import React, { Fragment } from "react";
import { Menu, Typography } from "antd";
import { Link as Link2 } from "react-router-dom";
import { MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;

const Navbar = () => {
  console.log("width: ", window.innerWidth);
  console.log("height: ", window.innerHeight);
  return (
    <Fragment>
      <Link2 to='/tracer-studi-lulusan'>
        {window.innerWidth > window.innerHeight ? (
          <Text
            strong
            style={{
              paddingLeft: "3rem",
              paddingTop: "1rem",
              fontSize: 30,
              color: "black",
            }}
          >
            {" "}
            STIQ Al-Lathifiyyah{" "}
          </Text>
        ) : (
          <Text
            strong
            style={{
              paddingLeft: "1rem",
              paddingTop: "1rem",
              fontSize: 30,
              color: "black",
            }}
          >
            {" "}
            STIQ Al-Lathifiyyah{" "}
          </Text>
        )}
      </Link2>
      {window.innerWidth > window.innerHeight ? (
        <Text code>Kampus Islami</Text>
      ) : null}
      {window.innerWidth > window.innerHeight ? (
        <Text code>Kampus Qur'ani</Text>
      ) : null}

      <Menu mode='horizontal' style={{ paddingLeft: "2rem" }}>
        <Menu.Item key='webportal' icon={<HomeOutlined />}>
          <Link href='https://www.stiqlathifiyyah.ac.id/' target='_blank'>
            stiqlathifiyyah.ac.id
          </Link>
        </Menu.Item>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          <Link href='https://mail.google.com/mail/u/0/' target='_blank'>
            stiqlathifiyyah@gmail.com
          </Link>
        </Menu.Item>
        <Menu.Item key='wa' icon={<PhoneOutlined />}>
          <Link href='https://wa.me/6285369697081' target='_blank'>
            +62 853-6969-7081
          </Link>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default Navbar;
