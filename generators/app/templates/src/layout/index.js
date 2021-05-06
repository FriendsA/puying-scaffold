import { Layout, Spin } from 'antd';
import Routers from '../routers/index';
import Left from './Left';
import Top from './Top';

const { Content } = Layout;

const Index = () => {

    return (
        <Spin spinning={false}>
            <Layout style={{ minHeight: '100vh' }}>
                <Left />
                <Layout>
                    <Top />
                    <Content style={{ margin: '16px' }}>
                        <Routers />
                    </Content>
                </Layout>
            </Layout>
        </Spin>
    )
}

export default Index;