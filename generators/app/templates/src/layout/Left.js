import { Layout, Menu } from 'antd';
import { ReactElement, useState } from 'react';
import routers from '../routers/routerConfig';
import { isLegal } from '../utils/common';
import { Link } from 'react-router-dom';
import { projectName } from '../config';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Left = () => {

    const [collapsed, setCollapsed] = useState(false)

    function onCollapse(collapsed) {
        setCollapsed(collapsed);
    }
    return (
        <Sider className="left-component" collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="top-logo" >{collapsed?projectName.slice(0,1).toLocaleUpperCase():projectName}</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    routers.filter(item => isLegal(item.authorities)).map(item => {
                        if (item.children.length === 0) {
                            return <Menu.Item key={item.key}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </Menu.Item>
                        } else {
                            return <SubMenu
                                key={item.key}
                                title={
                                    <span>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </span>
                                }
                            >
                                {
                                    item.children.filter(i => isLegal(i.authorities)).map(i => (<Menu.Item key={i.key}> <Link to={i.path}>{i.title}</Link></Menu.Item>))
                                }
                            </SubMenu>
                        }
                    })
                }
            </Menu>
        </Sider>
    )
}

export default Left;