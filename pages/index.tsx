import { WithDefaultLayout } from '../components/DefautLayout';
import { Title } from '../components/Title';
import { Page } from '../types/Page';
import { Col, Divider, Row, } from 'antd';

import QueueRenderer from '@/components/queue-visualizer/QueueRenderer';
import RemoveCustomerButtonList from '@/components/queue-visualizer/RemoveCustomerButtonList';
import AddCustomerForm from '@/components/queue-visualizer/AddCustomerForm';

const IndexPage: Page = () => {
    return (
        <div>
            <Title>Home</Title>

            <Row gutter={24} justify="space-evenly">
                <QueueRenderer />
            </Row>

            <Row>
                <Col span={12}>

                    <Divider className='border-r-4 border-gray-500'/>

                    <Row gutter={24} className="border border-gray-300 rounded-lg p-4">
                        
                        <Col span={16}>
                            <AddCustomerForm />
                        </Col>

                        <Col span={4}>
                            <RemoveCustomerButtonList />
                        </Col>

                    </Row>
                </Col>
            </Row>

        </div>
    );
}

IndexPage.layout = WithDefaultLayout;
export default IndexPage;
