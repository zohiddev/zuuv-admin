import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Dropdown, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { menubar, profileMenu } from "@utils/data";
import { routes } from "@utils/routes";
import { UserOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useAuthContext } from "@context/AuthProvider";

const { Content, Sider } = Layout;

const AppRoutes = () => {
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(["1"]);
    const [openMenu, setOpenMenu] = useState(false);
    const { user } = useAuthContext();

    useEffect(() => {
        for (const item of menubar) {
            if (item.path === location.pathname) {
                setActiveMenu([`${item.id}`]);
                setOpenMenu(false);
                setCollapsed(false);
            }
        }
    }, [location]);

    return (
        <Layout className='page'>
            <Sider
                width={256}
                collapsed={openMenu}
                className={clsx("sider page__sider", openMenu && "open")}
            >
                <div className='sider-logo__wrapper'>
                    <img src='/logo.svg' alt='Logo' />
                </div>

                <Menu
                    mode='vertical'
                    selectedKeys={activeMenu}
                    items={menubar.map(({ id, icon, path, title }) => ({
                        key: id,
                        label: <Link to={path}>{title}</Link>,
                        icon: icon,
                    }))}
                />
            </Sider>
            <Header className='page__header'>
                <Dropdown menu={{ items: profileMenu }}>
                    <Button icon={<UserOutlined />}>{user?.name}</Button>
                </Dropdown>
            </Header>
            <Content className='page__content'>
                <Routes>
                    {routes.map(({ id, path, component }) => (
                        <Route key={id} path={path} element={component} />
                    ))}
                </Routes>
            </Content>
        </Layout>
    );
};

export default AppRoutes;
