import React, { Fragment } from "react";
import { Menu, Typography } from "antd";
import { Link as Link2 } from "react-router-dom";
import { MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

const Navbar = () => {
  return (
    <Fragment>
      <Link2 to='/tracer-studi-lulusan'>
        <Text
          strong
          style={{
            paddingLeft: "3rem",
            paddingTop: "1rem",
            fontSize: 30,
            color: "black",
          }}
        >
          STIQ Al-Lathifiyyah
        </Text>
      </Link2>
      <Menu mode='horizontal' style={{ paddingLeft: "2rem" }}>
        <Menu.Item key='mail' icon={<HomeOutlined />}>
          <Link href='https://www.stiqlathifiyyah.ac.id/' target='_blank'>
            stiqlathifiyyah.ac.id
          </Link>
        </Menu.Item>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          <Link href='https://mail.google.com/mail/u/0/' target='_blank'>
            stiqlathifiyyah@gmail.com
          </Link>
        </Menu.Item>
        <Menu.Item key='app' icon={<PhoneOutlined />}>
          <Link href='https://wa.me/6285369697081' target='_blank'>
            +62 853-6969-7081
          </Link>
        </Menu.Item>
        {/* <Menu.Item key='app' icon={<FacebookOutlined />}>
          <Link
            href='https://www.facebook.com/profile.php?id=100013554857202'
            target='_blank'
          >
            stiqlathifiyyah
          </Link>
        </Menu.Item> */}
      </Menu>
    </Fragment>
  );
};

export default Navbar;
