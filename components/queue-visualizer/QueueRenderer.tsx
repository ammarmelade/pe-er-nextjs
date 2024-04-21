import customerListAtom from "@/data/customers";
import { useAtom } from "jotai";
import { Card, Col, Space } from "antd";

import CustomerRenderer from "./CustomerRenderer";

const QueueRenderer = () => {

    const [customers] = useAtom(customerListAtom);

    return (
        <>
            <Col className="gutter-row border-r border-gray-500" span={6}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card title="Cashier 1" bordered={true} size='small' hoverable={true}></Card>
                    {customers[0] && <CustomerRenderer customersArray={customers[0]}/>}
                </Space>
            </Col>

            <Col className="gutter-row border-r border-gray-500" span={6}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card title="Cashier 2" bordered={true} size='small' hoverable={true}></Card>
                    {customers[1] && <CustomerRenderer customersArray={customers[1]}/>}
                </Space>
            </Col>

            <Col className="gutter-row" span={6}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card title="Cashier 3" bordered={true} size='small' hoverable={true}></Card>
                    {customers[2] && <CustomerRenderer customersArray={customers[2]}/>}
                </Space>
            </Col>
        </>
    );
}

export default QueueRenderer;