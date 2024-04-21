import customerListAtom from "@/data/customers";
import { useAtom } from "jotai";
import { Card, Col, Space } from "antd";

import CustomerRenderer from "./CustomerRenderer";

const cardStyle: React.CSSProperties  = { 
    textAlign: 'center', 
    padding: '5px', 
    border: '3px solid rgb(102, 102, 102)',
    fontWeight: 'bold' 
};

const QueueRenderer = () => {

    const [customers] = useAtom(customerListAtom);

    return (
        <>
            <Col className="gutter-row border-r border-gray-500" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} style={cardStyle}>Cashier #1</Card>
                    {customers[0] && <CustomerRenderer customersArray={customers[0]}/>}
                </Space>
            </Col>

            <Col className="gutter-row border-r border-gray-500" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} style={cardStyle}>Cashier #2</Card>
                    {customers[1] && <CustomerRenderer customersArray={customers[1]}/>}
                </Space>
            </Col>

            <Col className="gutter-row" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} style={cardStyle}>Cashier #3</Card>
                    {customers[2] && <CustomerRenderer customersArray={customers[2]}/>}
                </Space>
            </Col>
        </>
    );
}

export default QueueRenderer;