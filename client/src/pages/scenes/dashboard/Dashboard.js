import React, { useState } from "react";
import { FileOutlined, TeamOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";

import { useTheme } from "@mui/material";
import { FaBloggerB, FaClipboard, FaClipboardList } from "react-icons/fa";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "dashboard", <AiOutlineDashboard />),
  getItem("Customers", "customers", <AiOutlineUser />),
  getItem("Catalog", "cataalog", <AiOutlineShoppingCart />, [
    getItem("Add Product", "add-product", <AiOutlineShoppingCart />),
    getItem("Product List", "list-product", <AiOutlineShoppingCart />),
    getItem("Brand", "brand", <SiBrandfolder />),
    getItem("Brand List", "list-brand", <SiBrandfolder />),
    getItem("Category", "category", <BiCategoryAlt />),
    getItem("Category List", "list-category ", <BiCategoryAlt />),
    getItem("Color", "color", <AiOutlineBgColors />),
    getItem("Color List", "list-color ", <AiOutlineBgColors />),
  ]),
  getItem("Order", "order", <FaClipboardList />),    
  getItem("Blogs", "blogs", <FaBloggerB />, [
    getItem("Add Blog", "blog", <FaBloggerB/> ),
    getItem("Add Blog Category", "blog-category", <FaBloggerB/> ),
    getItem("Blog Category List", "blog-category-list   ", <FaBloggerB/> ),
  ]),  
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Dashboard = () => {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              borderRadius: 20,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
