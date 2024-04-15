import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    children: [
      {
        key: "11",
        label: "View cart",
      },
      {
        key: "21",
        label: "Order confirmed",
      },
    ],
  },
  {
    key: "2",
    label: "winter-clothes",
    children: [
      {
        key: "12",
        label: "Jacket",
      },
      {
        key: "22",
        label: "Hoodie",
      },
      {
        key: "32",
        label: "Sweater",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>the main content should show here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
