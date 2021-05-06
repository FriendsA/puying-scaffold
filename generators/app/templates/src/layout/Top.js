import { Row, Col, Dropdown, Avatar, Menu, } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { getRandomNumber } from '../utils/common';

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const Top = () => {

    const [color,] = useState(colorList[getRandomNumber(0, 3)]);
    const history = useHistory();

    function handleMenuClick({ key }) {
        if (key == '1') {
            localStorage.clear();
            history.replace("/login");
        }
    }
    const username = localStorage.getItem('username');
    const menu = (<Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <PoweroffOutlined />退出
        </Menu.Item>
    </Menu>);

    return (
        <Row className="top-component">
            <Col>
                <Dropdown overlay={menu}>
                    <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
                        {username}
                    </Avatar>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default Top;